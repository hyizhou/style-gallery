import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { layoutPatterns, readyLayoutPatterns } from '../data/layouts'
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

const demos: Record<string, () => JSX.Element> = {
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
}

const widths = [
  { key: 'desktop', label: '桌面' },
  { key: 'tablet', label: '平板' },
  { key: 'mobile', label: '手机' },
] as const

type WidthKey = (typeof widths)[number]['key']

export default function LayoutPattern() {
  const { id } = useParams()
  const index = layoutPatterns.findIndex((p) => p.id === id)
  const pattern = layoutPatterns[index]
  const [width, setWidth] = useState<WidthKey>('desktop')

  useEffect(() => {
    if (pattern) document.title = `${pattern.name} ${pattern.en} · 风格标本馆`
  }, [pattern])

  if (!pattern || pattern.status !== 'ready') return <Navigate to="/" replace />

  const ready = readyLayoutPatterns
  const rIndex = ready.findIndex((p) => p.id === pattern.id)
  const prev = ready[(rIndex - 1 + ready.length) % ready.length]
  const next = ready[(rIndex + 1) % ready.length]
  const Demo = demos[pattern.id]

  return (
    <>
      <div className="detail layout-detail">
        <div className="container">
          <Link to="/" className="backlink">
            ← 返回标本馆
          </Link>
          <header className="detail-head">
            <span className="detail-en">
              {pattern.en} · {pattern.group} · {pattern.heat}
            </span>
            <h1>{pattern.name}</h1>
            <p className="detail-tagline">{pattern.tagline}</p>
            <p className="detail-desc">{pattern.desc}</p>
            <div className="detail-tags">
              {pattern.tags.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </header>

          {pattern.notes && (
            <div className="lp-toolbar">
              <span className="ctl-label">预览宽度</span>
              <div className="lp-width-switch" role="group" aria-label="预览宽度">
                {widths.map((w) => (
                  <button
                    type="button"
                    key={w.key}
                    className={width === w.key ? 'active' : ''}
                    aria-pressed={width === w.key}
                    onClick={() => setWidth(w.key)}
                  >
                    {w.label}
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
                <span className="demo-frame-url">{pattern.en.toLowerCase()}.example</span>
              </div>
              <div className="demo-frame-body">
                <Demo />
              </div>
            </div>

            <section className="lp-notes">
              <div className="lp-note-block">
                <h3 className="lp-note-title">何时使用</h3>
                <ul>
                  {pattern.notes.use.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </div>
              <div className="lp-note-block">
                <h3 className="lp-note-title">权衡与注意</h3>
                <ul>
                  {pattern.notes.caveats.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="lp-note-block lp-note-css">
                <h3 className="lp-note-title">关键实现</h3>
                <code>{pattern.notes.css}</code>
              </div>
            </section>
          </div>
        )}
      </div>

      <nav className="detail-nav container" aria-label="模式切换">
        <Link to={`/layouts/${prev.id}`} className="nav-card">
          <span>← 上一个模式</span>
          <strong>{prev.name}</strong>
        </Link>
        <Link to={`/layouts/${next.id}`} className="nav-card">
          <span>下一个模式 →</span>
          <strong>{next.name}</strong>
        </Link>
      </nav>
    </>
  )
}
