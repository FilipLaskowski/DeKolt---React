import React from "react";
import logo from "../img/main-logo.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-topside">
        <a href="#">
          <img src={logo} alt="logo DeKolt" />
        </a>
        <a href="https://www.facebook.com/dekoltpunkrock">
          <FaFacebook />
        </a>
        <a href="https://www.youtube.com/channel/UCVD14SBcA8ciVwrcqfiFIjw">
          <FaYoutube />
        </a>
      </div>
      <div className="footer-bottomside">
        <p>
          Autor:{" "}
          <a
            href="https://www.facebook.com/filip.laskowski.56/"
            target="_blank"
          >
            Filip Laskowski
          </a>
        </p>
        <p>
          Zdjęcia w tle:
          <a href="https://www.facebook.com/blesso.mp" target="_blank">
            {" "}
            BlessoPL
          </a>
        </p>
        <p>
          Zdjęcia:{" "}
          <a href="https://www.facebook.com/julek.nowacki" target="_blank">
            Juliusz Nowacki
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
