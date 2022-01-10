let tipsIO = document.querySelector('.tips--toggle');
let tipsContent = document.querySelector('.tips-container');
let aside = document.querySelector('.aside');
let nav = document.querySelector('nav > ul');
let asidebtn = document.querySelector('.aside-toggle');
const hamburger = document.querySelector('.hamburger');
let tipHeader = document.querySelector('.category-tip');
let tipsCategories = document.querySelectorAll('.category-tip')
let tipBtn = document.querySelector('.category-tip > button');
const footerBtn = document.querySelector('.footer__toggle');
const footer = document.querySelector('footer');
const containerCategory = document.querySelector('.content__wrapper-categories');
const tipCancelBtn = document.querySelector('.btn__tips--hide');  

tipsIO.addEventListener('click', function() {
    tipsContent.classList.toggle('show');
});

asidebtn.addEventListener('click', function() {
    aside.classList.toggle('active');
    asidebtn.textContent = aside.classList.contains('active') ? '<' : '>';
});

hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

tipHeader.addEventListener('click', function() {
    tipHeader.classList.add('active');
    tipsCategories.classList.add('active');
});

footerBtn.addEventListener('click', function() {
    footer.classList.toggle('active');
    footerBtn.innerHTML = footer.classList.contains('active') ? '&#8744' : '&#8743';
});

containerCategory.addEventListener('click', (e) => {
  const categoryTip = e.target.closest('.category-tip');
  categoryTip.classList.add('active');
  tipBtn.classList.add('hide');
  
  tipsCategories.forEach((el) => {
      if (el.classList.contains('active')) return;
      el.classList.add('hide');
    });
});

tipsCategories.forEach((el) => {
  el.addEventListener('click', (e) => {
    el.classList.add('active');

    tipsCategories.forEach((element) => {
      if (element.classList.contains('active')) {
        return;
      }
      element.classList.add('hide');
    });

    tipCancelBtn.classList.remove('hide');
  });
});

tipCancelBtn.addEventListener('click', () => {
  tipsCategories.forEach((el) => {
    el.classList.remove('hide');
    el.classList.remove('active');
    tipCancelBtn.classList.add('hide');
  });
});

