import type { LayoutHeat, LayoutStatus, LayoutPatternNotes, PatternI18n } from './layouts'

// 弹窗大类：与「视觉风格 / 布局模式」并列的标本大类。
// 布局回答「内容在页面里怎么摆」，弹窗回答「任务在哪个容器里发生」——打断式浮层容器。
export interface ModalPattern {
  id: string
  name: string
  en: string
  group: '弹窗'
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

export const modalPatterns: ModalPattern[] = [
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
    group: '弹窗',
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
]

export const readyModalPatterns = modalPatterns.filter((p) => p.status === 'ready')
