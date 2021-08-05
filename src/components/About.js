import React from "react";
import bandPhoto from "../img/about_photo.jpg";

function About() {
  return (
    <section className="about">
      <header className="section-header">
        <h1>O zespole</h1>
      </header>
      <div className="about-container">
        <div className="about-side">
          <img src={bandPhoto} alt="Zespól DeKolt" />
        </div>
        <div className="about-side">
          <p>
            Zespół powstał w 1991r w Piekarach Śl,z inicjatywy braci Sławomira i
            Dariusza Alcer zagorzałych punk rockersów . Pierwsze wystąpienie
            kapeli w 1991r. przed publiką Wieczór Poezji Śpiewanej Brzeziny Śl.(
            było zdziwienie hehe ) a pierwszy koncert odbył się w 1992 Objazdy w
            Żychcicach . Próby zespołu odbywały się w piwnicy, następne w
            Brzezinach Śl. obecnym domu pogrzebowym aby znów powrócić do piwnicy
            .
          </p>
          <div className="more-button">
            <div className="btn">Więcej...</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
