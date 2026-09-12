import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: 'Z 型动线演示',
    tag: 'z-pattern 视线沿 Z 字流动',
    stops: [
      { area: 'z-logo', no: '1', label: '左上 · 起点 Logo' },
      { area: 'z-nav', no: '2', label: '右上 · 导航 / 次要入口' },
      { area: 'z-copy', no: '4', label: '左下 · 价值文案' },
      { area: 'z-cta', no: '5', label: '右下 · 行动按钮' },
    ],
    hero: '中央 · 主视觉横扫',
  },
  en: {
    aria: 'Z-pattern demo',
    tag: 'z-pattern · the eye flows along a Z',
    stops: [
      { area: 'z-logo', no: '1', label: 'Top-left · start, logo' },
      { area: 'z-nav', no: '2', label: 'Top-right · nav / secondary' },
      { area: 'z-copy', no: '4', label: 'Bottom-left · value copy' },
      { area: 'z-cta', no: '5', label: 'Bottom-right · CTA' },
    ],
    hero: 'Center · hero sweep',
  },
}

export default function ZPatternDemo() {
  const t = L[useLocale()]
  return (
    <div className="zp" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="zp-grid">
        {t.stops.map((s) => (
          <div className={`zp-cell ${s.area}`} key={s.area}>
            <span className="zp-no">{s.no}</span>
            <span>{s.label}</span>
          </div>
        ))}
        <div className="zp-cell z-hero">
          <span className="zp-no">3</span>
          <span>{t.hero}</span>
        </div>
      </div>
    </div>
  )
}
