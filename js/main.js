// Navbar menu
const menu = document.querySelector(".navbar-items");
const menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar-open");
  menuButton.classList.toggle("open");
});


// Logo

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.location.href = "/homepage.html";
});