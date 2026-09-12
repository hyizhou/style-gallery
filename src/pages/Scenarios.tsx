import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { scenarios } from '../data/scenarios'
import { styles } from '../data/styles'
import { layoutPatterns } from '../data/layouts'
import { feedbackPatterns } from '../data/feedback'
import { localeBase, useLocale, useT } from '../i18n'

type PickKind = 'style' | 'layout' | 'feedback'

// 场景导购：常见产品场景的风格 / 布局推荐，静态内容页 + 锚点
export default function Scenarios() {
  const locale = useLocale()
  const t = useT()
  const base = localeBase(locale)

  const nameOf = (kind: PickKind, id: string) => {
    const list: { id: string; name: string; en: string }[] =
      kind === 'style' ? styles : kind === 'feedback' ? feedbackPatterns : layoutPatterns
    const item = list.find((p) => p.id === id)
    if (!item) return id
    return locale === 'en' ? item.en : item.name
  }

  const hrefOf = (kind: PickKind, id: string) =>
    kind === 'style' ? `${base}/styles/${id}` : kind === 'feedback' ? `${base}/feedback/${id}` : `${base}/layouts/${id}`

  useEffect(() => {
    document.title =
      locale === 'en' ? `Style by Scenario · ${t.siteSuffix}` : `场景风格推荐 · ${t.siteSuffix}`
  }, [locale, t])

  return (
    <>
      <header className="scenario-head container">
        <p className="hero-eyebrow">{t.scEyebrow}</p>
        <h1>{t.scTitle}</h1>
        <p>{t.scLead}</p>
      </header>

      <section className="container">
        <nav className="scenario-toc" aria-label={t.scToc}>
          {scenarios.map((sc) => (
            <a href={`#${sc.id}`} key={sc.id}>
              {locale === 'en' ? (sc.i18n?.en.question ?? sc.question) : sc.question}
            </a>
          ))}
        </nav>

        {scenarios.map((sc) => {
          const e = locale === 'en' ? sc.i18n?.en : undefined
          return (
            <section className="scenario-block" id={sc.id} key={sc.id}>
              <h2>{e ? e.question : sc.question}</h2>
              <p className="scenario-context">{e ? e.context : sc.context}</p>
              <div className="scenario-picks">
                {sc.picks.map((pick, i) => (
                  <div className="scenario-pick" key={`${pick.kind}-${pick.id}`}>
                    <span className="kind">
                      {pick.kind === 'style' ? t.kindStyle : pick.kind === 'feedback' ? t.kindFeedback : t.kindLayout}
                    </span>
                    <Link to={hrefOf(pick.kind, pick.id)}>{nameOf(pick.kind, pick.id)}</Link>
                    <span className="reason">{e ? (e.reasons[i] ?? pick.reason) : pick.reason}</span>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </section>
    </>
  )
}
