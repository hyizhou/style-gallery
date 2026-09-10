const navLinks = ['产品', '方案', '文档', '定价']

export default function TopHeroDemo() {
  return (
    <div className="th" aria-label="顶部导航加 Hero 演示">
      <div className="th-nav">
        <span className="region-tag">nav 导航</span>
        <div className="th-links">
          {navLinks.map((l) => (
            <span key={l}>{l}</span>
          ))}
          <span className="th-cta-mini">免费试用</span>
        </div>
      </div>
      <div className="th-hero">
        <span className="region-tag">hero 首屏</span>
        <h4>把复杂留给自己，把简单交给用户</h4>
        <p>三分钟完成部署，剩下的时间用来打磨产品。</p>
        <div className="th-cta">
          <span className="th-btn th-btn-primary">免费开始</span>
          <span className="th-btn">预约演示</span>
        </div>
      </div>
      <div className="th-next" aria-hidden="true">
        <span className="region-tag">section 内容分区 ↓</span>
      </div>
    </div>
  )
}
