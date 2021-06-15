import React from "react";

function Events({ concertsList }) {
  return (
    <>
      {concertsList.map((concert) => {
        const { date, hour, city, place } = concert;
        return (
          <article>
            <div className="concert-time">
              <h3>{date}</h3>
              <h5>{hour}</h5>
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
