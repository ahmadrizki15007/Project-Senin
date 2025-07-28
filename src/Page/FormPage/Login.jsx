import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo/google1.png";
import "./Form.css";
import Navbar from "../../Component/Navbar/Navbar";
import { loginUser } from "../../Service/Api/userService";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = await loginUser(form);
      onLogin(user);
      nav("/");
    } catch (err) {
      setError(err.message || "Login gagal");
    }
  };

  return (
    <>
      <Navbar user={null} />
      <div className="formContainer">
        <div className="formHeading">
          <h2>Masuk ke Akun</h2>
          <p>Yuk, lanjutkan belajar mu di videobelajar</p>
        </div>
        <form className="formBox" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="email">
              E-Mail<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@domain.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password">
              Password<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Minimal 6 karakter"
              required
              minLength={6}
            />
          </div>

          {error && <p className="errorText">{error}</p>}

          <a href="..." className="forgetPassword">
            Lupa Password?
          </a>

          <button type="submit" className="btnPrimary">
            Masuk
          </button>

          <Link to="/register" className="btnLink">
            <button type="button" className="btnSecondary">
              Daftar
            </button>
          </Link>
        </form>

        <div className="loginGoogle">
          <div className="separator">
            <div className="lineSeparator">
              <p>atau</p>
            </div>
          </div>

          <button type="button" className="btnGoogle">
            <img src={logo} alt="logo-google" />
            Masuk dengan Google
          </button>
        </div>
      </div>
    </>
  );
}
