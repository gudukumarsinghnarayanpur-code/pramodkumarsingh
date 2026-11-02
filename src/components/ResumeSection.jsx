import React from "react";
import { createCvPdf } from "../utils/createCvPdf.js";

export default function ResumeSection() {
  function downloadCv() {
    const lines = [
      "PRAMOD KUMAR SINGH",
      "Digital Marketing Executive | Meta Ads & Google Ads",
      "Patna, Bihar, India",
      "",
      "PROFILE",
      "Digital marketing learner building skills in Meta Ads, Google Ads, GA4, and conversion tracking.",
      "",
      "EDUCATION",
      "B.Sc. in Physics",
      "",
      "SKILLS",
      "Meta Ads, Google Ads, Google Analytics 4, Conversion Tracking, Campaign Optimization,",
      "Audience Targeting, Performance Reporting, A/B Testing",
      "",
      "Replace this template with your current contact details, education dates, and verified experience.",
    ];
    const pdf = createCvPdf(lines);
    const url = URL.createObjectURL(new Blob([pdf], { type: "application/pdf" }));
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "Pramod-Kumar-Singh-CV-template.pdf";
    downloadLink.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="resume-section">
      <div className="container resume-banner reveal">
        <div><p className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> A little more about my journey</p><h2>Let’s build something<br />meaningful together.</h2></div>
        <div className="resume-action"><p>Download a simple CV template and replace it with your latest details.</p><button className="button button-white" type="button" onClick={downloadCv}>Download CV <span aria-hidden="true">↓</span></button></div>
        <div className="resume-decoration" aria-hidden="true">P.</div>
      </div>
    </section>
  );
}
