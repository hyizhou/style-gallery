import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import StyleDetail from './pages/StyleDetail'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styles/:id" element={<StyleDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
