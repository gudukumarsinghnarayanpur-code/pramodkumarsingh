import React from "react";
import { skills } from "../data/portfolio.js";

export default function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-topline reveal">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line"></span> What I&apos;m learning</p>
            <h2>Skills for smarter<br /><span>digital growth.</span></h2>
          </div>
          <p className="section-aside">A growing toolkit for planning, launching, and learning from digital campaigns.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card reveal" key={skill.name}>
              <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
              <span className={`skill-icon ${skill.iconClass}`}>{skill.icon}</span>
              <h3>{skill.name}</h3>
              <p>{skill.detail}</p>
              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
