import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import StyleDetail from './pages/StyleDetail'
import LayoutPattern from './pages/LayoutPattern'
import Glossary from './pages/Glossary'
import Scenarios from './pages/Scenarios'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styles/:id" element={<StyleDetail />} />
        <Route path="/layouts/:id" element={<LayoutPattern />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
