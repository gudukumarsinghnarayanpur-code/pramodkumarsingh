import React from "react";
import { projects } from "../data/portfolio.js";

function ProjectArtwork({ kind }) {
  if (kind === "social") {
    return (
      <div className="mock-ad">
        <span className="mock-ad-tag">SOCIAL CAMPAIGN</span>
        <strong>Make room<br />for better days.</strong>
        <span className="mock-ad-button">Discover more ↗</span>
        <div className="mock-ad-shape"></div>
      </div>
    );
  }

  if (kind === "search") {
    return (
      <div className="search-mock">
        <div className="search-brand"><span className="search-brand-mark">S</span><span>Sample Search</span></div>
        <div className="search-query">Search campaign structure <span>⌕</span></div>
        <span className="search-ad-label">Ad · example.com</span>
        <strong>Learn something new today</strong>
        <p>A practice search ad concept with a clear message and call to action.</p>
        <span className="search-url">Example keywords · Sample copy</span>
      </div>
    );
  }

  return (
    <div className="dashboard-mock">
      <div className="dashboard-top"><span>Measurement plan</span><span className="dashboard-dots">•••</span></div>
      <div className="dashboard-metric"><span>Sample event journey</span><strong>Explore <i>→</i> Enquire <i>→</i> Submit</strong></div>
      <div className="dashboard-chart"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <div className="dashboard-legend"><i></i> Example events · no live data</div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-topline reveal">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line"></span> Selected projects</p>
            <h2>Learning in <span>action.</span></h2>
          </div>
          <p className="section-aside">Demo concepts only — no client work or campaign results are implied.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal" key={project.name}>
              <div className={`project-art ${project.artClass}`}>
                <span className="demo-label">DEMO CONCEPT</span>
                <ProjectArtwork kind={project.kind} />
                <span className="project-art-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="project-info">
                <div><p className="project-type">{project.type}</p><h3>{project.name}</h3></div>
                <span className="project-open">↗</span>
                <p className="project-description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
