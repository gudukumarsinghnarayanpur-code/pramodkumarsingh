import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#top"><span className="brand-mark">P<span>.</span></span><span className="brand-name">Pramod Singh</span></a>
        <p>Learning, building, and growing in digital marketing.</p>
        <span>© {new Date().getFullYear()} Pramod Kumar Singh</span>
      </div>
    </footer>
  );
}
