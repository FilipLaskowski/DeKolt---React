import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import { links } from "../data/Navbarlinks";
import logo from "../logo.png";
import {Link} from 'react-router-dom'

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const [isNavbarTop, setIsNavbarTop] = useState(true);
  useEffect(() => {
    if (showLinks) {
      linksContainerRef.current.style.height = "100vh";
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  const setScroll = () => {
    if (window.scrollY > 300) {
      setIsNavbarTop(false);
    } else {
      setIsNavbarTop(true);
    }
  };
  const closeNavbar = () =>{
    setShowLinks(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", setScroll);
  }, []);
  return (
    <nav className={`${isNavbarTop ? "" : "navbar-black"}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img className="logo" src={logo} alt="DeKolt logo" />
            </Link>
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
                <li key={id} >
                  <a href={url} onClick={closeNavbar}>{content}</a>
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
