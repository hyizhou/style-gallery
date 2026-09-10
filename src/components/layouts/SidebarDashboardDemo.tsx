import { useState } from 'react'

const navItems = [
  { key: 'overview', label: '概览' },
  { key: 'analytics', label: '分析' },
  { key: 'orders', label: '订单' },
  { key: 'settings', label: '设置' },
]

const stats = [
  { label: '本周访客', value: '12,480' },
  { label: '转化率', value: '3.6%' },
  { label: '客单价', value: '¥ 286' },
]

const bars = [42, 68, 55, 80, 47, 92, 63, 74, 58, 88, 70, 96]

export default function SidebarDashboardDemo() {
  const [active, setActive] = useState('overview')

  return (
    <div className="sd" aria-label="侧边栏仪表盘演示">
      <div className="sd-side">
        <span className="region-tag">side 侧边导航</span>
        <nav className="sd-nav" aria-label="演示导航">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.key}
              className={`sd-nav-item ${active === item.key ? 'active' : ''}`}
              onClick={() => setActive(item.key)}
            >
              <span className="sd-nav-mark" aria-hidden="true" />
              <span className="sd-nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="sd-main-col">
        <div className="sd-top">
          <span className="region-tag">top 顶栏</span>
          <span className="sd-breadcrumb">仪表盘 / {navItems.find((n) => n.key === active)?.label}</span>
          <span className="sd-avatar" aria-hidden="true" />
        </div>

        <div className="sd-content">
          <span className="region-tag">main 内容区</span>
          <div className="sd-stats">
            {stats.map((s) => (
              <div className="sd-stat" key={s.label}>
                <span className="sd-stat-label">{s.label}</span>
                <strong className="sd-stat-value">{s.value}</strong>
              </div>
            ))}
          </div>
          <div className="sd-chart" aria-hidden="true">
            {bars.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
