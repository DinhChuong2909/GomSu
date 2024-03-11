const payment = document.querySelector('.payment');
const continueBtn = document.querySelector('.continue-button');
const price = document.querySelector('.price');
const temp = document.querySelector('.temp');
const cart_wrapper = document.querySelector('.cart-wrapper');
const checkall = document.getElementById('check-all');

const backToCart = () => {
  payment.classList.remove('active');
  price.classList.remove('hide');
  temp.classList.remove('open');
  cart_wrapper.classList.remove('open');
}

continueBtn.addEventListener('click', () => {
  payment.classList.add('active');
  price.classList.add('hide');
  temp.classList.add('open');
  cart_wrapper.classList.add('open');
});

checkall.addEventListener('change', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = checkall.checked;
    // get id -> get price * quantity -> add to total
    if(checkbox.id == "cash" || checkbox.id == "card") {
      checkbox.checked = false;
    }
  });
  
});

