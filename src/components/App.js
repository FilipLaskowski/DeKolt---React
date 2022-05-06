import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Pages/Home";
import GalleryPage from "./Pages/Gallery/GalleryPage";
import AboutPage from "./Pages/AboutPage";
import { GalleryProvider } from "../contexts/GalleriesContext";

export const GalleryContext = React.createContext();

function App() {
  //Preloader
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
        <Router>
          <Navbar />
          <Switch>
            <GalleryProvider>
              <Route path="/" exact component={Home} />
              <Route path="/galeria" component={GalleryPage} />
            </GalleryProvider>
            <Route path="/about" component={AboutPage} />
          </Switch>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
