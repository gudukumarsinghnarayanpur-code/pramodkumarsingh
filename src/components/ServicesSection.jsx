import React from "react";
import { services } from "../data/portfolio.js";

export default function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container services-grid">
        <div className="section-heading reveal">
          <p className="eyebrow"><span className="eyebrow-line"></span> How I can contribute</p>
          <h2>Focused support<br />for your <span>next step.</span></h2>
          <p className="services-note">I’m growing my practical experience. These are the areas I’m building capability in and can discuss for suitable junior, internship, or guided projects.</p>
          <a className="text-link" href="#contact">Tell me about your project <span>↗</span></a>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row reveal" key={service.name}>
              <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{service.name}</h3><p>{service.detail}</p></div>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
