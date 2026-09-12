import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../data/styles'
import { readyLayoutPatterns } from '../data/layouts'
import { readyModalPatterns } from '../data/modals'
import { localeBase, useLocale, useT } from '../i18n'

// 风格词典：术语 ↔ 口语别名的对照表，别名以正文文本出现（可被搜索索引）
export default function Glossary() {
  const locale = useLocale()
  const t = useT()
  const base = localeBase(locale)

  useEffect(() => {
    document.title = locale === 'en' ? `Glossary · ${t.siteSuffix}` : `风格词典 · ${t.siteSuffix}`
  }, [locale, t])

  return (
    <>
      <header className="glossary-head container">
        <p className="hero-eyebrow">{t.glossEyebrow}</p>
        <h1>{t.glossTitle}</h1>
        <p>{t.glossLead}</p>
      </header>

      <section className="container">
        <section className="glo-section">
          <h2>{t.glossStyles}</h2>
          <div className="glo-grid">
            {styles.map((s) => {
              const e = locale === 'en' ? s.i18n?.en : undefined
              return (
                <Link to={`${base}/styles/${s.id}`} key={s.id} className="glo-item">
                  <span className={`glo-preview theme-${s.id}`}>
                    <span className="btn btn-primary">{locale === 'en' ? 'Button' : '按钮'}</span>
                  </span>
                  <span className="glo-main">
                    <h3>{e ? s.en : s.name}</h3>
                    <span className="glo-en">{s.en}</span>
                    <p className="glo-alias">
                      {t.aka}
                      <em>{(e ? e.aliases : s.aliases).join(' / ')}</em>
                    </p>
                    <p className="glo-tagline">{e ? e.tagline : s.tagline}</p>
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="glo-section">
          <h2>{t.glossLayouts}</h2>
          <div className="glo-grid">
            {readyLayoutPatterns.map((p) => {
              const e = locale === 'en' ? p.i18n?.en : undefined
              const aliases = e?.aliases ?? p.aliases
              if (!aliases) return null
              return (
                <Link to={`${base}/layouts/${p.id}`} key={p.id} className="glo-item">
                  <span className="glo-main">
                    <h3>{e ? p.en : p.name}</h3>
                    <span className="glo-en">{p.en}</span>
                    <p className="glo-alias">
                      {t.aka}
                      <em>{aliases.join(' / ')}</em>
                    </p>
                    <p className="glo-tagline">{e ? e.tagline : p.tagline}</p>
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="glo-section">
          <h2>{t.glossModals}</h2>
          <div className="glo-grid">
            {readyModalPatterns.map((p) => {
              const e = locale === 'en' ? p.i18n?.en : undefined
              const aliases = e?.aliases ?? p.aliases
              if (!aliases) return null
              return (
                <Link to={`${base}/modals/${p.id}`} key={p.id} className="glo-item">
                  <span className="glo-main">
                    <h3>{e ? p.en : p.name}</h3>
                    <span className="glo-en">{p.en}</span>
                    <p className="glo-alias">
                      {t.aka}
                      <em>{aliases.join(' / ')}</em>
                    </p>
                    <p className="glo-tagline">{e ? e.tagline : p.tagline}</p>
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      </section>
    </>
  )
}
