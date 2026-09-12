import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { layoutPatterns, readyLayoutPatterns } from '../data/layouts'
import { feedbackPatterns, readyFeedbackPatterns } from '../data/feedback'
import { styles } from '../data/styles'
import { pairings } from '../data/pairings'
import PromptCard from '../components/PromptCard'
import { groupEn, heatEn, localeBase, useLocale, useT } from '../i18n'
import HolyGrailDemo from '../components/layouts/HolyGrailDemo'
import SidebarDashboardDemo from '../components/layouts/SidebarDashboardDemo'
import MasterDetailDemo from '../components/layouts/MasterDetailDemo'
import SplitScreenDemo from '../components/layouts/SplitScreenDemo'
import SingleColumnDemo from '../components/layouts/SingleColumnDemo'
import MasonryDemo from '../components/layouts/MasonryDemo'
import CardGridDemo from '../components/layouts/CardGridDemo'
import BentoGridDemo from '../components/layouts/BentoGridDemo'
import TopHeroDemo from '../components/layouts/TopHeroDemo'
import FullBleedDemo from '../components/layouts/FullBleedDemo'
import MagazineDemo from '../components/layouts/MagazineDemo'
import KanbanDemo from '../components/layouts/KanbanDemo'
import FeatureAlternatingDemo from '../components/layouts/FeatureAlternatingDemo'
import CenteredCardDemo from '../components/layouts/CenteredCardDemo'
import ZPatternDemo from '../components/layouts/ZPatternDemo'
import WizardDemo from '../components/layouts/WizardDemo'
import ThreeColumnDemo from '../components/layouts/ThreeColumnDemo'
import BoxedDemo from '../components/layouts/BoxedDemo'
import FPatternDemo from '../components/layouts/FPatternDemo'
import HorizontalScrollDemo from '../components/layouts/HorizontalScrollDemo'
import AlertDemo from '../components/feedback/AlertDemo'
import ToastDemo from '../components/feedback/ToastDemo'
import NotificationDemo from '../components/feedback/NotificationDemo'
import ModalDemo from '../components/feedback/ModalDemo'
import DrawerDemo from '../components/feedback/DrawerDemo'
import BottomSheetDemo from '../components/feedback/BottomSheetDemo'
import PopconfirmDemo from '../components/feedback/PopconfirmDemo'
import PopoverDemo from '../components/feedback/PopoverDemo'
import TooltipDemo from '../components/feedback/TooltipDemo'
import ProgressDemo from '../components/feedback/ProgressDemo'
import SkeletonDemo from '../components/feedback/SkeletonDemo'
import SpinnerDemo from '../components/feedback/SpinnerDemo'
import ResultDemo from '../components/feedback/ResultDemo'
import EmptyDemo from '../components/feedback/EmptyDemo'

// 布局与反馈两个大类共用同一套详情页结构：画框、预览宽度、要点区、提示词区
const collections = {
  layouts: {
    all: layoutPatterns,
    ready: readyLayoutPatterns,
    demos: {
      'holy-grail': HolyGrailDemo,
      'sidebar-dashboard': SidebarDashboardDemo,
      'master-detail': MasterDetailDemo,
      split: SplitScreenDemo,
      'single-column': SingleColumnDemo,
      masonry: MasonryDemo,
      'card-grid': CardGridDemo,
      'bento-grid': BentoGridDemo,
      'top-hero': TopHeroDemo,
      'full-bleed': FullBleedDemo,
      magazine: MagazineDemo,
      kanban: KanbanDemo,
      'feature-alternating': FeatureAlternatingDemo,
      'centered-card': CenteredCardDemo,
      'z-pattern': ZPatternDemo,
      wizard: WizardDemo,
      'three-column': ThreeColumnDemo,
      boxed: BoxedDemo,
      'f-pattern': FPatternDemo,
      'horizontal-scroll': HorizontalScrollDemo,
    } as Record<string, () => JSX.Element>,
    base: '/layouts',
  },
  feedback: {
    all: feedbackPatterns,
    ready: readyFeedbackPatterns,
    demos: {
      alert: AlertDemo,
      toast: ToastDemo,
      notification: NotificationDemo,
      modal: ModalDemo,
      drawer: DrawerDemo,
      'bottom-sheet': BottomSheetDemo,
      popconfirm: PopconfirmDemo,
      popover: PopoverDemo,
      tooltip: TooltipDemo,
      progress: ProgressDemo,
      skeleton: SkeletonDemo,
      spinner: SpinnerDemo,
      result: ResultDemo,
      empty: EmptyDemo,
    } as Record<string, () => JSX.Element>,
    base: '/feedback',
  },
}

const widths = [
  { key: 'desktop', labelKey: 'widthDesktop' },
  { key: 'tablet', labelKey: 'widthTablet' },
  { key: 'mobile', labelKey: 'widthMobile' },
] as const

type WidthKey = (typeof widths)[number]['key']

