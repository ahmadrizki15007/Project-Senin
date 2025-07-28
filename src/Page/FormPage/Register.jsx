import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Form.css";
import { registerUser } from "../../Service/Api/userService";
import logo from "../../assets/logo/google1.png";

export default function Register({ onRegister }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    hp: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      return setError("Password dan konfirmasi tidak cocok");
    }

    try {
      const user = await registerUser({
        name: form.name,
        email: form.email,
        hp: form.hp,
        password: form.password,
      });
      onRegister(user);
      nav("/");
    } catch (err) {
      setError(err.message || "Register gagal");
    }
  };

  return (
    <div className="formContainer">
      <div className="formHeading">
        <h2>Pendaftaran Akun</h2>
        <p>Yuk, daftarkan akunmu sekarang juga</p>
      </div>
      <form className="formBox" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="name">
            Nama Lengkap<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            required
            minLength={3}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="email">
            E‑Mail<span style={{ color: "red" }}>*</span>
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
          <label htmlFor="hp">
            No. HP<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="hp"
            name="hp"
            inputMode="numeric"
            pattern="[0-9]{8,15}"
            value={form.hp}
            onChange={handleChange}
            placeholder="081234567890"
            required
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">
            Kata Sandi<span style={{ color: "red" }}>*</span>
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

        <div className="inputContainer">
          <label htmlFor="confirm">
            Konfirmasi Kata Sandi<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            id="confirm"
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Ulangi kata sandi"
            required
            minLength={6}
          />
        </div>

        {error && <p className="errorText">{error}</p>}

        <button type="submit" className="btnPrimary">
          Daftar
        </button>
        <Link to="/login" className="btnLink">
          <button type="button" className="btnSecondary">
            Masuk
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
  );
}
