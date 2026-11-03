import React from "react";
import { sponsors } from "../data/sponsors";
import SponsorLogo from "./SponsorLogo";

const partners = [
  ...sponsors,
  { id: "evolve", name: "Evolve", logo: "/images/EvolveLogo.png" },
  { id: "adidas", name: "Adidas", logo: "/images/AdidasLogo.png" },
];

const Affiliates = () => (
  <section id="affiliates" className="py-5 bg-white reveal" aria-labelledby="partners-title">
    <div className="container text-center">
      <h2 id="partners-title" className="section-title text-center mb-4">Partners</h2>
      <ul className="partners-list">
        {partners.map((partner) => (
          <li key={partner.id}>
            <SponsorLogo sponsor={partner} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Affiliates;
