import { styles } from './styles'
import { readyLayoutPatterns } from './layouts'
import { readyFeedbackPatterns } from './feedback'

export const SITE_URL = 'https://hyizhou.github.io/style-gallery'

export interface PageMeta {
  path: string
  locale: 'zh' | 'en'
  /** 同一内容的另一语言版本路径（hreflang 用），两语言页面互相指向 */
  alternates?: { zh: string; en: string }
  title: string
  description: string
  jsonLd?: Record<string, unknown>
}

const breadcrumb = (name: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '风格标本馆', url: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name },
  ],
})

const breadcrumbEn = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Style Gallery', url: `${SITE_URL}/en` },
    { '@type': 'ListItem', position: 2, name, url: `${SITE_URL}${path}/` },
  ],
})

// 中文路径无前缀，英文挂在 /en 下；两条路径互为 hreflang 替代
const alt = (zhPath: string) => ({
  zh: zhPath,
  en: zhPath === '/' ? '/en' : `/en${zhPath}`,
})

const homeZh: PageMeta = {
  path: '/',
  locale: 'zh',
  alternates: alt('/'),
  title: '风格标本馆 · UI 设计风格组件展',
  description: `看图认风格、搜口语别名查术语：${styles.length} 种 UI 设计风格、${readyLayoutPatterns.length} 种布局模式、${readyFeedbackPatterns.length} 种反馈模式（弹窗 / 轻提示 / 骨架屏等）的可交互组件标本，每个词条附可一键复制的 AI 提示词。`,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'UI 设计风格标本合集',
    itemListElement: styles.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${s.name} ${s.en}`,
      url: `${SITE_URL}/styles/${s.id}/`,
    })),
  },
}

const homeEn: PageMeta = {
  path: '/en',
  locale: 'en',
  alternates: alt('/'),
  title: 'Style Gallery · Interactive UI Design Patterns & AI Prompts',
  description: `See the look you want, get its name and the prompt: ${styles.length} interactive UI design styles, ${readyLayoutPatterns.length} layout patterns and ${readyFeedbackPatterns.length} feedback patterns (modal, toast, skeleton…) — every entry with a copy-ready AI prompt. Search by nickname: frosted glass, hacker screen, toast.`,
}

const glossaryZh: PageMeta = {
  path: '/glossary',
  locale: 'zh',
  alternates: alt('/glossary'),
  title: '风格词典 · 术语与口语别名对照 | 风格标本馆',
  description:
    'UI 风格词典：毛玻璃是玻璃拟态，黑客屏是终端 CRT，辣妹风是 Y2K。用口语说法查出风格术语与布局模式，查看可交互组件标本并复制 AI 提示词。',
  jsonLd: breadcrumb('风格词典'),
}

const glossaryEn: PageMeta = {
  path: '/en/glossary',
  locale: 'en',
  alternates: alt('/glossary'),
  title: 'Glossary · UI Terms & Nicknames | Style Gallery',
  description:
    'UI glossary: frosted glass is Glassmorphism, the hacker screen is Terminal CRT, and Y2K babe really is Y2K. Look up style terms and layout patterns by nickname, open the interactive specimens and copy AI prompts.',
  jsonLd: breadcrumbEn('Glossary', '/en/glossary'),
}

const scenariosZh: PageMeta = {
  path: '/scenarios',
  locale: 'zh',
  alternates: alt('/scenarios'),
  title: '场景风格推荐 · 什么产品用什么风格 | 风格标本馆',
  description:
    'AI 产品官网、个人作品集、中后台管理、活动落地页、内容博客——常见产品场景的 UI 风格与布局推荐，附推荐理由与可复制的 AI 提示词。',
  jsonLd: breadcrumb('场景风格推荐'),
}

const scenariosEn: PageMeta = {
  path: '/en/scenarios',
  locale: 'en',
  alternates: alt('/scenarios'),
  title: 'Style by Scenario · What Style for What Product | Style Gallery',
  description:
    'AI product sites, portfolios, admin consoles, campaign landing pages, blogs — UI style and layout recommendations for common product scenarios, with reasons and copy-ready AI prompts.',
  jsonLd: breadcrumbEn('Style by Scenario', '/en/scenarios'),
}

const stylePages = styles.flatMap((s): PageMeta[] => [
  {
    path: `/styles/${s.id}`,
    locale: 'zh',
    alternates: alt(`/styles/${s.id}`),
    title: `${s.name} ${s.en} · 风格标本馆`,
    description: s.desc,
    jsonLd: breadcrumb(`${s.name} ${s.en}`),
  },
  {
    path: `/en/styles/${s.id}`,
    locale: 'en',
    alternates: alt(`/styles/${s.id}`),
    title: `${s.en} UI Style · Style Gallery`,
    description: s.i18n?.en.desc ?? s.desc,
    jsonLd: breadcrumbEn(s.en, `/en/styles/${s.id}`),
  },
])

const layoutPages = readyLayoutPatterns.flatMap((p): PageMeta[] => [
  {
    path: `/layouts/${p.id}`,
    locale: 'zh',
    alternates: alt(`/layouts/${p.id}`),
    title: `${p.name} ${p.en} · 风格标本馆`,
    description: p.desc,
    jsonLd: breadcrumb(`${p.name} ${p.en}`),
  },
  {
    path: `/en/layouts/${p.id}`,
    locale: 'en',
    alternates: alt(`/layouts/${p.id}`),
    title: `${p.en} Layout Pattern · Style Gallery`,
    description: p.i18n?.en.desc ?? p.desc,
    jsonLd: breadcrumbEn(p.en, `/en/layouts/${p.id}`),
  },
])

const feedbackPages = readyFeedbackPatterns.flatMap((p): PageMeta[] => [
  {
    path: `/feedback/${p.id}`,
    locale: 'zh',
    alternates: alt(`/feedback/${p.id}`),
    title: `${p.name} ${p.en} · 风格标本馆`,
    description: p.desc,
    jsonLd: breadcrumb(`${p.name} ${p.en}`),
  },
  {
    path: `/en/feedback/${p.id}`,
    locale: 'en',
    alternates: alt(`/feedback/${p.id}`),
    title: `${p.en} UI Feedback Pattern · Style Gallery`,
    description: p.i18n?.en.desc ?? p.desc,
    jsonLd: breadcrumbEn(p.en, `/en/feedback/${p.id}`),
  },
])

export const pages: PageMeta[] = [
  homeZh,
  homeEn,
  glossaryZh,
  glossaryEn,
  scenariosZh,
  scenariosEn,
  ...stylePages,
  ...layoutPages,
  ...feedbackPages,
]
