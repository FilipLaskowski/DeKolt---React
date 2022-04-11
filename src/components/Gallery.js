import React, { useState } from "react";
import { galleries } from "../data/gallery";
import { Link } from "react-router-dom";

function Gallery() {
  const thumbnails = [
    galleries[galleries.length - 1],
    galleries[galleries.length - 2],
  ];
  return (
    <section className="gallery" id="gallery">
      <header className="section-header">
        <h1>Galeria</h1>
      </header>
      <div className="gallery-container">
        {thumbnails.map((item) => {
          const { id, name, date, link } = item;
          return (
            <a key={id} href={`${link}`} className="gallery-shortcut">
              <img src={`img/gallery/${id}/1.jpg`} alt={name} />
              <div className="darker">
                <h3>{name}</h3>
                <h5>{date}</h5>
              </div>
            </a>
          );
        })}
      </div>
      <Link to="/gallery">
        <div className="more-button">
          <div className="btn">Więcej zdjęć</div>
        </div>
      </Link>
    </section>
  );
}
export default Gallery;
