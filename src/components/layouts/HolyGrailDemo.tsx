const regions = [
  { cls: 'hg-header', tag: 'header 页头' },
  { cls: 'hg-nav', tag: 'nav 导航' },
  { cls: 'hg-main', tag: 'main 主内容' },
  { cls: 'hg-aside', tag: 'aside 辅助栏' },
  { cls: 'hg-footer', tag: 'footer 页脚' },
]

export default function HolyGrailDemo() {
  return (
    <div className="hg" aria-label="圣杯布局演示">
      {regions.map((r) => (
        <div className={`hg-region ${r.cls}`} key={r.cls}>
          <span className="region-tag">{r.tag}</span>
        </div>
      ))}
    </div>
  )
}
