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
const tipshideBtn = document.querySelector('.btn__tips--hide');  

tipsIO.addEventListener('click', function() {
    tipsContent.classList.add('show');
});

tipshideBtn.addEventListener('click', function() {
    if (tipsContent.classList.contains('show')) {
        tipsContent.classList.remove('show');
    }
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
tipshideBtn.addEventListener('click', function() {
  const categoryTip = e.target.closest('.category-tip');
    categoryTip.forEach((el) => {
        el.classList.remove('active');
    });
});

