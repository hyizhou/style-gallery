import type { LayoutHeat, LayoutStatus, LayoutPatternNotes, PatternI18n } from './layouts'

// 反馈大类：与「视觉风格 / 布局模式」并列的标本大类。
// 布局回答「内容在页面里怎么摆」，反馈回答「状态怎么告诉用户、任务在哪个容器里发生」——
// 从最重的阻断弹窗到最轻的一行 Tooltip，按打断强度与形态分五组编目。
export type FeedbackGroup = '消息提醒' | '浮层容器' | '气泡浮层' | '加载进度' | '结果状态'

export interface FeedbackPattern {
  id: string
  name: string
  en: string
  group: FeedbackGroup
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

export const feedbackPatterns: FeedbackPattern[] = [
  {
    id: 'alert',
    i18n: {
      en: {
        tagline: 'A persistent strip at the top of the page for the things that matter.',
        desc: 'An ever-present banner embedded in the page: amber for warnings, red for errors — it stays put whether or not the user acts. The division of labor with a toast is importance: a toast says its piece and leaves, an alert must be seen and stays until dismissed or resolved.',
        tags: ['Persistent', 'Warning', 'Page-level'],
        aliases: ['banner', 'warning strip', 'error bar'],
        use: [
        'Page-level notices that hold until handled: failed validation, quota almost full',
        'Standing error reports: API failures, offline state, sync problems',
        'System notices meant for everyone: announcements, maintenance windows',
      ],
        caveats: [
        'One or two banners per screen — stacked banners eat the page height',
        'Keep color semantics strict: red and amber mean warning and error, not marketing',
        'Dismissible banners need a way back (re-trigger or reappear on reload), or a miss is forever',
      ],
        css: 'flex banner + colored left border / tinted background; close button absolutely positioned right.',
      },
    },
    aliases: ['警告条', '横幅提示', 'Banner', '错误条'],
    prompt: {
      short: '用警告提示（Alert）在页面顶部放常驻横条：黄条提醒、红条报错。',
      zh: '用警告提示（Alert / Banner）传达页面级重要信息：在页面顶部（或内容区顶部）放一条常驻横幅，警告用琥珀色、错误用红色，左侧配状态图标，右侧可放关闭按钮；它与 Toast 的区别是常驻——用户不处理或关闭就一直显示。',
      en: 'Use an alert banner for page-level messages: a persistent strip at the top of the page (or section) — amber for warnings, red for errors, a status icon on the left and an optional dismiss button on the right; unlike a toast it stays until resolved or dismissed.',
    },
    name: '警告提示',
    en: 'Alert',
    group: '消息提醒',
    heat: '热门',
    tagline: '页面顶部常驻横条，喊重要的事。',
    desc: '嵌在页面里的常驻横条：黄条提醒风险、红条报告错误，不需要用户操作就一直在那里。它与 Toast 的分工是「重要性」——Toast 说完就走，Alert 必须被人看到，处理或关闭之前都留在原地。',
    tags: ['常驻', '警告', '页面级'],
    status: 'ready',
    notes: {
      use: [
        '表单校验失败、配额将满等「不处理就一直在」的页面级提醒',
        '接口报错、网络异常、同步失败等错误状态的常驻告知',
        '系统公告、维护通知等需要全员可见的信息横幅',
      ],
      caveats: [
        '一屏最多一两条，横幅堆叠会吃掉页面高度',
        '颜色语义要克制：红黄是警告与错误，别拿来做营销位',
        '可关闭的横幅要有恢复入口（重新触发或刷新后重现），否则错过即永久',
      ],
      css: '横幅 display: flex + 状态色左边框 / 浅色底；关闭按钮绝对定位右侧。',
    },
  },
  {
    id: 'toast',
    i18n: {
      en: {
        tagline: 'A bubble pops up in the corner, says “Saved”, and leaves on its own.',
        desc: 'After an action completes, a small bubble appears in a corner — “Saved”, “Copied” — and disappears by itself within seconds, never interrupting the flow. It is the lowest-intensity feedback there is: ignoring it costs nothing, so it should only ever carry good-to-know news.',
        tags: ['Auto-dismiss', 'Non-blocking', 'Lightweight'],
        aliases: ['snackbar', 'message', '全局提示'],
        use: [
        'Receipts for finished actions: saved, copied, exported',
        'Heads-up that a background task started (“Export started — we’ll notify you”)',
        'Light failures with a retry action attached',
      ],
        caveats: [
        'Low-importance news only: anything needing a decision belongs to an Alert or a modal',
        'Long enough to read (2–4 s); never let a toast be the only acknowledgment of an important action',
        'On mobile keep clear of the gesture area and floating buttons',
      ],
        css: 'position: fixed bottom-right + enter/leave animation + setTimeout removal; dedupe the queue.',
      },
    },
    aliases: ['吐司', '轻提示', 'Snackbar', 'Message', '全局提示'],
    prompt: {
      short: '用轻提示（Toast）反馈操作结果：右下角冒泡「保存成功」，几秒自动消失。',
      zh: '用轻提示（Toast / Snackbar）反馈轻量操作结果：操作完成后在右下角（移动端常在底部居中）冒出「保存成功」式小气泡，2–3 秒后自动消失，不挡内容、不需要点击确认；同位置新提示替换旧提示，避免堆叠。',
      en: 'Use a toast / snackbar to acknowledge lightweight actions: when the operation completes, a small “Saved” bubble appears bottom-right (bottom-center on mobile), auto-dismisses after 2–3 seconds, never blocking content or demanding a click; replace an old toast instead of stacking new ones.',
    },
    name: '轻提示',
    en: 'Toast',
    group: '消息提醒',
    heat: '热门',
    tagline: '右下角冒个泡，几秒后自己消失。',
    desc: '完成一个操作后从角落冒出的小气泡：「保存成功」「已复制」，几秒后自动消失，全程不打断操作。它是反馈强度最低的提示——用户不看也不影响继续干活，所以只该装「知道就好」的消息。',
    tags: ['自动消失', '不打断', '轻量'],
    status: 'ready',
    notes: {
      use: [
        '保存成功、已复制、已导出等「知道就好」的操作回执',
        '后台任务已开始的告知（「已开始导出，完成后通知你」）',
        '失败但可就地重试的轻量错误（配「重试」动作按钮）',
      ],
      caveats: [
        '只装低重要度消息：需要用户决策的内容用 Alert 或弹窗',
        '停留时间要够读完（2–4 秒），重要操作别只给一个 toast',
        '移动端注意避开底部手势区与悬浮按钮',
      ],
      css: 'position: fixed 右下角 + 进入 / 离场动画 + setTimeout 自动移除；队列去重。',
    },
  },
  {
    id: 'notification',
    i18n: {
      en: {
        tagline: 'System messages pile up behind the bell, read whenever.',
        desc: 'An inbox-style message center: system events (comments, mentions, approvals, alerts) collect in the list behind the bell, an unread badge shows how many, and the user reads them when free. It does not aim to be seen now — it aims to be all there when wanted.',
        tags: ['Inbox', 'Unread badge', 'Async'],
        aliases: ['message center', '通知面板'],
        use: [
        'Collecting async events in one place: comments, mentions, approvals, system alerts',
        'Products users leave and return to: collaboration tools, ops consoles',
        'Messages too important to drop yet not worth an interruption',
      ],
        caveats: [
        'A badge that never clears gets ignored forever — keep unread rules strict',
        'The list needs grouping or paging; a few hundred items makes it unusable',
        'Truly urgent news (service down) must not hide in the bell — pair with an Alert or email',
      ],
        css: 'Bell with absolute-positioned badge count; dropdown panel toggled, closed on outside click.',
      },
    },
    aliases: ['消息中心', '站内通知', '通知面板'],
    prompt: {
      short: '用通知中心（Notification）承接系统消息：铃铛 + 未读红点 + 收件箱面板。',
      zh: '用通知中心（Notification）承接不紧急的系统消息：顶栏铃铛图标带未读数字红点，点开下拉收件箱面板，按时间倒序列出通知（标题 + 摘要 + 时间），支持全部已读；新消息到达时只更新红点，不主动弹出打断。',
      en: 'Use a notification center for non-urgent system messages: a bell icon in the top bar with an unread badge, opening a dropdown inbox that lists notifications newest-first (title, summary, time) with mark-all-read; arriving messages only update the badge instead of interrupting.',
    },
    name: '通知',
    en: 'Notification',
    group: '消息提醒',
    heat: '常见',
    tagline: '右上角铃铛攒着系统消息，等你有空再看。',
    desc: '收件箱式的消息中心：系统事件（评论、@、审批、告警）先进铃铛里的列表攒着，红点与数字提示未读，用户有空再点开看。它不追求「此刻被看到」，追求「想看时都在」。',
    tags: ['收件箱', '未读红点', '异步'],
    status: 'ready',
    notes: {
      use: [
        '评论、@、审批、系统告警等异步消息的统一收纳',
        '用户可能离开很久、回来要补看的产品（协作工具、运营后台）',
        '重要但不想用弹窗打断的消息',
      ],
      caveats: [
        '红点一旦常亮不消失，用户会彻底无视它——未读规则要严格',
        '通知列表要有分页或分组，堆积几百条就没法用了',
        '真正紧急的事（服务宕机）别藏在铃铛里，配合 Alert 或邮件',
      ],
      css: '铃铛徽章 absolute 定位 + 未读数；面板 absolute 下拉，点击外部关闭。',
    },
  },
  {
    id: 'modal',
    i18n: {
      en: {
        tagline: 'A scrim dims the page and pushes one thing front and center.',
        desc: 'Lays an independent floating layer over the page: a translucent scrim dims and blocks the content below while a centered dialog carries the task that must be handled now — confirmations, short forms, lightboxes. The most interruptive container there is: once it opens, all attention belongs to it.',
        tags: ['Scrim', 'Focus', 'Interruption'],
        aliases: ['dialog', 'popup', 'overlay'],
        use: [
        'Blocking decisions that cannot wait: delete confirmations, expired sessions, payment review',
        'Lightweight actions that keep context: image lightboxes, quick edits',
        'Short single-task flows completable in seconds (longer flows belong on their own page)',
      ],
        caveats: [
        'A modal is the strongest interruption — if inline expansion or a toast works, do not pop',
        'One layer at a time; stacking modals is a usability disaster',
        'Make exits explicit (cancel, ×, Esc, scrim click) and leave an undo for destructive actions',
      ],
        css: 'scrim: position fixed + inset 0; dialog centered via place-items: center (native <dialog> uses ::backdrop)',
      },
    },
    aliases: ['对话框', '模态框', '浮层'],
    prompt: {
      short: '用弹窗（Modal Dialog）承载聚焦任务：遮罩 + 居中浮层 + 确认取消。',
      zh: '用弹窗（Modal Dialog）承载需要聚焦的短任务：半透明遮罩压暗背景，居中浮层承载表单或确认流，底部确认 / 取消按钮；打开时背景锁定滚动、焦点圈定在浮层内。',
      en: 'Use a modal dialog for focused short tasks: a dimmed translucent overlay behind a centered floating layer carrying a form or confirmation, with confirm / cancel actions at the bottom; lock background scroll and trap focus while open.',
    },
    name: '弹窗',
    en: 'Modal Dialog',
    group: '浮层容器',
    heat: '热门',
    tagline: '遮罩压暗页面，把一件事推到眼前。',
    desc: '在页面之上叠加一层独立浮层：半透明遮罩压暗并挡住底层内容，居中的对话框承载必须立即处理的任务——确认、短表单、灯箱预览。它是打断强度最高的容器：一旦弹出，用户的全部注意力都必须交给它。',
    tags: ['遮罩', '聚焦', '打断'],
    status: 'ready',
    notes: {
      use: [
        '删除确认、登录过期、支付复核等必须立即决策的阻断性任务',
        '图片灯箱、快速编辑等「不离开当前上下文」的轻量操作',
        '主任务只有一件、几秒内可完成的短流程（更长的流程改用独立页面）',
      ],
      caveats: [
        '弹窗是最强的打断：能就地内联展开或用 toast 提示的，就不要弹窗',
        '一次只开一层，弹窗之上再叠弹窗是可用性灾难',
        '关闭路径要显式（取消、×、Esc、点击遮罩），破坏性操作还要留反悔出口',
      ],
      css: '遮罩 position: fixed + inset: 0；对话框 place-items: center 居中（原生 <dialog> 用 ::backdrop）',
    },
  },
  {
    id: 'drawer',
    i18n: {
      en: {
        tagline: 'A panel slides in from the edge; the page stays in view.',
        desc: 'A floating panel hugging a screen edge (usually the right): the page behind is not removed and often not even dimmed, and closing snaps straight back to where you were. It carries tasks lighter than a modal yet closer than a new page — filters, details, settings — the workhorse container of consoles and mobile apps.',
        tags: ['Edge slide', 'Context kept', 'Non-blocking'],
        aliases: ['side panel', '滑出层'],
        use: [
        'Filter and sort panels: tune conditions in the drawer while results update live behind it',
        'Browse-and-return views: item details, shopping carts',
        'Frequently toggled side tools: help center, support chat',
      ],
        caveats: [
        'A wide drawer steals attention; past half the screen width, switch to a dedicated page',
        'On mobile, mind the conflict with back-swipe gestures — always give an explicit close button',
        'No long forms in drawers: narrow panel plus scrolling is a form-experience disaster',
      ],
        css: 'position: fixed; top: 0; right: 0; height: 100%; transform: translateX(100%) → 0 transition.',
      },
    },
    aliases: ['侧滑面板', '抽屉面板'],
    prompt: {
      short: '用抽屉（Drawer）承载侧滑任务：从右缘滑出面板，背后内容仍可见。',
      zh: '用抽屉（Drawer）承载不离开当前页的次级任务：面板从屏幕右缘滑入（宽 320–480px，移动端可全宽），背后内容保持可见（可选浅遮罩），顶部标题 + 关闭按钮，底部主操作；适合筛选、详情、快速设置。',
      en: 'Use a drawer for secondary tasks without leaving the page: a panel slides in from the right edge (320–480px wide, full-width on mobile) while the page stays visible behind an optional light scrim; title and close button on top, primary action at the bottom — good for filters, details and quick settings.',
    },
    name: '抽屉',
    en: 'Drawer',
    group: '浮层容器',
    heat: '热门',
    tagline: '从屏幕边缘滑出的面板，背后内容还在眼前。',
    desc: '贴着屏幕边缘（多为右侧）滑出的浮层面板：背后的页面不移除、往往也不压暗，随时可以关掉回到原处。它承载「比弹窗轻、比新页面近」的任务——筛选、详情、设置，是中后台与移动端的通用容器。',
    tags: ['边缘滑出', '保上下文', '非阻断'],
    status: 'ready',
    notes: {
      use: [
        '列表的筛选、排序面板：开着抽屉调条件，背后结果实时更新',
        '条目详情、购物车等「看完即回」的浏览任务',
        '高频切换的辅助工具（帮助中心、客服面板）',
      ],
      caveats: [
        '宽抽屉会挤掉内容注意力，超过一半屏宽就该考虑独立页面',
        '移动端注意与左右滑返回手势的冲突；要给明确的关闭按钮',
        '长表单别塞抽屉——窄面板 + 滚动是表单体验灾难',
      ],
      css: 'position: fixed; top: 0; right: 0; height: 100%; transform: translateX(100%) → 0 过渡。',
    },
  },
  {
    id: 'bottom-sheet',
    i18n: {
      en: {
        tagline: 'A panel rises from the bottom edge — right where the thumb is.',
        desc: 'The mobile variant of the drawer: a panel rises from the bottom edge with rounded top corners and a drag handle, expands by swiping up and closes by swiping down. It puts actions inside the thumb zone — the standard container for share menus, pickers and quick-action lists on phones.',
        tags: ['Mobile', 'Thumb zone', 'Swipe up'],
        aliases: ['action sheet', 'half sheet', '底部弹层'],
        use: [
        'Action menus: share, report, delete (the action-sheet pattern)',
        'Mobile containers for pickers: filters, dates, regions',
        'Quick-action trays for list items, replacing hard-to-reach floating menus',
      ],
        caveats: [
        'Do not port it to desktop as-is: on wide screens a bottom sheet is squat and awkward — use a modal or drawer',
        'Keep nesting shallow: a sheet on a sheet makes gestures fight each other',
        'Half-open content must expand to full in one swipe — stuck-at-half is the worst height',
      ],
        css: 'position: fixed; bottom: 0; transform: translateY(100%) → 0; rounded top corners + grab handle.',
      },
    },
    aliases: ['底部弹层', '动作面板', '半屏弹窗'],
    prompt: {
      short: '用底部抽屉（Bottom Sheet）承载移动端操作：从底部升起的面板 + 抓手。',
      zh: '用底部抽屉（Bottom Sheet）承载移动端的次级操作：面板从屏幕底缘升起，顶部圆角 + 抓手，可半屏或近全屏展开，背景加轻遮罩；内容为动作列表（分享到 / 选择器 / 筛选项），下滑或点遮罩关闭。',
      en: 'Use a bottom sheet for secondary mobile actions: a panel rises from the bottom edge with rounded top corners and a drag handle, opening half- or near-full-screen over a light scrim; content is an action list (share targets, pickers, filters), dismissed by swipe-down or scrim tap.',
    },
    name: '底部抽屉',
    en: 'Bottom Sheet',
    group: '浮层容器',
    heat: '常见',
    tagline: '从屏幕底部升起的面板，拇指最够得着的地方。',
    desc: '抽屉的移动端变体：面板贴着屏幕底缘升起，顶部一排圆角与抓手，向上滑动展开、下滑关闭。它把操作放进拇指热区，是移动端分享菜单、选择器与快捷动作列表的标准容器。',
    tags: ['移动端', '拇指热区', '上滑'],
    status: 'ready',
    notes: {
      use: [
        '分享、举报、删除等动作菜单（Action Sheet）',
        '移动端的筛选、日期、地区等选择器容器',
        '列表项的快捷操作盘，替代小屏幕上难点到的悬浮菜单',
      ],
      caveats: [
        '桌面端别照搬：宽屏上底部抽屉又矮又宽，改用弹窗或抽屉',
        '层级要浅：抽屉里再弹抽屉，手势会互相打架',
        '半屏内容要能一步滑到全屏，卡在半屏的高度最难堪',
      ],
      css: 'position: fixed; bottom: 0; transform: translateY(100%) → 0；顶部圆角 + 抓手条。',
    },
  },
  {
    id: 'popconfirm',
    i18n: {
      en: {
        tagline: 'A tiny bubble beside the button: delete this for real?',
        desc: 'A miniature confirmation anchored to the trigger itself: one line of text plus Cancel / OK, popping up right beside the button and gone the moment you answer. It compresses the cost of “confirm before delete” to nearly zero — far less ceremony than a modal, yet the finger still has to commit deliberately.',
        tags: ['Confirm', 'Lightweight', 'Anchored'],
        aliases: ['确认气泡', '二次确认'],
        use: [
        'Confirming low-stakes but reflex-prone actions: delete, unpublish, revoke',
        'Inline action columns in tables — a modal per row would be overkill',
        'Switch-like actions that fire instantly: publish, toggle permissions',
      ],
        caveats: [
        'One-sentence decisions only: confirmations that need explaining or detail belong in a modal',
        'Do not use it for high-stakes irreversible actions — confirming too cheaply invites misclicks',
        'The bubble must flip with viewport edges and follow its trigger',
      ],
        css: 'absolute bubble beside the trigger (small arrow included); outside click or Esc cancels.',
      },
    },
    aliases: ['气泡确认', '二次确认气泡', '确认气泡'],
    prompt: {
      short: '用气泡确认框（Popconfirm）做轻量二次确认：按钮旁冒泡「确认删除？取消 / 确定」。',
      zh: '用气泡确认框（Popconfirm）做轻量二次确认：点击触发按钮后，在按钮旁弹出一个带小箭头的气泡，一句话说明 + 「取消 / 确定」两个小按钮；点外部区域即取消，确认后气泡消失并执行操作，全程不遮挡页面。',
      en: 'Use a popconfirm for lightweight confirmation: clicking the trigger pops a small arrowed bubble beside the button with one line of text and Cancel / OK mini-buttons; clicking outside cancels, confirming closes the bubble and runs the action — no page occlusion at all.',
    },
    name: '气泡确认框',
    en: 'Popconfirm',
    group: '气泡浮层',
    heat: '常见',
    tagline: '按钮旁冒出的小气泡：确认删除？',
    desc: '附着在触发按钮上的微型确认框：一句话加「取消 / 确定」，点按钮即在旁边冒出，确认或取消后即消失。它把「删除前二次确认」的成本压到最低——不像弹窗那样兴师动众，手指也必须刻意确认一下。',
    tags: ['二次确认', '轻量', '贴按钮'],
    status: 'ready',
    notes: {
      use: [
        '删除、下架、撤销等低风险但容易手滑的操作确认',
        '表格行内操作列：不想为每一行都开一个弹窗',
        '一点就生效的开关型动作：发布、切换权限',
      ],
      caveats: [
        '只装一句话决策：需要解释后果或阅读细节的确认用弹窗',
        '高危不可逆操作别用它——确认成本太低，容易误点',
        '气泡位置要跟随按钮并自动翻转，避免溢出屏幕',
      ],
      css: 'absolute 定位于触发元素旁（含小箭头），点击外部或 Esc 关闭。',
    },
  },
  {
    id: 'popover',
    i18n: {
      en: {
        tagline: 'A detail card that floats out only when clicked.',
        desc: 'A click-triggered floating card: tap an avatar to see a profile, a term to see its definition, an icon to see details. Its division of labor with the tooltip is interactivity — a tooltip is one line of text, a popover is a mini panel that can carry rich content, even buttons.',
        tags: ['Click-triggered', 'Rich content', 'Non-blocking'],
        aliases: ['气泡卡片', '浮出卡片', '悬浮卡'],
        use: [
        'Hovercard-style profile cards on avatars and names',
        'Term definitions and footnotes inside tables and long text',
        'Lightweight pickers: colors, emoji, quick date presets',
      ],
        caveats: [
        'Keep content small and focused; forms and long lists belong in a drawer or modal',
        'Outside-click close must return focus, or keyboard users are stranded',
        'Never nest popovers — layered anchoring loses control fast',
      ],
        css: 'anchor relative + card absolute (or Floating UI positioning), flipping at viewport edges.',
      },
    },
    aliases: ['气泡卡片', '浮出卡片', '悬浮卡'],
    prompt: {
      short: '用气泡卡片（Popover）展示点开的详情：锚定触发元素的浮出小卡片。',
      zh: '用气泡卡片（Popover）展示点击后的浮出详情：以触发元素为锚点弹出小卡片（用户资料、词条释义、颜色选择器等富内容），带指向小箭头，点击外部或 Esc 关闭；内容可交互（按钮、链接），但不阻断页面其余部分。',
      en: 'Use a popover for click-triggered detail: a small card anchored to the trigger (user profile, term definition, color picker — rich content allowed) with a pointing arrow, dismissed by outside click or Esc; content may be interactive but never blocks the rest of the page.',
    },
    name: '气泡卡片',
    en: 'Popover',
    group: '气泡浮层',
    heat: '常见',
    tagline: '主动点开才出现的浮出详情卡片。',
    desc: '由点击触发的浮出卡片：点头像看资料、点词条看释义、点图标看说明。它和 Tooltip 的分工是「交互性」——Tooltip 只是一行字，Popover 是能承载富内容甚至按钮的迷你面板。',
    tags: ['点击触发', '富内容', '非阻断'],
    status: 'ready',
    notes: {
      use: [
        '头像 / 用户名点开的悬浮资料卡',
        '表格与长文中的词条释义、术语解释',
        '轻量选择器：颜色、表情、日期快捷项',
      ],
      caveats: [
        '内容要小而聚焦；装下表单和长列表就该换抽屉或弹窗',
        '点击外部关闭要处理焦点归还，键盘用户别被丢在原地',
        '避免嵌套 Popover，一层套一层定位会失控',
      ],
      css: '锚点 relative + 卡片 absolute（或 Floating UI 计算），翻转避让屏幕边缘。',
    },
  },
  {
    id: 'tooltip',
    i18n: {
      en: {
        tagline: 'One small line on hover, gone the moment you move away.',
        desc: 'A short explanation that floats out while hovering (or keyboard-focusing) an element and vanishes on leave. It answers “what is this?” — what an icon button does, the full text behind a truncation. The lightest of all feedback, and the least protected: it must never carry anything critical.',
        tags: ['Hover', 'One line', 'Lightest'],
        aliases: ['文字提示', '悬浮提示', '气泡说明'],
        use: [
        'Explaining icon-only buttons: toolbars, inline action columns',
        'Showing the full text behind truncated labels',
        'Micro-notes for form controls and domain terms',
      ],
        caveats: [
        'Never put must-see info in it — touch devices have no hover, so critical content dies there',
        'One line only; once it needs wrapping and layout, upgrade to a popover',
        'Do not tooltip “Click to…” — the button’s own label should already say it',
      ],
        css: '.tip:hover .tip-bubble { opacity: 1 } + absolute positioning; on touch, degrade to tap or omit.',
      },
    },
    aliases: ['文字提示', '悬浮提示', '气泡说明'],
    prompt: {
      short: '用文字提示（Tooltip）解释悬停元素：一行小字浮出，移开即消失。',
      zh: '用文字提示（Tooltip）为元素补充悬停说明：鼠标悬停或键盘聚焦时，在元素上方（或下方）浮出一行深色小字（图标含义、截断全文、单位说明），延迟约 300ms 出现，移开或失焦即消失；纯 CSS :hover / :focus-visible 即可实现。',
      en: 'Use a tooltip for hover explanations: on hover or keyboard focus, a single dark line floats above or below the element (icon meaning, truncated full text, unit notes) after ~300ms and vanishes on leave or blur — achievable with pure CSS :hover / :focus-visible.',
    },
    name: '文字提示',
    en: 'Tooltip',
    group: '气泡浮层',
    heat: '热门',
    tagline: '悬停才出现的一行小字，移开即消失。',
    desc: '鼠标悬停（或键盘聚焦）在元素上时浮出的一行小说明，移开即消失。它负责「这是什么东西」级别的解释——图标按钮的含义、被截断文本的全文，是所有提示里最轻、也最不设防的一个。',
    tags: ['悬停触发', '一行文字', '最轻量'],
    status: 'ready',
    notes: {
      use: [
        '纯图标按钮的功能说明（工具栏、操作列）',
        '被截断长文本的全文展示',
        '表单控件、专业术语的即时小注释',
      ],
      caveats: [
        '不能装必须被看到的信息——触屏设备没有悬停，关键内容别放这',
        '文案一行以内，需要换行和排版就升级为 Popover',
        '别给按钮加「点击做某事」类 Tooltip，按钮自身文案就该说明白',
      ],
      css: '.tip:hover .tip-bubble { opacity: 1 } + 绝对定位；触屏端退化为点击或直接省略。',
    },
  },
  {
    id: 'progress',
    i18n: {
      en: {
        tagline: 'Crawls from 0% to 100%, giving the wait a shape.',
        desc: 'Turns task progress into a bar that visibly grows: uploads, exports, installs — the remaining amount is readable at a glance and the wait gains an expectation. Determinate work gets a percentage; unknowable work gets a moving stripe — one notch more informative than a spinner.',
        tags: ['Determinate', 'Wait expectation', 'Visualization'],
        aliases: ['进度条', '上传进度', '加载条'],
        use: [
        'Uploads, downloads and exports whose progress can actually be computed',
        'Whole-journey progress across installers and batch jobs',
        'Completion hints across multi-step forms',
      ],
        caveats: [
        'Progress must be real or carry no percentage — a fake bar stuck at 99% costs more trust than no bar',
        'For unknowable durations use a striped animation or spinner, not a linear fake',
        'Long tasks need a cancel affordance; a progress bar is not a mandate to wait blindly',
      ],
        css: 'track div + fill width: n%; indeterminate state = CSS-translated stripe background.',
      },
    },
    aliases: ['进度条', '上传进度', '加载条'],
    prompt: {
      short: '用进度条（Progress）呈现任务进度：0%→100% 的可视化等待。',
      zh: '用进度条（Progress）为耗时任务提供进度预期：一根按 0→100% 填充的横条，配百分比或剩余时间文字；耗时可估算时用确定性进度，不可估算时用循环流动的条纹动画；完成后切换为成功状态。',
      en: 'Use a progress bar to set expectations for long tasks: a horizontal bar filling 0→100% with a percentage or time-remaining label; determinate fill when duration is estimable, an indeterminate looping stripe when not; switch to a success state on completion.',
    },
    name: '进度条',
    en: 'Progress',
    group: '加载进度',
    heat: '常见',
    tagline: '从 0% 爬到 100%，给等待一个心理预期。',
    desc: '把任务进度可视化成一根会涨的条：上传、导出、安装，剩下的量一眼可见，等待就有了预期。耗时确定时用百分比，不可预估时用流动条纹——比转圈多一层「还要多久」的信息。',
    tags: ['确定性进度', '等待预期', '可视化'],
    status: 'ready',
    notes: {
      use: [
        '文件上传、下载、导出等可计算进度的耗时操作',
        '安装向导、批量处理的多步骤整体进度',
        '表单分步填写时的完成度提示',
      ],
      caveats: [
        '进度要么真实要么别标百分比——假进度卡在 99% 比没有进度更伤信任',
        '不确定时长用条纹动画或 Spinner，不要匀速爬假条',
        '长任务要留取消入口，进度条不是只能干等',
      ],
      css: '外槽 div + 内条 width: n%；不确定态用 CSS 动画平移条纹背景。',
    },
  },
  {
    id: 'skeleton',
    i18n: {
      en: {
        tagline: 'Gray placeholder shapes first; real content fills them in.',
        desc: 'While loading, render gray placeholders in the shape of the coming content — avatar circles, title bars, paragraph lines — then swap in the real thing in place. Its edge over a spinner is the spoiler: users see the page’s silhouette early, so the wait simply feels shorter.',
        tags: ['Placeholder', 'Layout spoiler', 'Loading state'],
        aliases: ['骨架图', '占位屏', 'skeleton screen'],
        use: [
        'First loads of structurally stable pages: feeds, lists, dashboards',
        'Transitions between detail views (next / previous item)',
        'Placeholder boxes before lazy-loaded images arrive',
      ],
        caveats: [
        'Not for unpredictable layouts — placeholders mismatching real content look worse than a spinner',
        'Waits past ~3 s still need a cancel or error exit; a skeleton is not an unlimited license',
        'Keep the shimmer gentle; a whole page flashing is more annoying than a spinner',
      ],
        css: 'placeholder background: linear-gradient + moving shimmer; conditional-render real content on arrival.',
      },
    },
    aliases: ['骨架图', '占位屏', 'Skeleton Screen'],
    prompt: {
      short: '用骨架屏（Skeleton）优化加载体验：灰色占位轮廓原位替换为内容。',
      zh: '用骨架屏（Skeleton）优化首屏与切换的加载体验：按最终布局渲染灰色占位块（圆形头像、标题条、段落条、卡片框），叠加轻微闪烁动画，数据到达后原位淡入真实内容；占位块形状要与真实内容一一对应。',
      en: 'Use a skeleton screen for first loads and view switches: gray placeholder blocks matching the final layout (round avatar, title bar, paragraph lines, card frames) with a subtle shimmer, fading into real content in place once data arrives; each placeholder must map to real content.',
    },
    name: '骨架屏',
    en: 'Skeleton',
    group: '加载进度',
    heat: '热门',
    tagline: '先给灰色占位轮廓，数据到了再填肉。',
    desc: '加载时先渲染内容形状的灰色占位块（头像圈、标题条、段落条），数据到达后原位替换为真实内容。它比转圈高级的地方是「剧透布局」：用户提前知道页面会长什么样，等待的感知时间更短。',
    tags: ['占位轮廓', '布局剧透', '加载态'],
    status: 'ready',
    notes: {
      use: [
        '首屏列表、信息流等结构稳定的页面加载',
        '详情页切换（上一条 / 下一条）时的内容过渡',
        '图片懒加载前的占位框',
      ],
      caveats: [
        '布局不固定的页面别用——占位与实际内容对不上反而更乱',
        '超过 3 秒的等待要给取消或错误出口，骨架不是无限期通行证',
        '闪烁动画要轻，整页晃动的骨架比转圈更烦躁',
      ],
      css: '占位块 background: linear-gradient + 位移 shimmer 动画；数据到达后条件渲染替换。',
    },
  },
  {
    id: 'spinner',
    i18n: {
      en: {
        tagline: 'A spinning ring and “Saving…” — the plainest wait there is.',
        desc: 'A looping rotating ring or arc, paired with a loading label — the oldest and most universal loading indicator. It promises no deadline, only “not dead”. Used sparingly it reassures; used everywhere it reads as a frozen page.',
        tags: ['Indeterminate', 'Loop animation', 'Universal'],
        aliases: ['转圈', '加载圈', 'spin', 'loading'],
        use: [
        'In-button submit wait (the button enters a spinning state that blocks double submits)',
        'Inline loading hints for local region refreshes',
        'The fallback for short waits of unknowable length',
      ],
        caveats: [
        'A full-screen spinner is the last resort: spin locally before locking the whole page',
        'A spinner past ~3 seconds reads as a crash — switch to a progress bar',
        'Always pair with a label of what is happening; a bare ring says nothing',
      ],
        css: 'circle border + transparent border-top-color + animation: rotate; scale via a size variable in buttons.',
      },
    },
    aliases: ['转圈', '加载圈', 'Spin', 'Loading'],
    prompt: {
      short: '用旋转加载（Spinner）表示短等待：转圈 + 「正在保存」文字。',
      zh: '用旋转加载（Spinner / Spin）表示时长不可预估的短等待：一个循环旋转的圆环（CSS border 旋转实现），旁边配「正在保存 / 加载中」文字说明正在发生什么；超过 3 秒的等待改用进度条或骨架屏。',
      en: 'Use a spinner for short waits of unpredictable length: a looping rotating ring (CSS rotating border) next to a “Saving / Loading” label that says what is happening; beyond ~3 seconds switch to a progress bar or skeleton.',
    },
    name: '旋转加载',
    en: 'Spinner',
    group: '加载进度',
    heat: '热门',
    tagline: '转圈加一句「正在保存」，最朴素的等待。',
    desc: '一段循环旋转的圆环或扇形，配合「加载中」文字，是最古老也最通用的加载指示。它不承诺时间，只承诺「没死」——用对了是定心丸，到处都用用户会以为页面卡死了。',
    tags: ['不确定时长', '循环动画', '通用'],
    status: 'ready',
    notes: {
      use: [
        '按钮内的提交等待（点击后按钮进入转圈态，防重复提交）',
        '局部区块刷新时的行内加载指示',
        '无法预估时长的短等待兜底',
      ],
      caveats: [
        '全屏大转圈是最后手段：能局部转圈就不要锁整页',
        '超过 3 秒的 Spinner 会被当成卡死，换成进度条',
        '必须配文字说明正在发生什么，裸转圈等于没说',
      ],
      css: '圆形 border + border-top-color 透明 + animation: rotate；按钮内用尺寸变量缩放。',
    },
  },
  {
    id: 'result',
    i18n: {
      en: {
        tagline: 'A full page for the moments that matter: success, and what’s next.',
        desc: 'A dedicated end-of-flow feedback page: a large icon declares success or failure, key credentials follow (order number, amount), and the next step is a clear button. Payments, submissions and activations deserve a whole page of ceremony — not a toast and a shrug.',
        tags: ['Flow end', 'Outcome', 'Next step'],
        aliases: ['结果反馈页', '成功页', '支付成功页'],
        use: [
        'Terminal confirmation for payments, applications, service activation',
        'Summary pages after form wizards, with next-step guidance',
        'Formal notice of failure or pending review, with reasons and a way out',
      ],
        caveats: [
        'Do not overuse: everyday small actions deserve a toast, and a full-page jump breaks flow',
        'A result page needs exits — “Done” with no next step is a dead end',
        'Failure results must offer an actionable remedy, not just an apology',
      ],
        css: 'centered column: status icon + headline + detail + button group; credentials in muted small type.',
      },
    },
    aliases: ['结果反馈页', '成功页', '支付成功页'],
    prompt: {
      short: '用结果页（Result）收尾重大流程：大图标 + 结果说明 + 下一步按钮。',
      zh: '用结果页（Result）为重大流程收尾：页面中央放大号状态图标（绿色对勾 / 红色叉），下接结果标题（支付成功 / 提交失败）、一两句说明与关键凭据（订单号、金额），底部放明确的主次行动按钮（查看订单 / 返回首页）。',
      en: 'Use a result page to close out major flows: a large status icon front and center (green check / red cross), the outcome headline below (payment success / submission failed) with one or two lines of detail and key credentials (order number, amount), and clear primary / secondary actions at the bottom (view order / back home).',
    },
    name: '结果页',
    en: 'Result',
    group: '结果状态',
    heat: '常见',
    tagline: '大事完成后的明确反馈：成功页与下一步。',
    desc: '流程终点专门的结果反馈页：大图标宣布成功 / 失败，附关键信息（单号、金额）与明确的下一步按钮。付款、提交、开通这类「重大结果」值得一整页的仪式感，而不是一个 toast 了事。',
    tags: ['流程终点', '成功反馈', '下一步引导'],
    status: 'ready',
    notes: {
      use: [
        '支付、提交申请、开通服务等重大操作的终点确认',
        '表单向导完成后的总结页（附带下一步引导）',
        '失败与审核中状态的正式告知（附原因与出路）',
      ],
      caveats: [
        '别滥用：普通小操作用 toast 足够，跳整页反而打断心流',
        '结果页要有出口——只有「完成」没有「下一步」是死胡同',
        '失败结果必须给出可行动的补救路径，不只是道歉',
      ],
      css: '居中纵向排布：状态图标 + 标题 + 说明 + 按钮组；结果数据用弱化色小字。',
    },
  },
  {
    id: 'empty',
    i18n: {
      en: {
        tagline: 'Nothing here yet — never leave the user staring at white.',
        desc: 'The placeholder for empty lists, fruitless searches and unactivated features: a restrained illustration, one line of “nothing collected yet”, and a guiding button. An empty state is neither an error nor a loading state; its job is to turn blankness into an entrance.',
        tags: ['No data', 'Guidance', 'First-run'],
        aliases: ['空页面', '无数据占位', '空态'],
        use: [
        'First-use modules with no data yet: favorites, orders, drafts',
        'The way out of fruitless searches and filters (clear filters / new keywords)',
        'Placeholder notices for no-permission or unactivated features (with a request entry)',
      ],
        caveats: [
        'Match the illustration to the product; a cartoon blob in a minimalist product clashes',
        'Always offer a next step — a bare “No data” is the same as doing nothing',
        'Design empty and error as separate states; they must not share a face',
      ],
        css: 'centered column: illustration + copy + button; keep empty state visually distinct from errors.',
      },
    },
    aliases: ['空页面', '无数据占位', '空态'],
    prompt: {
      short: '用空状态（Empty）占位无数据页面：插图 + 一句说明 + 引导按钮。',
      zh: '用空状态（Empty）占位无数据场景：页面中央放克制的线条插图、一句「还没有 XX」式说明（或搜索无结果的原因），下接一个引导用户行动的主按钮（去添加 / 清除筛选），必要时附次级说明链接；不要渲染空白或只剩表头。',
      en: 'Use an empty state for no-data moments: a restrained line illustration front and center, one “Nothing here yet” line (or why a search found nothing), one primary action button underneath (add one / clear filters) and an optional secondary link — never a blank page or a lone table header.',
    },
    name: '空状态',
    en: 'Empty State',
    group: '结果状态',
    heat: '常见',
    tagline: '这里还没有东西：别让用户对着白屏发呆。',
    desc: '列表无数据、搜索无结果、功能未开通时的占位反馈：一个克制的插图、一句「还没有收藏」式说明和引导按钮。空状态不是错误也不是加载，它的任务是把「空白」变成「入口」。',
    tags: ['无数据', '引导入口', '首次体验'],
    status: 'ready',
    notes: {
      use: [
        '首次使用尚无数据的功能模块（收藏、订单、草稿）',
        '搜索与筛选无结果时的出路（清筛选 / 换关键词）',
        '无权限、未开通功能的占位说明（附申请入口）',
      ],
      caveats: [
        '插图风格要与产品一致，别在极简产品里放卡通大图',
        '空状态必须给下一步，纯「暂无数据」四个字等于没做',
        '区分清空态（引导添加）与搜索空态（给退出筛选的路）',
      ],
      css: '居中纵向排布插图 + 说明 + 按钮；空态与错误态分开设计，勿混用。',
    },
  },
]

export const readyFeedbackPatterns = feedbackPatterns.filter((p) => p.status === 'ready')
