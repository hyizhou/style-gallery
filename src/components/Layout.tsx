import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MoonIcon, SunIcon } from '../icons'
import { styles } from '../data/styles'

type Theme = 'light' | 'dark'

function initialTheme(): Theme {
  try {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* 隐私模式下写入失败可忽略 */
    }
  }, [theme])

  return (
    <div className="app-shell">
      <header className="site-bar">
        <div className="container bar-inner">
          <Link to="/" className="bar-brand">
            <span className="bar-dot" aria-hidden="true" />
            风格标本馆
            <em>STYLE GALLERY</em>
          </Link>
          <div className="bar-right">
            <span className="bar-note">{styles.length} 种风格 · 可交互组件标本</span>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
              aria-label={theme === 'light' ? '切换到暗色主题' : '切换到亮色主题'}
              title="切换明暗主题"
            >
              {theme === 'light' ? <MoonIcon size={17} /> : <SunIcon size={17} />}
            </button>
          </div>
        </div>
      </header>
      <main key={location.pathname}>{children}</main>
    </div>
  )
}
