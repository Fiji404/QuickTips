let username = document.querySelector(".user-input");
let password = document.querySelector(".password-input");
let userlabel = document.querySelector(".user-label");
let focused = document.getElementById("focused");
let passwordlabel = document.querySelector(".password-label");
const iconHolder = document.querySelector(".password-toggle")
const passwordicon = document.querySelector(".eye");
let registeropt = document.querySelector(".register-option");
let formregister = document.querySelector(".form--register");
let formlogin = document.querySelector(".form--login");
const registerbackBtn = document.querySelector('.register__btn--back');
const reverseContentanim = document.querySelector('.login-content--hide');
const nav = document.querySelector("nav > ul");
const asidebtn = document.querySelector(".aside-toggle");
const hamburger = document.querySelector(".hamburger");
const footerBtn = document.querySelector(".footer__toggle");
const footer = document.querySelector(".footer");
const HideArrowFooter = document.querySelector(".arrow-up");
const AboutSiteLink = document.querySelector('.aboutMe-link');
const AboutSiteBtn = document.querySelector('.about-site');

username.addEventListener(
    "blur",
    (event) => {
        username.classList.add("touched");
    },
    true
);

password.addEventListener(
    "blur",
    () => {
        password.classList.add("touched");
    },
    true
);
username.addEventListener(
    "blur",
    function () {
        userlabel.classList.toggle("lift", username.value);
    },
    true
);
password.addEventListener(
    "blur",
    function () {
        passwordlabel.classList.toggle("change", password.value);
    },
    true
);

iconHolder.addEventListener('click', () => {
if (password.type === "password") {
    password.setAttribute("type", "text");
     iconHolder.classList.add("active");
} else {
    password.setAttribute("type", "password");
    iconHolder.classList.remove("active");
    };
});

password.addEventListener("input", ({ target: { value } }) => {
    iconHolder.classList.toggle("visible", !!value);
    password.classList.toggle("focused", !!value);
});

hamburger.addEventListener("click", function (el) {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
});

footerBtn.addEventListener("click", () => {
    footer.classList.toggle("active");
    if (footer.classList.contains("active")) {
        HideArrowFooter.classList.add("active");
    } else {
        HideArrowFooter.classList.remove("active");
    }
});

registeropt.addEventListener("click", function () {
    formlogin.classList.add("hide");
    formregister.classList.add("active");
});

registerbackBtn.addEventListener('click', () => {
  if (formlogin.classList.contains('hide')) {
    reverseContentanim.classList.toggle('back')
    formregister.classList.remove('active');
    formlogin.classList.remove('hide');
  }
});

AboutSiteLink.addEventListener("click", () => {
    footer.classList.toggle("active");
    AboutSiteBtn.classList.add("active");
    if (footer.classList.contains("active")) {
        HideArrowFooter.classList.add("active");
    } else {
        HideArrowFooter.classList.remove("active");
    }
});
