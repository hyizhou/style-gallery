const cards = [
  { id: 1, title: '卡片标本 · 壹', text: '图 + 题 + 摘要 + 动作，自成一体。' },
  { id: 2, title: '卡片标本 · 贰', text: '等权陈列让扫读效率最大化。' },
  { id: 3, title: '卡片标本 · 叁', text: 'auto-fill 自动决定列数与数量。' },
  { id: 4, title: '卡片标本 · 肆', text: '拖窄预览宽度观察列数变化。' },
  { id: 5, title: '卡片标本 · 伍', text: '每张卡片都是独立的内容单元。' },
  { id: 6, title: '卡片标本 · 陆', text: '文案行数要约束，网格才整齐。' },
]

export default function CardGridDemo() {
  return (
    <div className="cg" aria-label="卡片网格演示">
      <span className="region-tag">grid 卡片网格 · auto-fill</span>
      <div className="cg-grid">
        {cards.map((c) => (
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
