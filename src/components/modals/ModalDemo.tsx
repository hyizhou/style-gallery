import { useEffect, useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '弹窗演示',
    pageTag: 'page 底层页面',
    trigger: '删除这件标本…',
    modalTag: 'modal 独立浮层',
    title: '删除这件标本？',
    close: '关闭弹窗',
    text: '删除后不可恢复。弹窗用遮罩打断浏览，把决策推到你面前——确认或取消之前，其他操作都被挡住。',
    cancel: '取消',
    confirm: '确认删除',
    hint: 'Esc / 点击遮罩 也可关闭',
  },
  en: {
    aria: 'Modal demo',
    pageTag: 'page beneath',
    trigger: 'Delete this specimen…',
    modalTag: 'modal floating layer',
    title: 'Delete this specimen?',
    close: 'Close dialog',
    text: 'Deletion cannot be undone. The modal interrupts browsing with a scrim and pushes the decision to you — until you confirm or cancel, everything else is blocked.',
    cancel: 'Cancel',
    confirm: 'Delete',
    hint: 'Esc or scrim click also closes',
  },
}

export default function ModalDemo() {
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
    <div className="mo" aria-label={t.aria}>
      <div className="mo-page">
        <span className="region-tag">{t.pageTag}</span>
        <div className="mo-lines" aria-hidden="true">
          <i className="mo-line-title" />
          <i />
          <i />
          <i className="mo-line-short" />
        </div>
        <button type="button" className="mo-trigger" onClick={() => setOpen(true)}>
          {t.trigger}
        </button>
      </div>
      {open && (
        <div
          className="mo-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div className="mo-dialog" role="dialog" aria-modal="true" aria-label={t.title}>
            <span className="region-tag">{t.modalTag}</span>
            <div className="mo-head">
              <h4>{t.title}</h4>
              <button
                type="button"
                className="mo-close"
                aria-label={t.close}
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>
            <p>{t.text}</p>
            <div className="mo-foot">
              <button type="button" className="mo-btn" onClick={() => setOpen(false)}>
                {t.cancel}
              </button>
              <button type="button" className="mo-btn mo-btn-danger" onClick={() => setOpen(false)}>
                {t.confirm}
              </button>
            </div>
            <span className="mo-hint">{t.hint}</span>
          </div>
        </div>
      )}
    </div>
  )
}
