import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Import the new page lazily to avoid changing routing dependencies
import VideoTransitionPage from './pages/VideoTransitionPage'

const pathname = window.location.pathname

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {pathname === '/video-transition' ? <VideoTransitionPage /> : <App />}
  </StrictMode>,
)
