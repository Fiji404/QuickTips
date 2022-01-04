let username = document.querySelector(".user-input");
let password = document.querySelector(".password-input");
let userlabel = document.querySelector(".user-label");
let focused = document.getElementById("focused");
let passwordlabel = document.querySelector(".password-label");
const static = document.querySelector(".static");
const iconHolder = document.querySelector(".password-toggle")
const passwordicon = document.querySelector(".eye");
const hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav > ul");
let registeropt = document.querySelector(".register-option");
let formregister = document.querySelector(".form--register");
let formlogin = document.querySelector(".form--login");
const registerbackBtn = document.querySelector('.register__btn--back');

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
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

registeropt.addEventListener("click", function () {
    formlogin.classList.add("hide");
    formregister.classList.add("active");
});

registerbackBtn.addEventListener('click', () => {
  if (formlogin.classList.contains('hide')) {
    formregister.classList.remove('active');
    formlogin.classList.remove('hide');
  }
});