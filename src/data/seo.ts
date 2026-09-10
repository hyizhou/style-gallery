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
  description:
    '把主流界面设计做成可以触摸的标本：极简主义、玻璃拟态、拟物风格、新粗野主义、复古像素等 UI 设计风格，每种配一整套可交互组件与风格签名件。',
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
