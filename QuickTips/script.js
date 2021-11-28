let tips = document.getElementById('tip_abbr');
let mutablecontent = document.querySelector('.tips-content');
let contentshow = document.querySelector('.show');
let discord = document.getElementById('discord');
let dcinfo = document.querySelector('.discord-info');
let infocat = document.querySelector('.category-info');
let column = document.querySelector('.links-wrapper')
let aside = document.querySelector('.aside');
let nav = document.querySelector('nav > ul');
let asidebtn = document.querySelector('.aside-toggle');
let menubtn = document.querySelector('.menu-icon');
let menuprop = document.querySelector('.menu-prop')
let navmoblie = document.getElementById('nav-mobile');
let prop1 = document.querySelector('.first');
let prop2 = document.querySelector('.two');
let prop3 = document.querySelector('.three');
let tipcols = document.querySelectorAll('.tip-col');
let tipcol = document.querySelector('.tip-col');
let tipshow = document.querySelector('.tip__hidden');
let tipbtn = document.querySelector('.tip-col button');
let footerbtn = document.querySelector('.footer__toggle');
let footer = document.querySelector('footer')

    tips.addEventListener('click', function() {
        mutablecontent.classList.toggle('show');
});

discord.addEventListener('click', function() {
    dcinfo.classList.toggle('show-info');
});

asidebtn.addEventListener('click', function() {
    aside.classList.toggle('active');
    asidebtn.textContent = aside.classList.contains('active') ? '<' : '>'
});

//Mobile navbar implementation
menubtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    prop1.classList.toggle('prop1');
    prop2.classList.toggle('prop2');
    prop3.classList.toggle('prop3');
});

tipcol.addEventListener('click', function() {
    tipcol.classList.add('active');
    tipcols.classList.add('active')
});

// $(".tip-col").click(function(){
//     $(".tip-cols").filter((i, e) => e !== this).addClass("active");
//     $(this).addClass("active");
//  });