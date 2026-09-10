export type LayoutGroup = '页面骨架' | '内容组织' | '交互容器' | '视觉动线'
export type LayoutHeat = '热门' | '常见' | '冷门'
export type LayoutStatus = 'ready' | 'planned'

export interface LayoutPatternNotes {
  use: string[]
  caveats: string[]
  css: string
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
  status: LayoutStatus
  notes?: LayoutPatternNotes
}

export const layoutPatterns: LayoutPattern[] = [
  {
    id: 'holy-grail',
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
    name: 'F 型动线',
    en: 'F-Pattern',
    group: '视觉动线',
    heat: '冷门',
    tagline: '关键信息压在左缘与首行，顺应扫读。',
    desc: '眼动研究表明用户在文字密集页面沿 F 形扫读：先横扫首行，再横扫次行，最后沿左缘下扫。把标题与关键词押在 F 的笔画上，可显著提高信息命中率。',
    tags: ['眼动', '文字密集', '可用性'],
    status: 'planned',
  },
  {
    id: 'horizontal-scroll',
    name: '横向滚动',
    en: 'Horizontal Scroll',
    group: '交互容器',
    heat: '冷门',
    tagline: '内容沿横轴滑动成卷。',
    desc: '打破纵向滚动惯性，让内容沿横轴展开成横向长卷：画廊、时间轴、品牌叙事。叙事节奏独特，但需要明显的滚动暗示，否则用户容易迷路。',
    tags: ['长卷', '画廊', '叙事'],
    status: 'planned',
  },
]

export const readyLayoutPatterns = layoutPatterns.filter((p) => p.status === 'ready')
