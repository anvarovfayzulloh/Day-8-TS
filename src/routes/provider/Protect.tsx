import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { RootState } from "../../redux/store"
const Protect = () => {
    
    const token = useSelector((state: RootState) => state.auth.token)

  if(token){
    return <Outlet />
  }
  else {
    window.location.href = '/auth/login'
  }
}

export default Protect