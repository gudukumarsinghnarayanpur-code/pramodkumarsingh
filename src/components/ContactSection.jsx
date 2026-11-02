import React, { useState } from "react";

const EMAIL = "gudddkumarsingh62@gmail.com";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
    );
    setStatus("Your email app should open with the message ready.");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow"><span className="eyebrow-line"></span> Get in touch</p>
          <h2>Have a project<br />in <span>mind?</span></h2>
          <p>I’m open to entry-level opportunities, internships, and conversations about digital marketing. Send a note — I’d be glad to connect.</p>
          <div className="contact-links">
            <a href={`mailto:${EMAIL}`}><span className="contact-link-icon">✉</span><span><small>Email me</small><strong>{EMAIL}</strong></span><span className="contact-link-arrow">↗</span></a>
            <a href="https://wa.me/917071837526" target="_blank" rel="noopener noreferrer"><span className="contact-link-icon">◉</span><span><small>WhatsApp</small><strong>+91 70718 37526</strong></span><span className="contact-link-arrow">↗</span></a>
            <a href="#contact-form"><span className="contact-link-icon">in</span><span><small>LinkedIn</small><strong>Add your LinkedIn profile</strong></span><span className="contact-link-arrow">↗</span></a>
          </div>
        </div>
        <form className="contact-form reveal" id="contact-form" onSubmit={handleSubmit}>
          <h3>Send me a message</h3>
          <p className="form-intro">Fill in the details below. This sample form needs a form service or backend connection to deliver messages.</p>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="How should I address you?" autoComplete="name" required />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" rows="4" placeholder="Tell me a little about what you have in mind..." required></textarea>
          <button className="button button-primary form-submit" type="submit">Prepare message <span aria-hidden="true">↗</span></button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  );
}
