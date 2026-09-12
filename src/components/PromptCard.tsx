import { useState } from 'react'
import { useT } from '../i18n'

export interface PromptVariant {
  key: string
  label: string
  text: string
}

// 中性代码块形态的提示词卡片：不随风格皮肤变化，仅跟随全站明暗主题
export default function PromptCard({
  variants,
  defaultKey,
}: {
  variants: PromptVariant[]
  defaultKey?: string
}) {
  const t = useT()
  const [active, setActive] = useState(defaultKey ?? variants[0]?.key ?? '')
  const [copied, setCopied] = useState(false)
  const current = variants.find((v) => v.key === active) ?? variants[0]

  async function copy() {
    const text = current?.text ?? ''
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  if (!current) return null

  return (
    <div className="prompt-card">
      <div className="prompt-head">
        <div className="prompt-tabs" role="tablist" aria-label={t.promptVariants}>
          {variants.map((v) => (
            <button
              type="button"
              key={v.key}
              role="tab"
              aria-selected={v.key === current.key}
              className={`prompt-tab${v.key === current.key ? ' active' : ''}`}
              onClick={() => setActive(v.key)}
            >
              {v.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className={`prompt-copy${copied ? ' done' : ''}`}
          onClick={copy}
          aria-label={t.copyPrompt}
        >
          {copied ? t.copied : t.copy}
        </button>
      </div>
      <p className="prompt-text">{current.text}</p>
      <span className="sr-only" aria-live="polite">
        {copied ? t.copiedLive : ''}
      </span>
    </div>
  )
}
