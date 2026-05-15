import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Identity from './components/Identity.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Identity />
    
  </StrictMode>,
)
