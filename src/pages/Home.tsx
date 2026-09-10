import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../data/styles'
import type { StyleInfo } from '../data/styles'

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

export default function Home() {
  useEffect(() => {
    document.title = '风格标本馆 · UI 设计风格组件展'
  }, [])

  return (
    <>
      <section className="hero container">
        <p className="hero-eyebrow">UI DESIGN STYLES · SPECIMEN COLLECTION</p>
        <h1>
          把主流界面风格
          <br />
          做成可以触摸的标本
        </h1>
        <p className="hero-lead">
          从极简到粗野主义，从毛玻璃到像素复古——每一种风格都配有一整套可交互的组件标本：按钮、表单、卡片、徽章与进度反馈。
          点击任意标本卡片，进入该风格的完整组件页面。
        </p>
        <div className="hero-meta">
          <span>{styles.length} 种设计风格</span>
          <span>6 组通用组件</span>
          <span>{styles.length} 件风格签名件</span>
        </div>
      </section>

      <section className="container card-grid" aria-label="风格导航">
        {styles.map((s) => (
          <StyleCard key={s.id} s={s} />
        ))}
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>风格标本馆 · React + TypeScript + Vite 构建</p>
        </div>
      </footer>
    </>
  )
}
