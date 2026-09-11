// 场景导购：常见产品场景的风格 / 布局推荐（设计见 docs/prompt-tool-design.md）

export interface ScenarioPick {
  kind: 'style' | 'layout'
  id: string
  reason: string
}

export interface Scenario {
  id: string
  question: string
  context: string
  picks: ScenarioPick[]
}

export const scenarios: Scenario[] = [
  {
    id: 'ai-product-site',
    question: 'AI 产品官网用什么风格',
    context: '要前沿、有科技感，但不能冷漠吓跑普通访客；首屏要一句话讲清产品能力。',
    picks: [
      { kind: 'style', id: 'aurora', reason: '深色底 + 光晕是当下 AI 产品的通用语言，深邃但不压抑' },
      { kind: 'style', id: 'glass', reason: '磨砂玻璃叠加在彩色背景上，轻盈且与光晕风格天然兼容' },
      { kind: 'layout', id: 'bento-grid', reason: '能力矩阵用大小格陈列，首屏即产品概览' },
      { kind: 'layout', id: 'top-hero', reason: '大标题 + 一个 CTA，最适合「一句话价值主张 + 等候列表」' },
    ],
  },
  {
    id: 'personal-portfolio',
    question: '个人作品集用什么风格',
    context: '作品是主角，界面要退后；同时需要一点个人辨识度。',
    picks: [
      { kind: 'style', id: 'minimal', reason: '极简让作品说话，留白即画廊' },
      { kind: 'style', id: 'swiss', reason: '网格与大字号排版自带编辑气质，设计师作品集的经典答案' },
      { kind: 'layout', id: 'masonry', reason: '比例不一的作品图在瀑布流里自然填缝' },
      { kind: 'layout', id: 'single-column', reason: '叙事型简历与长介绍的最佳阅读体验' },
    ],
  },
  {
    id: 'admin-console',
    question: '中后台管理系统用什么风格',
    context: '长时间盯着用，信息密度高；稳定、可预期比个性更重要。',
    picks: [
      { kind: 'style', id: 'antd', reason: '企业级组件体系现成，表格表单的密度与秩序经过海量验证' },
      { kind: 'style', id: 'minimal', reason: '中性黑白灰降低视觉疲劳，层级靠字体与间距' },
      { kind: 'layout', id: 'sidebar-dashboard', reason: '侧栏常驻导航 + 顶栏 + 工作区，中后台的统治性骨架' },
      { kind: 'layout', id: 'master-detail', reason: '列表选一条、右侧看详情，管理高频任务流的标准答案' },
    ],
  },
  {
    id: 'campaign-landing',
    question: '活动页 / 营销落地页用什么风格',
    context: '三秒内抓住注意力，气质要大胆、有记忆点，转化按钮必须显眼。',
    picks: [
      { kind: 'style', id: 'brutal', reason: '粗边硬影高饱和，天生抗平庸，年轻受众尤佳' },
      { kind: 'style', id: 'y2k', reason: '糖果色与铬金属的复古未来感，适合潮流与娱乐向活动' },
      { kind: 'layout', id: 'top-hero', reason: '大标题 + 单一 CTA 的转化首屏' },
      { kind: 'layout', id: 'split', reason: '左视觉右文案（或反之），天然的「二选一 / 对照」叙事' },
    ],
  },
  {
    id: 'content-blog',
    question: '博客 / 内容站用什么风格',
    context: '读者为文字而来，一切为阅读体验让路。',
    picks: [
      { kind: 'style', id: 'minimal', reason: '阅读场景的最稳选择，黑白灰 + 衬线或中性无衬线' },
      { kind: 'style', id: 'swiss', reason: '编辑感排版让长文有杂志质感' },
      { kind: 'layout', id: 'single-column', reason: '60–75 字符行宽的阅读纵轴，长文的黄金版式' },
      { kind: 'layout', id: 'magazine', reason: '内容量大、有头条层级时，报刊式编排更有策展感' },
    ],
  },
  {
    id: 'playful-product',
    question: '儿童或趣味产品用什么风格',
    context: '要亲切、柔软、有玩具感，降低使用门槛，大人小孩都不设防。',
    picks: [
      { kind: 'style', id: 'clay', reason: '黏土质感的蓬松与糖果色，亲和力拉满' },
      { kind: 'style', id: 'pixel', reason: '像素游戏记忆自带趣味彩蛋属性，适合游戏化产品' },
      { kind: 'layout', id: 'card-grid', reason: '等权卡片陈列内容，扫读门槛最低' },
      { kind: 'layout', id: 'horizontal-scroll', reason: '横向长卷像翻绘本，叙事感强' },
    ],
  },
  {
    id: 'dev-tool',
    question: '开发者工具用什么风格',
    context: '用户是工程师，喜欢密度、快捷与「懂我」的极客气质。',
    picks: [
      { kind: 'style', id: 'crt', reason: '终端质感是对工程师审美的直球示好' },
      { kind: 'style', id: 'minimal', reason: '工具属性优先时，中性极简最耐看' },
      { kind: 'layout', id: 'sidebar-dashboard', reason: '高频切换的功能区需要常驻导航' },
      { kind: 'layout', id: 'modal', reason: '确认流与短输入聚焦，不丢上下文' },
    ],
  },
]
