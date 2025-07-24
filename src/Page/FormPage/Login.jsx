import React from "react";
import logo from "../../assets/logo/google1.png";
import "./Form.css";
import Navbar from "../../Component/Navbar/Navbar";

const red = "#ff0000";

export default function Login(brand, item) {
  return (
    <>
      <Navbar hideSecond={true} />
      <div className="formContainer">
        <div className="formHeading">
          <h2>Masuk ke Akun</h2>
          <p>Yuk, lanjutin belajar mu di videobelajar</p>
        </div>
        <div>
          <form className="formBox">
            <div className="inputContainer">
              <label htmlFor="email">
                E-Mail<span style={{ color: red }}>*</span>
              </label>
              <input type="email" id="email1" placeholder="" required></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="password">
                Password<span style={{ color: red }}>*</span>
              </label>
              <input
                type="password"
                id="password1"
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
    </>
  );
}
