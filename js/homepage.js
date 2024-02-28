const slider = document.querySelector('.slider');
const sliderItems = slider.children;
const sliderItemsCount = sliderItems.length;
let current = 1;

const next = () => {
  current = current < sliderItemsCount ? current + 1 : 1;
  document.querySelector(`#slide-${current}`).scrollIntoView();

  const active = document.querySelector('.active');
  active.classList.remove('active');
  document.querySelector(`#dot-${current}`).classList.add('active');
}

const prev = () => {
  current = current > 1 ? current - 1 : sliderItemsCount;
  document.querySelector(`#slide-${current}`).scrollIntoView();

  const active = document.querySelector('.active');
  active.classList.remove('active');
  document.querySelector(`#dot-${current}`).classList.add('active');
}

const gotoCurrent = () => {
  current = parseInt(event.target.id.split('-')[1]);
  const active = document.querySelector('.active');
  active.classList.remove('active');

  document.querySelector(`#slide-${current}`).scrollIntoView();
  event.target.classList.add('active');
}

const more = () => {
  const hiddenDiv = document.querySelector('.hide');
  hiddenDiv.classList.add('show');
  hiddenDiv.classList.remove('hide');
  document.querySelector('#origin').scrollIntoView();
}

document.querySelector('.hide-button').addEventListener('click', () => {
  const hiddenDiv = document.querySelector('.show');
  hiddenDiv.classList.add('hide');
  hiddenDiv.classList.remove('show');
  document.querySelector('#origin').scrollIntoView();
});