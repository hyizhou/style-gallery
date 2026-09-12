import { useLocation } from 'react-router-dom'

// 轻量 i18n：中文为默认语言（路径无前缀），英文挂在 /en 前缀下。
// 语言完全由路由路径决定——预渲染、SEO 与客户端渲染共用同一判定，无上下文、无副作用。

export type Locale = 'zh' | 'en'

export function useLocale(): Locale {
  const { pathname } = useLocation()
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh'
}

// 当前语言下的路由前缀（用于拼接站内链接）
export function localeBase(locale: Locale): string {
  return locale === 'en' ? '/en' : ''
}

// 语言切换目标路径：/styles/x ↔ /en/styles/x
export function swapLocalePath(pathname: string): string {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return pathname.slice(3) || '/'
  }
  return `/en${pathname === '/' ? '' : pathname}`
}

// 数据字段的分组与热度是中文枚举，英文页面显示为：
export const groupEn: Record<string, string> = {
  页面骨架: 'Page Skeleton',
  内容组织: 'Content Organization',
  交互容器: 'Interactive Container',
  视觉动线: 'Visual Flow',
  弹窗: 'Modals',
}

export const heatEn: Record<string, string> = {
  热门: 'Popular',
  常见: 'Common',
  冷门: 'Niche',
}

