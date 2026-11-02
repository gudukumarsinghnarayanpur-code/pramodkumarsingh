import React from "react";

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="section-heading reveal">
          <p className="eyebrow"><span className="eyebrow-line"></span> A little about me</p>
          <h2>Curious by nature.<br /><span>Driven by data.</span></h2>
        </div>
        <div className="about-content reveal">
          <p className="large-copy">I’m building a career at the intersection of creative thinking and data-driven marketing.</p>
          <p>As a passionate digital marketing learner, I&apos;m developing hands-on knowledge of Meta Ads, Google Ads, Google Analytics 4, and conversion tracking. I enjoy understanding what makes campaigns work — from the audience and creative to the numbers behind each decision.</p>
          <p>My background in Physics taught me to ask good questions, think analytically, and approach challenges with curiosity. I bring that same mindset to every marketing project I learn from.</p>
          <div className="about-facts">
            <div><span className="fact-icon">◎</span><span><small>Based in</small><strong>Patna, Bihar, India</strong></span></div>
            <div><span className="fact-icon">⌁</span><span><small>Education</small><strong>B.Sc. in Physics</strong></span></div>
            <div><span className="fact-icon">↗</span><span><small>Experience</small><strong>Digital Marketing Learner</strong></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
