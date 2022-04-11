import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Pages/Home";
import ShopPage from "./Pages/Shop/ShopPage";
import GalleryPage from "./Pages/Gallery/GalleryPage";
import AboutPage from "./Pages/AboutPage";

//database
import { db } from "../Firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { DatabaseContext } from "../contexts/DatabseContext";

function App() {
  //Concerts Database
  const [concerts, setConcerts] = useState([]);
  const concertsCollectionRef = collection(db, "Concerts");
  useEffect(() => {
    const getConcerts = async () => {
      const concertsData = await getDocs(concertsCollectionRef);
      setConcerts(
        concertsData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getConcerts();
  }, []);
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
          <DatabaseContext.Provider value={concerts}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/gallery" component={GalleryPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/shop" component={ShopPage} />
            </Switch>
          </DatabaseContext.Provider>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
