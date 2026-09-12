import { useEffect, useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '底部抽屉演示',
    tag: 'bottom sheet 底部升起 · 拇指热区',
    trigger: '分享标本',
    close: '关闭面板',
    title: '分享到',
    opts: [
      { icon: '🔗', label: '复制链接' },
      { icon: '🖼', label: '生成海报' },
      { icon: '⋯', label: '更多' },
    ],
    hint: '顶部圆角 + 抓手，下滑或点遮罩关闭',
  },
  en: {
    aria: 'Bottom sheet demo',
    tag: 'bottom sheet · rises into the thumb zone',
    trigger: 'Share specimen',
    close: 'Close sheet',
    title: 'Share via',
    opts: [
      { icon: '🔗', label: 'Copy link' },
      { icon: '🖼', label: 'Make poster' },
      { icon: '⋯', label: 'More' },
    ],
    hint: 'Rounded top + grab handle; swipe down or tap the scrim to close',
  },
}

export default function BottomSheetDemo() {
  const t = L[useLocale()]
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="fb" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="fb-lines" aria-hidden="true">
        <i className="fb-line-title" />
        <i />
        <i className="fb-line-short" />
      </div>
      <div>
        <button type="button" className="fb-btn" onClick={() => setOpen(true)}>
          {t.trigger}
        </button>
      </div>

      {open && (
        <>
          <div className="fb-sheet-scrim" onClick={() => setOpen(false)} />
          <div className="fb-sheet" role="dialog" aria-label={t.title}>
            <i className="fb-sheet-handle" aria-hidden="true" />
            <h4>{t.title}</h4>
            <div className="fb-sheet-opts">
              {t.opts.map((o) => (
                <button type="button" key={o.label} className="fb-sheet-opt" onClick={() => setOpen(false)}>
                  <span aria-hidden="true">{o.icon}</span>
                  {o.label}
                </button>
              ))}
            </div>
            <span className="fb-hint">{t.hint}</span>
            <button type="button" className="fb-x fb-sheet-x" aria-label={t.close} onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
        </>
      )}
    </div>
  )
}
