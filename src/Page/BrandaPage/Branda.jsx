import React from "react";
import "./Branda.css";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
// componen import
import Card from "../../Component/Card/Cards";
import Banner1 from "../../Component/banner/Banner1";
import Banner2 from "../../Component/banner/Banner2";

// aset import
import Aset1 from "../../assets/img/Aset1.png";
import Aset2 from "../../assets/img/Aset2.png";
import Aset3 from "../../assets/img/Aset3.png";
import Aset4 from "../../assets/img/Aset4.png";
import Aset5 from "../../assets/img/Aset5.png";
import Aset6 from "../../assets/img/Aset6.png";
import Aset7 from "../../assets/img/Aset7.png";
import Aset8 from "../../assets/img/Aset8.png";
import Aset9 from "../../assets/img/Aset9.png";
// profile import
import Profile1 from "../../assets/profile/profile 1.png";
import Profile2 from "../../assets/profile/profile 2.png";
import Profile3 from "../../assets/profile/profile 3.png";
import Profile4 from "../../assets/profile/profile 4.png";
import Profile5 from "../../assets/profile/profile 5.png";
import Profile6 from "../../assets/profile/profile 6.png";
import Profile7 from "../../assets/profile/profile 7.png";
import Profile8 from "../../assets/profile/profile 8.png";
import Profile9 from "../../assets/profile/profile 9.png";

export default function Branda({ user, onLogout }) {
  return (
    <div className="branda">
      <Navbar user={user} onLogout={onLogout} />
      <div className="BrandaContainer">
        <Banner1 />
        <div className="cardTittleContainer">
          <div className="card-tittle">
            <h1>Koleksi Video Pembelajaran Unggulan</h1>
            <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>

          <div className="card-tab">
            <button className="tab-btn">
              Semua Kelas
              <span className="btn-cek"></span>
            </button>
            <button className="tab-btn">
              Pemasaran <span className="btn-cek"></span>
            </button>
            <button className="tab-btn">
              Desain <span className="btn-cek"></span>
            </button>
            <button className="tab-btn">
              Pengembangan Diri <span className="btn-cek"></span>
            </button>
            <button className="tab-btn">
              Bisnis <span className="btn-cek"></span>
            </button>
          </div>
        </div>

        <div className="card">
          <Card img1={Aset1} img2={Profile1} title="" />
          <Card img1={Aset2} img2={Profile2} title="" />
          <Card img1={Aset3} img2={Profile3} title="" />
          <Card img1={Aset4} img2={Profile4} title="" />
          <Card img1={Aset5} img2={Profile5} title="" />
          <Card img1={Aset6} img2={Profile6} title="" />
          <Card img1={Aset7} img2={Profile7} title="" />
          <Card img1={Aset8} img2={Profile8} title="" />
          <Card img1={Aset9} img2={Profile9} title="" />
        </div>
        <Banner2 />
      </div>
      <Footer />
    </div>
  );
}
