export type LayoutGroup = '页面骨架' | '内容组织' | '交互容器' | '视觉动线'
export type LayoutHeat = '热门' | '常见' | '冷门'
export type LayoutStatus = 'ready' | 'planned'

export interface LayoutPatternNotes {
  use: string[]
  caveats: string[]
  css: string
}

export interface PatternI18n {
  en: {
    tagline: string
    desc: string
    tags: string[]
    aliases?: string[]
    use?: string[]
    caveats?: string[]
    css?: string
  }
}

export interface LayoutPattern {
  id: string
  name: string
  en: string
  group: LayoutGroup
  heat: LayoutHeat
  tagline: string
  desc: string
  tags: string[]
  aliases?: string[]
  prompt?: { short: string; zh: string; en: string }
  status: LayoutStatus
  notes?: LayoutPatternNotes
  i18n?: PatternI18n
}

export const layoutPatterns: LayoutPattern[] = [
  {
    id: 'holy-grail',
    i18n: {
      en: {
        tagline: 'The classic skeleton: header, twin sidebars, main content, footer.',
        desc: 'The “holy grail” of page layout: a header on top, three columns below (left nav, main content, right aside) and a footer. It answers “where is navigation, content and auxiliary info” in one shot — the textbook whole-page skeleton and a responsive-design classic.',
        tags: ['Three columns', 'Header & footer', 'Responsive', 'Textbook'],
        aliases: ['three column', 'header sidebar footer'],
        use: [
        'Classic pages for blogs, docs sites and admin consoles: header + twin sidebars + main content',
        'Mid-to-large pages that must present navigation, core content and auxiliary info at once',
        'Demos that need continuous desktop / tablet / phone responsive behavior',
      ],
        caveats: [
        'Three columns squeeze the main content; on narrow screens the sidebars must fold above and below it',
        'Keep sidebar content short and stable so it never competes with the main column',
        'Historically built with float and negative-margin hacks; today grid-template-areas does it in one step',
      ],
        css: 'grid-template-areas: "hd hd hd" "nav mn as" "ft ft ft";',
      },
    },
    aliases: ['三栏骨架', '页头双侧栏'],
    prompt: {
      short: '用圣杯布局（Holy Grail）组织页面：页头 + 双侧栏 + 主内容 + 页脚。',
      zh: '用 CSS Grid 的 grid-template-areas 实现圣杯布局（Holy Grail）：页头横贯顶部，下方左侧导航、中间主内容、右侧辅助栏，页脚收底；窄屏时侧栏折叠到主内容上下。',
      en: 'Build a Holy Grail layout with CSS Grid grid-template-areas: a full-width header, left nav / main content / right aside below it, and a footer; collapse the side columns above and below the main content on narrow screens.',
    },
    name: '圣杯布局',
    en: 'Holy Grail',
    group: '页面骨架',
    heat: '热门',
    tagline: '页头、双侧栏、主内容与页脚的经典骨架。',
    desc: '页面布局的「圣杯」：顶部页头，下方三栏（左侧导航、主内容、右侧辅助栏），底部页脚。它同时回答了「导航在哪、内容在哪、辅助信息在哪」三个问题，是教科书式的整页骨架，也是响应式教学的经典案例。',
    tags: ['三栏', '页头页脚', '响应式', '教科书'],
    status: 'ready',
    notes: {
      use: [
        '博客、文档站、后台管理等「页头 + 双侧栏 + 主内容」的经典页面',
        '需要同时呈现导航、核心内容与辅助信息的中大型页面',
        '希望演示桌面 / 平板 / 手机连续响应行为的场景',
      ],
      caveats: [
        '三栏并存会压缩主内容宽度，窄屏必须把侧栏折叠到主内容上下',
        '侧栏内容要「短而稳」，避免与主内容争夺注意力',
        '历史上靠浮动与负边距实现（圣杯 / 双飞翼 hack），如今 grid-template-areas 一步到位',
      ],
      css: 'grid-template-areas: "hd hd hd" "nav mn as" "ft ft ft";',
    },
  },
  {
    id: 'sidebar-dashboard',
    i18n: {
      en: {
        tagline: 'Fixed side nav + top bar + content area — the dominant shape of admin systems.',
        desc: 'The archetype of the App Shell: a persistent left nav, a top toolbar, and a scrollable workspace on the right. Nearly every admin console, developer tool and SaaS dashboard is built on this skeleton.',
        tags: ['App Shell', 'Admin console', 'SaaS'],
        aliases: ['admin layout', 'app shell'],
        use: [
        'High-frequency task products: admin consoles, SaaS dashboards, developer tools',
        'Apps with many nav items that must stay visible for rapid switching',
        'Products that need a stable skeleton for future modules',
      ],
        caveats: [
        'The sidebar permanently costs horizontal space; reading-focused products should prefer a single column',
        'On narrow screens it needs an explicit strategy: icon rail, drawer, or bottom tab bar',
        'With deep hierarchies, switch to grouped collapsibles or sub-menus instead of an endless sidebar',
      ],
        css: 'grid-template-areas: "side top" "side main"; grid-template-columns: 220px 1fr;',
      },
    },
    aliases: ['后台骨架', 'App Shell', '中后台布局'],
    prompt: {
      short: '用侧边栏仪表盘布局：固定侧边导航 + 顶栏 + 可滚动工作区。',
      zh: '用侧边栏仪表盘（App Shell）布局：左侧常驻导航栏，顶部工具栏，右侧可滚动工作区，用 grid-template-areas: "side top" "side main" 实现；窄屏时侧栏收纳为抽屉或图标栏。',
      en: 'Use a sidebar dashboard (app shell) layout: a persistent left nav, a top toolbar and a scrollable main workspace via grid-template-areas: "side top" "side main"; collapse the sidebar into a drawer or icon rail on narrow screens.',
    },
    name: '侧边栏仪表盘',
    en: 'Sidebar Dashboard',
    group: '页面骨架',
    heat: '热门',
    tagline: '固定侧边导航 + 顶栏 + 内容区，后台系统的统治性形态。',
    desc: '应用外壳（App Shell）的代表：左侧常驻导航栏，顶部工具栏，右侧为可滚动的工作区。几乎所有中后台管理系统、开发者工具与 SaaS 控制台都以它为骨架。',
    tags: ['App Shell', '中后台', 'SaaS'],
    status: 'ready',
    notes: {
      use: [
        '中后台管理系统、SaaS 控制台、开发者工具等高频任务型产品',
        '导航项多且需要常驻可见、便于频繁切换的应用',
        '需要为后续业务模块扩展预留稳定骨架的产品',
      ],
      caveats: [
        '侧栏长期占用横向空间，内容阅读型产品要慎用（阅读场景优先单栏）',
        '窄屏下侧栏必须有明确的收纳策略：图标化、抽屉或移到底部标签栏',
        '导航层级过深时改用分组折叠或二级菜单，避免侧栏变成滚动长条',
      ],
      css: 'grid-template-areas: "side top" "side main"; grid-template-columns: 220px 1fr;',
    },
  },
  {
    id: 'master-detail',
    i18n: {
      en: {
        tagline: 'List on the left, detail on the right; selection drives the link.',
        desc: 'Two linked panels, one large and one small: the master list for browsing and selecting, the detail pane for the chosen item. Mail clients, note apps and file managers all run on it — the standard answer to browse-and-view task flows.',
        tags: ['Linked panels', 'Mail client', 'Two panes'],
        aliases: ['list detail', 'two pane'],
        use: [
        'Browse-and-view flows: mail, notes, file managers',
        'Long lists that must stay visible while details switch frequently',
        'Desktop-first density; on narrow screens degrade to a list page plus a detail page',
      ],
        caveats: [
        'Two panes squeeze content on phones — degrade to a two-level “list, then detail” structure',
        'List items need a clear selected state, or the linkage is invisible',
        'Give the empty detail pane a placeholder instead of a stark blank',
      ],
        css: 'grid-template-columns: 42% 1fr;',
      },
    },
    aliases: ['列表详情', '双面板', '邮件客户端布局'],
    prompt: {
      short: '用主从布局（Master-Detail）：左列表选中、右详情联动。',
      zh: '用主从布局（Master-Detail）：左侧主列表用于浏览与选择，右侧从面板展示选中项的详情，grid-template-columns: 40% 1fr；窄屏降级为列表页 + 详情页的两级导航。',
      en: 'Use a master-detail layout: a left list for browsing and selection with a right detail pane, grid-template-columns: 40% 1fr; degrade into a two-level list-then-detail flow on narrow screens.',
    },
    name: '主从布局',
    en: 'Master-Detail',
    group: '交互容器',
    heat: '热门',
    tagline: '左列表、右详情，选中即联动。',
    desc: '一大一小两个联动面板：主列表用于浏览与选择，从面板展示选中项的详情。邮件客户端、笔记应用、文件管理器都基于它，是「浏览-查看」任务流的标准答案。',
    tags: ['列表联动', '邮件客户端', '双面板'],
    status: 'ready',
    notes: {
      use: [
        '邮件、笔记、文件管理器等「浏览-查看」型任务流',
        '列表项数量多、需要保持列表可见并频繁切换详情的场景',
        '桌面端信息密度优先，窄屏可降级为列表页 + 详情页两级导航',
      ],
      caveats: [
        '窄屏放下双面板会挤压内容，应降级为「先列表、点进详情」的两级结构',
        '列表项要有清晰的选中态，否则联动关系不可感知',
        '详情区为空时给出占位提示，避免出现突兀的空白面板',
      ],
      css: 'grid-template-columns: 42% 1fr;',
    },
  },
  {
    id: 'split',
    i18n: {
      en: {
        tagline: 'Two halves: visual on one side, message on the other.',
        desc: 'Splits the hero in half: imagery or brand visuals on one side, copy and the action button on the other. The two columns naturally form an either/or or comparison narrative — fit for landing pages, product intros and portfolio gateways.',
        tags: ['50/50', 'Comparison narrative', 'Hero'],
        aliases: ['two half', 'split hero'],
        use: [
        'Brand heroes: one strong visual side, one value-proposition side with a CTA',
        'Login / signup pages: brand story on one side, form on the other',
        'Portfolios or two-choice gateways: each column leads down one path',
      ],
        caveats: [
        'Keep the two sides visually balanced — never one crammed, one empty',
        'On narrow screens it must stack; compress the visual block so information wins',
        'Keep a single primary CTA — the split itself already implies a choice',
      ],
        css: 'display: grid; grid-template-columns: 1fr 1fr;',
      },
    },
    aliases: ['五五开', '左右分栏', '两栏对分'],
    prompt: {
      short: '用分屏布局（Split Screen）：首屏左右两栏各占一半。',
      zh: '用分屏布局（Split Screen）把首屏对半切开：一侧品牌视觉或图像，一侧文案与行动按钮，grid-template-columns: 1fr 1fr；窄屏退化为上下堆叠。',
      en: 'Use a split screen layout to halve the hero: one side brand visuals, the other copy and a CTA, with grid-template-columns: 1fr 1fr; stack vertically on narrow screens.',
    },
    name: '分屏布局',
    en: 'Split Screen',
    group: '页面骨架',
    heat: '热门',
    tagline: '左右两栏对分，视觉与信息各占一半。',
    desc: '把首屏切成两半：一侧放图像或品牌视觉，一侧放文案与行动按钮。两栏天然形成「二选一」或「对照」的叙事关系，适合登录页、产品介绍与作品集入口。',
    tags: ['五五开', '对照叙事', '首屏'],
    status: 'ready',
    notes: {
      use: [
        '品牌首屏：一侧强视觉、一侧价值主张与行动按钮',
        '登录 / 注册页：一侧品牌叙事、一侧表单',
        '作品集或「两种选择」入口：左右各指向一条路径',
      ],
      caveats: [
        '两栏内容重量要均衡，避免一侧过满一侧过空',
        '窄屏必须退化为上下堆叠，且视觉块要压缩高度让位给信息',
        '行动按钮只保留一个主 CTA，分屏本身已含「选择」暗示',
      ],
      css: 'display: grid; grid-template-columns: 1fr 1fr;',
    },
  },
  {
    id: 'single-column',
    i18n: {
      en: {
        tagline: 'One reading spine top to bottom; content is everything.',
        desc: 'Constrains everything to one comfortable reading column (about 60–75 characters). No distractions, no columns. The optimum for blogs, long-form and docs bodies — and the natural carrier of minimal aesthetics.',
        tags: ['Reading experience', 'Blog', 'Minimal'],
        aliases: ['reading column', 'one column'],
        use: [
        'Reading-first pages: blog posts, long-form, documentation bodies',
        'Personal sites that want zero sidebar interference',
        'Mobile-first content products',
      ],
        caveats: [
        'Hold the measure at 60–75 characters (about 680px); wider lines break the reader’s eye',
        'Navigation and related content retreat to header and footer; retrieval is weaker than multi-column',
        'Rhythm must be engineered with headings and whitespace, or long text tires quickly',
      ],
        css: 'max-width: 68ch; margin-inline: auto;',
      },
    },
    aliases: ['阅读布局', '博客版式', '一栏到底'],
    prompt: {
      short: '用单栏内容优先布局：一条约 60–75 字符行宽的阅读纵轴。',
      zh: '用单栏内容优先（Single Column）布局：所有内容约束在一条舒适的阅读纵轴上，max-width: 68ch 居中，无侧栏干扰，是博客、长文与文档正文的最优解。',
      en: 'Use a single-column, content-first layout: everything flows down one comfortable reading axis with max-width: 68ch, no sidebar distractions — the best choice for blogs, long-form text and docs.',
    },
    name: '单栏内容优先',
    en: 'Single Column',
    group: '内容组织',
    heat: '热门',
    tagline: '一条阅读纵轴到底，内容即全部。',
    desc: '把所有内容约束在一条舒适的阅读纵轴上（约 60-75 字符行宽），没有干扰、没有分栏。博客、长文、文档正文的最优解，也是极简美学的天然载体。',
    tags: ['阅读体验', '博客', '极简'],
    status: 'ready',
    notes: {
      use: [
        '博客文章、长文、文档正文等以阅读为核心的页面',
        '希望访客专注内容、不受侧栏干扰的个人站点',
        '移动端优先的内容型产品',
      ],
      caveats: [
        '行宽控制在 60-75 字符（约 680px），过宽会拉断阅读视线',
        '导航与关联内容只能让位到页头页脚，检索效率低于多栏',
        '段落节奏要靠小标题与留白主动营造，否则长文易疲劳',
      ],
      css: 'max-width: 68ch; margin-inline: auto;',
    },
  },
  {
    id: 'masonry',
    i18n: {
      en: {
        tagline: 'Fixed column widths, varied heights, always filling the shortest column.',
        desc: 'Stacks unequal cards in equal-width columns, forever filling the shortest one — a wall with pleasing variation. The Pinterest-era staple for image-heavy sites, making the most of mixed-aspect assets.',
        tags: ['Pinterest', 'Image sites', 'Staggered'],
        aliases: ['pinterest grid', 'waterfall'],
        use: [
        'Feeds of mixed-aspect assets: photos, design work, products',
        'Content sites that want maximum density while staying scannable',
        'Unpredictable asset heights that need automatic gap-filling',
      ],
        caveats: [
        'Pure-CSS multi-columns read top-to-bottom per column — wrong for strongly ordered content',
        'When row order matters, use a JS-positioned masonry instead',
        'Infinite scroll plus masonry makes “back to top” a frequent chore',
      ],
        css: 'columns: 3; column-gap: 10px; & > * { break-inside: avoid; }',
      },
    },
    aliases: ['Pinterest 布局', '图片流', '填缝布局'],
    prompt: {
      short: '用瀑布流布局（Masonry）：等宽多列、卡片填补最短列。',
      zh: '用瀑布流（Masonry）布局：在等宽的多列中堆砌不等高的卡片并永远填补最短列，CSS columns: 3 或 JS 绝对定位实现，适合图片、作品等比例不一的信息流。',
      en: 'Use a masonry layout: equal-width columns where uneven-height cards always fill the shortest one — CSS columns: 3 or JS-positioned; ideal for image-heavy, mixed-ratio feeds.',
    },
    name: '瀑布流',
    en: 'Masonry',
    group: '内容组织',
    heat: '热门',
    tagline: '列宽固定、项高不一，依次填补最短列。',
    desc: '在等宽的多列中纵向堆砌不等高的卡片，永远填补最短的一列，形成错落有致的墙面。Pinterest 带火的图片内容站标配，最大化利用不同比例的素材。',
    tags: ['Pinterest', '图片站', '错落'],
    status: 'ready',
    notes: {
      use: [
        '图片、设计作品、商品等素材比例不一的信息流',
        '希望一屏塞下尽量多内容、又保持可扫读的内容站',
        '素材高度不可控、需要自动填缝的场景',
      ],
      caveats: [
        '纯 CSS 多栏方案会把阅读顺序切成纵向，不适合强顺序内容',
        '需要严格按行序填充时，改用 JS 计算的绝对定位瀑布流',
        '无限滚动配合瀑布流会让「回到顶部」变得频繁而烦躁',
      ],
      css: 'columns: 3; column-gap: 10px; & > * { break-inside: avoid; }',
    },
  },
  {
    id: 'card-grid',
    i18n: {
      en: {
        tagline: 'Equal-sized cards in a regular grid; information displayed as equals.',
        desc: 'Arranges content as uniform card units in a regular grid, each self-contained (image + title + excerpt + actions). Equal weight, easy to scan — the general-purpose answer for portfolios, product lists and feature overviews.',
        tags: ['Equal weight', 'Scannable', 'General purpose'],
        aliases: ['card layout', 'grid of cards'],
        use: [
        'Equal-weight listings: products, article lists, portfolios',
        'Collections of structurally identical units that grow or shrink',
        'Responsive displays that want auto-fill to decide column count',
      ],
        caveats: [
        'All-equal cards have no protagonist; switch to Bento or alternating rows when emphasis is needed',
        'Constrain card copy length or the grid grows ragged',
        'auto-fill and auto-fit differ on empty tracks — choose deliberately',
      ],
        css: 'grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));',
      },
    },
    aliases: ['卡片列表', '等权陈列', '商品网格'],
    prompt: {
      short: '用卡片网格（Card Grid）：统一卡片单元铺满响应式网格。',
      zh: '用卡片网格（Card Grid）布局：统一结构的卡片（图 + 题 + 摘要 + 动作）铺在规则网格里，grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))，信息等权、易于扫读。',
      en: 'Use a card grid: uniform card units (image, title, summary, action) in a responsive grid via grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)) — equal-weight content that is easy to scan.',
    },
    name: '卡片网格',
    en: 'Card Grid',
    group: '内容组织',
    heat: '热门',
    tagline: '等尺寸卡片铺排，信息等权陈列。',
    desc: '用统一的卡片单元在规则网格中陈列内容，每张卡片自成一体（图 + 题 + 摘要 + 动作）。信息等权、易于扫读，是作品集、商品列表与功能介绍的通用解。',
    tags: ['等权陈列', '扫读', '通用'],
    status: 'ready',
    notes: {
      use: [
        '商品列表、文章列表、作品集等信息等权的陈列场景',
        '内容单元结构一致、数量会增减的集合页',
        '需要 auto-fill 自动决定列数的响应式陈列',
      ],
      caveats: [
        '所有卡片等权意味着没有主角，需要强调时改用 Bento 或交替行',
        '卡片内文案行数要约束，否则网格会被撑得高低不齐',
        'auto-fill 与 auto-fit 的空轨道行为不同，按需选择',
      ],
      css: 'grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));',
    },
  },
  {
    id: 'bento-grid',
    i18n: {
      en: {
        tagline: 'Tiles of different sizes; the important stuff takes the big ones.',
        desc: 'Packs content into rounded tiles of varying spans: core info in large tiles, secondary in small ones — dense yet orderly. The visual-style wing already shows its skin; here we focus on tile spans and information hierarchy themselves.',
        tags: ['Span hierarchy', 'Apple', 'High density'],
        aliases: ['bento', 'apple grid'],
        use: [
        'Platter pages: feature overviews, personal homepages, data summaries',
        'Panels where importance must be expressed through area',
        'Displays of five to nine modules with clear hierarchy',
      ],
        caveats: [
        'Too many tiles degrade into a plain card grid — prune half the content by importance first',
        'Spans need explicit hierarchy logic (main 2×2, secondary 1×1), not symmetry for its own sake',
        'Keep padding and radii consistent or the platter falls apart',
      ],
        css: 'grid-template-columns: repeat(3, 1fr); .tile-main { grid-area: span 2 / span 2; }',
      },
    },
    aliases: ['便当布局', '大小格', '拼盘布局'],
    prompt: {
      short: '用便当盒网格（Bento Grid）：重要内容占大格、次要占小格。',
      zh: '用便当盒网格（Bento Grid）布局：模块拼装成网格，主模块用 grid-area: span 2 / span 2 占大格，次要模块填小格，用面积直接表达信息优先级。',
      en: 'Use a bento grid: tiles of different spans assembled into a grid — key modules take grid-area: span 2 / span 2 while secondary ones fill small cells; area itself communicates priority.',
    },
    name: '便当盒网格',
    en: 'Bento Grid',
    group: '内容组织',
    heat: '热门',
    tagline: '大小不一的格子拼装，重要内容占大格。',
    desc: '把内容装进跨度不同的圆角格子里：核心信息占大格，次要信息填小格，密度高却井然有序。视觉风格大类中已有它的皮肤示范，此处专注格子跨度与信息层级本身。',
    tags: ['跨度层级', 'Apple', '高密度'],
    status: 'ready',
    notes: {
      use: [
        '功能总览页、个人主页、数据概览等「多模块拼盘」场景',
        '模块重要性不同、需要用面积表达优先级的信息面板',
        '模块数量在 5-9 个之间、层级分明的展示需求',
      ],
      caveats: [
        '格子一多就会退化成普通卡片网格，先用重要性筛掉一半内容',
        '跨度要有明确的层级逻辑（主 2×2、次 1×1），不要为对称而对称',
        '格子内边距与圆角保持一致，否则拼盘会散架',
      ],
      css: 'grid-template-columns: repeat(3, 1fr); .tile-main { grid-area: span 2 / span 2; }',
    },
  },
  {
    id: 'top-hero',
    i18n: {
      en: {
        tagline: 'A horizontal nav bar over a large promotional hero.',
        desc: 'The classic product-site skeleton: a horizontal nav on top, then a full hero block with big title, sub copy and a call-to-action; content sections follow below the fold. The first screen of nearly every product site.',
        tags: ['Landing page', 'Official site', 'CTA'],
        aliases: ['landing hero', 'nav hero'],
        use: [
        'Landing pages that live or die on the first impression',
        'A clear visual line: title, then sub copy, then the action button',
        'Pages whose first screen only carries conversion, content living below',
      ],
        caveats: [
        'The hero must state the value in one sentence; nobody reads two-line sub copy',
        'Keep nav items under five; tuck the rest into a More menu',
        'Hero art and text need hierarchy — do not let a big photo eat the CTA’s contrast',
      ],
        css: 'nav as horizontal flex; hero as flex-direction: column + text-align: center;',
      },
    },
    aliases: ['官网首屏', '落地页骨架'],
    prompt: {
      short: '用顶部导航 + Hero 骨架：横向导航下接大标题首屏。',
      zh: '用顶部导航 + Hero 骨架：顶部横向导航（五项以内），下方整块 Hero 区放大标题、副文案与一个主行动按钮，再往下才是内容分区；产品官网第一屏的标准解。',
      en: 'Use a top nav + hero skeleton: a horizontal nav (five items or fewer) above a full-width hero with headline, subcopy and one primary CTA, followed by content sections — the standard product-site first screen.',
    },
    name: '顶部导航 + Hero',
    en: 'Top Nav + Hero',
    group: '页面骨架',
    heat: '热门',
    tagline: '横向导航条下接大面积首屏宣传区。',
    desc: '最经典的官网落地页骨架：顶部横向导航，下方是一整块带大标题、副文案与行动按钮的 Hero 区，再往下滚动才进入内容分区。几乎所有产品官网的第一屏。',
    tags: ['落地页', '官网', 'CTA'],
    status: 'ready',
    notes: {
      use: [
        '产品官网、活动页等以「第一印象」为核心的落地页',
        '需要一条清晰的视觉主线：标题 → 副文案 → 行动按钮',
        '内容分区在下方、首屏只承担转化任务的页面',
      ],
      caveats: [
        '首屏文案要能一句话说清价值，超过两行的副文案没人读',
        '导航项控制在 5 个以内，次要入口收进「更多」',
        'Hero 配图与文字要有主次，别让大图吃掉行动按钮的对比度',
      ],
      css: 'nav 横向 flex；hero 用 flex-direction: column + text-align: center;',
    },
  },
  {
    id: 'full-bleed',
    i18n: {
      en: {
        tagline: 'The first screen fills the viewport; scrolling reveals the rest.',
        desc: 'Fills the entire first screen with imagery, video or an interactive scene, nav floating above; content unfolds as you scroll. Strong visual impact — fit for brand sites, launch pages and narrative pages.',
        tags: ['Immersive', 'Brand site', 'Scroll narrative'],
        aliases: ['fullscreen hero', 'immersive cover'],
        use: [
        'Narrative entries that set the tone in one screen: brand sites, launch pages',
        'High-quality key art (photography, 3D, video) worth a full screen',
        'Pages that reveal content progressively as the user scrolls',
      ],
        caveats: [
        'Full-screen imagery needs readability insurance: scrim, vignette or text backing',
        'Make the scroll cue obvious, or users will not know there is more',
        'Mobile crops full-screen art — keep key elements in the safe area',
      ],
        css: 'min-height: 100%; background: cover + overlay; place-content: center;',
      },
    },
    aliases: ['整屏首图', '品牌首屏'],
    prompt: {
      short: '用全屏沉浸首屏（Full-bleed Hero）：整屏视觉 + 悬浮导航 + 滚动揭示。',
      zh: '用全屏沉浸（Full-bleed Hero）布局：第一屏被整幅图像、视频或 3D 场景填满（min-height: 100% + object-fit: cover），导航悬浮其上，滚动后逐步展开内容，适合品牌站与发布页。',
      en: 'Use a full-bleed hero: the first viewport is filled entirely by an image, video or 3D scene (min-height: 100% + object-fit: cover), the nav floats above it, and content reveals on scroll — great for brand and launch pages.',
    },
    name: '全屏沉浸',
    en: 'Full-bleed Hero',
    group: '视觉动线',
    heat: '热门',
    tagline: '首屏整屏铺满，滚动揭示后续。',
    desc: '第一屏用整屏的图像、视频或交互场景填满，导航悬浮其上，向下滚动才逐步展开内容。强视觉冲击力，适合品牌站、产品发布页与叙事型页面。',
    tags: ['沉浸', '品牌站', '滚动叙事'],
    status: 'ready',
    notes: {
      use: [
        '品牌官网、发布会页等需要「一屏定调」的叙事入口',
        '有高质量主视觉（摄影 / 3D / 视频）可以铺满整屏的场景',
        '希望用滚动行为驱动内容逐步揭示的叙事型页面',
      ],
      caveats: [
        '整屏图上必须有可读性保障：遮罩、暗角或文字底衬',
        '滚动提示要明显，否则用户不知道下面还有内容',
        '移动端整屏图会裁切构图，关键元素要放在安全区内',
      ],
      css: 'min-height: 100%; background: cover + overlay; place-content: center;',
    },
  },
  {
    id: 'magazine',
    i18n: {
      en: {
        tagline: 'Mixed columns, varied sizes — publication-grade typesetting.',
        desc: 'Borrows print-magazine grammar: a spanning headline, columned secondaries, interleaved images and cross-column pull quotes. Layout hierarchy drives reading order — fit for content-heavy editorial and curatorial pages.',
        tags: ['Publication', 'Page hierarchy', 'Curation'],
        aliases: ['editorial layout', 'magazine grid'],
        use: [
        'Content-heavy editorial pages: news magazines, deep columns, curated topics',
        'Content with a clear headline-secondary-briefing hierarchy',
        'Curatorial sites that express what matters more through size',
      ],
        caveats: [
        'The headline must truly dominate; near-equal secondaries break the page logic',
        'Multi-column text must collapse to one column on narrow screens; recompute both measure and column width',
        'The more complex the layout, the more the grid must be agreed upstream — avoid a new layout per article',
      ],
        css: 'grid-template-areas: "feat feat side" "a b side" "c c c";',
      },
    },
    aliases: ['报刊布局', '头条分栏'],
    prompt: {
      short: '用杂志编辑布局（Magazine）：头条横贯、次条分栏、图文穿插。',
      zh: '用杂志编辑（Magazine / Editorial）布局：头条横贯整行，次条分栏并列，图文穿插与跨栏引言，用 grid-template-areas 编排版面层级，适合内容量大的编辑与策展页。',
      en: 'Use a magazine / editorial layout: a headline story spanning full width, secondary stories in columns, interspersed images and cross-column pull quotes, orchestrated with grid-template-areas — ideal for content-heavy curated pages.',
    },
    name: '杂志编辑布局',
    en: 'Magazine / Editorial',
    group: '内容组织',
    heat: '常见',
    tagline: '多栏混排、大小错落，出版物式排版。',
    desc: '借用平面杂志的编排语言：头条横贯、次条分栏、图文穿插、引言跨栏。用版面层级引导阅读顺序，适合内容量大的编辑类与策展类页面。',
    tags: ['出版物', '版面层级', '策展'],
    status: 'ready',
    notes: {
      use: [
        '新闻杂志、深度专栏、策展专题等内容量大的编辑页面',
        '内容有明确的头条-次条-简讯层级结构',
        '希望用版面大小直接表达「什么更重要」的策展型站点',
      ],
      caveats: [
        '头条必须真的「头」，若次条质量接近会破坏版面逻辑',
        '多栏文字在窄屏必须塌缩为单栏，行宽与栏宽都要重新计算',
        '版面越复杂，越要在源头约定栅格，避免每篇文章一个版式',
      ],
      css: 'grid-template-areas: "feat feat side" "a b side" "c c c";',
    },
  },
  {
    id: 'kanban',
    i18n: {
      en: {
        tagline: 'Stage columns side by side; cards flow between them.',
        desc: 'Splits a workflow into stage columns (To-do / Doing / Done); task cards drag between columns. The core interface of project-management and collaboration tools — and the exemplar of “state as layout”.',
        tags: ['Task flow', 'Drag & drop', 'Collaboration'],
        aliases: ['board', 'task board'],
        use: [
        'Tools organized around state flow: project management, tickets, CRM',
        'Fixed stages (two to five) with cards advancing one way',
        'Collaboration where each stage’s load must be visible at a glance',
      ],
        caveats: [
        'Beyond five columns, horizontal scrolling eats the global picture — add column collapsing',
        'Keep cards lean: title, tags, assignee; details belong to the opened card',
        'A static kanban without drag is just a table — budget the interaction cost',
      ],
        css: 'display: grid; grid-auto-flow: column; grid-auto-columns: minmax(220px, 1fr);',
      },
    },
    aliases: ['任务板', 'Trello 布局', '阶段列'],
    prompt: {
      short: '用看板布局（Kanban）：按阶段横排的列，卡片在列间流转。',
      zh: '用看板（Kanban）布局：把工作流拆成若干阶段列（待办 / 进行中 / 已完成），任务卡片在列间流转，grid-auto-flow: column 加 grid-auto-columns: minmax(220px, 1fr)，列内可滚动。',
      en: 'Use a kanban layout: the workflow split into stage columns (todo / doing / done) with task cards moving between them — grid-auto-flow: column plus grid-auto-columns: minmax(220px, 1fr), scrollable per column.',
    },
    name: '看板',
    en: 'Kanban',
    group: '交互容器',
    heat: '常见',
    tagline: '按阶段横排的列，卡片在列间流转。',
    desc: '把工作流拆成若干阶段列（如 待办 / 进行中 / 已完成），任务以卡片形式在列间拖拽流转。项目管理与协作工具的核心界面，也是「状态即布局」的代表。',
    tags: ['任务流', '拖拽', '协作'],
    status: 'ready',
    notes: {
      use: [
        '项目管理、工单系统、CRM 等以「状态流转」为核心的工具',
        '阶段数量固定（2-5 个）、卡片在阶段间单向推进的流程',
        '需要一眼看清各阶段负载（列内卡片数量）的协作场景',
      ],
      caveats: [
        '列数超过五个后横向滚动会吃掉全局感，配合列折叠使用',
        '卡片内容要克制：标题 + 标签 + 负责人足矣，详情留给点开',
        '没有拖拽能力的静态看板只是表格，交互成本要预算进去',
      ],
      css: 'display: grid; grid-auto-flow: column; grid-auto-columns: minmax(220px, 1fr);',
    },
  },
  {
    id: 'feature-alternating',
    i18n: {
      en: {
        tagline: 'Image and copy alternate sides down the page.',
        desc: 'Each feature takes a full row — image on one side, copy on the other — swapping sides each row to form a zig-zag reading rhythm. The golden format for product feature pages: rhythmic without being monotonous.',
        tags: ['Z-path flow', 'Product page', 'Rhythm'],
        aliases: ['zigzag rows', 'alternating sections'],
        use: [
        'Feature pages: one screen per feature, alternating down the page',
        'Tutorial or solution pages with paired diagram-plus-explanation content',
        'Pages that want page-turn rhythm instead of a flat list',
      ],
        caveats: [
        'Keep copy volume similar per feature or the rhythm breaks',
        'Four or five alternations start feeling mechanical — break the rhythm with a full-width section',
        'On mobile everything stacks image-over-text and the alternation semantics vanish',
      ],
        css: '.row:nth-child(even) { direction: rtl; } /* re-reset to ltr inside */',
      },
    },
    aliases: ['图文交替', 'Z 字下行'],
    prompt: {
      short: '用特性交替行（Feature Alternating）：图文两列左右交替下行。',
      zh: '用特性交替行（Feature Alternating）布局：每个特性占一整行，一侧图像一侧文案，下一行左右互换，形成 Z 字动线逐段下行，是产品功能介绍页的黄金版式。',
      en: 'Use a feature-alternating layout: each feature takes a full row with the image on one side and copy on the other, swapping sides each row to create a zig-zag reading path — the classic product feature section.',
    },
    name: '特性交替行',
    en: 'Feature Alternating',
    group: '内容组织',
    heat: '常见',
    tagline: '图文两列左右交替下行。',
    desc: '每个特性占一整行：一侧图像、一侧文案，下一行左右互换，形成 Z 字阅读动线逐段下行。产品功能介绍页的黄金版式，节奏感强且不单调。',
    tags: ['Z 字动线', '产品页', '节奏'],
    status: 'ready',
    notes: {
      use: [
        '产品功能介绍页：一屏讲清一个特性，多特性交替下行',
        '教程 / 解决方案页：每步「图示 + 说明」的成对内容',
        '希望页面有翻页般节奏感、避免流水账的场景',
      ],
      caveats: [
        '每个特性的文案体量要接近，否则交替节奏失衡',
        '交替超过四五段后会显得机械，中途插入一整宽屏段破一下节奏',
        '移动端全部退化为图上文下，交替语义随之消失',
      ],
      css: '.row:nth-child(even) { direction: rtl; } /* 内部再 ltr 复位 */',
    },
  },
  {
    id: 'centered-card',
    i18n: {
      en: {
        tagline: 'One centered card; the whole page yields to it.',
        desc: 'The page carries exactly one horizontally and vertically centered card: sign-in, sign-up, invite codes, empty states. It compresses attention to a single action — the standard answer for flow pages.',
        tags: ['Sign-in', 'Empty state', 'Focus'],
        aliases: ['login card', 'centered form'],
        use: [
        'Single-task flow pages: sign-in, sign-up, two-factor verification',
        'Nothing-to-do transitional pages: empty states, 404, maintenance',
        'Short flows demanding absolute focus: invite codes, payment confirmation',
      ],
        caveats: [
        'One primary task per card; demote secondary actions to small links at the bottom',
        'Fill an overly empty page with texture or brand elements — without stealing the show',
        'Errors belong inside the card; never break centered focus with a popup',
      ],
        css: 'display: grid; place-items: center; min-height: 100%;',
      },
    },
    aliases: ['登录卡片', '聚焦卡片'],
    prompt: {
      short: '用居中卡片布局（Centered Card）：一张卡片居中承载单一任务。',
      zh: '用居中卡片（Centered Card）布局：整页只放一张水平垂直居中的卡片（登录、注册、邀请码、空状态），把注意力压缩到一个动作上，配柔和的背景。',
      en: 'Use a centered card layout: a single horizontally and vertically centered card carrying one task (login, signup, invite code, empty state) — attention compressed onto a single action against a calm backdrop.',
    },
    name: '居中卡片',
    en: 'Centered Card',
    group: '页面骨架',
    heat: '常见',
    tagline: '一张卡片居中，世界都为它让路。',
    desc: '整页只承载一张水平垂直居中的卡片：登录、注册、邀请码、空状态提示。把用户注意力压缩到一个动作上，是流程类页面的标准答案。',
    tags: ['登录', '空状态', '专注'],
    status: 'ready',
    notes: {
      use: [
        '登录、注册、双重验证等单任务流程页',
        '空状态、404、维护提示等「无事可做」的过渡页',
        '邀请码输入、支付确认等需要绝对专注的短流程',
      ],
      caveats: [
        '卡片只放一个主任务，次要动作降级为卡片底部的小链接',
        '页面太空时用背景纹理或品牌元素填补，但不要抢戏',
        '错误提示出现在卡片内部，不要用弹窗打断居中的专注感',
      ],
      css: 'display: grid; place-items: center; min-height: 100%;',
    },
  },
  {
    id: 'z-pattern',
    i18n: {
      en: {
        tagline: 'Choreograph the eye along a diagonal: start, sweep, land.',
        desc: 'For sparse pages, place eye-stops along a Z: logo top-left, nav top-right, hero in the middle, copy bottom-left, button bottom-right. Every corner is another reinforcement.',
        tags: ['Gaze choreography', 'Landing page', 'Sparse content'],
        aliases: ['Z layout', 'diagonal scan'],
        use: [
        'Single-screen pages with little content: splash, simple landing, QR gateway',
        'Pages meant to be read in a numbered one-two-three-four order',
        'Conversion pages whose CTA must land at the eye’s endpoint (bottom-right)',
      ],
        caveats: [
        'The Z fails once content grows — it only serves one screen with five blocks or fewer',
        'Numbering must match visual weight or users jump straight to the bottom-right',
        'The Z is a hypothesis, not a law — validate with heatmaps before freezing the layout',
      ],
        css: 'grid-template-areas: "logo nav" "hero hero" "copy cta";',
      },
    },
    aliases: ['Z 字布局'],
    prompt: {
      short: '用 Z 型动线（Z-Pattern）编排少内容页：关键信息压在 Z 字拐角。',
      zh: '用 Z 型动线（Z-Pattern）编排内容较少的页面：左上 Logo、右上导航、中部主视觉、右下行动按钮，让关键信息落在 Z 字的四个拐角上，顺应扫读习惯。',
      en: 'Use a Z-pattern for light-content pages: logo top-left, nav top-right, the main visual mid-canvas, CTA bottom-right — key elements land on the four corners of the Z, matching natural scanning.',
    },
    name: 'Z 型动线',
    en: 'Z-Pattern',
    group: '视觉动线',
    heat: '常见',
    tagline: '沿对角线编排视线：起点-横扫-落点。',
    desc: '针对内容较少的页面，按 Z 字安排视线落点：左上 Logo、右上导航、中央主视觉、左下文案、右下按钮。每个拐角都是一次信息强化。',
    tags: ['视线编排', '落地页', '少内容'],
    status: 'ready',
    notes: {
      use: [
        '内容极少的单屏页面：启动页、简单落地页、二维码入口页',
        '希望引导视线按「1→2→3→4」编号顺序阅读的场景',
        'Call to Action 需要落在视线终点（右下）的转化页',
      ],
      caveats: [
        '内容一多 Z 字就失效，它只服务「一屏、五块以内」的极简页面',
        '编号顺序要与视觉重量一致，否则用户会直接跳到右下角',
        'Z 型是动线假设而非铁律，用热力图验证后再固定版式',
      ],
      css: 'grid-template-areas: "logo nav" "hero hero" "copy cta";',
    },
  },
  {
    id: 'wizard',
    i18n: {
      en: {
        tagline: 'Driven by a stepper; one thing at a time.',
        desc: 'Slices a complex flow into ordered steps: a stepper marks progress up top while the body shows only the current step’s form or explanation. It lowers per-screen cognitive load — the classic solution for signup, checkout and configuration flows.',
        tags: ['Stepper', 'Form flow', 'Progress'],
        aliases: ['stepper', 'multi-step form'],
        use: [
        'Multi-step forms: registration, checkout, configuration wizards',
        'Long flows with strict step dependencies',
        'Complex setups where each step fills a screen',
      ],
        caveats: [
        'Past five steps, merge or allow skipping — wizards can become torture',
        'Users jump back to edit; the way back must always be available',
        'Steps differ in commitment — do not mechanically attach a Next button to each',
      ],
        css: 'stepper as horizontal flex; body min-height fixed to avoid step-change jumps.',
      },
    },
    aliases: ['步骤流', 'Stepper'],
    prompt: {
      short: '用分步向导（Wizard / Stepper）：顶部步骤条，一次只做一步。',
      zh: '用分步向导（Wizard / Stepper）布局：顶部步骤条标示进度与当前步，主体只呈现当前一步的表单或说明，底部上一步 / 下一步，把复杂流程切成低认知负担的顺序步骤。',
      en: 'Use a wizard / stepper layout: a top stepper tracks progress, the body shows only the current step\u2019s form or content, with back / next actions — complex flows cut into low-cognitive-load sequential steps.',
    },
    name: '分步向导',
    en: 'Wizard / Stepper',
    group: '交互容器',
    heat: '常见',
    tagline: '步骤条驱动，一次只做一件事。',
    desc: '把复杂流程切成顺序步骤：顶部步骤条标示进度，主体只呈现当前一步的表单或说明。降低单屏认知负担，是注册、下单、配置流的经典解法。',
    tags: ['步骤条', '表单流', '进度'],
    status: 'ready',
    notes: {
      use: [
        '注册开户、下单结算、配置向导等多步骤表单流程',
        '步骤之间存在明确依赖、必须按顺序完成的长流程',
        '每一步信息量都足以独占一屏的复杂配置',
      ],
      caveats: [
        '步骤超过五步就考虑合并或允许跳步，向导会变成折磨',
        '用户随时可能想回上一步修改，返回路径必须始终可用',
        '各步骤的提交成本不同，不要机械地「每步一个下一步」',
      ],
      css: '步骤条 flex 横排；主体 min-height 固定，避免步骤切换跳动。',
    },
  },
  {
    id: 'three-column',
    i18n: {
      en: {
        tagline: 'Three equal columns side by side — the classic portal arrangement.',
        desc: 'Three equal-width vertical columns carry content in parallel, typical of traditional portals and newspaper sites. High density and a strong section feel, but narrow-screen pressure and diluted hierarchy keep it mostly on specific content sites today.',
        tags: ['Portal', 'High density', 'Classic'],
        aliases: ['three columns', 'portal columns'],
        use: [
        'Perfectly equivalent sections: three channels, three resource types',
        'Portals and newspaper-like pages that need a sectioned feel',
        'Wide screens presenting three independent content lines at once',
      ],
        caveats: [
        'Equal weight means no protagonist; avoid it for narrative content',
        'On phones it can only stack — the parallelism disappears entirely',
        'Large height differences make columns ragged; cap items per column',
      ],
        css: 'grid-template-columns: repeat(3, 1fr);',
      },
    },
    aliases: ['三等分栏', '门户布局'],
    prompt: {
      short: '用三栏对称布局（Three-Column）：三条等宽纵栏并列。',
      zh: '用三栏对称（Three-Column）布局：三条等宽纵栏并列陈列内容，栏目感与信息密度强，grid-template-columns: repeat(3, 1fr)，常见于门户与报刊式站点，注意窄屏塌缩为单栏。',
      en: 'Use a three-column layout: three equal-width vertical columns with grid-template-columns: repeat(3, 1fr) — strong section identity and density, typical of portals; collapse to one column on narrow screens.',
    },
    name: '三栏对称',
    en: 'Three-Column',
    group: '页面骨架',
    heat: '冷门',
    tagline: '等宽三栏并列，栏目型门户的古典排法。',
    desc: '三条等宽纵向栏并列排布内容，典型如传统门户与报纸网站。信息密度高、栏目感强，但窄屏适配压力与主次弱化问题让它如今多见于特定内容型站点。',
    tags: ['门户', '高密度', '古典'],
    status: 'ready',
    notes: {
      use: [
        '栏目属性完全等价的内容聚合（三个频道、三类资源）',
        '传统门户、报纸网站等需要「栏目感」的页面',
        '宽屏场景下希望一屏并列呈现三条独立内容线',
      ],
      caveats: [
        '三栏等权意味着没有视觉主角，叙事型内容不要用它',
        '窄屏只能纵向堆叠，三栏的「并列感」在手机上会完全消失',
        '栏内内容高度差异大时会显得参差，要控制每栏条目数',
      ],
      css: 'grid-template-columns: repeat(3, 1fr);',
    },
  },
  {
    id: 'boxed',
    i18n: {
      en: {
        tagline: 'Content confined to a fixed-width box with margins on both sides.',
        desc: 'The whole page lives inside a centered fixed-width box, with solid or patterned background outside. It brings the settled, framed feel of print — common on traditional corporate and retro sites.',
        tags: ['Fixed width', 'Margins', 'Print feel'],
        aliases: ['boxed layout', 'fixed frame'],
        use: [
        'Traditional corporate and retro brand sites that want a mounted feel',
        'Display sites with low wide-screen pressure and controllable content width',
        'Brands expressed through the out-of-box background color',
      ],
        caveats: [
        'Box width versus big screens: ultra-wide displays get vast empty flanks',
        'Inside the box it is still ordinary flow — boxing frames, it does not fix responsiveness',
        'Against modern full-bleed visuals, boxed can read as conservative',
      ],
        css: 'max-width: 1080px; margin-inline: auto; box-shadow + outer background;',
      },
    },
    aliases: ['定宽盒', '画布布局'],
    prompt: {
      short: '用盒装布局（Boxed Layout）：内容约束在居中定宽盒内，两侧留白。',
      zh: '用盒装布局（Boxed Layout）：整页内容约束在一个居中的固定宽度盒子里（如 max-width: 1200px），盒外是纯色或图案背景，带来报刊般的安定感与边框感。',
      en: 'Use a boxed layout: all content constrained inside a centered fixed-width box (e.g. max-width: 1200px) with a solid or patterned background outside it — printed-page stability.',
    },
    name: '盒装布局',
    en: 'Boxed Layout',
    group: '页面骨架',
    heat: '冷门',
    tagline: '内容约束在固定宽度盒内，两侧留白。',
    desc: '整个页面内容被约束在一个居中的固定宽度「盒子」里，盒子外是纯色或图案背景。带来纸质报刊般的安定感与边框感，常见于传统企业站与复古设计。',
    tags: ['定宽', '留白', '报刊感'],
    status: 'ready',
    notes: {
      use: [
        '传统企业站、复古品牌站等需要「装裱感」的页面',
        '大屏适配压力小、内容宽度可控的展示型站点',
        '希望用盒外背景表达品牌色的场景',
      ],
      caveats: [
        '盒宽与大屏冲突：超宽屏两侧会形成大面积空白',
        '盒内布局仍是普通流式布局，盒子只是「装裱」不解决响应式',
        '现代全幅视觉的审美趋势下，盒装容易显得保守过时',
      ],
      css: 'max-width: 1080px; margin-inline: auto; box-shadow + 背景留白;',
    },
  },
  {
    id: 'f-pattern',
    i18n: {
      en: {
        tagline: 'Key information pressed onto the left edge and first rows, aligned with scanning.',
        desc: 'Eye-tracking shows users scan text-heavy pages in an F: two horizontal sweeps, then down the left edge. Placing titles and keywords on the F’s strokes measurably raises information hit rates.',
        tags: ['Eye tracking', 'Text-heavy', 'Usability'],
        aliases: ['F scan', 'eye tracking layout'],
        use: [
        'Text-dense listings: news feeds, search results, document indexes',
        'Efficiency pages where a glance still delivers the point',
        'Editorial pages of paragraph content with decoration deliberately held back',
      ],
        caveats: [
        'The F describes observed behavior, not a rule — content comes before the pattern',
        'A left edge full of bold makes everything-important mean nothing is',
        'It holds only when visuals deliberately avoid the hot zones; re-validate for mixed layouts',
      ],
        css: 'full-width first/second rows + left-edge alignment; body max-width caps the scan.',
      },
    },
    aliases: ['扫读优化', '文字密集布局'],
    prompt: {
      short: '用 F 型动线（F-Pattern）编排文字密集页：关键信息压在首行与左缘。',
      zh: '用 F 型动线（F-Pattern）编排文字密集页面：把标题与关键词压在首行、次行与左缘（F 的三笔），因为用户扫读时先横扫前两行、再沿左缘下扫。',
      en: 'Use an F-pattern for text-heavy pages: put headlines and keywords on the first two rows and the left edge (the three strokes of the F), because users scan the top lines horizontally and then drift down the left edge.',
    },
    name: 'F 型动线',
    en: 'F-Pattern',
    group: '视觉动线',
    heat: '冷门',
    tagline: '关键信息压在左缘与首行，顺应扫读。',
    desc: '眼动研究表明用户在文字密集页面沿 F 形扫读：先横扫首行，再横扫次行，最后沿左缘下扫。把标题与关键词押在 F 的笔画上，可显著提高信息命中率。',
    tags: ['眼动', '文字密集', '可用性'],
    status: 'ready',
    notes: {
      use: [
        '新闻列表、搜索结果、文档目录等文字密集的陈列页',
        '希望用户「扫一眼也能拿到要点」的高效率页面',
        '段落式内容为主、装饰元素刻意退后的编辑页',
      ],
      caveats: [
        'F 型是对既定行为的观察总结，不是设计守则——先有内容再有动线',
        '左缘堆满加粗会让「全都是重点」等于没有重点',
        '图片与视觉元素刻意避开 F 热区时才成立，混排时要重新验证',
      ],
      css: '首行/次行通栏 + 左缘对齐；正文区 max-width 限制扫读宽度。',
    },
  },
  {
    id: 'horizontal-scroll',
    i18n: {
      en: {
        tagline: 'Content slides along the horizontal axis like a scroll.',
        desc: 'Breaks the vertical-scroll habit and unfolds content along the x-axis as a lateral reel: galleries, timelines, brand narratives. A distinctive narrative rhythm — but it needs an obvious scroll cue or users get lost.',
        tags: ['Reel', 'Gallery', 'Narrative'],
        aliases: ['horizontal reel', 'side scroll'],
        use: [
        'Horizontal storytelling: galleries, timelines, work reels',
        'A fixed number of panels (five to eight), each a self-contained chapter',
        'Brand pages that want a not-just-another-webpage memory',
      ],
        caveats: [
        'Mouse users have no horizontal wheel — provide a clear cue or nav dots',
        'The vertical habit is strong; each panel must stand alone as a chapter',
        'Touch swipes natively on mobile — avoid clashing with system back gestures',
      ],
        css: 'display: grid; grid-auto-flow: column; overflow-x: auto; scroll-snap-type: x mandatory;',
      },
    },
    aliases: ['横向长卷', '画廊滚动'],
    prompt: {
      short: '用横向滚动布局（Horizontal Scroll）：内容沿横轴展开成长卷。',
      zh: '用横向滚动（Horizontal Scroll）布局：打破纵向惯性，内容沿横轴展开成长卷（scroll-snap-type: x mandatory 逐段吸附），配明显的滚动提示，适合画廊、时间轴与叙事页。',
      en: 'Use a horizontal scroll layout: content unfolds along the x-axis as a long reel (scroll-snap-type: x mandatory for segment snapping) with a visible scroll cue — suited to galleries, timelines and narrative pages.',
    },
    name: '横向滚动',
    en: 'Horizontal Scroll',
    group: '交互容器',
    heat: '冷门',
    tagline: '内容沿横轴滑动成卷。',
    desc: '打破纵向滚动惯性，让内容沿横轴展开成横向长卷：画廊、时间轴、品牌叙事。叙事节奏独特，但需要明显的滚动暗示，否则用户容易迷路。',
    tags: ['长卷', '画廊', '叙事'],
    status: 'ready',
    notes: {
      use: [
        '画廊、时间轴、作品长卷等「横向叙事」的内容',
        '面板数量固定（5-8 个）、每个面板自成一章的场景',
        '需要制造「与普通网页不一样」记忆点的品牌页',
      ],
      caveats: [
        '鼠标用户没有横向滚轮，必须提供明显的滚动暗示或导航点',
        '纵向滚动惯性强，横向叙事的每个面板要能独立成章',
        '移动端天然支持横滑，但注意不要与系统返回手势冲突',
      ],
      css: 'display: grid; grid-auto-flow: column; overflow-x: auto; scroll-snap-type: x mandatory;',
    },
  },
]

export const readyLayoutPatterns = layoutPatterns.filter((p) => p.status === 'ready')
