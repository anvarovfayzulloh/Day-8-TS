import { useState } from "react";
import { useLogInMutation } from "../../../redux/api/authApi";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/slice/authslice";
import { AppDispatch } from "../../../redux/store"

const Login = () => {
    const [login, { data, isLoading }] = useLogInMutation();
    const dispatch = useDispatch<AppDispatch>()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await login({ email, password }).unwrap();
            if(data?.access_token){
                notification.success({
                    message: "Login successful",
                    description: "You can now log in",
                })
                localStorage.setItem("token", data?.access_token);
                dispatch(logIn(data?.access_token))
                console.log(data)
                navigate("/")
            }
            else{
                notification.error({
                    message: "Login failed",
                    description: "Please try again",
                })
            console.log(data)
        }
        } catch (err) {
            console.error("Login failed: ", err);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-sky-500 focus:border-sky-500 p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-sky-500 focus:border-sky-500 p-2" />
                </div>
                <button type="submit" disabled={isLoading} className={`w-full ${isLoading ? "bg-gray-400" : "bg-sky-600"} text-white font-bold py-2 rounded-md hover:bg-sky-700 transition duration-200`} >
                    {isLoading ? "Logging In..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;
