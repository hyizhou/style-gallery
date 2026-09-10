import { lazy, Suspense, useState } from 'react'
import type { ComponentType } from 'react'
import { HeartIcon, SearchIcon } from '../icons'
import Signature from './Signature'

// 有官方/成熟组件库支撑的风格使用独立实现（按需加载），其余风格走共享 DemoKit + 主题皮肤
const M3DemoKit = lazy(() => import('./M3DemoKit'))
const AntDemoKit = lazy(() => import('./AntDemoKit'))

const customKits: Record<string, ComponentType> = {
  m3: M3DemoKit,
  antd: AntDemoKit,
}

export default function DemoKit({ styleId }: { styleId: string }) {
  const Custom = customKits[styleId]
  if (Custom) {
    return (
      <Suspense fallback={<div className="demo-block">加载组件标本…</div>}>
        <Custom />
      </Suspense>
    )
  }
  return <StandardDemoKit styleId={styleId} />
}

function StandardDemoKit({ styleId }: { styleId: string }) {
  const [toggleOn, setToggleOn] = useState(true)
  const [checked, setChecked] = useState(true)
  const [volume, setVolume] = useState(62)

  return (
    <div className="demo-kit">
      <section className="demo-block">
        <h3 className="demo-title">按钮 / Buttons</h3>
        <div className="demo-row wrap">
          <button type="button" className="btn btn-primary">
            主要按钮
          </button>
          <button type="button" className="btn">
            次要按钮
          </button>
          <button type="button" className="btn btn-ghost">
            幽灵按钮
          </button>
          <button type="button" className="btn" disabled>
            禁用
          </button>
          <button type="button" className="btn-icon" aria-label="喜欢">
            <HeartIcon size={18} />
          </button>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">文字层级 / Type</h3>
        <div className="demo-col">
          <p className="type-display">设计的温度</p>
          <p className="type-h2">小标题：层级与节奏</p>
          <p className="type-body">
            好的界面在内容与装饰之间取得平衡：信息优先，质感服务于可读性，风格则负责气质。
          </p>
          <p className="type-caption">CAPTION · 辅助说明文字</p>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">表单控件 / Forms</h3>
        <div className="demo-col">
          <label className="field">
            <SearchIcon size={17} />
            <input type="text" placeholder="搜索组件…" />
          </label>
          <div className="demo-row between">
            <span className="ctl-label">深色模式</span>
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
            记住我的选择
          </label>
          <div className="demo-row slider-row">
            <span className="ctl-label">音量</span>
            <input
              type="range"
              className="slider"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              aria-label="音量"
            />
            <span className="ctl-value">{volume}</span>
          </div>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">卡片 / Card</h3>
        <article className="demo-card">
          <div className="card-cover" />
          <div className="card-body">
            <div className="card-titlerow">
              <h4>标本 No.07</h4>
              <span className="badge">NEW</span>
            </div>
            <p>卡片是最常见的容器组件：封面、标题、描述与一组动作，构成完整的信息单元。</p>
            <div className="card-actions">
              <button type="button" className="btn btn-primary">
                查看详情
              </button>
              <button type="button" className="btn">
                收藏
              </button>
            </div>
          </div>
        </article>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">徽章与标签 / Tags</h3>
        <div className="demo-row wrap tag-row">
          <span className="chip">描边标签</span>
          <span className="chip chip-active">选中状态</span>
          <span className="chip">只读标签</span>
          <span className="badge">99+</span>
          <span className="badge">HOT</span>
        </div>
      </section>

      <section className="demo-block">
        <h3 className="demo-title">进度与反馈 / Feedback</h3>
        <div className="demo-col">
          <div className="progress">
            <div className="progress-fill" style={{ width: '62%' }} />
          </div>
          <div className="demo-row">
            <span className="spinner" aria-hidden="true" />
            <span className="ctl-label">正在加载组件…</span>
          </div>
          <div className="banner">操作已成功保存，所有更改即时生效。</div>
        </div>
      </section>

      <section className="demo-block demo-block-wide">
        <h3 className="demo-title">风格签名 / Signature</h3>
        <Signature styleId={styleId} />
      </section>
    </div>
  )
}
