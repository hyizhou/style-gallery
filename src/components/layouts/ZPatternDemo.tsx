const stops = [
  { area: 'z-logo', no: '1', label: '左上 · 起点 Logo' },
  { area: 'z-nav', no: '2', label: '右上 · 导航 / 次要入口' },
  { area: 'z-copy', no: '4', label: '左下 · 价值文案' },
  { area: 'z-cta', no: '5', label: '右下 · 行动按钮' },
]

export default function ZPatternDemo() {
  return (
    <div className="zp" aria-label="Z 型动线演示">
      <span className="region-tag">z-pattern 视线沿 Z 字流动</span>
      <div className="zp-grid">
        {stops.map((s) => (
          <div className={`zp-cell ${s.area}`} key={s.area}>
            <span className="zp-no">{s.no}</span>
            <span>{s.label}</span>
          </div>
        ))}
        <div className="zp-cell z-hero">
          <span className="zp-no">3</span>
          <span>中央 · 主视觉横扫</span>
        </div>
      </div>
    </div>
  )
}
