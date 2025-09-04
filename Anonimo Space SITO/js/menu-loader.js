document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/menu.html")
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById("menu-container");
      container.innerHTML = data;

      // Attendi che il logo sia presente nel DOM
      const logo = container.querySelector("#team-logo");
      if (logo) {
        // Applica stile iniziale invisibile per animazione
        logo.style.opacity = "0";
        logo.style.transform = "translateY(20px)";
        logo.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        // Forza il reflow per attivare la transizione
        void logo.offsetWidth;

        // Attiva animazione di entrata
        setTimeout(() => {
          logo.style.opacity = "1";
          logo.style.transform = "translateY(0)";
          logo.style.borderRadius = "12px";
        }, 100);
      } else {
        console.warn("Logo non trovato nel menu caricato.");
      }
    })
    .catch(error => console.error("Errore nel caricamento del menu:", error));
});