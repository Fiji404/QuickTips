let cardtoggle = document.querySelector('.tips--toggle');
let tipssection = document.querySelector('.tips-container');
let contentshow = document.querySelector('.show');
let infocat = document.querySelector('.category-info');
let column = document.querySelector('.links-wrapper')
let aside = document.querySelector('.aside');
let nav = document.querySelector('nav > ul');
let asidebtn = document.querySelector('.aside-toggle');
let menubtn = document.querySelector('.menu-icon');
let menuprop = document.querySelector('.menu-prop')
let navmoblie = document.getElementById('nav-mobile');
let prop1 = document.querySelector('.line1');
let prop2 = document.querySelector('.line2');
let prop3 = document.querySelector('.line3');
let tipcols = document.querySelectorAll('.category-tip');
let tipcategory = document.querySelector('.category-tip');
let tipshow = document.querySelector('.tip__hidden');
let tipbtn = document.querySelector('.category-tip > button');
let footerbtn = document.querySelector('.footer__toggle');
const footer = document.querySelector('footer');
let tipshide = document.querySelector('.btn__tips--hide')

cardtoggle.addEventListener('click', function() {
    tipssection.classList.add('show');
});

tipshide.addEventListener('click', function() {
    if (tipssection.classList.contains('show'))
    tipssection.classList.remove('show');
});

asidebtn.addEventListener('click', function() {
    aside.classList.toggle('active');
    asidebtn.textContent = aside.classList.contains('active') ? '<' : '>';
});

menubtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    prop1.classList.toggle('prop1');
    prop2.classList.toggle('prop2');
    prop3.classList.toggle('prop3');
});

tipcategory.addEventListener('click', function() {
    tipcategory.classList.add('active');
    tipcols.classList.add('active');
});

footerbtn.addEventListener('click', function() {
    footer.classList.toggle('active');
    footerbtn.innerHTML = footer.classList.contains('active') ? '&#8744' : '&#8743';
});

//tip content showable
const container = document.querySelector('.content__wrapper-categories');

container.addEventListener('click', (e) => {
  const div = e.target.closest('.category-tip');

  div.classList.add('active');
  tipbtn.classList.add('hide');

  container.querySelectorAll('.category-tip').forEach((el) => {
    if (el.classList.contains('active')) return;
    el.classList.add('hide');
    tipbtn.classList.add('hide');
  });
});
