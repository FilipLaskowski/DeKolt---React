import React, { useState, useEffect } from "react";
import { galleries } from "../data/gallery";

function Gallery() {
  const thumbnails = [
    galleries[galleries.length - 1],
    galleries[galleries.length - 2],
  ];
  return (
    <section className="gallery">
      <header className="section-header">
        <h1>Galeria</h1>
      </header>
      <div className="gallery-container">
        {thumbnails.map((item) => {
          const { id, name, date } = item;
          return (
            <div key={id} className="gallery-shortcut">
              <img src={`img/gallery/${id}/1.jpg`} alt={name} />
              <div className="darker">
                <h3>{name}</h3>
                <h5>{date}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className="more-button">
        <div className="btn">Więcej zdjęć</div>
      </div>
    </section>
  );
}
export default Gallery;
