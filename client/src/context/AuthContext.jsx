import { createContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem("admin");
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });

  const updateAdmin = (updatedAdmin) => {
    if (!updatedAdmin) return;
    localStorage.setItem("admin", JSON.stringify(updatedAdmin));
    setAdmin(updatedAdmin);
  };

  const login = async (email, password) => {
    try {
      const res = await api.post("/admin/login", { email, password });

      localStorage.setItem("admin", JSON.stringify(res.data.admin));
      localStorage.setItem("token", res.data.token);

      setAdmin(res.data.admin);
      return true;
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{ admin, login, updateAdmin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
