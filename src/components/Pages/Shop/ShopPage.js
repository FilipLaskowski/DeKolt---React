import React, { useState, useEffect } from "react";
import { shopProducts } from "../../../data/shopProducts";
import ShopModal from "./ShopModal";

function ShopPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [choosedItem, setChoosedItem] = useState([]);
  const openModal = (id) => {
    setIsModalOpen(true);
    setChoosedItem(shopProducts[id - 1]);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="shop-page-container">
      <div className="shop-icons">
        {shopProducts.map((product) => {
          const { id, name, img, price } = product;
          return (
            <div
              key={id}
              onClick={() => {
                if (isModalOpen === false) {
                  openModal(id);
                }
              }}
              className="shop-product"
            >
              <div className="shop-product-img">
                <img src={`img/shop/${img}.jpg`} alt={name} />
              </div>
              <div className="shop-product-info">
                <h4>{name}</h4>
                <h5>{price}</h5>
              </div>
              {isModalOpen && (
                <ShopModal choosedItem={choosedItem} closeModal={closeModal} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ShopPage;
