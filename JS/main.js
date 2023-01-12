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

const btnCloseForm = document.querySelector('.form-close'),
      body = document.querySelector('body'),
      form = document.querySelector('.sign-in__form'),
      wrapperForm = document.querySelector('.form-wrapper'),
      headerNav = document.querySelector('.header__nav'),
      btnNavForm = document.querySelectorAll('.header__link'),
      signInFormContent = document.querySelector('.sign-in__form-content'),
      forgotFormContent = document.querySelector('.forgot__form-content'),
      btnFormForgotPass = document.querySelector('.sign-in__form-forgot'),
      btnNavItem = document.querySelectorAll('.header__item'),
      btnFormArrow = document.querySelector('.forgot__form-arrow');

const closeNavMobVersion = () => {
  if(headerNav.classList.contains('header__nav_active')) {
    headerNav.classList.remove('header__nav_active');
  }
};

btnNavItem[0].addEventListener('click', closeNavMobVersion);
btnNavItem[1].addEventListener('click', closeNavMobVersion);
btnNavItem[2].addEventListener('click', closeNavMobVersion);
btnNavItem[3].addEventListener('click', closeNavMobVersion);

function openingAndClosingForm() {
  const openAndCloseFormBtn = () => {
    if(!wrapperForm.classList.contains('form-wrapper_active')) {
      wrapperForm.classList.add('form-wrapper_active');
      body.style.overflow = ('hidden');
    } else {
      wrapperForm.classList.remove('form-wrapper_active');
      forgotFormContent.classList.add('forgot__form-content_not-active');
      signInFormContent.classList.remove('sign-in__form-content_not-active');
      body.style.overflow = ('visible');
    }
  };

  const btnCrossCloseForm = () => {
    if(wrapperForm.classList.contains('form-wrapper_active')) {
      wrapperForm.classList.remove('form-wrapper_active');
      forgotFormContent.classList.add('forgot__form-content_not-active');
      signInFormContent.classList.remove('sign-in__form-content_not-active');
      body.style.overflow = ('visible');
    }
  };

  const colseFormWithEsc = (e) => {
    if(e.keyCode === 27) {
      wrapperForm.classList.remove('form-wrapper_active');
      forgotFormContent.classList.add('forgot__form-content_not-active');
      signInFormContent.classList.remove('sign-in__form-content_not-active');
      body.style.overflow = ('visible');
    }
  };

  const closeWithWrapperForm = event => {
    const target = event.target;

    if (!target.closest('form')) {
      wrapperForm.classList.remove('form-wrapper_active');
      forgotFormContent.classList.add('forgot__form-content_not-active');
      signInFormContent.classList.remove('sign-in__form-content_not-active');
      body.style.overflow = ('visible');
    }
  };

  document.addEventListener('keydown', colseFormWithEsc);
  btnNavForm[3].addEventListener('click', openAndCloseFormBtn);
  btnCloseForm.addEventListener('click', btnCrossCloseForm);
  wrapperForm.addEventListener('click', closeWithWrapperForm);
}

openingAndClosingForm();


function openingAndClosingResetPass() {
  const btnOpenResetPass = () => {
    if(!signInFormContent.classList.contains('sign-in__form-content_not-active')) {
      signInFormContent.classList.add('sign-in__form-content_not-active');
      forgotFormContent.classList.remove('forgot__form-content_not-active');
    }
  };

  const btnCloseResetPass = () => {
    if(signInFormContent.classList.contains('sign-in__form-content_not-active')) {
      signInFormContent.classList.remove('sign-in__form-content_not-active');
      forgotFormContent.classList.add('forgot__form-content_not-active');
    }
  };
  

  btnFormForgotPass.addEventListener('click', btnOpenResetPass);
  btnFormArrow.addEventListener('click', btnCloseResetPass);
}

openingAndClosingResetPass();