import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Menu from './Component/Menu'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Update from './Pages/Update'
import NotFound from './Pages/NotFound'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
                <Menu/>
                <ToastContainer autoClose={3000} position={'top-right'} />
                <Routes>
                      <Route path={`/`} element={<Home/>} />
                      <Route path={`/create`} element={<Create/>} />
                      <Route path={`/edit/:id`} element={<Update/>} />
                      <Route path={`/*`} element={<NotFound/>} />
                </Routes>
    </BrowserRouter>
  )
}

export default App
