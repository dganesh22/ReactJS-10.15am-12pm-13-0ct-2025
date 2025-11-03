import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Menu from './component/Menu'
import Home from './Pages/Default/Home'
import ExpenseForm from './Pages/Default/ExpenseForm'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import NotFound from './Pages/Default/NotFound'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
          <Menu/>
          <ToastContainer autoClose={4000} position='top-right' />
          <Routes>
                <Route path={`/`} element={<Home/>} />
                <Route path={`/form`} element={<ExpenseForm/>} />
                <Route path={`/login`} element={<Login/>} />
                <Route path={`/register`} element={<Register/>} />
                <Route path={`/*`} element={<NotFound/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
