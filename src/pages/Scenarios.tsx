import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { scenarios } from '../data/scenarios'
import { styles } from '../data/styles'
import { layoutPatterns } from '../data/layouts'

const nameOf = (kind: 'style' | 'layout', id: string) =>
  kind === 'style'
    ? (styles.find((s) => s.id === id)?.name ?? id)
    : (layoutPatterns.find((p) => p.id === id)?.name ?? id)

const hrefOf = (kind: 'style' | 'layout', id: string) =>
  kind === 'style' ? `/styles/${id}` : `/layouts/${id}`

// 场景导购：常见产品场景的风格 / 布局推荐，静态内容页 + 锚点
export default function Scenarios() {
  useEffect(() => {
    document.title = '场景风格推荐 · 风格标本馆'
  }, [])

  return (
    <>
      <header className="scenario-head container">
        <p className="hero-eyebrow">STYLE BY SCENARIO</p>
        <h1>什么产品用什么风格</h1>
        <p>
          不确定自己的项目该长什么样？按场景对号入座：每个推荐都给出理由，
          点进词条可以看完整的可交互标本，并复制提示词直接交给你的 AI。
        </p>
      </header>

      <section className="container">
        <nav className="scenario-toc" aria-label="场景目录">
          {scenarios.map((sc) => (
            <a href={`#${sc.id}`} key={sc.id}>
              {sc.question}
            </a>
          ))}
        </nav>

        {scenarios.map((sc) => (
          <section className="scenario-block" id={sc.id} key={sc.id}>
            <h2>{sc.question}</h2>
            <p className="scenario-context">{sc.context}</p>
            <div className="scenario-picks">
              {sc.picks.map((pick) => (
                <div className="scenario-pick" key={`${pick.kind}-${pick.id}`}>
                  <span className="kind">{pick.kind === 'style' ? '风格' : '布局'}</span>
                  <Link to={hrefOf(pick.kind, pick.id)}>{nameOf(pick.kind, pick.id)}</Link>
                  <span className="reason">{pick.reason}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </section>
    </>
  )
}
