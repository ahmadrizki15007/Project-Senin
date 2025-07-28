import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/logo.png";
import linkedin from "../../assets/logo/linkedin.png";
import facebook from "../../assets/logo/facebook.png";
import instagram from "../../assets/logo/instagram.png";
import twitter from "../../assets/logo/twitter.png";

export default function Footer() {
  return (
    <footer>
      <div className="footerWrapper">
        <div className="footer1">
          <div className="footerls">
            <img src={logo} alt="Logo" className="logo" />
            <div className="footerls-content">
              <p>
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </p>
              <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
              <p>+62-877-7123-1234</p>
            </div>
          </div>
          <div className="footerrs">
            <div className="kategori-container">
              <button className="kategori-btn">Kategori</button>
              <div className="dropdown">
                <a href="#">Digital & Teknologi</a>
                <a href="#">Pemasaran</a>
                <a href="#">Manajemen Bisnis</a>
                <a href="#">Pengembangan Diri</a>
                <a href="#">Desain</a>
              </div>
            </div>
            <div className="kategori-container">
              <button className="kategori-btn">Perusahaan</button>
              <div className="dropdown">
                <a href="#">Tentang Kami</a>
                <a href="#">FAQ</a>
                <a href="#">Kebijakan Privasi</a>
                <a href="#">Ketentuan Layanan</a>
                <a href="#">Bantuan</a>
              </div>
            </div>
            <div className="kategori-container">
              <button className="kategori-btn">Komunitas</button>
              <div className="dropdown">
                <a href="#">Tips Sukses</a>
                <a href="#">Blog</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer2"></div>
        <div className="footer3">
          <p>@2023 Gerobak Sayur All Rights Reserved.</p>
          <div>
            <a href="#" className="flogo">
              <img src={linkedin} alt="Logo linkedin" />
            </a>
            <a href="#" className="flogo">
              <img src={facebook} alt="Logo facebook" />
            </a>
            <a href="#" className="flogo">
              <img src={instagram} alt="Logo instagram" />
            </a>
            <a href="#" className="flogo">
              <img src={twitter} alt="Logo twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
