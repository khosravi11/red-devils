import React from "react";
import { sponsors } from "../data/sponsors";
import SponsorLogo from "./SponsorLogo";

const SponsorStrip = () => (
  <aside className="sponsor-strip" aria-labelledby="sponsor-strip-title">
    <div className="container sponsor-strip-inner">
      <h2 id="sponsor-strip-title" className="sponsor-strip-title">
        Affiliate Sponsors
      </h2>
      <ul className="sponsor-strip-list">
        {sponsors.map((sponsor) => (
          <li key={sponsor.id}>
            <SponsorLogo sponsor={sponsor} eager />
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default SponsorStrip;
