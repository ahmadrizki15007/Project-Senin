import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo/logo.png";
import Profile from "../../assets/profile/profile.png";

export default function Navbar({ hideSecond }) {
  return (
    <nav>
      <div className="logoNav">
        <img src={Logo} alt="logo" />
      </div>
      {!hideSecond && (
        <div className="profileNav">
          <button className="btnNav">Kategori </button>
          <img className="imgNav" src={Profile} alt="profile" />
          <button className="btnLogin">Login</button>
          <button className="btnRegister">Register</button>
        </div>
      )}
    </nav>
  );
}
