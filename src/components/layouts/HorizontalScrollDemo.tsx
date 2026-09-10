const panels = [
  { no: '01', title: '起 点', text: '长卷从这里展开' },
  { no: '02', title: '时间轴', text: '横向的年份刻度' },
  { no: '03', title: '作 品', text: '每屏一个故事' },
  { no: '04', title: '引 言', text: '在卷中停留一下' },
  { no: '05', title: '终 章', text: '感谢滑到这里' },
]

export default function HorizontalScrollDemo() {
  return (
    <div className="hs" aria-label="横向滚动画卷演示">
      <span className="region-tag">hs 横向长卷 · 鼠标滚轮或拖动底部滚动条</span>
      <div className="hs-scroll">
        {panels.map((p) => (
          <section className="hs-panel" key={p.no}>
            <span className="hs-no">{p.no}</span>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
          </section>
        ))}
      </div>
      <span className="hs-hint">→ 横向滑动浏览（滚动条在下方）</span>
    </div>
  )
}
