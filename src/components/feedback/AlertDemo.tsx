import { useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '警告提示演示',
    tag: 'alert 常驻横条 · 不处理就一直在',
    warn: '存储空间将满，请及时清理旧标本。',
    err: '同步失败：3 处本地修改尚未上传。',
    errDone: '同步已完成，本地修改已上传 ✓',
    retry: '重试',
    restore: '恢复提示',
    close: '关闭提示',
  },
  en: {
    aria: 'Alert demo',
    tag: 'alert · stays until handled',
    warn: 'Storage almost full — clean up old specimens.',
    err: 'Sync failed: 3 local edits not uploaded.',
    errDone: 'Sync complete — local edits uploaded ✓',
    retry: 'Retry',
    restore: 'Restore alerts',
    close: 'Dismiss alert',
  },
}

export default function AlertDemo() {
  const t = L[useLocale()]
  const [warnOn, setWarnOn] = useState(true)
  const [errState, setErrState] = useState<'error' | 'done'>('error')
  const allQuiet = !warnOn && errState === null

  return (
    <div className="fb" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      {warnOn && (
        <div className="fb-banner fb-banner-warn" role="status">
          <span className="fb-banner-icon" aria-hidden="true">
            !
          </span>
          <p>{t.warn}</p>
          <button type="button" className="fb-banner-x" aria-label={t.close} onClick={() => setWarnOn(false)}>
            ×
          </button>
        </div>
      )}
      {errState === 'error' && (
        <div className="fb-banner fb-banner-err" role="alert">
          <span className="fb-banner-icon" aria-hidden="true">
            ×
          </span>
          <p>{t.err}</p>
          <button type="button" className="fb-banner-retry" onClick={() => setErrState('done')}>
            {t.retry}
          </button>
        </div>
      )}
      {errState === 'done' && (
        <div className="fb-banner fb-banner-ok" role="status">
          <span className="fb-banner-icon" aria-hidden="true">
            ✓
          </span>
          <p>{t.errDone}</p>
        </div>
      )}
      <div className="fb-lines" aria-hidden="true">
        <i className="fb-line-title" />
        <i />
        <i />
        <i className="fb-line-short" />
      </div>
      {allQuiet ? (
        <button type="button" className="fb-ghost-btn" onClick={() => { setWarnOn(true); setErrState('error') }}>
          {t.restore}
        </button>
      ) : (
        <span className="fb-note">{t.close} ×</span>
      )}
    </div>
  )
}
