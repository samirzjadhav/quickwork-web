const navbar = document.querySelector(".container-navbar");
const bar = document.querySelector(".mobile");
const close = document.querySelector(".close");
const nav = document.querySelector(".navbar-menu");
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
