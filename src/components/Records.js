import React from "react";
import RecordEl from "./Records/RecordEl";
import album2021 from "../data/album2021";

function Records() {
  return (
    <section className="albums" id='albums'>
      <header className="section-header">
        <h1>albumy</h1>
      </header>
      <div className="albums-container">
        <RecordEl album={album2021} />
      </div>
    </section>
  );
}
export default Records;
