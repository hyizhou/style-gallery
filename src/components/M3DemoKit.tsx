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
import { useLocale } from '../i18n'

const L = {
  zh: {
    seeds: { 's-purple': '基线紫', 's-green': '种子绿', 's-orange': '种子橙' },
    dynTitle: '动态色 / DYNAMIC COLOR',
    darkMode: '深色模式',
    toggleDark: '切换深色模式',
    dynNote: (seed: string, dark: boolean) =>
      `M3 会从一颗种子色生成整套色调方案——切换种子或明暗模式，下方所有组件与整页配色即时重映射（当前：${seed} · ${dark ? '深色' : '浅色'}）。`,
    buttonsTitle: '按钮 / BUTTONS',
    primary: '主要按钮',
    tonal: '色调按钮',
    secondary: '次要按钮',
    textBtn: '文字按钮',
    disabled: '禁用',
    like: '喜欢',
    typeTitle: '文字层级 / TYPE',
    display: '设计的温度',
    h2: '小标题：层级与节奏',
    body: '{t.body}',
    caption: 'LABEL · 辅助说明文字',
    formsTitle: '表单控件 / FORMS',
    searchLabel: '搜索组件',
    searchPh: '输入关键词',
    email: '邮箱',
    darkFollow: '深色模式跟随系统',
    followSys: '跟随系统',
    rememberMe: '记住我',
    remember: '记住我的选择',
    volume: '音量',
    cardTitle: '标本 No.09',
    cardText: '{t.cardText}',
    view: '查看详情',
    fav: '收藏',
    tagsTitle: '徽章与标签 / TAGS',
    chipAssist: '辅助标签',
    chipSelected: '选中状态',
    chipFilter: '可筛选标签',
    chipInput: '可移除标签',
    feedbackTitle: '进度与反馈 / FEEDBACK',
    exportProgress: '导出进度',
    loadingKit: '正在加载组件…',
    banner: '{t.banner}',
    gotIt: '知道了',
    sigTitle: '风格签名 / SIGNATURE · 层级阶梯与 FAB',
    switchedTo: (seed: string, dark: boolean) => `已切换到 ${seed} · ${dark ? '深色' : '浅色'}方案`,
    newSpecimen: '新建标本',
  },
  en: {
    seeds: { 's-purple': 'Baseline purple', 's-green': 'Seed green', 's-orange': 'Seed orange' },
    dynTitle: 'DYNAMIC COLOR',
    darkMode: 'Dark mode',
    toggleDark: 'Toggle dark mode',
    dynNote: (seed: string, dark: boolean) =>
      `M3 grows a whole tonal scheme from one seed color — switch the seed or light/dark and every component below (and the page palette) remaps instantly (now: ${seed} · ${dark ? 'dark' : 'light'}).`,
    buttonsTitle: 'BUTTONS',
    primary: 'Primary',
    tonal: 'Tonal',
    secondary: 'Secondary',
    textBtn: 'Text',
    disabled: 'Disabled',
    like: 'Like',
    typeTitle: 'TYPE',
    display: 'The warmth of design',
    h2: 'Subtitle: hierarchy and rhythm',
    body: 'A good interface balances content and decoration: information first, texture in service of readability, and style for temperament.',
    caption: 'LABEL · secondary notes',
    formsTitle: 'FORMS',
    searchLabel: 'Search components',
    searchPh: 'Enter a keyword',
    email: 'Email',
    darkFollow: 'Dark mode follows system',
    followSys: 'Follow system',
    rememberMe: 'Remember me',
    remember: 'Remember my choice',
    volume: 'Volume',
    cardTitle: 'Specimen No.09',
    cardText: 'The card is the most common container: cover, title, description and a set of actions forming a complete information unit.',
    view: 'View details',
    fav: 'Save',
    tagsTitle: 'TAGS',
    chipAssist: 'Assist chip',
    chipSelected: 'Selected',
    chipFilter: 'Filter chip',
    chipInput: 'Input chip',
    feedbackTitle: 'FEEDBACK',
    exportProgress: 'Export progress',
    loadingKit: 'Loading components…',
    banner: 'Saved successfully — every change takes effect immediately.',
    gotIt: 'Got it',
    sigTitle: 'SIGNATURE · elevation ladder & FAB',
    switchedTo: (seed: string, dark: boolean) => `Switched to ${seed} · ${dark ? 'dark' : 'light'} scheme`,
    newSpecimen: 'New specimen',
  },
}

type Seed = 's-purple' | 's-green' | 's-orange'

const seeds: { key: Seed; label: string }[] = [
  { key: 's-purple', label: '基线紫' },
  { key: 's-green', label: '种子绿' },
  { key: 's-orange', label: '种子橙' },
]

