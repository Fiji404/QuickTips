'use strict';

const formInputElements = document.querySelectorAll('.login-form__input');
const passwordShowBtn = document.querySelector('.password-section__show-password-btn');
const passwordInputElement = document.querySelector('.login-form__input-password');

passwordShowBtn.addEventListener('click', () => {
    passwordShowBtn.classList.toggle('active');
    if (passwordInputElement.type === 'password') {
        passwordInputElement.type = 'text';
        passwordShowBtn.classList.add('active');
    } else {
        passwordInputElement.type = 'password';
    }
});

passwordInputElement.addEventListener('input', ({ target: { value } }) => {
    passwordShowBtn.classList.toggle('visible', !!value);
});

formInputElements.forEach(input => {
    const parentElement = input.closest('.login-form__input-wrapper');
    input.addEventListener('focus', () => {
        parentElement.classList.toggle('focused');
    });
    input.addEventListener('blur', () => {
        parentElement.classList.remove('focused');
    });
});
