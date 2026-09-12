import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MoonIcon, SunIcon } from '../icons'
import { styles } from '../data/styles'
import { swapLocalePath, useT } from '../i18n'

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
  const t = useT()
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
          <Link to={location.pathname.startsWith('/en') ? '/en' : '/'} className="bar-brand">
            <span className="bar-dot" aria-hidden="true" />
            {t.brand}
            <em>{t.brandEm}</em>
          </Link>
          <div className="bar-right">
            <span className="bar-note">{t.barNote(styles.length)}</span>
            <Link to={swapLocalePath(location.pathname)} className="lang-toggle" aria-label="Switch language">
              {t.langSwitch}
            </Link>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((v) => (v === 'light' ? 'dark' : 'light'))}
              aria-label={theme === 'light' ? t.themeToDark : t.themeToLight}
              title={t.themeTitle}
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
