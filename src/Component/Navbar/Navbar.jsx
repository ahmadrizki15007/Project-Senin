import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo/logo.png";
import DefaultAvatar from "../../assets/profile/profile.png";

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="logoNav">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="profileNav">
        {user ? (
          <>
            <button className="btnNav">Kategori</button>
            <img
              className="imgNav"
              src={user.profilePic || DefaultAvatar}
              alt="User Profile"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = DefaultAvatar;
              }}
            />
            <button className="btnLogout" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btnLogin">Login</button>
            </Link>
            <Link to="/register">
              <button className="btnRegister">Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
