import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '盒装布局演示',
    tag: 'boxed 盒外背景 · 固定 960px 盒宽',
    links: '首页 · 产品 · 联系',
    hero: '盒内的世界',
    cols: [
      '盒装布局把整页装进一个固定宽度的容器，像一个展示柜。',
      '盒外的背景是「装裱」，盒内的内容才是展品。',
    ],
  },
  en: {
    aria: 'Boxed layout demo',
    tag: 'boxed · outer background, fixed 960px box',
    links: 'Home · Products · Contact',
    hero: 'The world inside the box',
    cols: [
      'A boxed layout puts the whole page into a fixed-width container, like a display case.',
      'The outside background is the “mounting”; the content inside is the exhibit.',
    ],
  },
}

export default function BoxedDemo() {
  const t = L[useLocale()]
  return (
    <div className="bx" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="bx-page">
        <div className="bx-nav">
          <strong>ACME CO.</strong>
          <span>{t.links}</span>
        </div>
        <div className="bx-hero">{t.hero}</div>
        <div className="bx-cols">
          {t.cols.map((c) => (
            <p key={c.slice(0, 12)}>{c}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
