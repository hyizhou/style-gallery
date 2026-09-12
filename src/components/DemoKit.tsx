import { lazy, Suspense, useState } from 'react'
import type { ComponentType } from 'react'
import { HeartIcon, SearchIcon } from '../icons'
import { useLocale } from '../i18n'
import Signature from './Signature'

// 有官方/成熟组件库支撑的风格使用独立实现（按需加载），其余风格走共享 DemoKit + 主题皮肤
const M3DemoKit = lazy(() => import('./M3DemoKit'))
const AntDemoKit = lazy(() => import('./AntDemoKit'))

const customKits: Record<string, ComponentType> = {
  m3: M3DemoKit,
  antd: AntDemoKit,
}

const L = {
  zh: {
    loading: '加载组件标本…',
    buttons: '按钮 / Buttons',
    primary: '主要按钮',
    secondary: '次要按钮',
    ghost: '幽灵按钮',
    disabled: '禁用',
    like: '喜欢',
    type: '文字层级 / Type',
    display: '设计的温度',
    h2: '小标题：层级与节奏',
    body: '好的界面在内容与装饰之间取得平衡：信息优先，质感服务于可读性，风格则负责气质。',
    caption: 'CAPTION · 辅助说明文字',
    forms: '表单控件 / Forms',
    searchPh: '搜索组件…',
    darkMode: '深色模式',
    remember: '记住我的选择',
    volume: '音量',
    card: '卡片 / Card',
    cardTitle: '标本 No.07',
    cardText: '卡片是最常见的容器组件：封面、标题、描述与一组动作，构成完整的信息单元。',
    view: '查看详情',
    fav: '收藏',
    tags: '徽章与标签 / Tags',
    chipOutline: '描边标签',
    chipActive: '选中状态',
    chipPlain: '只读标签',
    feedback: '进度与反馈 / Feedback',
    loadingKit: '正在加载组件…',
    banner: '操作已成功保存，所有更改即时生效。',
    signature: '风格签名 / Signature',
    previewTitle: '风格标本 Aa',
    previewBtn: '按钮',
    previewChip: '标签',
  },
  en: {
    loading: 'Loading component specimens…',
    buttons: 'Buttons',
    primary: 'Primary',
    secondary: 'Secondary',
    ghost: 'Ghost',
    disabled: 'Disabled',
    like: 'Like',
    type: 'Type',
    display: 'The warmth of design',
    h2: 'Subtitle: hierarchy and rhythm',
    body: 'A good interface balances content and decoration: information first, texture in service of readability, and style for temperament.',
    caption: 'CAPTION · secondary notes',
    forms: 'Forms',
    searchPh: 'Search components…',
    darkMode: 'Dark mode',
    remember: 'Remember my choice',
    volume: 'Volume',
    card: 'Card',
    cardTitle: 'Specimen No.07',
    cardText: 'The card is the most common container: cover, title, description and a set of actions forming a complete information unit.',
    view: 'View details',
    fav: 'Save',
    tags: 'Tags',
    chipOutline: 'Outline tag',
    chipActive: 'Selected',
    chipPlain: 'Read-only tag',
    feedback: 'Feedback',
    loadingKit: 'Loading components…',
    banner: 'Saved successfully — every change takes effect immediately.',
    signature: 'Signature',
    previewTitle: 'Style specimen Aa',
    previewBtn: 'Button',
    previewChip: 'Tag',
  },
}

export default function DemoKit({ styleId }: { styleId: string }) {
  const t = L[useLocale()]
  const Custom = customKits[styleId]
  if (Custom) {
    return (
      <Suspense fallback={<div className="demo-block">{t.loading}</div>}>
        <Custom />
      </Suspense>
    )
  }
  return <StandardDemoKit styleId={styleId} />
}

function StandardDemoKit({ styleId }: { styleId: string }) {
  const t = L[useLocale()]
  const [toggleOn, setToggleOn] = useState(true)
  const [checked, setChecked] = useState(true)
  const [volume, setVolume] = useState(62)

  return (
    <div className="demo-kit">
      <section className="demo-block">
        <h3 className="demo-title">{t.buttons}</h3>
        <div className="demo-row wrap">
          <button type="button" className="btn btn-primary">
            {t.primary}
          </button>
          <button type="button" className="btn">
            {t.secondary}
          </button>
          <button type="button" className="btn btn-ghost">
            {t.ghost}
          </button>
          <button type="button" className="btn" disabled>
            {t.disabled}
          </button>
          <button type="button" className="btn-icon" aria-label={t.like}>
            <HeartIcon size={18} />
          </button>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">{t.type}</h3>
        <div className="demo-col">
          <p className="type-display">{t.display}</p>
          <p className="type-h2">{t.h2}</p>
          <p className="type-body">{t.body}</p>
          <p className="type-caption">{t.caption}</p>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">{t.forms}</h3>
        <div className="demo-col">
          <label className="field">
            <SearchIcon size={17} />
            <input type="text" placeholder={t.searchPh} />
          </label>
          <div className="demo-row between">
            <span className="ctl-label">{t.darkMode}</span>
            <label className="toggle">
              <input
                type="checkbox"
                className="sr-input"
                checked={toggleOn}
                onChange={(e) => setToggleOn(e.target.checked)}
              />
              <span className="toggle-track">
                <span className="toggle-knob" />
              </span>
            </label>
          </div>
          <label className="check">
            <input
              type="checkbox"
              className="sr-input"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span className="check-box" />
            {t.remember}
          </label>
          <div className="demo-row slider-row">
            <span className="ctl-label">{t.volume}</span>
            <input
              type="range"
              className="slider"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              aria-label={t.volume}
            />
            <span className="ctl-value">{volume}</span>
          </div>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">{t.card}</h3>
        <article className="demo-card">
          <div className="card-cover" />
          <div className="card-body">
            <div className="card-titlerow">
              <h4>{t.cardTitle}</h4>
              <span className="badge">NEW</span>
            </div>
            <p>{t.cardText}</p>
            <div className="card-actions">
              <button type="button" className="btn btn-primary">
                {t.view}
              </button>
              <button type="button" className="btn">
                {t.fav}
              </button>
            </div>
          </div>
        </article>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">{t.tags}</h3>
        <div className="demo-row wrap tag-row">
          <span className="chip">{t.chipOutline}</span>
          <span className="chip chip-active">{t.chipActive}</span>
          <span className="chip">{t.chipPlain}</span>
          <span className="badge">99+</span>
          <span className="badge">HOT</span>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">{t.feedback}</h3>
        <div className="demo-col">
          <div className="progress">
            <div className="progress-fill" style={{ width: '62%' }} />
          </div>
          <div className="demo-row">
            <span className="spinner" aria-hidden="true" />
            <span className="ctl-label">{t.loadingKit}</span>
          </div>
          <div className="banner">{t.banner}</div>
        </div>
      </section>

      <section className="demo-block demo-block-wide">
        <h3 className="demo-title">{t.signature}</h3>
        <Signature styleId={styleId} />
      </section>
    </div>
  )
}
