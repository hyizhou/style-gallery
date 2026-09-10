// 预渲染脚本：把每个路由渲染成静态 HTML（真实文件、200 状态），并生成 404.html 与 sitemap.xml。
// 流程：vite build 产出 dist/（客户端模板）→ vite build --ssr 产出 dist-ssr/（Node 可执行包）→ 本脚本逐页注入。

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

// @material/web 的 Lit 自定义元素在模块求值期访问 HTMLElement / customElements / window，
// Node 环境没有这些全局，垫上最小实现（仅在本脚本进程内生效，产物仍是普通标签输出）
globalThis.HTMLElement ||= class {}
globalThis.customElements ||= {
  define() {},
  get() {
    return undefined
  },
}
globalThis.window ??= globalThis

// 渲染逻辑在 dist-ssr 包内部（含打包进去的 React），此处只做文件编排，避免出现第二个 React 实例
const { renderPage, pages, SITE_URL } = await import(join(root, 'dist-ssr', 'entry-server.js'))

const escContent = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escAttr = (s) => escContent(s).replace(/"/g, '&quot;')
const jsonLdScript = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`

function buildHead(page) {
  const canonical = page.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.path}/`
  return [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${escAttr(page.title)}" />`,
    `<meta property="og:description" content="${escAttr(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="风格标本馆" />`,
    `<meta property="og:locale" content="zh_CN" />`,
    `<meta name="twitter:card" content="summary" />`,
    page.jsonLd ? jsonLdScript(page.jsonLd) : '',
  ]
    .filter(Boolean)
    .join('\n    ')
}

const template = await readFile(join(dist, 'index.html'), 'utf8')
if (!template.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html 模板中未找到 <div id="root"></div>，无法注入预渲染内容')
}
if (!/<title>[\s\S]*?<\/title>/.test(template) || !/<meta\s+name="description"/.test(template)) {
  throw new Error('dist/index.html 模板缺少 title 或 description，无法按页替换')
}

for (const page of pages) {
  let out = template
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escContent(page.title)}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      () => `<meta name="description" content="${escAttr(page.description)}" />`,
    )
    .replace(/(\n\s*)(<\/head>)/, (_m, indent, close) => `${indent}    ${buildHead(page)}${indent}${close}`)

  let bodyHtml = ''
  try {
    bodyHtml = await renderPage(page.path)
    // React 18 流式输出在分块边界偶发混入 NUL 字节（多出现于多字节字符附近），对 HTML 无意义，直接剔除
    bodyHtml = bodyHtml.replace(/\u0000/g, '')
  } catch (err) {
    // 单页失败时保留空根节点退回客户端渲染，不阻断其余页面产出
    console.warn(`[prerender] ${page.path} 渲染失败，退化为客户端渲染：${err?.message ?? err}`)
  }
  if (bodyHtml) {
    out = out.replace('<div id="root"></div>', () => `<div id="root">${bodyHtml}</div>`)
  }

  const file = page.path === '/' ? join(dist, 'index.html') : join(dist, `${page.path}/index.html`)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, out)
  console.log(`[prerender] ${page.path} -> ${relative(root, file)}${bodyHtml ? '' : '（客户端渲染兜底）'}`)
}

// 深层直连兜底：GitHub Pages 对未知路径以 404 状态返回此文件，浏览器端由 React Router 接管
await writeFile(join(dist, '404.html'), template)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${p.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${p.path}/`}</loc></url>`).join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)
console.log(`[prerender] sitemap.xml：${pages.length} 个 URL`)
