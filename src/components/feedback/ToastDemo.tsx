import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '轻提示演示',
    tag: 'toast 自动消失 · 不打断操作',
    save: '保存修改',
    saved: '已保存',
    lines: '改动会实时写入草稿；点「保存修改」试试右下角的回执。',
    ttl: '2.6s 后自动消失',
  },
  en: {
    aria: 'Toast demo',
    tag: 'toast · auto-dismiss, non-blocking',
    save: 'Save changes',
    saved: 'Saved',
    lines: 'Edits stream into the draft; hit “Save changes” and watch the receipt bottom-right.',
    ttl: 'auto-dismisses in 2.6s',
  },
}

const TOAST_TTL = 2600

export default function ToastDemo() {
  const t = L[useLocale()]
  const [toastId, setToastId] = useState<number | null>(null)
  const nextId = useRef(0)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const push = () => {
    // 同位置替换旧提示，避免堆叠
    clearTimeout(timer.current)
    setToastId(nextId.current++)
    timer.current = setTimeout(() => setToastId(null), TOAST_TTL)
  }

  return (
    <div className="fb" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="fb-lines" aria-hidden="true">
        <i className="fb-line-title" />
        <i />
      </div>
      <p className="fb-note">{t.lines}</p>
      <div>
        <button type="button" className="fb-btn" onClick={push}>
          {t.save}
        </button>
      </div>
      <div className="fb-toast-zone" aria-live="polite">
        {toastId !== null && (
          <div className="fb-toast" key={toastId}>
            <span className="fb-toast-check" aria-hidden="true">
              ✓
            </span>
            <span className="fb-toast-body">
              {t.saved}
              <em>{t.ttl}</em>
            </span>
            <i className="fb-toast-timer" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  )
}
