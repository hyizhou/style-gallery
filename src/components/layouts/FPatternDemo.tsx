const listRows = [
  { title: '圣杯布局的历史与实现', meta: '布局 · 8 分钟' },
  { title: '侧边栏仪表盘的收纳策略', meta: '布局 · 6 分钟' },
  { title: '容器查询是响应式的下一站', meta: 'CSS · 11 分钟' },
  { title: '从拟物到扁平的十年', meta: '风格 · 14 分钟' },
  { title: '为什么列表都推荐七个以内', meta: '认知 · 5 分钟' },
]

export default function FPatternDemo() {
  return (
    <div className="fp" aria-label="F 型动线演示">
      <span className="region-tag">f-pattern 眼动热区 · F 形笔画</span>
      <div className="fp-guide" aria-hidden="true">
        <span className="fp-stroke fp-stroke-1">扫读 ①</span>
        <span className="fp-stroke fp-stroke-2">扫读 ②</span>
        <span className="fp-stroke fp-stroke-3">沿左缘下扫 ③</span>
      </div>
      <div className="fp-content">
        <h4>本周新收录的布局标本</h4>
        <ul className="fp-list">
          {listRows.map((r) => (
            <li key={r.title}>
              <strong>{r.title}</strong>
              <span>{r.meta}</span>
            </li>
          ))}
        </ul>
        <p className="fp-para">
          文字密集的页面天然适合 F 型动线：标题行被完整阅读，摘要行只被扫过前几个词，
          左缘的关键词承担了全部的定位职责。把每行最想被看到的词放在行首，
          就是这个规律唯一实用的推论。
        </p>
      </div>
    </div>
  )
}
