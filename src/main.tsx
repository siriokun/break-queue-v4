import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Pages for direct-path previews
import VideoTransitionPage from './pages/VideoTransitionPage'
import VideoProductTransitionPage from './pages/VideoProductTransitionPage'

const pathname = window.location.pathname

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {pathname === '/video-transition' ? (
        <VideoTransitionPage />
      ) : pathname === '/video-product-transition' ? (
        <VideoProductTransitionPage />
      ) : (
        <App />
      )}
  </StrictMode>,
)
