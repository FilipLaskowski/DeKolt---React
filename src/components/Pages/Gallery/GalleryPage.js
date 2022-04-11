import React from "react";
import { galleries } from "../../../data/gallery";

function GalleryPage() {
  return (
    <section className="gallery">
      <header className="section-header">
        <h1>Galeria</h1>
      </header>
      <div className="gallery-container">
        {galleries.map((item) => {
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
    </section>
  );
}

export default GalleryPage;
