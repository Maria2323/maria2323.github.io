var button = document.querySelector('.page-header__toggle');
var nav = document.querySelector('.main-nav');
var clickHandler = function() {
  console.log('clickHandler');
  nav.classList.toggle('main-nav__hidden');
  button.classList.toggle('page-header__toggle-hidden');
};
clickHandler();
button.addEventListener('click', clickHandler);
