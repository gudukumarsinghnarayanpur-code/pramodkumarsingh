import React, { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="Pramod Kumar Singh home" onClick={closeMenu}>
          <span className="brand-mark">P<span>.</span></span>
          <span className="brand-name">Pramod Singh</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span></span><span></span>
        </button>
        <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Main navigation">
          {links.map((link) => <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
