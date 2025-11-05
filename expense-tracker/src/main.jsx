import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import "bootstrap-icons/font/bootstrap-icons.css"

import "react-toastify/ReactToastify.css"

// custom context provider 
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
            <App/>
      </AuthProvider>
  </StrictMode>,
)
