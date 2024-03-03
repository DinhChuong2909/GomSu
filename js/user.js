
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-items');
const arrow = document.querySelector('.dropdown-arrow');

dropdown.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
  arrow.classList.toggle('open');
});