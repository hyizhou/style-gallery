import { useState } from 'react'

const items = [
  { id: 1, from: '设计组', subject: '圣杯布局评审意见', time: '10:24', excerpt: '区域徽章的命名建议再统一一轮，详见批注。' },
  { id: 2, from: '后端组', subject: 'API 字段变更通知', time: '09:57', excerpt: '列表接口新增 cursor 分页字段，本周内上线。' },
  { id: 3, from: '运营组', subject: '三月活动排期', time: '昨天', excerpt: '落地页沿用单栏内容优先布局，视觉稿已同步。' },
  { id: 4, from: '人事部', subject: '办公位调整通知', time: '昨天', excerpt: '下周三起三层东侧工位调整，详见附件平面图。' },
  { id: 5, from: '前端组', subject: '布局标本收录计划', time: '周一', excerpt: '主从布局标本已入库，下一个是分屏布局。' },
]

const bodies: Record<number, string> = {
  1: '区域徽章统一为「英文区域名 + 中文说明」格式，圣杯布局的五个区域已按此调整；侧边栏仪表盘与主从布局在实现时请直接沿用。',
  2: '列表接口将新增 cursor 分页字段，旧的 page/size 参数保留一个过渡期。前端在封装请求层时建议直接面向 cursor 设计缓存结构。',
  3: '三月活动落地页确定沿用单栏内容优先布局，正文行宽控制在 65 字符左右；视觉稿已同步到共享目录，请对照实现。',
  4: '下周三起三层东侧工位整体调整，涉及设计组与前端组；详细的座位平面图见附件，如有特殊需求本周五前反馈。',
  5: '本周完成布局模式大类的基础设施，并将主从布局收录为标本；演示中的列表与详情面板已做联动，可以在预览宽度切换下观察折叠行为。',
}

export default function MasterDetailDemo() {
  const [active, setActive] = useState(1)
  const cur = items.find((i) => i.id === active) ?? items[0]

  return (
    <div className="md" aria-label="主从布局演示">
      <div className="md-master">
        <span className="region-tag">master 列表</span>
        <ul className="md-list">
          {items.map((it) => (
            <li key={it.id}>
              <button
                type="button"
                className={`md-item ${active === it.id ? 'active' : ''}`}
                onClick={() => setActive(it.id)}
              >
                <span className="md-item-top">
                  <strong>{it.from}</strong>
                  <span>{it.time}</span>
                </span>
                <span className="md-item-subject">{it.subject}</span>
                <span className="md-item-excerpt">{it.excerpt}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="md-detail">
        <span className="region-tag">detail 详情</span>
        <h4>{cur.subject}</h4>
        <p className="md-meta">
          {cur.from} · {cur.time}
        </p>
        <p className="md-body">{bodies[cur.id]}</p>
      </div>
    </div>
  )
}
