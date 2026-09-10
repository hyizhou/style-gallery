const columns = [
  {
    name: '设计',
    items: ['圣杯布局的历史', '栅格系统入门', '拟物到扁平十年记'],
  },
  {
    name: '工程',
    items: ['容器查询实战', 'Grid 布局速查', '组件库选型笔记'],
  },
  {
    name: '随想',
    items: ['留白是一种礼貌', '被滥用的渐变', '字体即语气'],
  },
]

export default function ThreeColumnDemo() {
  return (
    <div className="tc" aria-label="三栏对称演示">
      <span className="region-tag">three-column 等宽三栏</span>
      <div className="tc-cols">
        {columns.map((col) => (
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
