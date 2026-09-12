import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '结果页演示',
    tag: 'result 流程终点 · 成功与下一步',
    title: '支付成功',
    sub: '「风格标本馆」年度会员已开通',
    order: '订单 SG-20260912-0042 · ¥ 128.00',
    primary: '查看订单',
    secondary: '返回首页',
    hint: '重大结果值得一整页：图标 + 说明 + 凭据 + 出口',
  },
  en: {
    aria: 'Result page demo',
    tag: 'result · flow end, outcome and next step',
    title: 'Payment successful',
    sub: 'Your Style Gallery annual membership is active',
    order: 'Order SG-20260912-0042 · ¥ 128.00',
    primary: 'View order',
    secondary: 'Back home',
    hint: 'Major outcomes deserve a full page: icon + copy + credentials + exits',
  },
}

export default function ResultDemo() {
  const t = L[useLocale()]
  return (
    <div className="fb" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>

      <div className="fb-result" role="status">
        <i className="fb-result-icon" aria-hidden="true">
          ✓
        </i>
        <h4>{t.title}</h4>
        <p>{t.sub}</p>
        <span className="fb-result-order">{t.order}</span>
        <div className="fb-result-actions">
          <button type="button" className="fb-btn">
            {t.primary}
          </button>
          <button type="button" className="fb-ghost-btn">
            {t.secondary}
          </button>
        </div>
      </div>

      <span className="fb-note">{t.hint}</span>
    </div>
  )
}
