import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import AppProvider from './Context/AppProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AppProvider>
              <App/>
        </AppProvider>
  </StrictMode>,
)
