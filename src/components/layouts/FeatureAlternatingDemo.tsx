import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '特性交替行演示',
    tag: 'fa Z 字动线 · 图文交替',
    rows: [
      { no: '01', title: '一键生成骨架', text: '从内容清单到页面骨架，自动匹配最合适的布局模式，再由你微调。' },
      { no: '02', title: '响应式即预览', text: '桌面、平板、手机三档宽度随时切换，重排过程实时可见，不再靠想象。' },
      { no: '03', title: '明暗一体交付', text: '每个标本都自带亮暗两套形态，交付即可上线，不用二次加工。' },
    ],
  },
  en: {
    aria: 'Feature alternating demo',
    tag: 'fa zig-zag flow · image/copy alternating',
    rows: [
      { no: '01', title: 'One-click skeleton', text: 'From content inventory to page skeleton, the best layout is matched automatically — then you fine-tune.' },
      { no: '02', title: 'Responsive as preview', text: 'Desktop, tablet and phone widths switch live; reflow happens in front of you, not in your imagination.' },
      { no: '03', title: 'Light and dark, shipped together', text: 'Every specimen carries both themes — deliverable as-is, no rework needed.' },
    ],
  },
}

export default function FeatureAlternatingDemo() {
  const t = L[useLocale()]
  return (
    <div className="fa" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      {t.rows.map((r, i) => (
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
