import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { styles } from '../data/styles'
import DemoKit from '../components/DemoKit'

export default function StyleDetail() {
  const { id } = useParams()
  const index = styles.findIndex((s) => s.id === id)

  useEffect(() => {
    if (index >= 0) {
      const s = styles[index]
      document.title = `${s.name} ${s.en} · 风格标本馆`
    }
  }, [index])

  if (index < 0) return <Navigate to="/" replace />

  const s = styles[index]
  const prev = styles[(index - 1 + styles.length) % styles.length]
  const next = styles[(index + 1) % styles.length]

  return (
    <>
      <div className={`detail theme-${s.id}`}>
        <div className="container">
          <Link to="/" className="backlink">
            ← 返回标本馆
          </Link>
          <header className="detail-head">
            <span className="detail-en">
              {s.en} · {s.period}
            </span>
            <h1>{s.name}</h1>
            <p className="detail-tagline">{s.tagline}</p>
            <p className="detail-desc">{s.desc}</p>
            <div className="detail-tags">
              {s.tags.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </header>
        </div>
        <div className="container">
          <DemoKit styleId={s.id} />
        </div>
      </div>

      <nav className="detail-nav container" aria-label="风格切换">
        <Link to={`/styles/${prev.id}`} className="nav-card">
          <span>← 上一种风格</span>
          <strong>{prev.name}</strong>
        </Link>
        <Link to={`/styles/${next.id}`} className="nav-card">
          <span>下一种风格 →</span>
          <strong>{next.name}</strong>
        </Link>
      </nav>
    </>
  )
}
