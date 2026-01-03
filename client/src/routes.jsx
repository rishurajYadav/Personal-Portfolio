import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contactus from "./pages/contactus";

// ADMIN PAGES
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminProfile from "./pages/AdminProfile";

// PROTECTED ROUTE
import ProtectedRoute from "./components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contactus />} />

      {/* ADMIN LOGIN */}
      <Route path="/admin/login" element={<Login />} />

      {/* ADMIN PROTECTED */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/profile"
        element={
          <ProtectedRoute>
            <AdminProfile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
