import React from "react";
import { useGallery } from "../../../contexts/GalleriesContext";

function GalleryPage() {
  const galleries = useGallery();

  return (
    <section className="gallery">
      <header className="section-header">
        <h1>Galeria</h1>
      </header>
      <div className="gallery-container">
        {galleries.map((item) => {
          const { id, title, date, link, img } = item;
          return (
            <a
              key={id}
              href={`${link}`}
              className="gallery-shortcut"
              target="_blanket"
            >
              <img src={`${img}`} alt={title} />
              <div className="darker">
                <h3>{title}</h3>
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
