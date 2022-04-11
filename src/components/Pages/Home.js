import React from 'react';
import Primary from "../Primary";
import Concerts from "../Concerts";
import Records from "../Records";
import Gallery from "../Gallery";
import About from "../About";
import Shop from "../Shop";


function Home() {
    return(
        <>
        <Primary />
          <main>
            <Concerts />
            <Records />
            <Gallery />
            <About />
            <Shop />
          </main>
        </>
    );
    
}

export default Home