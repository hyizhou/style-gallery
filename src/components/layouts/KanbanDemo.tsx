import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '看板演示',
    tag: 'kanban 状态即布局',
    columns: [
      {
        stage: '待办',
        cards: [
          { title: '整理主从布局反馈', tag: '标本馆', who: '样' },
          { title: '评估容器查询兼容性', tag: '基建', who: '本' },
        ],
      },
      {
        stage: '进行中',
        cards: [
          { title: '侧边栏仪表盘标本', tag: '标本馆', who: '君' },
          { title: '暗色主题变量整理', tag: '基建', who: '样' },
        ],
      },
      {
        stage: '已完成',
        cards: [
          { title: '圣杯布局标本', tag: '标本馆', who: '君' },
          { title: '主页类别切换项', tag: '基建', who: '本' },
        ],
      },
    ],
  },
  en: {
    aria: 'Kanban demo',
    tag: 'kanban · state as layout',
    columns: [
      {
        stage: 'To-do',
        cards: [
          { title: 'Triage master-detail feedback', tag: 'Gallery', who: 'S' },
          { title: 'Audit container-query support', tag: 'Infra', who: 'P' },
        ],
      },
      {
        stage: 'Doing',
        cards: [
          { title: 'Sidebar dashboard specimen', tag: 'Gallery', who: 'M' },
          { title: 'Dark-theme token cleanup', tag: 'Infra', who: 'S' },
        ],
      },
      {
        stage: 'Done',
        cards: [
          { title: 'Holy Grail specimen', tag: 'Gallery', who: 'M' },
          { title: 'Home category switch', tag: 'Infra', who: 'P' },
        ],
      },
    ],
  },
}

export default function KanbanDemo() {
  const t = L[useLocale()]
  return (
    <div className="kb" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="kb-cols">
        {t.columns.map((col) => (
          <div className="kb-col" key={col.stage}>
            <div className="kb-col-head">
              <span>{col.stage}</span>
              <span className="kb-count">{col.cards.length}</span>
            </div>
            {col.cards.map((c) => (
              <div className="kb-card" key={c.title}>
                <p>{c.title}</p>
                <div className="kb-card-foot">
                  <span className="kb-tag">{c.tag}</span>
                  <span className="kb-who">{c.who}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
