import { useState } from "react";
import { useSignUpMutation } from "../../../redux/api/authApi";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signIn, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signIn({ name, email, password, avatar }).unwrap();
      notification.success({
        message: "Signup successful",
        description: "You can now log in",
      })
      navigate("/auth/login")
    } catch (err) {
      console.error("Signup failed: ", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-sky-500 focus:border-sky-500 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-sky-500 focus:border-sky-500 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-sky-500 focus:border-sky-500 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
            Avatar
          </label>
          <input
            onChange={(e) => setAvatar(e.target.value)}
            type="url"
            id="avatar"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-sky-500 focus:border-sky-500 p-2"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full ${isLoading ? "bg-gray-400" : "bg-sky-600"} text-white font-bold py-2 rounded-md hover:bg-sky-700 transition duration-200`}
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
