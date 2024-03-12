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

const prodContainer = document.querySelector(".product-type-content");
const pagePagination = document.querySelector(".page-pagination");
let pages = null;
let products = null;
let productList = null;
let currentPage = 1;
let limit = 12;

fetch("https://dinhchuong2909.github.io/GomSu/data/products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    priceFilter();
    addDataToHTML();
    loadItem();
    listPage();
  });

function addDataToHTML() {
  products.forEach((data) => {
    // Create new element
    let newProduct = document.createElement("a");
    newProduct.addEventListener("click", () => {
      window.location=`productpage.html?id=${data.id}`;
    });
    newProduct.classList.add("slider-content", "prod");
    newProduct.innerHTML = `
      <div class="image_wrapper">
        <img
          class="slider-img prod"
          src="${data.img}"
          alt="${data.name}"
        />
        <div class="overlay-background overlay_1"> </div>
        <div class="overlay overlay_1"> </div>
      </div>
      <div class="prod-title">
        ${data.name}
      </div>
      <div class="prod-price" >
        ${data.price} VNĐ
      </div>
    `;
    // Add this element to class
    prodContainer.appendChild(newProduct);
  });

  productList = document.querySelectorAll(".slider-content.prod");
}

function loadItem() {
  let begin = (currentPage - 1) * limit;
  let end = currentPage * limit;
  productList.forEach((item, key) => {
    if (key >= begin && key < end) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function listPage() {
  pages = Math.ceil(productList.length / limit);
  let pageList = document.querySelector(".page-pagination ul");
  let prev = document.getElementById("prev-page");
  let next = document.getElementById("next-page");

  prev.setAttribute("onclick", `changePage(${currentPage - 1});`);
  next.setAttribute("onclick", `changePage(${currentPage + 1});`);

  for (let i = 1; i <= pages; i++) {
    let page = document.createElement("li");
    page.innerHTML = i;
    page.setAttribute("onclick", `changePage(${i});`);
    page.classList.add("page-number");
    pageList.appendChild(page);
  }
}

function changePage(page) {
  if (page < 1) page = 1;
  if (page >= pages) page = pages;
  currentPage = page;
  loadItem();
}

function priceFilter() {
  const price1 = document.getElementById('price1');
  const price2 = document.getElementById('price2');
  const price3 = document.getElementById('price3');
  const price4 = document.getElementById('price4');
  const price5 = document.getElementById('price5');
  let filter = [];
  price1.addEventListener('click', () => {
    products.forEach((item) => {
      if (parseInt(item.price) <= 1000000) {
        filter.push(item);
      } else {
        filter = [];
      }
    });
  });
}