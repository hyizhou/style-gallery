import { useEffect, useState } from 'react'

export default function ModalDemo() {
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
    <div className="mo" aria-label="弹窗演示">
      <div className="mo-page">
        <span className="region-tag">page 底层页面</span>
        <div className="mo-lines" aria-hidden="true">
          <i className="mo-line-title" />
          <i />
          <i />
          <i className="mo-line-short" />
        </div>
        <button type="button" className="mo-trigger" onClick={() => setOpen(true)}>
          删除这件标本…
        </button>
      </div>
      {open && (
        <div
          className="mo-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div className="mo-dialog" role="dialog" aria-modal="true" aria-label="删除确认">
            <span className="region-tag">modal 独立浮层</span>
            <div className="mo-head">
              <h4>删除这件标本？</h4>
              <button
                type="button"
                className="mo-close"
                aria-label="关闭弹窗"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>
            <p>删除后不可恢复。弹窗用遮罩打断浏览，把决策推到你面前——确认或取消之前，其他操作都被挡住。</p>
            <div className="mo-foot">
              <button type="button" className="mo-btn" onClick={() => setOpen(false)}>
                取消
              </button>
              <button type="button" className="mo-btn mo-btn-danger" onClick={() => setOpen(false)}>
                确认删除
              </button>
            </div>
            <span className="mo-hint">Esc / 点击遮罩 也可关闭</span>
          </div>
        </div>
      )}
    </div>
  )
}
