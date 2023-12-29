// Navbar

let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function () {
  navLinks.style.left = "-20px";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-121%";
};
