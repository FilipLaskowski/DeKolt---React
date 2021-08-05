import React from "react";

function Preloader() {
  return (
    <div className="preloader" data-preloader>
      <img src="./img/page_icon.jpg" alt="DekoltLogo" />
      <h3>
        Ładowanie<span className="dot1">.</span>
        <span className="dot2">.</span>
        <span className="dot3">.</span>
      </h3>
    </div>
  );
}

export default Preloader;
