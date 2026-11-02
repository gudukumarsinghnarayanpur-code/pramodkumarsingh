import React from "react";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="availability"><span className="availability-dot"></span> Open to opportunities</div>
          <p className="eyebrow">Digital marketing · Patna, India</p>
          <h1>Thoughtful campaigns.<br /><span>Measurable growth.</span></h1>
          <p className="hero-intro">Hi, I&apos;m <strong>Pramod Kumar Singh</strong> — a digital marketing learner building practical skills in paid advertising, analytics, and conversion tracking.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Hire me <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#portfolio"><span className="play-icon" aria-hidden="true">▶</span> Explore my work</a>
          </div>
          <div className="hero-meta">
            <span>Currently learning</span>
            <span className="meta-divider"></span>
            <span>Meta Ads <b>·</b> Google Ads <b>·</b> GA4</span>
          </div>
        </div>
        <div className="hero-visual reveal" aria-label="Profile photo placeholder">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>
          <div className="profile-card">
            {/* Replace this initials placeholder with your own profile photo when ready. */}
            <div className="profile-placeholder"><span>PK</span></div>
            <div className="profile-caption">
              <span className="caption-label">YOUR NEXT</span>
              <strong>Growth partner.</strong>
              <span className="caption-arrow" aria-hidden="true">↗</span>
            </div>
          </div>
          <div className="float-chip chip-ads"><span className="chip-icon icon-blue">f</span><span><b>Meta Ads</b><small>Paid social</small></span></div>
          <div className="float-chip chip-analytics"><span className="analytics-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span><b>GA4</b><small>Insights &amp; tracking</small></span></div>
          <div className="visual-spark spark-one">✳</div>
          <div className="visual-spark spark-two">✦</div>
        </div>
      </div>
      <div className="container hero-bottom"><span>SCROLL TO DISCOVER</span><span className="scroll-line"></span><span>01 — 06</span></div>
    </section>
  );
}
