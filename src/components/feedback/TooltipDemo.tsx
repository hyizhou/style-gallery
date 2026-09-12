import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '文字提示演示',
    tag: 'tooltip 悬停出现 · 移开即消失',
    tips: [
      { glyph: '✎', text: '编辑标本信息' },
      { glyph: '⤓', text: '导出为 PNG' },
      { glyph: '⋯', text: '更多操作' },
    ],
    line1: '标本排在 12 列',
    term: '栅格',
    termTip: '12 列栅格，间距 8pt',
    line2: '上，随容器宽度自动降列。',
    hint: '悬停（或键盘 Tab 聚焦）图标查看说明；触屏设备没有悬停',
  },
  en: {
    aria: 'Tooltip demo',
    tag: 'tooltip · appears on hover, gone on leave',
    tips: [
      { glyph: '✎', text: 'Edit specimen' },
      { glyph: '⤓', text: 'Export as PNG' },
      { glyph: '⋯', text: 'More actions' },
    ],
    line1: 'Specimens sit on a',
    term: '12-column grid',
    termTip: '12 columns, 8pt gutters',
    line2: ' that drops columns as the container narrows.',
    hint: 'Hover (or Tab-focus) the icons; touch devices have no hover',
  },
}

export default function TooltipDemo() {
  const t = L[useLocale()]
  return (
    <div className="fb" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>

      <div className="fb-tipbar" role="toolbar" aria-label={t.aria}>
        {t.tips.map((x) => (
          <span className="fb-tip" key={x.glyph} tabIndex={0}>
            <button type="button" className="fb-icon-btn" aria-label={x.text}>
              {x.glyph}
            </button>
            <span className="fb-tip-bubble" role="tooltip">
              {x.text}
            </span>
          </span>
        ))}
      </div>

      <p className="fb-quote">
        {t.line1}{' '}
        <span className="fb-tip fb-tip-inline" tabIndex={0}>
          <span className="fb-term">{t.term}</span>
          <span className="fb-tip-bubble" role="tooltip">
            {t.termTip}
          </span>
        </span>
        {t.line2}
      </p>

      <span className="fb-note">{t.hint}</span>
    </div>
  )
}
