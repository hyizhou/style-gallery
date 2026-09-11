// 搭配推荐：风格 × 布局的成对组合（设计见 docs/prompt-tool-design.md）
// prompt 逐条手写，不做机械拼接——组合的取舍与语气是内容价值所在

export interface Pairing {
  id: string
  name: string
  styleIds: string[]
  layoutIds: string[]
  why: string
  prompt: { zh: string; en: string }
}

export const pairings: Pairing[] = [
  {
    id: 'aurora-bento',
    name: '极光暗夜 × 便当盒网格',
    styleIds: ['aurora'],
    layoutIds: ['bento-grid'],
    why: '深色光晕定气质，便当格高密度陈列能力——官网首屏即产品概览，是 AI 产品官网的当代答案。',
    prompt: {
      zh: '采用「深色极光 + 便当盒网格」方案：近黑背景上漂浮青绿与暖橙的大而模糊的光晕，渐变描边与柔和发光的强调色；首页用便当盒网格拼装模块，核心能力占 2×2 大格、次要功能填小格，卡片用半透明玻璃质感与圆角。',
      en: 'Combine a dark aurora look with a bento grid: a near-black background with large blurred teal and amber glows, gradient borders and softly glowing accents; assemble the homepage as bento tiles — the flagship capability in a 2×2 tile, secondary features in small cells — using translucent glassy rounded cards.',
    },
  },
  {
    id: 'brutal-hero',
    name: '新粗野主义 × 顶部导航 Hero',
    styleIds: ['brutal'],
    layoutIds: ['top-hero'],
    why: '粗野主义的直球态度配最经典的转化首屏，独立创作者与活动页的抗平庸组合。',
    prompt: {
      zh: '采用「新粗野主义 + 顶部导航 Hero」方案：米白底、2–3px 粗黑描边与无模糊的实色硬投影，高饱和撞色块；顶部横向导航控制在五项以内，Hero 区放超大字号标题、一句副文案和一个高对比主按钮。',
      en: 'Combine neo-brutalism with a top nav + hero: an off-white base, 2–3px black outlines, hard unblurred offset shadows and saturated clashing blocks; keep the nav to five items or fewer, and give the hero an oversized headline, one line of subcopy and a single high-contrast CTA.',
    },
  },
  {
    id: 'swiss-column',
    name: '瑞士排版 × 单栏内容优先',
    styleIds: ['swiss'],
    layoutIds: ['single-column'],
    why: '秩序感最强的排版风格配上纯粹的阅读纵轴，编辑型博客与文字作品集的黄金组合。',
    prompt: {
      zh: '采用「瑞士排版 + 单栏阅读」方案：红黑白配色与严格网格的无衬线大标题，正文约束在 max-width 68ch 的单栏纵轴上，用字号对比与留白建立层级，不放侧栏。',
      en: 'Combine Swiss typography with a single reading column: a red-black-white palette, a strict grid and oversized sans-serif headlines; body text stays in one max-width 68ch column with hierarchy from type scale and whitespace alone — no sidebars.',
    },
  },
  {
    id: 'crt-dashboard',
    name: '终端 CRT × 侧边栏仪表盘',
    styleIds: ['crt'],
    layoutIds: ['sidebar-dashboard'],
    why: '终端质感穿在 App Shell 骨架上，开发者工具与运维控制台的极客标配。',
    prompt: {
      zh: '采用「终端 CRT + 侧边栏仪表盘」方案：黑底 phosphor 绿等宽字体、扫描线纹理与轻微文字辉光；左侧常驻导航栏 + 顶部工具栏 + 主工作区的 App Shell 骨架，日志与指标用等宽字体呈现，状态色沿用绿 / 琥珀。',
      en: 'Combine a terminal CRT skin with a sidebar dashboard shell: black background, phosphor-green monospaced type, scanlines and a faint glow; an app shell with a persistent left nav, top toolbar and main workspace, logs and metrics in monospace, status colors in green / amber.',
    },
  },
  {
    id: 'clay-cards',
    name: '粘土拟物 × 卡片网格',
    styleIds: ['clay'],
    layoutIds: ['card-grid'],
    why: '黏土的柔软亲和配等权卡片的低门槛扫读，儿童与趣味产品的安心组合。',
    prompt: {
      zh: '采用「粘土拟物 + 卡片网格」方案：奶油色背景、糖果色与大圆角蓬松卡片，内外柔影营造黏土厚度；内容用统一卡片单元铺 auto-fill 响应式网格，按钮圆润、图标带手绘感。',
      en: 'Combine claymorphism with a card grid: a cream background, candy colors and plump rounded cards with soft inner and outer shadows for clay-like thickness; content as uniform cards in an auto-fill responsive grid, pillowy buttons and hand-drawn-feeling icons.',
    },
  },
]
