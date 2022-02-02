const tipsToggle = document.querySelector('.tips--toggle');
const tipsContent = document.querySelector('.tips-container');
const aside = document.querySelector('.aside');
const nav = document.querySelector('nav > ul');
const asidebtn = document.querySelector('.aside-toggle');
const hamburger = document.querySelector('.hamburger');
const tipHeader = document.querySelector('.category-tip');
const tipsCategories = document.querySelectorAll('.category-tip')
const tipBtn = document.querySelector('.category-tip > button');
const footerBtn = document.querySelector('.footer__toggle');
const footer = document.querySelector('footer');
const containerCategory = document.querySelector('.content__wrapper-categories');
const tipCancelBtn = document.querySelector('.btn__tips--hide');
const HideArrowFooter = document.querySelector('.arrow-up')  

tipsToggle.addEventListener('click', function() {
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

footerBtn.addEventListener('click', () => {
    footer.classList.toggle('active');
    if (footer.classList.contains('active')) {
      HideArrowFooter.classList.add('active');
    } else {
      HideArrowFooter.classList.remove('active');
    }
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
  el.addEventListener('click', () => {
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

