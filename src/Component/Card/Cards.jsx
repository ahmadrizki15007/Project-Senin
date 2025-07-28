import React from "react";
import "./Card.css";

export default function Card({ img1, img2, title }) {
  return (
    <div className="cardContainer">
      <div className="cardBanner">
        <img src={img1} alt={`${title} gambar 1`} />
      </div>
      <div className="cardText">
        <h3>Big 4 Auditor Financial Analyst</h3>
        <p>
          Mulai transformasi dengan instruktur profesional, harga yang
          terjangkau, dan...
        </p>
      </div>
      <div className="cardProfile">
        <img src={img2} alt={`${title} gambar 2`} className="imgProfile" />
        {title && <h4 className="card-title">{title}</h4>}
        <div className="profileText">
          <strong>Jenna Ortega</strong>
          <small>
            Senior Accountant di
            <span className="company"> Gojek</span>
          </small>
        </div>
      </div>
      <div className="cardFooter">
        <div className="rating">
          ⭐⭐✩✩✩
          <span className="review">3.5 (86)</span>
        </div>
        <div className="price">Rp 300K</div>
      </div>
    </div>
  );
}
