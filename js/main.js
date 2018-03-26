const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");
const nav = document.querySelector(".page-nav");
const showcase = document.querySelector(".showcase");

hamburger.addEventListener("click", open);

function open() {
  nav.classList.toggle("overlay-nav");
  list.classList.toggle("overlay");
  showcase.classList.toggle("beneath");
  hamburger.classList.toggle("active");
}