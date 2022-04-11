import React from "react";

function Events({ concerts }) {
  return (
    <>
      {concerts.map((concert) => {
        const { date, city, place, id } = concert;
        return (
          <article key={id}>
            <div className="concert-time">
              <h3>{date}</h3>
            </div>
            <div className="concert-info">
              <h2>{city}</h2>
              <h3>{place}</h3>
            </div>
          </article>
        );
      })}
    </>
  );
}
export default Events;
