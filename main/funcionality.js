let aside = document.querySelector(".aside");
let nav = document.querySelector("nav > ul");
let asidebtn = document.querySelector(".aside-toggle");
const hamburger = document.querySelector(".hamburger");
const footerBtn = document.querySelector(".footer__toggle");
const footer = document.querySelector(".footer");

hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
});

footerBtn.addEventListener("click", function () {
    footer.classList.toggle("active");
    footerBtn.innerHTML = footer.classList.contains("active") ? "&#8744" : "&#8743";
 });