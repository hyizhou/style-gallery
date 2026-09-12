import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '进度条演示',
    tag: 'progress 确定性进度 · 等待有预期',
    start: '开始上传 3 个文件',
    again: '再来一次',
    uploading: '上传中',
    done: '上传完成 ✓',
    cancel: '取消',
    hint: '进度真实可算时才标百分比；不可预估时改用条纹动画',
  },
  en: {
    aria: 'Progress demo',
    tag: 'progress · determinate, expectation for the wait',
    start: 'Upload 3 files',
    again: 'Run again',
    uploading: 'Uploading',
    done: 'Upload complete ✓',
    cancel: 'Cancel',
    hint: 'Label a percentage only when it is real; use a striped loop when unknowable',
  },
}

export default function ProgressDemo() {
  const t = L[useLocale()]
  const [pct, setPct] = useState<number | null>(null) // null = idle
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  useEffect(() => () => clearInterval(timer.current), [])

  const stop = () => {
    clearInterval(timer.current)
    timer.current = undefined
  }

  const start = () => {
    stop()
    setPct(0)
    timer.current = setInterval(() => {
      setPct((v) => {
        if (v === null) return v
        const next = Math.min(100, v + 3 + Math.random() * 8)
        if (next >= 100) stop()
        return next
      })
    }, 140)
  }

  const done = pct !== null && pct >= 100

  return (
    <div className="fb" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>

      <div className="fb-progress-zone">
        {pct === null ? (
          <button type="button" className="fb-btn" onClick={start}>
            {t.start}
          </button>
        ) : (
          <div className="fb-progress" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
            <div className="fb-progress-label">
              <span>{done ? t.done : t.uploading}</span>
              <span className="fb-progress-pct">{done ? '100%' : `${Math.round(pct)}%`}</span>
            </div>
            <div className="fb-progress-track">
              <i className="fb-progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>
        )}
        {done && (
          <button type="button" className="fb-ghost-btn" onClick={start}>
            {t.again}
          </button>
        )}
      </div>

      <div className="fb-lines" aria-hidden="true">
        <i />
        <i className="fb-line-short" />
      </div>
      <span className="fb-note">{t.hint}</span>
    </div>
  )
}
