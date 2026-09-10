import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { styles } from '../data/styles'

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app-shell">
      <header className="site-bar">
        <div className="container bar-inner">
          <Link to="/" className="bar-brand">
            <span className="bar-dot" aria-hidden="true" />
            风格标本馆
            <em>STYLE GALLERY</em>
          </Link>
          <span className="bar-note">{styles.length} 种风格 · 可交互组件标本</span>
        </div>
      </header>
      <main key={location.pathname}>{children}</main>
    </div>
  )
}
