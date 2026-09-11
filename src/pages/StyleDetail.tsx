import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { styles } from '../data/styles'
import { layoutPatterns } from '../data/layouts'
import { pairings } from '../data/pairings'
import DemoKit from '../components/DemoKit'
import PromptCard from '../components/PromptCard'

const styleName = (id: string) => styles.find((x) => x.id === id)?.name ?? id
const layoutName = (id: string) => layoutPatterns.find((x) => x.id === id)?.name ?? id

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
  const relatedPairings = pairings.filter((p) => p.styleIds.includes(s.id))
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

        <section className="container prompt-section">
          <h2 className="section-title">对 AI 说 / Prompt</h2>
          <PromptCard
            defaultKey="zh"
            variants={[
              { key: 'short', label: '一句话', text: s.prompt.short },
              { key: 'zh', label: '中文详版', text: s.prompt.zh },
              { key: 'en', label: 'English', text: s.prompt.en },
            ]}
          />
        </section>

        {relatedPairings.length > 0 && (
          <section className="container pairing-section">
            <h2 className="section-title">相配搭配 / Pairings</h2>
            <div className="pairing-list">
              {relatedPairings.map((p) => (
                <div className="pairing-item" key={p.id}>
                  <h3>{p.name}</h3>
                  <p className="pairing-why">{p.why}</p>
                  <div className="pairing-links">
                    {p.styleIds
                      .filter((id) => id !== s.id)
                      .map((id) => (
                        <Link to={`/styles/${id}`} key={id}>
                          风格 · {styleName(id)}
                        </Link>
                      ))}
                    {p.layoutIds.map((id) => (
                      <Link to={`/layouts/${id}`} key={id}>
                        布局 · {layoutName(id)}
                      </Link>
                    ))}
                  </div>
                  <PromptCard
                    variants={[
                      { key: 'zh', label: '中文', text: p.prompt.zh },
                      { key: 'en', label: 'English', text: p.prompt.en },
                    ]}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
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
