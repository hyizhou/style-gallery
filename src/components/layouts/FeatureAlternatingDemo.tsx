const rows = [
  {
    no: '01',
    title: '一键生成骨架',
    text: '从内容清单到页面骨架，自动匹配最合适的布局模式，再由你微调。',
  },
  {
    no: '02',
    title: '响应式即预览',
    text: '桌面、平板、手机三档宽度随时切换，重排过程实时可见，不再靠想象。',
  },
  {
    no: '03',
    title: '明暗一体交付',
    text: '每个标本都自带亮暗两套形态，交付即可上线，不用二次加工。',
  },
]

export default function FeatureAlternatingDemo() {
  return (
    <div className="fa" aria-label="特性交替行演示">
      <span className="region-tag">fa Z 字动线 · 图文交替</span>
      {rows.map((r, i) => (
        <div className="fa-row" key={r.no}>
          <div className={`fa-visual ${i % 2 === 1 ? 'flip' : ''}`}>
            <span className="fa-no">{r.no}</span>
          </div>
          <div className="fa-copy">
            <h4>{r.title}</h4>
            <p>{r.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
