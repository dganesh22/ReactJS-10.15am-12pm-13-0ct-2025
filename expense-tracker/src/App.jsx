import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Menu from './component/Menu'
import Home from './Pages/Default/Home'
import ExpenseForm from './Pages/Default/ExpenseForm'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import NotFound from './Pages/Default/NotFound'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './Routes/PrivateRoute'
import useAuth from './Hook/useAuth'

function App() {
  const { isLogin } = useAuth()
  return (
    <BrowserRouter>
          <Menu/>
          <ToastContainer autoClose={4000} position='top-right' />
          <Routes>
                <Route element={<PrivateRoute/>}>
                    <Route path={`/`} element={<Home/>} />
                    <Route path={`/form`} element={<ExpenseForm/>} />
                </Route>
                <Route path={`/login`} element={isLogin ? <Navigate to={`/`} />: <Login/>} />
                <Route path={`/register`} element={isLogin ? <Navigate to={`/`} />:<Register/>} />
                <Route path={`/*`} element={<NotFound/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
