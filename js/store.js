// Store menu

const menu = document.querySelector(".filter-menu");
const menuButton = document.querySelector(".store-button");
const menuIcon = document.getElementById("plus");
const Button = document.querySelector(".btn");

// <760px size
menuButton.addEventListener("click", () => {
  menu.classList.toggle("filter-menu-open");
  menuButton.classList.toggle("store-button-open");
  menuIcon.classList.toggle("store-button-open");
  Button.classList.toggle("open");
});

// 1500px size
Button.addEventListener("click", () => {
  menu.classList.toggle("filter-menu-open");
  Button.classList.toggle("open");
  menuButton.classList.toggle("store-button-open");
  menuIcon.classList.toggle("store-button-open");
});