import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RootState } from "../../redux/store";
const Nav = () => {
  const { pathname } = useLocation()
  const token = useSelector((state: RootState) => state.auth.token)
  console.log(token)
  if (pathname.includes("auth")) {
    return null
  }

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          MyApp
        </Link>
        <ul className="flex space-x-4">
          {
            token ? (
              <li>
                <NavLink to="/profile" className="text-gray-300 hover:text-white transition duration-200" >
                  Profile
                </NavLink>
              </li>
            ) : (
              <ul className="flex space-x-4" >
                <li>
                  <NavLink
                    to="/auth/login"
                    className={({ isActive }) => `text-gray-300 hover:text-white transition duration-200 ${isActive ? "underline" : ""}`} >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/auth/signup"
                    className={({ isActive }) => `text-gray-300 hover:text-white transition duration-200 ${isActive ? "underline" : ""}`} >
                    Sign In
                  </NavLink>
                </li>
              </ul>
            )
          }
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
