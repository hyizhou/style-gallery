import { styles } from './styles'
import { readyLayoutPatterns } from './layouts'

export const SITE_URL = 'https://hyizhou.github.io/style-gallery'

export interface PageMeta {
  path: string
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

const home: PageMeta = {
  path: '/',
  title: '风格标本馆 · UI 设计风格组件展',
  description: `看图认风格、搜口语别名查术语：${styles.length} 种 UI 设计风格与 ${readyLayoutPatterns.length} 种布局模式的可交互组件标本，每个词条附可一键复制的 AI 提示词。`,
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

export const pages: PageMeta[] = [
  home,
  {
    path: '/glossary',
    title: '风格词典 · 术语与口语别名对照 | 风格标本馆',
    description:
      'UI 风格词典：毛玻璃是玻璃拟态，黑客屏是终端 CRT，辣妹风是 Y2K。用口语说法查出风格术语与布局模式，查看可交互组件标本并复制 AI 提示词。',
    jsonLd: breadcrumb('风格词典'),
  },
  {
    path: '/scenarios',
    title: '场景风格推荐 · 什么产品用什么风格 | 风格标本馆',
    description:
      'AI 产品官网、个人作品集、中后台管理、活动落地页、内容博客——常见产品场景的 UI 风格与布局推荐，附推荐理由与可复制的 AI 提示词。',
    jsonLd: breadcrumb('场景风格推荐'),
  },
  ...styles.map((s) => ({
    path: `/styles/${s.id}`,
    title: `${s.name} ${s.en} · 风格标本馆`,
    description: s.desc,
    jsonLd: breadcrumb(`${s.name} ${s.en}`),
  })),
  ...readyLayoutPatterns.map((p) => ({
    path: `/layouts/${p.id}`,
    title: `${p.name} ${p.en} · 风格标本馆`,
    description: p.desc,
    jsonLd: breadcrumb(`${p.name} ${p.en}`),
  })),
]
