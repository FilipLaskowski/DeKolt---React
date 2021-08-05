import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Primary from "./Primary";
import Concerts from "./Concerts";
import Records from "./Records";
import Gallery from "./Gallery";
import About from "./About";
import Shop from "./Shop";
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Primary />
          <main>
            <Concerts />
            <Records />
            <Gallery />
            <About />
            <Shop />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
