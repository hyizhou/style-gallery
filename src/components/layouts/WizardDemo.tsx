import { useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    steps: [
      { key: 'account', label: '账号' },
      { key: 'profile', label: '资料' },
      { key: 'confirm', label: '确认' },
    ],
    aria: '分步向导演示',
    tag: (cur: number, total: number) => `wizard 当前第 ${cur} / ${total} 步`,
    titles: ['设置账号与密码。', '填写你的展示资料。', '确认以上信息无误后提交。'],
    fields: [
      ['账号或邮箱', '密码'],
      ['昵称', '一句话介绍'],
      ['账号：specimen@example.com', '昵称：样本君'],
    ],
    prev: '上一步',
    next: '下一步',
  },
  en: {
    steps: [
      { key: 'account', label: 'Account' },
      { key: 'profile', label: 'Profile' },
      { key: 'confirm', label: 'Confirm' },
    ],
    aria: 'Wizard demo',
    tag: (cur: number, total: number) => `wizard · step ${cur} / ${total}`,
    titles: ['Set your account and password.', 'Fill in your public profile.', 'Review everything, then submit.'],
    fields: [
      ['Account or email', 'Password'],
      ['Nickname', 'One-line bio'],
      ['Account: specimen@example.com', 'Nickname: Specimen'],
    ],
    prev: 'Back',
    next: 'Next',
  },
}

export default function WizardDemo() {
  const t = L[useLocale()]
  const [current, setCurrent] = useState(1)

  return (
    <div className="wz" aria-label={t.aria}>
      <span className="region-tag">{t.tag(current + 1, t.steps.length)}</span>
      <div className="wz-steps">
        {t.steps.map((s, i) => (
          <div
            key={s.key}
            className={`wz-step ${i < current ? 'done' : ''} ${i === current ? 'active' : ''}`}
          >
            <span className="wz-dot">{i < current ? '✓' : i + 1}</span>
            <span className="wz-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="wz-body">
        <p className="wz-step-title">{t.titles[current]}</p>
        <div className="wz-fields">
          {t.fields[current].map((f) => (
            <div className={`wz-field ${current === 2 ? 'wz-field-static' : ''}`} key={f}>
              {f}
            </div>
          ))}
        </div>
      </div>
      <div className="wz-foot">
        <button
          type="button"
          className="wz-btn"
          disabled={current === 0}
          onClick={() => setCurrent((s) => Math.max(0, s - 1))}
        >
          {t.prev}
        </button>
        <button
          type="button"
          className="wz-btn wz-btn-primary"
          disabled={current === t.steps.length - 1}
          onClick={() => setCurrent((s) => Math.min(t.steps.length - 1, s + 1))}
        >
          {t.next}
        </button>
      </div>
    </div>
  )
}
