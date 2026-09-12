import { useEffect, useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '通知中心演示',
    tag: 'notification 收件箱 · 不打断，攒着看',
    bell: '通知铃铛',
    markAll: '全部已读',
    simulate: '模拟新通知',
    panelTitle: '通知',
    unread: (n: number) => `${n} 条未读`,
    empty: '没有未读通知',
    seed: [
      { title: '@你 在「釉里青」评审中被提及', time: '5 分钟前' },
      { title: '你的标本通过双周精选初审', time: '2 小时前' },
      { title: '系统维护将于周日 02:00 开始', time: '昨天' },
    ],
    incoming: { title: '新人评论了你的标本「瑞士网格」', time: '刚刚' },
    hint: '新消息只点亮红点，不弹窗打断',
  },
  en: {
    aria: 'Notification center demo',
    tag: 'notification · inbox, read whenever',
    bell: 'Notification bell',
    markAll: 'Mark all read',
    simulate: 'Simulate new message',
    panelTitle: 'Notifications',
    unread: (n: number) => `${n} unread`,
    empty: 'Nothing unread',
    seed: [
      { title: '@you was mentioned in “Celadon Glaze” review', time: '5 min ago' },
      { title: 'Your specimen passed the biweekly pre-selection', time: '2 h ago' },
      { title: 'Maintenance starts Sunday 02:00', time: 'yesterday' },
    ],
    incoming: { title: 'New comment on your specimen “Swiss Grid”', time: 'just now' },
    hint: 'New mail only lights the badge — no interruption',
  },
}

interface Notice {
  id: number
  title: string
  time: string
  unread: boolean
}

let seq = 0
const notice = (seed: { title: string; time: string }, unread: boolean): Notice => ({
  id: seq++,
  ...seed,
  unread,
})

export default function NotificationDemo() {
  const t = L[useLocale()]
  const [items, setItems] = useState<Notice[]>(() => t.seed.map((s) => notice(s, true)))
  const [open, setOpen] = useState(false)
  const unread = items.filter((x) => x.unread).length

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="fb fb-notif" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="fb-topbar">
        <div className="fb-lines fb-topbar-lines" aria-hidden="true">
          <i className="fb-line-title" />
        </div>
        <div className="fb-bell-wrap">
          <button
            type="button"
            className={`fb-bell${unread > 0 ? ' has-unread' : ''}`}
            aria-label={t.bell}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
              <path
                d="M12 3c-3.2 0-5.4 2.4-5.4 5.6v3.1L5 15.2v1h14v-1l-1.6-3.5V8.6C17.4 5.4 15.2 3 12 3Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path d="M9.8 18.6a2.3 2.3 0 0 0 4.4 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            {unread > 0 && <span className="fb-bell-badge">{unread}</span>}
          </button>

          {open && (
            <div className="fb-notif-panel" onClick={(e) => e.stopPropagation()}>
              <div className="fb-notif-head">
                <strong>{t.panelTitle}</strong>
                {unread > 0 && (
                  <button type="button" className="fb-link-btn" onClick={() => setItems((xs) => xs.map((x) => ({ ...x, unread: false })))}>
                    {t.markAll}
                  </button>
                )}
              </div>
              {unread === 0 ? (
                <p className="fb-notif-empty">{t.empty}</p>
              ) : (
                <ul className="fb-notif-list">
                  {items.map((x) => (
                    <li key={x.id} className={x.unread ? 'is-unread' : ''}>
                      <p>{x.title}</p>
                      <span>{x.time}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="fb-actions-row">
        <button
          type="button"
          className="fb-btn"
          onClick={() => setItems((xs) => [notice(t.incoming, true), ...xs].slice(0, 5))}
        >
          {t.simulate}
        </button>
        <span className="fb-note">{t.hint}</span>
      </div>
    </div>
  )
}
