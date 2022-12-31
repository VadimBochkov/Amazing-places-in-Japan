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
      btnCloseNav = document.querySelector('.header__nav-close'),
      menuNav = document.querySelector('.header__nav'),
      header = document.querySelector('.header');

function openingAndClosingMenu() {
  btnBurger.addEventListener('click', () => {
    menuNav.classList.add('header__nav_active');
    
    if(menuNav.classList.contains('header__nav_active')) {
      header.style.opacity = 1;
    } else {
      header.style.opacity = 0.80;
    }
    });
    
    btnCloseNav.addEventListener('click', () => {
      if(menuNav.classList.contains('header__nav_active')) {
        menuNav.classList.remove('header__nav_active');
      }
  });

  
}

openingAndClosingMenu();

const btnCloseForm = document.querySelector('.sign-in__form-close'),
      form = document.querySelector('.sign-in__form'),
      wrapperForm = document.querySelector('.form-wrapper'),
      btnNavForm = document.querySelectorAll('.header__link');

function openingAndClosingForm() {
  const openAndCloseFormBtn = () => {
    if(!wrapperForm.classList.contains('form-wrapper_active')) {
      wrapperForm.classList.add('form-wrapper_active');
    } else {
      wrapperForm.classList.remove('form-wrapper_active');
    }
  };

  const btnCrossCloseForm = () => {
    if(wrapperForm.classList.contains('form-wrapper_active')) {
      wrapperForm.classList.remove('form-wrapper_active');
    }
  };

  const closeWithWrapperForm = event => {
    const target = event.target;

    if (!target.closest('form')) {
      wrapperForm.classList.remove('form-wrapper_active');
    }
  };

  btnNavForm[3].addEventListener('click', openAndCloseFormBtn);
  btnCloseForm.addEventListener('click', btnCrossCloseForm);
  wrapperForm.addEventListener('click', closeWithWrapperForm);
}

openingAndClosingForm();