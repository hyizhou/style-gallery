import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '全屏沉浸演示',
    title: '向下滚动，故事才刚刚开始',
    sub: '整屏只做一件事：定下基调。',
    strip: '滚动之后揭示的第一段内容……',
  },
  en: {
    aria: 'Full-bleed hero demo',
    title: 'Scroll down — the story is just beginning',
    sub: 'The first screen does one thing: set the tone.',
    strip: 'The first content revealed after the scroll…',
  },
}

export default function FullBleedDemo() {
  const t = L[useLocale()]
  return (
    <div className="fb" aria-label={t.aria}>
      <div className="fb-art" aria-hidden="true">
        <span className="fb-orb" />
        <span className="fb-orb fb-orb-2" />
      </div>
      <div className="fb-content">
        <span className="fb-kicker">CHAPTER 01</span>
        <h4>{t.title}</h4>
        <p>{t.sub}</p>
      </div>
      <span className="fb-arrow" aria-hidden="true">
        ↓
      </span>
      <div className="fb-strip">
        <p>{t.strip}</p>
      </div>
    </div>
  )
}
