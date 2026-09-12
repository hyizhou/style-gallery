import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '分屏布局演示',
    visual: 'visual 视觉侧',
    info: 'info 信息侧',
    title: '一半视觉，一半主张',
    text: '分屏的两半天然形成对照：左半负责「记住我」，右半负责「选我」。两侧重量要均衡，主行动按钮只保留一个。',
    cta: '立即开始',
    more: '了解更多',
  },
  en: {
    aria: 'Split screen demo',
    visual: 'visual side',
    info: 'info side',
    title: 'Half visual, half proposition',
    text: 'The two halves form a natural contrast: one side says “remember me”, the other says “pick me”. Keep the sides balanced and keep a single primary CTA.',
    cta: 'Get started',
    more: 'Learn more',
  },
}

export default function SplitScreenDemo() {
  const t = L[useLocale()]
  return (
    <div className="sp" aria-label={t.aria}>
      <div className="sp-visual">
        <span className="region-tag">{t.visual}</span>
        <span className="sp-visual-glyph">✦</span>
      </div>
      <div className="sp-info">
        <span className="region-tag">{t.info}</span>
        <h4>{t.title}</h4>
        <p>{t.text}</p>
        <div className="sp-actions">
          <span className="sp-btn sp-btn-primary">{t.cta}</span>
          <span className="sp-btn">{t.more}</span>
        </div>
      </div>
    </div>
  )
}
