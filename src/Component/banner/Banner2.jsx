import React from "react";
import "./Banner2.css";

export default function Banner2() {
  return (
    <div className="banner2">
      <div className="banner2wrapper">
        <div className="newsLetter">
          <h2 className="newsLetterTittle">NEWSLETTER</h2>
          <div className="newsLetterContent">
            <h3>Mau Belajar Lebih Banyak?</h3>
            <p>
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>
          </div>
        </div>
        <div className="subscribeWrapper">
          <input
            type="email"
            id="subscribe"
            placeholder="Masukan Emailmu"
            required
          />
          <button type="button" id="btnSubscribe">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
