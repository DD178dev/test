// footer-loader.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => console.error("Errore nel caricamento del footer:", error));
});