import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import StyleDetail from './pages/StyleDetail'
import PatternDetail from './pages/PatternDetail'
import Glossary from './pages/Glossary'
import Scenarios from './pages/Scenarios'
import { localeBase, useLocale } from './i18n'

// 大类两次更名的旧地址重定向：/layouts/modal（挂在布局下时期）与 /modals/:id（弹窗大类时期），
// 均按当前语言落到 /feedback/:id
function LegacyPatternRedirect() {
  const { id = 'modal' } = useParams()
  const base = localeBase(useLocale())
  return <Navigate to={`${base}/feedback/${id}`} replace />
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styles/:id" element={<StyleDetail />} />
        <Route path="/layouts/:id" element={<PatternDetail kind="layouts" />} />
        <Route path="/feedback/:id" element={<PatternDetail kind="feedback" />} />
        <Route path="/modals/:id" element={<LegacyPatternRedirect />} />
        <Route path="/layouts/modal" element={<LegacyPatternRedirect />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/scenarios" element={<Scenarios />} />
        {/* 英文版本：/en 前缀，页面组件按路径自行判定语言 */}
        <Route path="/en" element={<Home />} />
        <Route path="/en/styles/:id" element={<StyleDetail />} />
        <Route path="/en/layouts/:id" element={<PatternDetail kind="layouts" />} />
        <Route path="/en/feedback/:id" element={<PatternDetail kind="feedback" />} />
        <Route path="/en/modals/:id" element={<LegacyPatternRedirect />} />
        <Route path="/en/layouts/modal" element={<LegacyPatternRedirect />} />
        <Route path="/en/glossary" element={<Glossary />} />
        <Route path="/en/scenarios" element={<Scenarios />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
