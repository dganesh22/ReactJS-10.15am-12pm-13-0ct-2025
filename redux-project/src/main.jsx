import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import "bootstrap-icons/font/bootstrap-icons.css"
import "react-toastify/ReactToastify.css"

import { Provider } from 'react-redux'
import AppStore from './Redux/Store/AppStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Provider store={AppStore}>
            <App/>
        </Provider>
  </StrictMode>,
)
