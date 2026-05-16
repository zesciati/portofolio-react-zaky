import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Identity from './pages/Identity.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Identity />
  </StrictMode>,
)
