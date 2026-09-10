import { useEffect, useState } from 'react'
import '@material/web/button/filled-button.js'
import '@material/web/button/filled-tonal-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/text-button.js'
import '@material/web/iconbutton/icon-button.js'
import '@material/web/fab/fab.js'
import '@material/web/textfield/filled-text-field.js'
import '@material/web/textfield/outlined-text-field.js'
import '@material/web/checkbox/checkbox.js'
import '@material/web/switch/switch.js'
import '@material/web/slider/slider.js'
import '@material/web/chips/assist-chip.js'
import '@material/web/chips/filter-chip.js'
import '@material/web/chips/input-chip.js'
import '@material/web/progress/linear-progress.js'
import '@material/web/labs/card/elevated-card.js'
import '@material/web/divider/divider.js'
import { HeartIcon, PlusIcon, SearchIcon } from '../icons'

type Seed = 's-purple' | 's-green' | 's-orange'

const seeds: { key: Seed; label: string }[] = [
  { key: 's-purple', label: '基线紫' },
  { key: 's-green', label: '种子绿' },
  { key: 's-orange', label: '种子橙' },
]

// 布尔属性仅在 true 时落到元素上，避免 "false" 字符串属性被 Lit 视为真
const on = (b: boolean) => (b ? true : undefined)

export default function M3DemoKit() {
  const [seed, setSeed] = useState<Seed>('s-purple')
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark')

  // 跟随头部按钮的全局明暗状态
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.dataset.theme === 'dark')
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  // 把当前动态色方案挂到整页 .detail 上，令标题区与组件区同步重映射
  useEffect(() => {
    const root = document.querySelector('.detail')
    if (!root) return
    const cls = ['m3-scheme', seed, ...(dark ? ['dark'] : [])]
    cls.forEach((c) => root.classList.add(c))
    return () => cls.forEach((c) => root.classList.remove(c))
  }, [seed, dark])

  const seedLabel = seeds.find((s) => s.key === seed)?.label ?? ''

  return (
    <div className="demo-kit">
      <section className="demo-block demo-block-wide">
        <h3 className="demo-title">动态色 / DYNAMIC COLOR</h3>
        <div className="m3-controls">
          <div className="m3-controls-row">
            {seeds.map((s) => (
              <md-filter-chip key={s.key} selected={on(seed === s.key)} onClick={() => setSeed(s.key)}>
                {s.label}
              </md-filter-chip>
            ))}
            <span className="m3-controls-gap" />
            <span className="ctl-label">深色模式</span>
            <md-switch selected={on(dark)} onClick={() => setDark((v) => !v)} aria-label="切换深色模式" />
          </div>
          <p className="m3-controls-note">
            M3 会从一颗种子色生成整套色调方案——切换种子或明暗模式，下方所有组件与整页配色即时重映射（当前：{seedLabel} ·{' '}
            {dark ? '深色' : '浅色'}）。
          </p>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">按钮 / BUTTONS</h3>
        <div className="demo-row wrap m3-row">
          <md-filled-button>主要按钮</md-filled-button>
          <md-filled-tonal-button>色调按钮</md-filled-tonal-button>
          <md-outlined-button>次要按钮</md-outlined-button>
          <md-text-button>文字按钮</md-text-button>
          <md-filled-button disabled>禁用</md-filled-button>
          <md-icon-button aria-label="喜欢">
            <HeartIcon size={20} />
          </md-icon-button>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">文字层级 / TYPE</h3>
        <div className="demo-col">
          <p className="type-display">设计的温度</p>
          <md-divider />
          <p className="type-h2">小标题：层级与节奏</p>
          <p className="type-body">
            好的界面在内容与装饰之间取得平衡：信息优先，质感服务于可读性，风格则负责气质。
          </p>
          <p className="type-caption">LABEL · 辅助说明文字</p>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">表单控件 / FORMS</h3>
        <div className="demo-col">
          <div className="m3-fields">
            <md-filled-text-field label="搜索组件" placeholder="输入关键词">
              <SearchIcon size={18} slot="leading-icon" />
            </md-filled-text-field>
            <md-outlined-text-field label="邮箱" type="email" placeholder="you@example.com" />
          </div>
          <div className="demo-row between">
            <span className="ctl-label">深色模式跟随系统</span>
            <md-switch selected aria-label="跟随系统" />
          </div>
          <div className="demo-row">
            <md-checkbox checked aria-label="记住我" />
            <span className="ctl-label">记住我的选择</span>
          </div>
          <md-slider value={62} min={0} max={100} labeled aria-label="音量" />
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">卡片 / CARD</h3>
        <md-elevated-card className="m3-card">
          <div className="m3-card-cover" />
          <div className="m3-card-body">
            <div className="card-titlerow">
              <h4>标本 No.09</h4>
              <span className="m3-badge">NEW</span>
            </div>
            <p>卡片是最常见的容器组件：封面、标题、描述与一组动作，构成完整的信息单元。</p>
            <div className="card-actions">
              <md-filled-tonal-button>查看详情</md-filled-tonal-button>
              <md-text-button>收藏</md-text-button>
            </div>
          </div>
        </md-elevated-card>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">徽章与标签 / TAGS</h3>
        <div className="demo-row wrap m3-row">
          <md-assist-chip>辅助标签</md-assist-chip>
          <md-filter-chip selected>选中状态</md-filter-chip>
          <md-filter-chip>可筛选标签</md-filter-chip>
          <md-input-chip>可移除标签</md-input-chip>
          <span className="m3-badge">99+</span>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">进度与反馈 / FEEDBACK</h3>
        <div className="demo-col">
          <md-linear-progress value={0.62} aria-label="导出进度" />
          <div className="demo-row">
            <span className="spinner m3-spinner" aria-hidden="true" />
            <span className="ctl-label">正在加载组件…</span>
          </div>
          <div className="m3-snackbar">
            操作已成功保存，所有更改即时生效。
            <span className="m3-snackbar-action">知道了</span>
          </div>
        </div>
      </section>

      <section className="demo-block demo-block-wide">
        <h3 className="demo-title">风格签名 / SIGNATURE · 层级阶梯与 FAB</h3>
        <div className="m3-sig">
          <div className="m3-elev-ladder">
            {(['e0', 'e1', 'e2', 'e3', 'e4'] as const).map((e) => (
              <span key={e} className={`m3-elev ${e}`}>
                {e.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="m3-sig-row">
            <div className="m3-snackbar m3-sig-snackbar">
              已切换到 {seedLabel} · {dark ? '深色' : '浅色'}方案
            </div>
            <md-fab variant="primary" size="large" aria-label="新建标本">
              <PlusIcon size={22} slot="icon" />
            </md-fab>
          </div>
        </div>
      </section>
    </div>
  )
}
