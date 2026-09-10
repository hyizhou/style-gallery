import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../data/styles'
import { layoutPatterns } from '../data/layouts'
import type { StyleInfo } from '../data/styles'
import type { LayoutPattern } from '../data/layouts'

function StyleCard({ s }: { s: StyleInfo }) {
  return (
    <Link to={`/styles/${s.id}`} className="style-card">
      <div className={`card-preview theme-${s.id}`}>
        <div className="pv-col">
          <span className="type-h2">风格标本 Aa</span>
          <div className="demo-row">
            <span className="btn btn-primary">按钮</span>
            <span className="chip chip-active">标签</span>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '70%' }} />
          </div>
        </div>
      </div>
      <div className="card-info">
        <div className="card-titlerow">
          <h3>{s.name}</h3>
          <span className="card-en">{s.en}</span>
          <span className="card-arrow" aria-hidden="true">
            →
          </span>
        </div>
        <p>{s.tagline}</p>
      </div>
    </Link>
  )
}

function LayoutCard({ p }: { p: LayoutPattern }) {
  if (p.status !== 'ready') {
    return (
      <div className="style-card lp-card is-planned" aria-disabled="true">
        <div className="lp-thumb">
          <div className="lp-thumb-skeleton" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="card-info">
          <div className="card-titlerow">
            <h3>{p.name}</h3>
            <span className="card-en">{p.en}</span>
            <span className="lp-planned-badge">规划中</span>
          </div>
          <p>{p.tagline}</p>
        </div>
      </div>
    )
  }
  return (
    <Link to={`/layouts/${p.id}`} className="style-card">
      <div className={`lp-thumb lp-thumb-${p.id}`} aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="card-info">
        <div className="card-titlerow">
          <h3>{p.name}</h3>
          <span className="card-en">{p.en}</span>
          <span className="card-arrow" aria-hidden="true">
            →
          </span>
        </div>
        <p>{p.tagline}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  const [category, setCategory] = useState<'styles' | 'layouts'>('styles')

  useEffect(() => {
    document.title = '风格标本馆 · UI 设计风格组件展'
  }, [])

  return (
    <>
      <section className="hero container">
        <p className="hero-eyebrow">UI DESIGN PATTERNS · SPECIMEN COLLECTION</p>
        <h1>
          把主流界面设计
          <br />
          做成可以触摸的标本
        </h1>
        <p className="hero-lead">
          两个大类：视觉风格与布局模式。每种风格配有一整套可交互的组件标本；每种布局模式配有一个可切换预览宽度的活体演示。
          点击任意标本卡片，进入它的完整页面。
        </p>
        <div className="hero-meta">
          <span>{styles.length} 种设计风格</span>
          <span>{layoutPatterns.filter((p) => p.status === 'ready').length} / {layoutPatterns.length} 个布局模式</span>
          <span>明暗主题随时切换</span>
        </div>
      </section>

      <section className="container">
        <div className="home-switch" role="tablist" aria-label="展示类别">
          <button
            type="button"
            role="tab"
            aria-selected={category === 'styles'}
            className={category === 'styles' ? 'active' : ''}
            onClick={() => setCategory('styles')}
          >
            视觉风格
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={category === 'layouts'}
            className={category === 'layouts' ? 'active' : ''}
            onClick={() => setCategory('layouts')}
          >
            布局模式
          </button>
        </div>

        {category === 'styles' ? (
          <div className="card-grid" aria-label="风格导航">
            {styles.map((s) => (
              <StyleCard key={s.id} s={s} />
            ))}
          </div>
        ) : (
          <div className="card-grid" aria-label="布局模式导航">
            {layoutPatterns.map((p) => (
              <LayoutCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>风格标本馆 · React + TypeScript + Vite 构建</p>
        </div>
      </footer>
    </>
  )
}
