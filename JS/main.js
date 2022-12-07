(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.scrollY > 100) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');  
        }
    };
}());

const btnBurger = document.querySelector('.header__burger'),
      btnClose = document.querySelector('.header__nav-close'),
      menuNav = document.querySelector('.header__nav'),
      header = document.querySelector('.header');

function openingAndClosingMenus() {
  btnBurger.addEventListener('click', () => {
  menuNav.classList.add('header__nav_active');
  
  if(menuNav.classList.contains('header__nav_active')) {
    header.style.opacity = 1;
  } else {
    header.style.opacity = 0.80;
   }
  });
  
  btnClose.addEventListener('click', () => {
    if(menuNav.classList.contains('header__nav_active')) {
      menuNav.classList.remove('header__nav_active');
    }
  });
}

openingAndClosingMenus();