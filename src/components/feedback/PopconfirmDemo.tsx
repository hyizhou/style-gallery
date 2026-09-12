import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '气泡确认框演示',
    tag: 'popconfirm 贴按钮的轻量二次确认',
    rowTitle: '标本 #207 · 手绘草稿',
    rowMeta: '上次编辑 3 分钟前',
    del: '删除',
    question: '确认删除这份草稿？',
    cancel: '取消',
    confirm: '删除',
    deleted: '已删除',
    undo: '撤销',
    hint: '点外部区域即取消',
  },
  en: {
    aria: 'Popconfirm demo',
    tag: 'popconfirm · lightweight confirm beside the button',
    rowTitle: 'Specimen #207 · Sketch draft',
    rowMeta: 'Edited 3 min ago',
    del: 'Delete',
    question: 'Delete this draft?',
    cancel: 'Cancel',
    confirm: 'Delete',
    deleted: 'Deleted',
    undo: 'Undo',
    hint: 'Clicking outside cancels',
  },
}

export default function PopconfirmDemo() {
  const t = L[useLocale()]
  const [open, setOpen] = useState(false)
  const [deleted, setDeleted] = useState(false)
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
    <div className="fb fb-popdemo" ref={rootRef} aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>

      <div className={`fb-row${deleted ? ' is-deleted' : ''}`}>
        <div>
          <p className="fb-row-title">{t.rowTitle}</p>
          <span className="fb-row-meta">{t.rowMeta}</span>
        </div>

        <span className="fb-pop-anchor">
          {deleted ? (
            <span className="fb-undo">
              {t.deleted} ·{' '}
              <button type="button" className="fb-link-btn" onClick={() => setDeleted(false)}>
                {t.undo}
              </button>
            </span>
          ) : (
            <button type="button" className="fb-btn fb-btn-danger" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              {t.del}
            </button>
          )}

          {open && (
            <span className="fb-popconfirm" role="alertdialog" aria-label={t.question}>
              <i className="fb-pop-arrow" aria-hidden="true" />
              <p>{t.question}</p>
              <span className="fb-popconfirm-btns">
                <button type="button" className="fb-ghost-btn fb-mini" onClick={() => setOpen(false)}>
                  {t.cancel}
                </button>
                <button
                  type="button"
                  className="fb-btn fb-btn-danger fb-mini"
                  onClick={() => {
                    setOpen(false)
                    setDeleted(true)
                  }}
                >
                  {t.confirm}
                </button>
              </span>
            </span>
          )}
        </span>
      </div>

      <span className="fb-note">{t.hint}</span>
    </div>
  )
}
