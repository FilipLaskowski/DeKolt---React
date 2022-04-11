import React, { useState } from "react";
import {
  FaRegTimesCircle,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

function ShopModal({ closeModal, choosedItem }) {
  const { name, img, desc, price, allImg } = choosedItem;
  const [imgIndex, setImgIndex] = useState(0);
  const nextImg = () => {
    if (imgIndex === allImg.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  const prevImg = () => {
    if (imgIndex === 0) {
      setImgIndex(allImg.length - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <article className="shop-modal">
      <div className="shop-modal-container">
        <div className="modal-exit" onClick={() => closeModal()}>
          <FaRegTimesCircle />
        </div>
        <div className="shop-modal-img">
          {allImg.length > 0 ? (
            <img src={`img/shop/${allImg[imgIndex]}.jpg`} alt={name} />
          ) : (
            <img src={`img/shop/${img}.jpg`} alt={name} />
          )}
          {allImg.length > 0 && (
            <div className="img-control">
              <FaChevronLeft onClick={prevImg} />
              <FaChevronRight onClick={nextImg} />
            </div>
          )}
        </div>
        <div className="shop-modal-desc">
          <h3>{name}</h3>
          <h5>{price}</h5>
          <p>{desc}</p>
          <p>Wysylka: 7zł</p>
          <p>
            Zakup: Kontakt poprzez mail - dekolt@dekolt.com.pl lub ssgabi@wp.pl
          </p>
        </div>
      </div>
    </article>
  );
}

export default ShopModal;
