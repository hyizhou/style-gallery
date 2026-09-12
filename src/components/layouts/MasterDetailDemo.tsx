import { useState } from 'react'
import { useLocale } from '../../i18n'

const L = {
  zh: {
    items: [
      { id: 1, from: '设计组', subject: '圣杯布局评审意见', time: '10:24', excerpt: '区域徽章的命名建议再统一一轮，详见批注。' },
      { id: 2, from: '后端组', subject: 'API 字段变更通知', time: '09:57', excerpt: '列表接口新增 cursor 分页字段，本周内上线。' },
      { id: 3, from: '运营组', subject: '三月活动排期', time: '昨天', excerpt: '落地页沿用单栏内容优先布局，视觉稿已同步。' },
      { id: 4, from: '人事部', subject: '办公位调整通知', time: '昨天', excerpt: '下周三起三层东侧工位调整，详见附件平面图。' },
      { id: 5, from: '前端组', subject: '布局标本收录计划', time: '周一', excerpt: '主从布局标本已入库，下一个是分屏布局。' },
    ],
    bodies: {
      1: '区域徽章统一为「英文区域名 + 中文说明」格式，圣杯布局的五个区域已按此调整；侧边栏仪表盘与主从布局在实现时请直接沿用。',
      2: '列表接口将新增 cursor 分页字段，旧的 page/size 参数保留一个过渡期。前端在封装请求层时建议直接面向 cursor 设计缓存结构。',
      3: '三月活动落地页确定沿用单栏内容优先布局，正文行宽控制在 65 字符左右；视觉稿已同步到共享目录，请对照实现。',
      4: '下周三起三层东侧工位整体调整，涉及设计组与前端组；详细的座位平面图见附件，如有特殊需求本周五前反馈。',
      5: '本周完成布局模式大类的基础设施，并将主从布局收录为标本；演示中的列表与详情面板已做联动，可以在预览宽度切换下观察折叠行为。',
    } as Record<number, string>,
    aria: '主从布局演示',
    master: 'master 列表',
    detail: 'detail 详情',
  },
  en: {
    items: [
      { id: 1, from: 'Design team', subject: 'Holy Grail layout review notes', time: '10:24', excerpt: 'Region badge naming needs one more pass — see comments.' },
      { id: 2, from: 'Backend team', subject: 'API field change notice', time: '09:57', excerpt: 'List API adds a cursor pagination field, shipping this week.' },
      { id: 3, from: 'Marketing', subject: 'March campaign schedule', time: 'Yesterday', excerpt: 'Landing page keeps the single-column layout; visuals synced.' },
      { id: 4, from: 'HR', subject: 'Desk relocation notice', time: 'Yesterday', excerpt: 'East desks on floor 3 move next Wednesday — see floor plan.' },
      { id: 5, from: 'Frontend team', subject: 'Layout specimen intake plan', time: 'Mon', excerpt: 'Master-detail specimen is in; split screen is next.' },
    ],
    bodies: {
      1: 'Region badges are now unified as “English region name + localized note”; the five Holy Grail regions follow this, and the sidebar dashboard and master-detail specimens should adopt it as-is.',
      2: 'The list API will add a cursor pagination field; the old page/size params stay for a transition period. When wrapping the request layer, design the cache around cursor from day one.',
      3: 'The March campaign landing page keeps the single-column layout with a measure around 65 characters; the visuals are in the shared folder — implement against them.',
      4: 'East desks on floor 3 move next Wednesday, affecting design and frontend; see the attached seating plan and flag special needs by Friday.',
      5: 'This week we finished the layout-category infrastructure and added master-detail as a specimen; the list and detail panels are linked — watch the collapse behavior as you switch preview widths.',
    } as Record<number, string>,
    aria: 'Master-detail demo',
    master: 'master list',
    detail: 'detail pane',
  },
}

export default function MasterDetailDemo() {
  const t = L[useLocale()]
  const [active, setActive] = useState(1)
  const cur = t.items.find((i) => i.id === active) ?? t.items[0]

  return (
    <div className="md" aria-label={t.aria}>
      <div className="md-master">
        <span className="region-tag">{t.master}</span>
        <ul className="md-list">
          {t.items.map((it) => (
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
        <span className="region-tag">{t.detail}</span>
        <h4>{cur.subject}</h4>
        <p className="md-meta">
          {cur.from} · {cur.time}
        </p>
        <p className="md-body">{t.bodies[cur.id]}</p>
      </div>
    </div>
  )
}
