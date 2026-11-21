/* ===== RÉGLAGES À MODIFIER ICI ===== */
const CONFIG = {
  tel: "22967707403",           // indicatif Bénin (229) + numéro
  messages: {
    general:    "Bonjour, je voudrais des informations sur ABH Digital PME.",
    demarrage:  "Bonjour, je veux plus d'informations sur le Pack Démarrage.",
    pro:        "Bonjour, je veux plus d'informations sur le Pack Pro."
  }
};
/* ==================================== */

// Boutons WhatsApp avec message pré-rempli
document.querySelectorAll("[data-wa]").forEach(a => {
  const msg = CONFIG.messages[a.dataset.wa] || CONFIG.messages.general;
  a.href = "https://wa.me/" + CONFIG.tel + "?text=" + encodeURIComponent(msg);
  a.target = "_blank"; a.rel = "noopener";
});
document.querySelectorAll("[data-tel]").forEach(a => a.href = "tel:+" + CONFIG.tel);

// Menu mobile
const btn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); btn.setAttribute("aria-expanded", false); } });

// Année du pied de page
document.getElementById("annee").textContent = new Date().getFullYear();
