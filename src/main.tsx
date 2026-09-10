import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/base.css'
import './styles/themes/minimal.css'
import './styles/themes/glass.css'
import './styles/themes/neu.css'
import './styles/themes/clay.css'
import './styles/themes/brutal.css'
import './styles/themes/aurora.css'
import './styles/themes/bento.css'
import './styles/themes/pixel.css'
import './styles/themes/m3.css'
import './styles/themes/antd.css'
import './styles/themes/swiss.css'
import './styles/themes/crt.css'
import './styles/themes/y2k.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
