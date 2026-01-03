import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import Login from "./pages/Login";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
  e.preventDefault();

  const success = await login(email, password);
if (success) navigate("/admin/dashboard");

};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black/70 p-8 rounded-2xl shadow-xl w-96 animate-fadeIn"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-800 text-white outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full py-3 bg-indigo-600 rounded text-white font-semibold hover:scale-105 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
