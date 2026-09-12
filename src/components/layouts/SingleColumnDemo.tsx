import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '单栏内容优先演示',
    tag: 'article 阅读纵轴 · 68ch',
    title: '慢读：把行宽还给眼睛',
    meta: '2026-09-10 · 阅读约 3 分钟',
    p1: '屏幕越做越宽，阅读却越来越累。原因不在字太小，而在一行太长——视线从行尾折回行首时，总会丢失下一个字的位置。把行宽约束在 60 到 75 个字符之间，是排版学给屏幕时代最便宜也最有效的一份礼物。',
    quote: '好的排版不是让人注意到排版，而是让人完全忘记它的存在。',
    h5: '一段一行，还是一段三行？',
    p2: '单栏布局把这个问题留给了内容本身：段落的长短、小标题的位置、留白的呼吸，就是全部的「布局技巧」。当页面不再与内容争夺注意力，读者自然留下来。',
    p3: '试着把浏览器窗口拖宽——这条阅读纵轴依然守住自己的宽度。这就是单栏内容优先的全部秘密：不是没有布局，而是布局只服务于一件事。',
  },
  en: {
    aria: 'Single column demo',
    tag: 'article reading spine · 68ch',
    title: 'Slow reading: give the measure back to your eyes',
    meta: '2026-09-10 · 3 min read',
    p1: 'Screens keep getting wider while reading keeps getting more tiring. The culprit is not small type but long lines — when the eye returns from the end of a line, it loses the next word. Constraining the measure to 60–75 characters is typography’s cheapest and most effective gift to the screen era.',
    quote: 'Good typesetting is not noticed; it is forgotten.',
    h5: 'One sentence per paragraph, or three?',
    p2: 'A single column hands that question back to the content itself: paragraph length, heading placement and the breathing of whitespace are the entire “layout toolkit”. When the page stops competing for attention, readers stay.',
    p3: 'Drag the browser window wider — this reading spine holds its width. That is the whole secret of the single column: not the absence of layout, but layout in service of one thing.',
  },
}

export default function SingleColumnDemo() {
  const t = L[useLocale()]
  return (
    <div className="sc" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <h4>{t.title}</h4>
      <p className="sc-meta">{t.meta}</p>
      <p>{t.p1}</p>
      <blockquote>{t.quote}</blockquote>
      <h5>{t.h5}</h5>
      <p>{t.p2}</p>
      <p>{t.p3}</p>
    </div>
  )
}
