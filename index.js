 //  лупа

let magnifierClose = document.querySelector('.search-close__btn');
let magnifierOpen = document.querySelector('.header__btn');
let magnifierWindow = document.querySelector('.search-window')

magnifierOpen.addEventListener('click', function () {
  magnifierOpen.classList.toggle('header__btn--active');
  magnifierWindow.classList.toggle('search-window--active');
})

magnifierClose.addEventListener('click', function () {
  magnifierWindow.classList.remove('search-window--active');
  magnifierOpen.classList.remove('header__btn--active');
})


// бургер

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link')

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (element) {
  element.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})


// слайдер

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,

});


// табы

let tabsBtn = document.querySelectorAll('.tabs__nav_btn');
let tabsItem = document.querySelectorAll('.tabs__item');


tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('tabs__nav_btn--active')
    });
    e.currentTarget.classList.add('tabs__nav_btn--active');

    tabsItem.forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs__item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});


// аккордеон

let items = document.querySelectorAll('.faq__accordion_item');

new Accordion('.faq__accordion', {
  elementClass: 'faq__accordion_item',
  triggerClass: 'accordion__btn',
  panelClass: 'faq__accordion_content',
  activeClass: 'faq__accordion_item--active',
})

lazyload();
