import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from './Name.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Name/>
  </StrictMode>
)
