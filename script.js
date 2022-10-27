const navbar = document.querySelector(".container-navbar");
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
