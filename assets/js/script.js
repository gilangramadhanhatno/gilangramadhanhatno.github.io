// Mobile Nav
const menuToggle = document.querySelector(".hamburger .menu-toggle input");
const header = document.querySelector(".header");

menuToggle.addEventListener("click", function () {
  header.classList.toggle("slide");
});

// GSAP
const words = ["Front End Developer", "UI/UX Designer"];

let masterTL = gsap.timeline({ repeat: -1 });

words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1.1, yoyo: true, repeatDelay: 1 });
  tl.to(".text-plugin", { duration: 1, text: word });
  masterTL.add(tl);
});
