import { useRoutes } from "react-router-dom"
import Home from "./home/Home"
import Auth from "./auth/Auth"
import Login from "./auth/login/Login"
import Signup from "./auth/signup/Signin"
import Profile from "./profile/Profile"
import Protect from "./provider/Protect"

const RouterController = () => {
  return useRoutes([
    {
        path: "/",
        element:<Home/>
    },
    {
      path: "/profile",
      element:<Protect/>,
      children: [
        {
          path: "/profile/",
          element: <Profile/>
        }
      ]
  },
    {
      path: "/auth",
      element:<Auth/>,
      children: [
        {
          path: "/auth/login",
          element: <Login/>
        },
        {
          path: "/auth/signup",
          element: <Signup/>
        },
      ]
  },
  ])
}

export default RouterController