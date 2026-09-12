import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '旋转加载演示',
    tag: 'spinner 转圈 · 承诺没死，不承诺时间',
    loadingLine: '正在加载标本列表…',
    save: '保存修改',
    saving: '正在保存…',
    saved: '已保存 ✓',
    hint: '必须配一句「正在做什么」；超过 3 秒换进度条',
  },
  en: {
    aria: 'Spinner demo',
    tag: 'spinner · promises “not dead”, not a deadline',
    loadingLine: 'Loading specimen list…',
    save: 'Save changes',
    saving: 'Saving…',
    saved: 'Saved ✓',
    hint: 'Always say what is happening; past ~3 s switch to a progress bar',
  },
}

type SaveState = 'idle' | 'saving' | 'done'

export default function SpinnerDemo() {
  const t = L[useLocale()]
  const [state, setState] = useState<SaveState>('idle')
  const timer1 = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const timer2 = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(
    () => () => {
      clearTimeout(timer1.current)
      clearTimeout(timer2.current)
    },
    [],
  )

  const save = () => {
    setState('saving')
    timer1.current = setTimeout(() => {
      setState('done')
      timer2.current = setTimeout(() => setState('idle'), 1300)
    }, 1700)
  }

  return (
    <div className="fb" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>

      <div className="fb-spin-static">
        <i className="fb-spin" aria-hidden="true" />
        <span>{t.loadingLine}</span>
      </div>

      <div className="fb-actions-row">
        <button type="button" className="fb-btn" disabled={state === 'saving'} onClick={save}>
          {state === 'saving' && <i className="fb-spin fb-spin-sm" aria-hidden="true" />}
          {state === 'saving' ? t.saving : state === 'done' ? t.saved : t.save}
        </button>
        <span className="fb-note">{t.hint}</span>
      </div>
    </div>
  )
}
