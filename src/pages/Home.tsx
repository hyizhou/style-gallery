import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../data/styles'
import { layoutPatterns } from '../data/layouts'
import { feedbackPatterns, readyFeedbackPatterns } from '../data/feedback'
import { SearchIcon } from '../icons'
import { localeBase, useLocale, useT } from '../i18n'
import type { StyleInfo } from '../data/styles'
import type { LayoutPattern } from '../data/layouts'
import type { FeedbackPattern } from '../data/feedback'

function StyleCard({ s }: { s: StyleInfo }) {
  const locale = useLocale()
  const e = locale === 'en' ? s.i18n?.en : undefined
  return (
    <Link to={`${localeBase(locale)}/styles/${s.id}`} className="style-card">
      <div className={`card-preview theme-${s.id}`}>
        <div className="pv-col">
          <span className="type-h2">{e ? 'Style specimen Aa' : '风格标本 Aa'}</span>
          <div className="demo-row">
            <span className="btn btn-primary">{e ? 'Button' : '按钮'}</span>
            <span className="chip chip-active">{e ? 'Tag' : '标签'}</span>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: '70%' }} />
          </div>
        </div>
      </div>
      <div className="card-info">
        <div className="card-titlerow">
          <h3>{e ? s.en : s.name}</h3>
          <span className="card-en">{s.en}</span>
          <span className="card-arrow" aria-hidden="true">
            →
          </span>
        </div>
        <p>{e ? e.tagline : s.tagline}</p>
      </div>
    </Link>
  )
}

function PatternCard({
  p,
  base,
  gridLabel,
}: {
  p: LayoutPattern | FeedbackPattern
  base: string
  gridLabel?: string
}) {
  const locale = useLocale()
  const e = locale === 'en' ? p.i18n?.en : undefined
  if (p.status !== 'ready') {
    return (
      <div className="style-card lp-card is-planned" aria-disabled="true">
        <div className="lp-thumb">
          <div className="lp-thumb-planned" aria-hidden="true">
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
            <h3>{e ? p.en : p.name}</h3>
            <span className="card-en">{p.en}</span>
            <span className="lp-planned-badge">{locale === 'en' ? 'Planned' : '规划中'}</span>
          </div>
          <p>{e ? e.tagline : p.tagline}</p>
        </div>
      </div>
    )
  }
  return (
    <Link to={`${base}/${p.id}`} className="style-card" aria-label={gridLabel}>
      <div className={`lp-thumb lp-thumb-${p.id}`} aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="card-info">
        <div className="card-titlerow">
          <h3>{e ? p.en : p.name}</h3>
          <span className="card-en">{p.en}</span>
          <span className="card-arrow" aria-hidden="true">
            →
          </span>
        </div>
        <p>{e ? e.tagline : p.tagline}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  const locale = useLocale()
  const t = useT()
  const base = localeBase(locale)
  const [category, setCategory] = useState<'styles' | 'layouts' | 'feedback'>('styles')
  const [q, setQ] = useState('')
  const kw = q.trim().toLowerCase()
  const filteredStyles = kw
    ? styles.filter((s) => {
        const extra = locale === 'en' ? (s.i18n?.en.aliases ?? []) : []
        return [s.name, s.en, ...s.aliases, ...extra, ...s.tags].some((f) =>
          f.toLowerCase().includes(kw),
        )
      })
    : styles

  useEffect(() => {
    document.title = t.homeTitle
  }, [t])

  return (
    <>
      <section className="hero container">
        <p className="hero-eyebrow">{t.heroEyebrow}</p>
        <h1>
          {t.heroTitleA}
          <br />
          {t.heroTitleB}
        </h1>
        <p className="hero-lead">{t.heroLead}</p>
        <div className="hero-meta">
          <span>{t.metaStyles(styles.length)}</span>
          <span>
            {t.metaLayouts(
              layoutPatterns.filter((p) => p.status === 'ready').length,
              layoutPatterns.length,
            )}
          </span>
          <span>{t.metaFeedback(readyFeedbackPatterns.length)}</span>
          <span>{t.metaPrompts}</span>
        </div>
      </section>

      <section className="container">
        <div className="home-switch" role="tablist" aria-label={t.tablistLabel}>
          <button
            type="button"
            role="tab"
            aria-selected={category === 'styles'}
            className={category === 'styles' ? 'active' : ''}
            onClick={() => setCategory('styles')}
          >
            {t.tabStyles}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={category === 'layouts'}
            className={category === 'layouts' ? 'active' : ''}
            onClick={() => setCategory('layouts')}
          >
            {t.tabLayouts}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={category === 'feedback'}
            className={category === 'feedback' ? 'active' : ''}
            onClick={() => setCategory('feedback')}
          >
            {t.tabFeedback}
          </button>
        </div>

        {category === 'styles' ? (
          <>
            <div className="home-search">
              <SearchIcon size={17} />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchLabel}
              />
            </div>
            <div className="home-links">
              <Link to={`${base}/glossary`}>{t.linkGlossary}</Link>
              <Link to={`${base}/scenarios`}>{t.linkScenarios}</Link>
            </div>
            {kw && filteredStyles.length === 0 ? (
              <div className="search-empty">
                {t.searchEmptyLead} <code>毛玻璃</code> <code>黑客屏</code>{' '}
                {locale === 'en' ? (
                  <>
                    <code>frosted glass</code> <code>hacker screen</code>
                  </>
                ) : (
                  <code>辣妹风</code>
                )}
                {locale === 'en' ? '' : <code>像素风</code>}
                {t.searchEmptyOr} <Link to={`${base}/glossary`}>{t.searchEmptyLink}</Link>
                {t.searchEmptyTail}
              </div>
            ) : (
              <div className="card-grid" aria-label={t.gridStyles}>
                {filteredStyles.map((s) => (
                  <StyleCard key={s.id} s={s} />
                ))}
              </div>
            )}
          </>
        ) : category === 'layouts' ? (
          <div className="card-grid" aria-label={t.gridLayouts}>
            {layoutPatterns.map((p) => (
              <PatternCard key={p.id} p={p} base={`${base}/layouts`} />
            ))}
          </div>
        ) : (
          <div className="card-grid" aria-label={t.gridFeedback}>
            {feedbackPatterns.map((p) => (
              <PatternCard key={p.id} p={p} base={`${base}/feedback`} />
            ))}
          </div>
        )}
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>{t.footer}</p>
        </div>
      </footer>
    </>
  )
}
