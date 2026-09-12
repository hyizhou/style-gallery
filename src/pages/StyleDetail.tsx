import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { styles } from '../data/styles'
import { layoutPatterns } from '../data/layouts'
import { pairings } from '../data/pairings'
import DemoKit from '../components/DemoKit'
import PromptCard from '../components/PromptCard'
import { localeBase, useLocale, useT } from '../i18n'

export default function StyleDetail() {
  const { id } = useParams()
  const locale = useLocale()
  const t = useT()
  const base = localeBase(locale)
  const index = styles.findIndex((s) => s.id === id)

  const displayName = (list: { id: string; name: string; en: string }[], pid: string) => {
    const item = list.find((x) => x.id === pid)
    if (!item) return pid
    return locale === 'en' ? item.en : item.name
  }

  useEffect(() => {
    if (index >= 0) {
      const s = styles[index]
      document.title =
        locale === 'en'
          ? `${s.en} · ${t.siteSuffix}`
          : `${s.name} ${s.en} · ${t.siteSuffix}`
    }
  }, [index, locale, t])

  if (index < 0) return <Navigate to={base || '/'} replace />

  const s = styles[index]
  const e = locale === 'en' ? s.i18n?.en : undefined
  const relatedPairings = pairings.filter((p) => p.styleIds.includes(s.id))
  const prev = styles[(index - 1 + styles.length) % styles.length]
  const next = styles[(index + 1) % styles.length]

  return (
    <>
      <div className={`detail theme-${s.id}`}>
        <div className="container">
          <Link to={base || '/'} className="backlink">
            {t.back}
          </Link>
          <header className="detail-head">
            <span className="detail-en">{s.en} · {e ? e.period : s.period}</span>
            <h1>{e ? s.en : s.name}</h1>
            <p className="detail-tagline">{e ? e.tagline : s.tagline}</p>
            <p className="detail-desc">{e ? e.desc : s.desc}</p>
            <div className="detail-tags">
              {(e ? e.tags : s.tags).map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </header>
        </div>
        <div className="container">
          <DemoKit styleId={s.id} />
        </div>

        <section className="container prompt-section">
          <h2 className="section-title">{t.promptTitle}</h2>
          <PromptCard
            defaultKey={locale === 'en' ? 'en' : 'zh'}
            variants={
              locale === 'en'
                ? [
                    { key: 'en', label: t.variantEn, text: s.prompt.en },
                    { key: 'short', label: t.variantShort, text: s.prompt.short },
                    { key: 'zh', label: t.variantZh, text: s.prompt.zh },
                  ]
                : [
                    { key: 'short', label: t.variantShort, text: s.prompt.short },
                    { key: 'zh', label: t.variantZh, text: s.prompt.zh },
                    { key: 'en', label: t.variantEn, text: s.prompt.en },
                  ]
            }
          />
        </section>

        {relatedPairings.length > 0 && (
          <section className="container pairing-section">
            <h2 className="section-title">{t.pairingTitle}</h2>
            <div className="pairing-list">
              {relatedPairings.map((p) => {
                const pe = locale === 'en' ? p.i18n?.en : undefined
                return (
                  <div className="pairing-item" key={p.id}>
                    <h3>{pe ? pe.name : p.name}</h3>
                    <p className="pairing-why">{pe ? pe.why : p.why}</p>
                    <div className="pairing-links">
                      {p.styleIds
                        .filter((sid) => sid !== s.id)
                        .map((sid) => (
                          <Link to={`${base}/styles/${sid}`} key={sid}>
                            {t.pairingStyle(displayName(styles, sid))}
                          </Link>
                        ))}
                      {p.layoutIds.map((lid) => (
                        <Link to={`${base}/layouts/${lid}`} key={lid}>
                          {t.pairingLayout(displayName(layoutPatterns, lid))}
                        </Link>
                      ))}
                    </div>
                    <PromptCard
                      variants={[
                        { key: 'zh', label: t.variantZhShort, text: p.prompt.zh },
                        { key: 'en', label: t.variantEn, text: p.prompt.en },
                      ]}
                    />
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </div>

      <nav className="detail-nav container" aria-label={t.navStyles}>
        <Link to={`${base}/styles/${prev.id}`} className="nav-card">
          <span>{t.prevStyle}</span>
          <strong>{locale === 'en' ? prev.en : prev.name}</strong>
        </Link>
        <Link to={`${base}/styles/${next.id}`} className="nav-card">
          <span>{t.nextStyle}</span>
          <strong>{locale === 'en' ? next.en : next.name}</strong>
        </Link>
      </nav>
    </>
  )
}
