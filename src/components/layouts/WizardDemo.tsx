import { useState } from 'react'

const steps = [
  { key: 'account', label: '账号' },
  { key: 'profile', label: '资料' },
  { key: 'confirm', label: '确认' },
]

export default function WizardDemo() {
  const [current, setCurrent] = useState(1)

  return (
    <div className="wz" aria-label="分步向导演示">
      <span className="region-tag">wizard 当前第 {current + 1} / {steps.length} 步</span>
      <div className="wz-steps">
        {steps.map((s, i) => (
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
        <p className="wz-step-title">
          {current === 0 && '设置账号与密码。'}
          {current === 1 && '填写你的展示资料。'}
          {current === 2 && '确认以上信息无误后提交。'}
        </p>
        {current === 0 && (
          <div className="wz-fields">
            <div className="wz-field">账号或邮箱</div>
            <div className="wz-field">密码</div>
          </div>
        )}
        {current === 1 && (
          <div className="wz-fields">
            <div className="wz-field">昵称</div>
            <div className="wz-field">一句话介绍</div>
          </div>
        )}
        {current === 2 && (
          <div className="wz-fields">
            <div className="wz-field wz-field-static">账号：specimen@example.com</div>
            <div className="wz-field wz-field-static">昵称：样本君</div>
          </div>
        )}
      </div>
      <div className="wz-foot">
        <button
          type="button"
          className="wz-btn"
          disabled={current === 0}
          onClick={() => setCurrent((s) => Math.max(0, s - 1))}
        >
          上一步
        </button>
        <button
          type="button"
          className="wz-btn wz-btn-primary"
          disabled={current === steps.length - 1}
          onClick={() => setCurrent((s) => Math.min(steps.length - 1, s + 1))}
        >
          下一步
        </button>
      </div>
    </div>
  )
}
