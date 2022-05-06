import React, { useState, useEffect, useContext } from "react";
import Events from "./Concerts/Events";

function Concerts({ concerts }) {
  const [isEvent, setIsEvent] = useState(false);
  useEffect(() => {
    if (concerts.length > 0) {
      setIsEvent(true);
    } else if (concerts.length === 0) {
      setIsEvent(false);
    }
  }, []);
  return (
    <section className="concerts" id="concerts">
      <header className="section-header">
        <h1>koncerty</h1>
      </header>
      <div className="concerts-container">
        {isEvent ? (
          <Events concerts={concerts} />
        ) : (
          <h3 className="empty-event">Brak koncertów w najbliższym czasie.</h3>
        )}
      </div>
    </section>
  );
}
export default Concerts;
