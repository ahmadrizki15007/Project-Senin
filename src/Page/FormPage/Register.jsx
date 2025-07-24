import React from "react";
import "./Form.css";
import logo from "../../assets/logo/google1.png";

const red = "#ff0000";

export default function Register(brand, item) {
  return (
    <div className="formContainer">
      <div className="formHeading">
        <h2>Pendaftaran Akun</h2>
        <p>Yuk, daftarkan akunmu sekarang juga</p>
      </div>
      <div>
        <form className="formBox">
          <div className="inputContainer">
            <label htmlFor="nama">
              Nama Lengkap<span style={{ color: red }}>*</span>
            </label>
            <input type="nama" id="nama" placeholder="" required></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="email">
              E-Mail<span style={{ color: red }}>*</span>
            </label>
            <input type="email" id="email" placeholder="" required></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="no.hp">
              No. HP<span style={{ color: red }}>*</span>
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              id="no.hp"
              placeholder=""
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">
              Kata Sandi<span style={{ color: red }}>*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder=""
              required
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="konfirmasi">
              Konfirmasi Kata Sandi<span style={{ color: red }}>*</span>
            </label>
            <input
              type="password"
              id="konfirmasi"
              placeholder=""
              required
            ></input>
          </div>
          <a href="..." className="forgetPassword">
            Lupa Password?
          </a>
          <button type="submit" className="btnPrimary">
            Masuk
          </button>
          <button type="button" className="btnSecondary">
            Daftar
          </button>
        </form>
        <div className="separator">
          <div className="lineSeparator">
            <p>atau</p>
          </div>
        </div>
        <button type="button" className="btnGoogle">
          <img src={logo} alt="logo" />
          Masuk dengan Google
        </button>
      </div>
    </div>
  );
}