// 布尔属性仅在 true 时落到元素上，避免 "false" 字符串属性被 Lit 视为真
const on = (b: boolean) => (b ? true : undefined)

export default function M3DemoKit() {
  const t = L[useLocale()]
  const [seed, setSeed] = useState<Seed>('s-purple')
  const [dark, setDark] = useState(() =>
    typeof document === 'undefined' ? false : document.documentElement.dataset.theme === 'dark',
  )

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
        <h3 className="demo-title">{t.dynTitle}</h3>
        <div className="m3-controls">
          <div className="m3-controls-row">
            {seeds.map((s) => (
              <md-filter-chip key={s.key} selected={on(seed === s.key)} onClick={() => setSeed(s.key)}>
                {t.seeds[s.key] ?? s.label}
              </md-filter-chip>
            ))}
            <span className="m3-controls-gap" />
            <span className="ctl-label">{t.darkMode}</span>
            <md-switch selected={on(dark)} onClick={() => setDark((v) => !v)} aria-label={t.toggleDark} />
          </div>
          <p className="m3-controls-note">
            {t.dynNote(seedLabel, dark)}
          </p>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">{t.buttonsTitle}</h3>
        <div className="demo-row wrap m3-row">
          <md-filled-button>{t.primary}</md-filled-button>
          <md-filled-tonal-button>{t.tonal}</md-filled-tonal-button>
          <md-outlined-button>{t.secondary}</md-outlined-button>
          <md-text-button>{t.textBtn}</md-text-button>
          <md-filled-button disabled>{t.disabled}</md-filled-button>
          <md-icon-button aria-label={t.like}>
            <HeartIcon size={20} />
          </md-icon-button>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">{t.typeTitle}</h3>
        <div className="demo-col">
          <p className="type-display">{t.display}</p>
          <md-divider />
          <p className="type-h2">{t.h2}</p>
          <p className="type-body">
            {t.body}
          </p>
          <p className="type-caption">{t.caption}</p>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">{t.formsTitle}</h3>
        <div className="demo-col">
          <div className="m3-fields">
            <md-filled-text-field label={t.searchLabel} placeholder={t.searchPh}>
              <SearchIcon size={18} slot="leading-icon" />
            </md-filled-text-field>
            <md-outlined-text-field label={t.email} type="email" placeholder="you@example.com" />
          </div>
          <div className="demo-row between">
            <span className="ctl-label">{t.darkFollow}</span>
            <md-switch selected aria-label={t.followSys} />
          </div>
          <div className="demo-row">
            <md-checkbox checked aria-label={t.rememberMe} />
            <span className="ctl-label">{t.remember}</span>
          </div>
          <md-slider value={62} min={0} max={100} labeled aria-label={t.volume} />
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">CARD</h3>
        <md-elevated-card className="m3-card">
          <div className="m3-card-cover" />
          <div className="m3-card-body">
            <div className="card-titlerow">
              <h4>{t.cardTitle}</h4>
              <span className="m3-badge">NEW</span>
            </div>
            <p>{t.cardText}</p>
            <div className="card-actions">
              <md-filled-tonal-button>{t.view}</md-filled-tonal-button>
              <md-text-button>{t.fav}</md-text-button>
            </div>
          </div>
        </md-elevated-card>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">{t.tagsTitle}</h3>
        <div className="demo-row wrap m3-row">
          <md-assist-chip>{t.chipAssist}</md-assist-chip>
          <md-filter-chip selected>{t.chipSelected}</md-filter-chip>
          <md-filter-chip>{t.chipFilter}</md-filter-chip>
          <md-input-chip>{t.chipInput}</md-input-chip>
          <span className="m3-badge">99+</span>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">{t.feedbackTitle}</h3>
        <div className="demo-col">
          <md-linear-progress value={0.62} aria-label={t.exportProgress} />
          <div className="demo-row">
            <span className="spinner m3-spinner" aria-hidden="true" />
            <span className="ctl-label">{t.loadingKit}</span>
          </div>
          <div className="m3-snackbar">
            {t.banner}
            <span className="m3-snackbar-action">{t.gotIt}</span>
          </div>
        </div>
      </section>

      <section className="demo-block demo-block-wide">
        <h3 className="demo-title">{t.sigTitle}</h3>
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
              {t.switchedTo(seedLabel, dark)}
            </div>
            <md-fab variant="primary" size="large" aria-label={t.newSpecimen}>
              <PlusIcon size={22} slot="icon" />
            </md-fab>
          </div>
        </div>
      </section>
    </div>
  )
}
