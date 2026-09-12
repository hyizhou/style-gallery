import { useLocale } from '../../i18n'

const L = {
  zh: {
    aria: '三栏对称演示',
    tag: 'three-column 等宽三栏',
    columns: [
      { name: '设计', items: ['圣杯布局的历史', '栅格系统入门', '拟物到扁平十年记'] },
      { name: '工程', items: ['容器查询实战', 'Grid 布局速查', '组件库选型笔记'] },
      { name: '随想', items: ['留白是一种礼貌', '被滥用的渐变', '字体即语气'] },
    ],
  },
  en: {
    aria: 'Three-column demo',
    tag: 'three equal columns',
    columns: [
      { name: 'Design', items: ['A history of the Holy Grail', 'Grid systems 101', 'Skeuomorphism to flat, a decade'] },
      { name: 'Engineering', items: ['Container queries in practice', 'A Grid cheat sheet', 'Notes on choosing a component library'] },
      { name: 'Musings', items: ['Whitespace is a courtesy', 'The abused gradient', 'Typeface as tone of voice'] },
    ],
  },
}

export default function ThreeColumnDemo() {
  const t = L[useLocale()]
  return (
    <div className="tc" aria-label={t.aria}>
      <span className="region-tag">{t.tag}</span>
      <div className="tc-cols">
        {t.columns.map((col) => (
          <div className="tc-col" key={col.name}>
            <div className="tc-col-head">{col.name}</div>
            <ul>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
