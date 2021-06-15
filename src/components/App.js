import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Primary from "./Primary";
import Concerts from "./Concerts";

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
          </main>
        </>
      )}
    </>
  );
}

export default App;