// 站点框架与页面固定文案的 UI 词典
const ui = {
  zh: {
    siteSuffix: '风格标本馆',
    homeTitle: '风格标本馆 · UI 设计风格组件展',
    gridStyles: '风格导航',
    gridLayouts: '布局模式导航',
    gridModals: '弹窗导航',
    brand: '风格标本馆',
    brandEm: 'STYLE GALLERY',
    barNote: (n: number) => `${n} 种风格 · 附 AI 提示词`,
    themeToDark: '切换到暗色主题',
    themeToLight: '切换到亮色主题',
    themeTitle: '切换明暗主题',
    langSwitch: 'EN',
    footer: '风格标本馆 · React + TypeScript + Vite 构建',
    heroEyebrow: 'UI DESIGN PATTERNS · SPECIMEN COLLECTION',
    heroTitleA: '看到想要的效果',
    heroTitleB: '拿到它的名字和提示词',
    heroLead:
      '每种风格、布局与弹窗词条都配有一整套可交互的组件标本：看图认效果，用口语别名搜出术语——毛玻璃、黑客屏、辣妹风都知道指什么。认出想要的那个，就把页面里的提示词复制给你的 AI。',
    metaStyles: (n: number) => `${n} 种设计风格`,
    metaLayouts: (n: number, m: number) => `${n} / ${m} 个布局模式`,
    metaModals: (n: number) => `${n} 个弹窗`,
    metaPrompts: '每个词条附可复制 AI 提示词',
    tabStyles: '视觉风格',
    tabLayouts: '布局模式',
    tabModals: '弹窗',
    tablistLabel: '展示类别',
    searchLabel: '搜索风格',
    searchPlaceholder: '搜风格名或口语词，如「毛玻璃」「黑客屏」',
    searchEmptyLead: '没有匹配的风格。试试这些口语词：',
    searchEmptyOr: '，或去',
    searchEmptyLink: '风格词典',
    searchEmptyTail: '翻一翻。',
    linkGlossary: '全部术语看词典',
    linkScenarios: '不知道选什么？看场景推荐',
    back: '← 返回标本馆',
    widthLabel: '预览宽度',
    widthGroup: '预览宽度',
    widthDesktop: '桌面',
    widthTablet: '平板',
    widthMobile: '手机',
    useTitle: '何时使用',
    caveatsTitle: '权衡与注意',
    cssTitle: '关键实现',
    promptTitle: '对 AI 说 / Prompt',
    variantShort: '一句话',
    variantZh: '中文详版',
    variantEn: 'English',
    variantZhShort: '中文',
    pairingTitle: '相配搭配 / Pairings',
    pairingStyle: (name: string) => `风格 · ${name}`,
    pairingLayout: (name: string) => `布局 · ${name}`,
    prevStyle: '← 上一种风格',
    nextStyle: '下一种风格 →',
    prevPattern: '← 上一个模式',
    nextPattern: '下一个模式 →',
    navStyles: '风格切换',
    navPatterns: '模式切换',
    glossEyebrow: 'UI STYLE GLOSSARY',
    glossTitle: '风格词典',
    glossLead:
      '叫不出一种效果的名字时，按口语说法来这里查：毛玻璃是玻璃拟态，黑客屏是终端 CRT，辣妹风是 Y2K。点进词条查看完整的可交互组件标本，并拿到可直接复制给 AI 的提示词。',
    glossStyles: '视觉风格 / Styles',
    glossLayouts: '布局模式 / Layouts',
    glossModals: '弹窗 / Modals',
    aka: '又叫：',
    scEyebrow: 'STYLE BY SCENARIO',
    scTitle: '什么产品用什么风格',
    scLead:
      '不确定自己的项目该长什么样？按场景对号入座：每个推荐都给出理由，点进词条可以看完整的可交互标本，并复制提示词直接交给你的 AI。',
    scToc: '场景目录',
    kindStyle: '风格',
    kindLayout: '布局',
    kindModal: '弹窗',
    promptVariants: '提示词变体',
    copyPrompt: '复制提示词',
    copy: '复制',
    copied: '已复制 ✓',
    copiedLive: '提示词已复制到剪贴板',
  },
  en: {
    siteSuffix: 'Style Gallery',
    homeTitle: 'Style Gallery · Interactive UI Design Patterns',
    gridStyles: 'Style navigation',
    gridLayouts: 'Layout navigation',
    gridModals: 'Modal navigation',
    brand: 'Style Gallery',
    brandEm: 'UI SPECIMENS',
    barNote: (n: number) => `${n} styles · with AI prompts`,
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    themeTitle: 'Toggle theme',
    langSwitch: '中文',
    footer: 'Style Gallery · Built with React + TypeScript + Vite',
    heroEyebrow: 'UI DESIGN PATTERNS · SPECIMEN COLLECTION',
    heroTitleA: 'See the look you want',
    heroTitleB: 'Get its name and the prompt',
    heroLead:
      'Every style, layout and modal entry ships with a full set of interactive component specimens: recognize the effect by eye, search the term by nickname — frosted glass, hacker screen or Y2K babe all resolve. Once you spot the one you want, copy its prompt to your AI.',
    metaStyles: (n: number) => `${n} design styles`,
    metaLayouts: (n: number, m: number) => `${n} / ${m} layout patterns`,
    metaModals: (n: number) => `${n} modal pattern${n === 1 ? '' : 's'}`,
    metaPrompts: 'Copy-ready AI prompts on every entry',
    tabStyles: 'Styles',
    tabLayouts: 'Layouts',
    tabModals: 'Modals',
    tablistLabel: 'Category',
    searchLabel: 'Search styles',
    searchPlaceholder: 'Search a name or nickname, e.g. "frosted glass"',
    searchEmptyLead: 'No matching style. Try nicknames like:',
    searchEmptyOr: ', or browse the',
    searchEmptyLink: 'glossary',
    searchEmptyTail: '.',
    linkGlossary: 'Browse the full glossary',
    linkScenarios: 'Not sure what fits? See scenario picks',
    back: '← Back to the gallery',
    widthLabel: 'Preview width',
    widthGroup: 'Preview width',
    widthDesktop: 'Desktop',
    widthTablet: 'Tablet',
    widthMobile: 'Mobile',
    useTitle: 'When to use',
    caveatsTitle: 'Trade-offs & notes',
    cssTitle: 'Key implementation',
    promptTitle: 'Say it to AI / Prompt',
    variantShort: 'One-liner',
    variantZh: '中文详版',
    variantEn: 'English',
    variantZhShort: '中文',
    pairingTitle: 'Pairings',
    pairingStyle: (name: string) => `Style · ${name}`,
    pairingLayout: (name: string) => `Layout · ${name}`,
    prevStyle: '← Previous style',
    nextStyle: 'Next style →',
    prevPattern: '← Previous pattern',
    nextPattern: 'Next pattern →',
    navStyles: 'Style navigation',
    navPatterns: 'Pattern navigation',
    glossEyebrow: 'UI STYLE GLOSSARY',
    glossTitle: 'Glossary',
    glossLead:
      'When you can’t name an effect, look it up by its nickname: frosted glass is Glassmorphism, the hacker screen is Terminal CRT, and Y2K babe really is Y2K. Open an entry for the full interactive specimen and a prompt you can copy straight to your AI.',
    glossStyles: 'Styles',
    glossLayouts: 'Layouts',
    glossModals: 'Modals',
    aka: 'A.K.A. ',
    scEyebrow: 'STYLE BY SCENARIO',
    scTitle: 'What style for what product',
    scLead:
      'Not sure what your project should look like? Find your scenario below: every pick comes with a reason — open the entry for the full interactive specimen and copy the prompt to your AI.',
    scToc: 'Scenarios',
    kindStyle: 'Style',
    kindLayout: 'Layout',
    kindModal: 'Modal',
    promptVariants: 'Prompt variants',
    copyPrompt: 'Copy prompt',
    copy: 'Copy',
    copied: 'Copied ✓',
    copiedLive: 'Prompt copied to clipboard',
  },
}

export type UI = typeof ui.zh

export function useT(): UI {
  const locale = useLocale()
  return ui[locale]
}
