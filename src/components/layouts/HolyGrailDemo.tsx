import { useLocale } from '../../i18n'

const L = {
  zh: {
    regions: [
      { cls: 'hg-header', tag: 'header 页头' },
      { cls: 'hg-nav', tag: 'nav 导航' },
      { cls: 'hg-main', tag: 'main 主内容' },
      { cls: 'hg-aside', tag: 'aside 辅助栏' },
      { cls: 'hg-footer', tag: 'footer 页脚' },
    ],
    aria: '圣杯布局演示',
  },
  en: {
    regions: [
      { cls: 'hg-header', tag: 'header' },
      { cls: 'hg-nav', tag: 'nav' },
      { cls: 'hg-main', tag: 'main content' },
      { cls: 'hg-aside', tag: 'aside' },
      { cls: 'hg-footer', tag: 'footer' },
    ],
    aria: 'Holy Grail layout demo',
  },
}

export default function HolyGrailDemo() {
  const t = L[useLocale()]
  return (
    <div className="hg" aria-label={t.aria}>
      {t.regions.map((r) => (
        <div className={`hg-region ${r.cls}`} key={r.cls}>
          <span className="region-tag">{r.tag}</span>
        </div>
      ))}
    </div>
  )
}
