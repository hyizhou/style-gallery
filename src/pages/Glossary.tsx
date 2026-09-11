import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../data/styles'
import { readyLayoutPatterns } from '../data/layouts'

// 风格词典：术语 ↔ 口语别名的对照表，别名以正文文本出现（可被搜索索引）
export default function Glossary() {
  useEffect(() => {
    document.title = '风格词典 · 风格标本馆'
  }, [])

  return (
    <>
      <header className="glossary-head container">
        <p className="hero-eyebrow">UI STYLE GLOSSARY</p>
        <h1>风格词典</h1>
        <p>
          叫不出一种效果的名字时，按口语说法来这里查：毛玻璃是玻璃拟态，黑客屏是终端 CRT，辣妹风是 Y2K。
          点进词条查看完整的可交互组件标本，并拿到可直接复制给 AI 的提示词。
        </p>
      </header>

      <section className="container">
        <section className="glo-section">
          <h2>视觉风格 / Styles</h2>
          <div className="glo-grid">
            {styles.map((s) => (
              <Link to={`/styles/${s.id}`} key={s.id} className="glo-item">
                <span className={`glo-preview theme-${s.id}`}>
                  <span className="btn btn-primary">按钮</span>
                </span>
                <span className="glo-main">
                  <h3>{s.name}</h3>
                  <span className="glo-en">{s.en}</span>
                  <p className="glo-alias">
                又叫：<em>{s.aliases.join(' / ')}</em>
                  </p>
                  <p className="glo-tagline">{s.tagline}</p>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="glo-section">
          <h2>布局模式 / Layouts</h2>
          <div className="glo-grid">
            {readyLayoutPatterns.map(
              (p) =>
                p.aliases && (
                  <Link to={`/layouts/${p.id}`} key={p.id} className="glo-item">
                    <span className="glo-main">
                      <h3>{p.name}</h3>
                      <span className="glo-en">{p.en}</span>
                      <p className="glo-alias">
                又叫：<em>{p.aliases.join(' / ')}</em>
                      </p>
                      <p className="glo-tagline">{p.tagline}</p>
                    </span>
                  </Link>
                ),
            )}
          </div>
        </section>
      </section>
    </>
  )
}
