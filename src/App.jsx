import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import Branda from "./Page/BrandaPage/Branda.jsx";
import Login from "./Page/FormPage/Login.jsx";
import Register from "./Page/FormPage/Register.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  // Ambil user dari localStorage saat aplikasi pertama kali load
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // Dipanggil saat login/register berhasil
  function handleLogin(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    nav("/");
  }

  // Dipanggil saat logout
  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    nav("/");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Branda user={user} onLogout={handleLogout} />}
      />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<Register onRegister={handleLogin} />} />
    </Routes>
  );
}
