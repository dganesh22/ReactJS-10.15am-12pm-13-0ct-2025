import { Navigate, Outlet } from 'react-router'
import useAuth from '../Hook/useAuth'

function PrivateRoute() {
    const { isLogin } = useAuth()

  return (
    <div>
        {
            isLogin ? <Outlet/> : <Navigate to={`/login`} />
        }
    </div>
  )
}

export default PrivateRoute
