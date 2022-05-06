import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGallery } from "../contexts/GalleriesContext";

function Gallery() {
  const [thumbs, setThumbs] = useState([]);
  const galleries = useGallery();
  useEffect(() => {
    setThumbs(galleries.slice(0, 2));
  }, [galleries]);
  return (
    <section className="gallery" id="gallery">
      <header className="section-header">
        <h1>Galeria</h1>
      </header>
      <div className="gallery-container">
        {thumbs.map((item) => {
          const { id, title, date, img, link } = item;
          return (
            <a
              key={id}
              href={`${link}`}
              className="gallery-shortcut"
              target="_blank"
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
      <Link to="/galeria">
        <div className="more-button">
          <div className="btn">Więcej zdjęć</div>
        </div>
      </Link>
    </section>
  );
}
export default Gallery;
