import React from "react";

const MediaDay = () => (
  <section
    id="media-day"
    className="media-day-section py-5 reveal"
    aria-labelledby="media-day-title"
  >
    <div className="container">
      <div className="media-day-card">
        <div className="media-day-date" aria-hidden="true">
          <span>November</span>
          <strong>18</strong>
          <span>2026</span>
        </div>
        <div className="media-day-content">
          <p className="media-day-eyebrow">Players. Supporters. Our community.</p>
          <h2 id="media-day-title" className="media-day-heading">
            Red Devils Media Day
          </h2>
          <p className="media-day-details">
            <span>
              <time dateTime="2026-11-18">November 18, 2026</time>
              {" · "}6:30–8:30 p.m. Pacific
            </span>
            <span>Willard Middle School, Berkeley</span>
          </p>
          <p className="media-day-copy">
            Featuring interviews with players and business supporters.
          </p>
          <p className="media-day-note">
            Interviews will be posted here after the event.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MediaDay;
