// Mobile Nav
const menuToggle = document.querySelector(".hamburger .menu-toggle input");
const header = document.querySelector(".header");

menuToggle.addEventListener("click", function () {
  header.classList.toggle("slide");
});
