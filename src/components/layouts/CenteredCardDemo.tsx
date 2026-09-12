import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '居中卡片演示',
    tag: 'card 唯一焦点',
    title: '欢迎回来',
    sub: '登录以继续你的标本采集',
    field1: '账号或邮箱',
    field2: '密码',
    btn: '登 录',
    alt: '忘记密码？',
  },
  en: {
    aria: 'Centered card demo',
    tag: 'card · the only focus',
    title: 'Welcome back',
    sub: 'Sign in to continue your specimen collecting',
    field1: 'Account or email',
    field2: 'Password',
    btn: 'Sign in',
    alt: 'Forgot password?',
  },
}

export default function CenteredCardDemo() {
  const t = L[useLocale()]
  return (
    <div className="cc" aria-label={t.aria}>
      <div className="cc-card">
        <span className="region-tag">{t.tag}</span>
        <h4>{t.title}</h4>
        <p className="cc-sub">{t.sub}</p>
        <div className="cc-field">{t.field1}</div>
        <div className="cc-field">{t.field2}</div>
        <span className="cc-btn">{t.btn}</span>
        <span className="cc-alt">{t.alt}</span>
      </div>
    </div>
  )
}
