import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './contexts/LanguageProvider'
import { ProductProvider } from './contexts/ProductProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </LanguageProvider>
  </StrictMode>,
)
