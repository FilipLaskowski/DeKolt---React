import React from "react";

function Preloader() {
  return (
    <div class="preloader" data-preloader>
      <img src="./img/page_icon.jpg" alt="DekoltLogo" />
      <h3>
        Ładowanie<span class="dot1">.</span>
        <span class="dot2">.</span>
        <span class="dot3">.</span>
      </h3>
    </div>
  );
}

export default Preloader;
