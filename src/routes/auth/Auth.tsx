import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex justify-center items-center bg-sky-600 w-full min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
