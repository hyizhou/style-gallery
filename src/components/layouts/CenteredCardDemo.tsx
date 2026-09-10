export default function CenteredCardDemo() {
  return (
    <div className="cc" aria-label="居中卡片演示">
      <div className="cc-card">
        <span className="region-tag">card 唯一焦点</span>
        <h4>欢迎回来</h4>
        <p className="cc-sub">登录以继续你的标本采集</p>
        <div className="cc-field">账号或邮箱</div>
        <div className="cc-field">密码</div>
        <span className="cc-btn">登 录</span>
        <span className="cc-alt">忘记密码？</span>
      </div>
    </div>
  )
}
