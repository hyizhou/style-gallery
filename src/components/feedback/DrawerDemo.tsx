import { useEffect, useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '抽屉演示',
    tag: 'drawer 右缘滑出 · 背后内容仍可见',
    trigger: '查看任务详情',
    close: '关闭抽屉',
    title: '标本 #1042 · 评审任务',
    body: '抽屉滑出后，背后的页面不移除、也不压暗——你可以随时关掉回到刚才的位置，这是它比弹窗轻的地方。',
    meta: '优先级 中 · 截止 周四',
    cancel: '关闭',
    ok: '通过评审',
  },
  en: {
    aria: 'Drawer demo',
    tag: 'drawer · slides from the right, page stays visible',
    trigger: 'Open task details',
    close: 'Close drawer',
    title: 'Specimen #1042 · Review task',
    body: 'When the drawer opens, the page beneath is neither removed nor dimmed — close it any time and you are exactly where you were. That is what makes it lighter than a modal.',
    meta: 'Priority medium · due Thursday',
    cancel: 'Close',
    ok: 'Approve',
  },
}

export default function DrawerDemo() {
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
          <div className="fb-drawer-scrim" onClick={() => setOpen(false)} />
          <aside className="fb-drawer" role="dialog" aria-label={t.title}>
            <span className="region-tag">drawer</span>
            <div className="fb-drawer-head">
              <h4>{t.title}</h4>
              <button type="button" className="fb-x" aria-label={t.close} onClick={() => setOpen(false)}>
                ×
              </button>
            </div>
            <p className="fb-drawer-meta">{t.meta}</p>
            <p>{t.body}</p>
            <div className="fb-drawer-foot">
              <button type="button" className="fb-ghost-btn" onClick={() => setOpen(false)}>
                {t.cancel}
              </button>
              <button type="button" className="fb-btn" onClick={() => setOpen(false)}>
                {t.ok}
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
