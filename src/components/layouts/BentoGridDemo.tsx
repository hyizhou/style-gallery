const smallTiles = [
  { title: '转化率', value: '3.6%' },
  { title: '新用户', value: '1,208' },
  { title: '跳失率', value: '12%' },
  { title: '平均时长', value: '4m12s' },
  { title: '留存率', value: '44%' },
]

export default function BentoGridDemo() {
  return (
    <div className="bt" aria-label="便当盒网格演示">
      <span className="region-tag">bento 跨度层级 · 主 2×2 + 副 1×1</span>
      <div className="bt-grid">
        <div className="bt-tile bt-main">
          <strong>核心指标</strong>
          <p className="bt-big">12,480</p>
          <p>最重要的内容占最大的格子——面积本身就是优先级。</p>
        </div>
        {smallTiles.map((t) => (
          <div className="bt-tile" key={t.title}>
            <strong>{t.title}</strong>
            <p className="bt-mid">{t.value}</p>
          </div>
        ))}
        <div className="bt-tile bt-wide">
          <strong>趋势图占位</strong>
          <p className="bt-mid">横向 2×1 的格子承载时间序列</p>
        </div>
      </div>
    </div>
  )
}
