import React, { useState, useEffect } from "react";
import Primary from "../Primary";
import Concerts from "../Concerts";
import Records from "../Records";
import Gallery from "../Gallery";
import About from "../About";
import Shop from "../Shop";

import { db } from "../../Firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [concerts, setConcerts] = useState([]);
  const [fetchDone, setFetchDone] = useState(false);
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
      setFetchDone(true);
    };
    getConcerts();
  }, []);
  return (
    <>
      <Primary />
      <main>
        {fetchDone ? <Concerts concerts={concerts} /> : ""}
        <Records />
        <Gallery />
        <About />
        <Shop />
      </main>
    </>
  );
}

export default Home;