export default function PatternDetail({ kind }: { kind: keyof typeof collections }) {
  const { id } = useParams()
  const locale = useLocale()
  const t = useT()
  const prefix = localeBase(locale)
  const { all, ready, demos, base } = collections[kind]
  const pattern = all.find((p) => p.id === id)
  const [width, setWidth] = useState<WidthKey>('desktop')

  const displayName = (list: { id: string; name: string; en: string }[], pid: string) => {
    const item = list.find((x) => x.id === pid)
    if (!item) return pid
    return locale === 'en' ? item.en : item.name
  }

  useEffect(() => {
    if (pattern) document.title = `${locale === 'en' ? pattern.en : `${pattern.name} ${pattern.en}`} · ${t.siteSuffix}`
  }, [pattern, locale, t])

  if (!pattern || pattern.status !== 'ready') return <Navigate to={prefix || '/'} replace />

  const e = locale === 'en' ? pattern.i18n?.en : undefined
  const rIndex = ready.findIndex((p) => p.id === pattern.id)
  const prev = ready[(rIndex - 1 + ready.length) % ready.length]
  const next = ready[(rIndex + 1) % ready.length]
  const Demo = demos[pattern.id]
  const relatedPairings = pairings.filter((p) => p.layoutIds.includes(pattern.id))
  const groupLabel = locale === 'en' ? (groupEn[pattern.group] ?? pattern.group) : pattern.group
  const heatLabel = locale === 'en' ? (heatEn[pattern.heat] ?? pattern.heat) : pattern.heat

  return (
    <>
      <div className="detail layout-detail">
        <div className="container">
          <Link to={prefix || '/'} className="backlink">
            {t.back}
          </Link>
          <header className="detail-head">
            <span className="detail-en">
              {pattern.en} · {groupLabel} · {heatLabel}
            </span>
            <h1>{e ? pattern.en : pattern.name}</h1>
            <p className="detail-tagline">{e ? e.tagline : pattern.tagline}</p>
            <p className="detail-desc">{e ? e.desc : pattern.desc}</p>
            <div className="detail-tags">
              {(e ? e.tags : pattern.tags).map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {pattern.notes && (
            <div className="lp-toolbar">
              <span className="ctl-label">{t.widthLabel}</span>
              <div className="lp-width-switch" role="group" aria-label={t.widthGroup}>
                {widths.map((w) => (
                  <button
                    type="button"
                    key={w.key}
                    className={width === w.key ? 'active' : ''}
                    aria-pressed={width === w.key}
                    onClick={() => setWidth(w.key)}
                  >
                    {t[w.labelKey]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {pattern.notes && Demo && (
          <div className="container">
            <div className={`demo-frame lp-w-${width}`}>
              <div className="demo-frame-bar" aria-hidden="true">
                <span className="demo-dot" />
                <span className="demo-dot" />
                <span className="demo-dot" />
                <span className="demo-frame-url">{pattern.en.toLowerCase().replace(/[^a-z]+/g, ' ')}.example</span>
              </div>
              <div className="demo-frame-body">
                <Demo />
              </div>
            </div>

            <section className="lp-notes">
              <div className="lp-note-block">
                <h3 className="lp-note-title">{t.useTitle}</h3>
                <ul>
                  {(e?.use ?? pattern.notes!.use).map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </div>
              <div className="lp-note-block">
                <h3 className="lp-note-title">{t.caveatsTitle}</h3>
                <ul>
                  {(e?.caveats ?? pattern.notes!.caveats).map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="lp-note-block lp-note-css">
                <h3 className="lp-note-title">{t.cssTitle}</h3>
                <code>{e?.css ?? pattern.notes!.css}</code>
              </div>
            </section>
          </div>
        )}

        {pattern.prompt && (
          <section className="container prompt-section">
            <h2 className="section-title">{t.promptTitle}</h2>
            <PromptCard
              defaultKey={locale === 'en' ? 'en' : 'zh'}
              variants={
                locale === 'en'
                  ? [
                      { key: 'en', label: t.variantEn, text: pattern.prompt.en },
                      { key: 'short', label: t.variantShort, text: pattern.prompt.short },
                      { key: 'zh', label: t.variantZh, text: pattern.prompt.zh },
                    ]
                  : [
                      { key: 'short', label: t.variantShort, text: pattern.prompt.short },
                      { key: 'zh', label: t.variantZh, text: pattern.prompt.zh },
                      { key: 'en', label: t.variantEn, text: pattern.prompt.en },
                    ]
              }
            />
          </section>
        )}

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
                      {p.styleIds.map((sid) => (
                        <Link to={`${prefix}/styles/${sid}`} key={sid}>
                          {t.pairingStyle(displayName(styles, sid))}
                        </Link>
                      ))}
                      {p.layoutIds
                        .filter((lid) => lid !== pattern.id)
                        .map((lid) => (
                          <Link to={`${prefix}/layouts/${lid}`} key={lid}>
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

      {ready.length > 1 && (
        <nav className="detail-nav container" aria-label={t.navPatterns}>
          <Link to={`${prefix}${base}/${prev.id}`} className="nav-card">
            <span>{t.prevPattern}</span>
            <strong>{locale === 'en' ? prev.en : prev.name}</strong>
          </Link>
          <Link to={`${prefix}${base}/${next.id}`} className="nav-card">
            <span>{t.nextPattern}</span>
            <strong>{locale === 'en' ? next.en : next.name}</strong>
          </Link>
        </nav>
      )}
    </>
  )
}
