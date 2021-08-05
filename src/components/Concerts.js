import React, { useState, useEffect } from "react";
import concertsList from "../data/concertsList";
import Events from "./Concerts/Events";

function Concerts() {
  const [isEvent, setIsEvent] = useState(false);
  useEffect(() => {
    if (concertsList.length > 0) {
      setIsEvent(true);
    } else if (concertsList.length === 0) {
      setIsEvent(false);
    }
  }, []);
  return (
    <section className="concerts">
      <header className="section-header">
        <h1>koncerty</h1>
      </header>
      <div className="concerts-container">
        {isEvent ? (
          <Events concertsList={concertsList} />
        ) : (
          <h3 className="empty-event">Brak koncertów w najbliższym czasie.</h3>
        )}
      </div>
    </section>
  );
}
export default Concerts;
