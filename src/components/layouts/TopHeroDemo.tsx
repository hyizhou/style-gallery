import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '顶部导航加 Hero 演示',
    nav: 'nav 导航',
    links: ['产品', '方案', '文档', '定价'],
    trial: '免费试用',
    hero: 'hero 首屏',
    title: '把复杂留给自己，把简单交给用户',
    sub: '三分钟完成部署，剩下的时间用来打磨产品。',
    cta: '免费开始',
    demo: '预约演示',
    next: 'section 内容分区 ↓',
  },
  en: {
    aria: 'Top nav + hero demo',
    nav: 'nav',
    links: ['Product', 'Solutions', 'Docs', 'Pricing'],
    trial: 'Free trial',
    hero: 'hero',
    title: 'Keep the complexity, hand users the simplicity',
    sub: 'Deploy in three minutes, spend the rest polishing your product.',
    cta: 'Start free',
    demo: 'Book a demo',
    next: 'section ↓ content below',
  },
}

export default function TopHeroDemo() {
  const t = L[useLocale()]
  return (
    <div className="th" aria-label={t.aria}>
      <div className="th-nav">
        <span className="region-tag">{t.nav}</span>
        <div className="th-links">
          {t.links.map((l) => (
            <span key={l}>{l}</span>
          ))}
          <span className="th-cta-mini">{t.trial}</span>
        </div>
      </div>
      <div className="th-hero">
        <span className="region-tag">{t.hero}</span>
        <h4>{t.title}</h4>
        <p>{t.sub}</p>
        <div className="th-cta">
          <span className="th-btn th-btn-primary">{t.cta}</span>
          <span className="th-btn">{t.demo}</span>
        </div>
      </div>
      <div className="th-next" aria-hidden="true">
        <span className="region-tag">{t.next}</span>
      </div>
    </div>
  )
}
