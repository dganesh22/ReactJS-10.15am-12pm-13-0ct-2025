import React from 'react'
import { NavLink } from 'react-router'
import useAuth from '../Hook/useAuth'
import { ExpenseApi } from '../API/ExpenseApi'
import { toast } from 'react-toastify'
import axios from 'axios'

function Menu(props) {
    const { isLogin, setToken,setIsLogin, setUser } = useAuth()

    const logoutHandler = async () => {
        if(window.confirm(`Are you sure to logout?`)) {
                await axios.get(ExpenseApi?.logoutUser)
                    .then(res => {
                        toast.success(res?.data?.msg)
                        sessionStorage.removeItem("token")
                        setToken(false)
                        setIsLogin(false)
                        setUser(null)
                    }).catch(err => toast.error(err?.response?.data?.msg))
        }
    }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">Expense Tracker</NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="menu">
                
                {
                    isLogin ? (
                        <>
                         <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={`/`} className="nav-link">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink to={`/newexpense`} className="nav-link">Expense Form</NavLink>
                            </li> */}
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink onClick={logoutHandler} className="btn btn-danger">Logout</NavLink>
                            </li>
                        </ul>
                        </>
                    ) : (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={`/login`} className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/register`} className="nav-link">Register</NavLink>
                            </li>
                        </ul>
                    )
                }
            </div>
        </div>
    </nav>
  )
}

export default Menu
