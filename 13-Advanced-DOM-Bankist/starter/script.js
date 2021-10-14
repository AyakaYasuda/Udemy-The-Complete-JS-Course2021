'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

/*
Selecting elements
*/
console.log(document.documentElement); // take the entire HTML
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); // NodeList will be created, never change

document.getElementById('section--1');
const allButoons = document.getElementsByTagName('button');
console.log(allButoons); // HTMLCollection will be created, can change

console.log(document.getElementsByClassName('btn'));

/*
Creating and inserting elements
*/
//.insertAdjacentHTML

const message = document.createElement('div'); // create a DOM element
message.classList.add('cookie-message'); // add class to an element
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
// header.prepend(message);
header.append(message); // -> everty DOM document is unique, so it's placed once
// header.append(message.cloneNode(true)) // in order to insert multiple elements
// header.before(message);
// header.after(message);

/*
Delete elements
*/
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message); // an old way to delete elements
  });

/*
Styles
*/
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(message.style.color); // -> nothing shown
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered')

/*
Attributes
*/
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimarist logo'

// Non-standard property
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist')

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

/*
Classes
*/
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// DON'T USE THIS!
logo.className = 'jonas'