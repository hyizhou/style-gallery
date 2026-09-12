import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import StyleDetail from './pages/StyleDetail'
import PatternDetail from './pages/PatternDetail'
import Glossary from './pages/Glossary'
import Scenarios from './pages/Scenarios'
import { localeBase, useLocale } from './i18n'

// 弹窗曾挂在布局命名空间下，保留旧地址的重定向（按当前语言落到对应前缀）
function LegacyModalRedirect() {
  const base = localeBase(useLocale())
  return <Navigate to={`${base}/modals/modal`} replace />
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styles/:id" element={<StyleDetail />} />
        <Route path="/layouts/:id" element={<PatternDetail kind="layouts" />} />
        <Route path="/modals/:id" element={<PatternDetail kind="modals" />} />
        <Route path="/layouts/modal" element={<LegacyModalRedirect />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/scenarios" element={<Scenarios />} />
        {/* 英文版本：/en 前缀，页面组件按路径自行判定语言 */}
        <Route path="/en" element={<Home />} />
        <Route path="/en/styles/:id" element={<StyleDetail />} />
        <Route path="/en/layouts/:id" element={<PatternDetail kind="layouts" />} />
        <Route path="/en/modals/:id" element={<PatternDetail kind="modals" />} />
        <Route path="/en/layouts/modal" element={<LegacyModalRedirect />} />
        <Route path="/en/glossary" element={<Glossary />} />
        <Route path="/en/scenarios" element={<Scenarios />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
