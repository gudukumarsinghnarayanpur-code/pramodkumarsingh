// Update the contact links and project cards in index.html with your real details as they become available.
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
    primaryNav.classList.toggle("is-open", !isExpanded);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      primaryNav.classList.remove("is-open");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Add your real WhatsApp or LinkedIn profile link in index.html.";
  });
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
    );
    window.location.href = `mailto:gudddkumarsingh62@gmail.com?subject=${subject}&body=${body}`;
    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Your email app should open with the message ready.";
  });
}

const cvButton = document.querySelector("#download-cv");
if (cvButton) {
  cvButton.addEventListener("click", () => {
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
      "Replace this template with your current contact details, education dates, and verified experience."
    ];
    const pdf = createTextPdf(lines);
    const url = URL.createObjectURL(new Blob([pdf], { type: "application/pdf" }));
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "Pramod-Kumar-Singh-CV-template.pdf";
    downloadLink.click();
    URL.revokeObjectURL(url);
  });
}

function createTextPdf(lines) {
  const escapePdfText = (text) => text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  const textCommands = lines.map((line, index) => {
    const fontSize = index === 0 ? 18 : 10;
    const y = 750 - index * 28;
    return `1 0 0 1 50 ${y} Tm /F1 ${fontSize} Tf (${escapePdfText(line)}) Tj`;
  });
  const stream = `BT\n${textCommands.join("\n")}\nET`;
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${new TextEncoder().encode(stream).length} >>\nstream\n${stream}\nendstream`
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(new TextEncoder().encode(pdf).length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = new TextEncoder().encode(pdf).length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return pdf;
}
