const SITE_CONFIG = {
  checkoutUrl: "INSERIR_URL_CHECKOUT",
  whatsappUrl: "https://wa.me/555191148986?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20combo%20de%20e-books%20da%20INSAVE.",
  linkedinUrl: "https://www.linkedin.com/company/insavegrupo/",
  instagramUrl: "INSERIR_URL_INSTAGRAM",
  youtubeUrl: "https://www.youtube.com/@INSAVE.financas",
  analytics: {
    ga4Id: "INSERIR_GA4_ID",
    metaPixelId: "INSERIR_META_PIXEL_ID",
    gtmId: "INSERIR_GTM_ID"
  }
};

const header = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");
const checkoutNote = document.querySelector(".checkout-note");
const footerLinkStatus = document.querySelector(".footer-link-status");

function trackEvent(name, details = {}) {
  console.info("[INSAVE analytics]", name, details);
}

function updateChrome() {
  header.classList.toggle("is-scrolled", window.scrollY > 32);
  backToTop.classList.toggle("is-visible", window.scrollY > 700);
}
window.addEventListener("scroll", updateChrome, { passive: true });
updateChrome();
backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.querySelectorAll("[data-track]").forEach((element) => element.addEventListener("click", () => trackEvent(element.dataset.track, { label: element.textContent.trim() })));

document.querySelectorAll("[data-config-link]").forEach((element) => {
  const configKey = element.dataset.configLink;
  const url = SITE_CONFIG[configKey];
  if (url && !url.startsWith("INSERIR_")) {
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    return;
  }

  element.addEventListener("click", (event) => {
    event.preventDefault();
    footerLinkStatus.textContent = configKey === "whatsappUrl"
      ? "O link do WhatsApp será conectado assim que o número for definido."
      : "O link do Instagram ainda precisa ser informado.";
  });
});

document.querySelectorAll("[data-checkout]").forEach((element) => {
  if (SITE_CONFIG.checkoutUrl !== "INSERIR_URL_CHECKOUT") {
    element.href = SITE_CONFIG.checkoutUrl;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    return;
  }
  element.addEventListener("click", (event) => {
    event.preventDefault();
    checkoutNote.textContent = "Checkout em configuração. Insira a URL de compra em script.js.";
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  }), { threshold: 0.14 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

document.getElementById("current-year").textContent = new Date().getFullYear();
