import React, { useState } from "react";
import dekolt2021 from "../../Dekolt2021.jpg";
import { FaPlay } from "react-icons/fa";
import MusicPlayer from "../Records/MusicPlayer";

function RecordsEl({ album }) {
  const [songID, setSongID] = useState(null);
  const onClickHandler = (id) => {
    setSongID(id);
  };
  return (
    <>
      <article className="albumEl">
        <header>
          <img src={dekolt2021} alt="PunkForAll Logo"></img>
          <div className="album-info">
            <h3>punk for all</h3>
            <h5>2021</h5>
            <MusicPlayer songID={songID} />
          </div>
        </header>
        <div className="album-content">
          {album.map((song) => {
            const { id, title, duration } = song;
            return (
              <article
                key={id}
                onClick={() => {
                  onClickHandler(id);
                }}
              >
                <FaPlay />
                <div className="song-info">
                  <h3>{title}</h3>
                  <h3>{duration}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </article>
    </>
  );
}
export default RecordsEl;
