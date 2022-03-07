const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".password-input");
const userlabel = document.querySelector(".user-label");
const passwordlabel = document.querySelector(".password-label");
const passwordIcon = document.querySelector(".password-toggle");
const registerChoice = document.querySelector(".register-option");
const registerForm = document.querySelector(".form--register");
const loginForm = document.querySelector(".form-login");
const registerbackBtn = document.querySelector(".register__btn--back");

usernameInput.addEventListener(
    "blur",
    () => {
        usernameInput.classList.add("touched");
    },
    true
);

passwordInput.addEventListener(
    "blur",
    () => {
        passwordInput.classList.add("touched");
    },
    true
);
usernameInput.addEventListener(
    "blur",
    function () {
        userlabel.classList.toggle("lift", usernameInput.value);
    },
    true
);
passwordInput.addEventListener(
    "blur",
    function () {
        passwordlabel.classList.toggle("change", passwordInput.value);
    },
    true
);

passwordIcon.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.setAttribute("type", "text");
        passwordIcon.classList.add("active");
    } else {
        passwordInput.setAttribute("type", "password");
        passwordIcon.classList.remove("active");
    }
});

passwordInput.addEventListener("input", ({ target: { value } }) => {
    passwordIcon.classList.toggle("visible", !!value);
    passwordInput.classList.toggle("focused", !!value);
});

registerChoice.addEventListener("click", function () {
    loginForm.classList.add("hide");
    registerForm.classList.add("active");
    loginForm.classList.remove('back')
});

registerbackBtn.addEventListener("click", () => {
    if (loginForm.classList.contains("hide")) {
        loginForm.classList.remove("hide");
        loginForm.classList.add("back");
        registerForm.classList.remove("active");
    }
});