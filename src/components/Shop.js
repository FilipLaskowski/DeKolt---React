import React from "react";
import shopLogo from "../img/DeKolt_shop_logo.png";
import shopLayer from "../img/shop_layer.jpg";

function Shop() {
  return (
    <section className="shop" id="shop">
      <header className="section-header">
        <h1>Sklep</h1>
      </header>
      <div className="shop-container">
        <div className="shop-layer">
          <img
            src={shopLayer}
            alt="DeKolt_image_heads"
            className="shop-layer-bg"
          />
          <img src={shopLogo} alt="DeKolt_Shop_Logo" className="shop-logo" />
        </div>
        <div className="shop-link">
          <p>
            Najnowsza płyta już dostępna. Różne wzory koszulek w przystępnej
            cenie
          </p>
          <a href="#">
            <div className="more-button">
              <div className="btn">Otwórz sklep</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Shop;
