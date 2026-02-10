import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('%cWelcome! what are you inspecting,hmmmm?', 'font-family: monospace; font-size: 14px; color: #00ff00; background: #1a1a1a; padding: 4px 8px; border-radius: 4px;')


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
