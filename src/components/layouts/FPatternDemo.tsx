import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: 'F 型动线演示',
    tag: 'f-pattern 眼动热区 · F 形笔画',
    s1: '扫读 ①',
    s2: '扫读 ②',
    s3: '沿左缘下扫 ③',
    title: '本周新收录的布局标本',
    rows: [
      { title: '圣杯布局的历史与实现', meta: '布局 · 8 分钟' },
      { title: '侧边栏仪表盘的收纳策略', meta: '布局 · 6 分钟' },
      { title: '容器查询是响应式的下一站', meta: 'CSS · 11 分钟' },
      { title: '从拟物到扁平的十年', meta: '风格 · 14 分钟' },
      { title: '为什么列表都推荐七个以内', meta: '认知 · 5 分钟' },
    ],
    para: '文字密集的页面天然适合 F 型动线：标题行被完整阅读，摘要行只被扫过前几个词，左缘的关键词承担了全部的定位职责。把每行最想被看到的词放在行首，就是这个规律唯一实用的推论。',
  },
  en: {
    aria: 'F-pattern demo',
    tag: 'f-pattern · eye-tracking hot zones, F strokes',
    s1: 'Sweep ①',
    s2: 'Sweep ②',
    s3: 'Down the left edge ③',
    title: 'Layout specimens added this week',
    rows: [
      { title: 'The history and implementation of the Holy Grail', meta: 'Layout · 8 min' },
      { title: 'Taming the sidebar dashboard', meta: 'Layout · 6 min' },
      { title: 'Container queries are the next stop for responsive', meta: 'CSS · 11 min' },
      { title: 'From skeuomorphism to flat, a decade', meta: 'Style · 14 min' },
      { title: 'Why lists top out at seven items', meta: 'Cognition · 5 min' },
    ],
    para: 'Text-heavy pages suit the F-pattern naturally: headline rows get read fully, summary rows only their first few words, and the keywords along the left edge carry all the wayfinding. The one practical corollary: put the word you most want seen at the start of each line.',
  },
}

export default function FPatternDemo() {
  const t = L[useLocale()]
  return (
    <div className="fp" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="fp-guide" aria-hidden="true">
        <span className="fp-stroke fp-stroke-1">{t.s1}</span>
        <span className="fp-stroke fp-stroke-2">{t.s2}</span>
        <span className="fp-stroke fp-stroke-3">{t.s3}</span>
      </div>
      <div className="fp-content">
        <h4>{t.title}</h4>
        <ul className="fp-list">
          {t.rows.map((r) => (
            <li key={r.title}>
              <strong>{r.title}</strong>
              <span>{r.meta}</span>
            </li>
          ))}
        </ul>
        <p className="fp-para">{t.para}</p>
      </div>
    </div>
  )
}
