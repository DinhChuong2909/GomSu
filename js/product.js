const decrease = () => {
  const quantity = document.getElementById('quantity');
  const value = parseInt(quantity.value, 10);
  if (value > 0) {
    quantity.value = value - 1;
  }
}

const increase = () => {
  const quantity = document.getElementById('quantity');
  const value = parseInt(quantity.value, 10);
  quantity.value = value + 1;
}

let products = null;

fetch("/data/products.json")
  .then((response) => response.json())
  .then(data => {
    products = data;
    console.log(products);
    showProduct();
  });

function showProduct() {
  const productID = new URLSearchParams(window.location.search).get('id');
  let product = products.filter(value => value.id == productID)[0];
  if (!product) {
    window.location.href = 'storepage.html';
  }

  // document.getElementById('main-image').src = product.img;
  document.getElementById('product-name').innerText = product.name;
  document.getElementById('product-code').innerText = product.code;
  document.getElementById('product-texture').innerText = product.texture;
  document.getElementById('product-price').innerText = product.price + " VNĐ";
  document.getElementById('product-description').innerText = product.description;
}