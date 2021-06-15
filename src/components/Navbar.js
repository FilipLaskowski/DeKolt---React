import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import { links } from "../data/Navbarlinks";
import logo from "../logo.png";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  useEffect(() => {
    if (showLinks) {
      linksContainerRef.current.style.height = "100vh";
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="DeKolt logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(true)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <div className="links-exit" onClick={() => setShowLinks(false)}>
            <FaRegTimesCircle />
          </div>
          <ul className="links">
            {links.map((link) => {
              const { id, url, content } = link;
              return (
                <li key={id}>
                  <a href={url}>{content}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
