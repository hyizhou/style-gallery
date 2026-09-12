import { useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '空状态演示',
    tag: 'empty 无数据占位 · 把空白变成入口',
    title: '还没有收藏任何标本',
    sub: '看到喜欢的风格，点卡片右上角的 ☆ 收藏起来',
    cta: '去逛逛',
    clear: '清空收藏',
    items: ['玻璃拟态', '瑞士排版', '黏土拟物'],
    hint: '空状态必须给下一步；区分「清空态」与「搜索无结果」',
  },
  en: {
    aria: 'Empty state demo',
    tag: 'empty · turns blankness into an entrance',
    title: 'Nothing collected yet',
    sub: 'Tap the ☆ on any card you like to start a collection',
    cta: 'Browse specimens',
    clear: 'Clear collection',
    items: ['Glassmorphism', 'Swiss Type', 'Claymorphism'],
    hint: 'Always offer a next step; keep “emptied” and “no results” distinct',
  },
}

export default function EmptyDemo() {
  const t = L[useLocale()]
  const [collected, setCollected] = useState(false)

  return (
    <div className="fb" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>

      {collected ? (
        <>
          <div className="fb-empty-items">
            {t.items.map((x) => (
              <span className="fb-empty-card" key={x}>
                <i aria-hidden="true" />
                {x}
              </span>
            ))}
          </div>
          <button type="button" className="fb-link-btn" onClick={() => setCollected(false)}>
            {t.clear}
          </button>
        </>
      ) : (
        <div className="fb-empty" role="status">
          <i className="fb-empty-art" aria-hidden="true" />
          <h4>{t.title}</h4>
          <p>{t.sub}</p>
          <button type="button" className="fb-btn" onClick={() => setCollected(true)}>
            {t.cta}
          </button>
        </div>
      )}

      <span className="fb-note">{t.hint}</span>
    </div>
  )
}
