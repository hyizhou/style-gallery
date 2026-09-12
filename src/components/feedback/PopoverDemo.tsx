import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '气泡卡片演示',
    tag: 'popover 点击触发的浮出详情卡',
    chipName: '林小满',
    chipRole: '视觉设计',
    cardName: '林小满',
    cardRole: '视觉设计 · 标本馆维护者',
    statA: '标本 128',
    statB: '评审 42',
    follow: '关注',
    followed: '已关注 ✓',
    hint: '点击外部区域或 Esc 关闭',
    quoteRest: '负责了本期 12 个标本的视觉评审，风格雷达图就是她画的。',
  },
  en: {
    aria: 'Popover demo',
    tag: 'popover · click-triggered detail card',
    chipName: 'Lin Xiaoman',
    chipRole: 'Visual design',
    cardName: 'Lin Xiaoman',
    cardRole: 'Visual design · gallery maintainer',
    statA: '128 specimens',
    statB: '42 reviews',
    follow: 'Follow',
    followed: 'Following ✓',
    hint: 'Outside click or Esc closes',
    quoteRest: 'led the visual review of this batch of 12 specimens — she drew the style radar chart.',
  },
}

export default function PopoverDemo() {
  const t = L[useLocale()]
  const [open, setOpen] = useState(false)
  const [following, setFollowing] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="fb fb-popoverdemo" ref={rootRef} aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>

      <p className="fb-quote">
        <span className="fb-pop-anchor">
          <button
            type="button"
            className="fb-chip"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i className="fb-avatar" aria-hidden="true">
              林
            </i>
            <span>
              <strong>{t.chipName}</strong>
              <em>{t.chipRole}</em>
            </span>
          </button>

          {open && (
            <span className="fb-popover" role="dialog" aria-label={t.cardName}>
              <i className="fb-pop-arrow" aria-hidden="true" />
              <div className="fb-popover-head">
                <i className="fb-avatar fb-avatar-lg" aria-hidden="true">
                  林
                </i>
                <div>
                  <p className="fb-row-title">{t.cardName}</p>
                  <span className="fb-row-meta">{t.cardRole}</span>
                </div>
              </div>
              <div className="fb-popover-stats">
                <span>{t.statA}</span>
                <span>{t.statB}</span>
              </div>
              <button
                type="button"
                className={following ? 'fb-ghost-btn' : 'fb-btn'}
                onClick={() => setFollowing((v) => !v)}
              >
                {following ? t.followed : t.follow}
              </button>
            </span>
          )}
        </span>
        {' '}
        <span className="fb-quote-rest">{t.quoteRest}</span>
      </p>

      <span className="fb-note">{t.hint}</span>
    </div>
  )
}
