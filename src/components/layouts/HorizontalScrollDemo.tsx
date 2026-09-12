import { useLocale } from '../../i18n'

const L = {
  zh: {
    panels: [
      { no: '01', title: '起 点', text: '长卷从这里展开' },
      { no: '02', title: '时间轴', text: '横向的年份刻度' },
      { no: '03', title: '作 品', text: '每屏一个故事' },
      { no: '04', title: '引 言', text: '在卷中停留一下' },
      { no: '05', title: '终 章', text: '感谢滑到这里' },
    ],
    aria: '横向滚动画卷演示',
    tag: 'hs 横向长卷 · 鼠标滚轮或拖动底部滚动条',
    hint: '→ 横向滑动浏览（滚动条在下方）',
  },
  en: {
    panels: [
      { no: '01', title: 'Start', text: 'The reel unrolls here' },
      { no: '02', title: 'Timeline', text: 'Year marks along the x-axis' },
      { no: '03', title: 'Works', text: 'One story per screen' },
      { no: '04', title: 'Interlude', text: 'Linger in the reel a moment' },
      { no: '05', title: 'Finale', text: 'Thanks for sliding this far' },
    ],
    aria: 'Horizontal scroll reel demo',
    tag: 'hs lateral reel · scroll or drag the bar below',
    hint: '→ Slide horizontally (scrollbar below)',
  },
}

export default function HorizontalScrollDemo() {
  const t = L[useLocale()]
  return (
    <div className="hs" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="hs-scroll">
        {t.panels.map((p) => (
          <section className="hs-panel" key={p.no}>
            <span className="hs-no">{p.no}</span>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
          </section>
        ))}
      </div>
      <span className="hs-hint">{t.hint}</span>
    </div>
  )
}
