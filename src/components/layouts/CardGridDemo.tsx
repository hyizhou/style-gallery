import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '卡片网格演示',
    tag: 'grid 卡片网格 · auto-fill',
    cards: [
      { id: 1, title: '卡片标本 · 壹', text: '图 + 题 + 摘要 + 动作，自成一体。' },
      { id: 2, title: '卡片标本 · 贰', text: '等权陈列让扫读效率最大化。' },
      { id: 3, title: '卡片标本 · 叁', text: 'auto-fill 自动决定列数与数量。' },
      { id: 4, title: '卡片标本 · 肆', text: '拖窄预览宽度观察列数变化。' },
      { id: 5, title: '卡片标本 · 伍', text: '每张卡片都是独立的内容单元。' },
      { id: 6, title: '卡片标本 · 陆', text: '文案行数要约束，网格才整齐。' },
    ],
  },
  en: {
    aria: 'Card grid demo',
    tag: 'grid of cards · auto-fill',
    cards: [
      { id: 1, title: 'Card specimen · 1', text: 'Image + title + excerpt + actions, self-contained.' },
      { id: 2, title: 'Card specimen · 2', text: 'Equal weight maximizes scanning efficiency.' },
      { id: 3, title: 'Card specimen · 3', text: 'auto-fill decides column count on its own.' },
      { id: 4, title: 'Card specimen · 4', text: 'Narrow the preview width and watch columns change.' },
      { id: 5, title: 'Card specimen · 5', text: 'Every card is an independent content unit.' },
      { id: 6, title: 'Card specimen · 6', text: 'Constrain copy length or the grid grows ragged.' },
    ],
  },
}

export default function CardGridDemo() {
  const t = L[useLocale()]
  return (
    <div className="cg" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="cg-grid">
        {t.cards.map((c) => (
          <div className="cg-card" key={c.id}>
            <div className="cg-cover" />
            <strong>{c.title}</strong>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
