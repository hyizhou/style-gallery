import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '便当盒网格演示',
    tag: 'bento 跨度层级 · 主 2×2 + 副 1×1',
    mainTitle: '核心指标',
    mainNote: '最重要的内容占最大的格子——面积本身就是优先级。',
    wideTitle: '趋势图占位',
    wideNote: '横向 2×1 的格子承载时间序列',
    tiles: [
      { title: '转化率', value: '3.6%' },
      { title: '新用户', value: '1,208' },
      { title: '跳失率', value: '12%' },
      { title: '平均时长', value: '4m12s' },
      { title: '留存率', value: '44%' },
    ],
  },
  en: {
    aria: 'Bento grid demo',
    tag: 'bento span hierarchy · main 2×2 + sub 1×1',
    mainTitle: 'Key metric',
    mainNote: 'The most important content takes the biggest tile — area itself is priority.',
    wideTitle: 'Trend chart slot',
    wideNote: 'A 2×1 tile carries the time series',
    tiles: [
      { title: 'Conversion', value: '3.6%' },
      { title: 'New users', value: '1,208' },
      { title: 'Bounce', value: '12%' },
      { title: 'Avg. time', value: '4m12s' },
      { title: 'Retention', value: '44%' },
    ],
  },
}

export default function BentoGridDemo() {
  const t = L[useLocale()]
  return (
    <div className="bt" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="bt-grid">
        <div className="bt-tile bt-main">
          <strong>{t.mainTitle}</strong>
          <p className="bt-big">12,480</p>
          <p>{t.mainNote}</p>
        </div>
        {t.tiles.map((tile) => (
          <div className="bt-tile" key={tile.title}>
            <strong>{tile.title}</strong>
            <p className="bt-mid">{tile.value}</p>
          </div>
        ))}
        <div className="bt-tile bt-wide">
          <strong>{t.wideTitle}</strong>
          <p className="bt-mid">{t.wideNote}</p>
        </div>
      </div>
    </div>
  )
}
