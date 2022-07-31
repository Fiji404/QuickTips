'use strict';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, update, get } from 'firebase/database';
import { createStatusModalElement } from './statusModal';

const firebaseConfig = {
    apiKey: 'AIzaSyCc1rgGJxFGcZTJL7AADjy2exF1-aN3-wU',
    authDomain: 'quick-tips-app.firebaseapp.com',
    projectId: 'quick-tips-app',
    messagingSenderId: '867547460819',
    appId: '1:867547460819:web:ab8854d60ad3627e191026',
};

const app = initializeApp(firebaseConfig);
const DB = ref(getDatabase());
const auth = getAuth();

const loginForm = document.querySelector('.login-form');
const formInputElements = document.querySelectorAll('.login-form__input');
const passwordShowBtn = document.querySelector('.password-section__show-password-btn');
const passwordInputElement = document.querySelector('.login-form__input-password');
const resetPasswordForm = document.querySelector('.reset-password-form');
const resetPasswordModal = document.querySelector('.reset-password-intro');
const showResetPasswordModalBtn = document.querySelector('.other-options__reset-password-btn');
const closeResetPasswordModalBtn = document.querySelector('.reset-password-intro__close-modal');

showResetPasswordModalBtn.addEventListener('click', () => {
    resetPasswordModal.showModal();
});

closeResetPasswordModalBtn.addEventListener('click', () => {
    resetPasswordModal.close();
});

resetPasswordForm.addEventListener('submit', () => {
    const email = document.querySelector('.reset-password-form__email-input').value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            createStatusModalElement(true, 'Reset password');
        })
        .catch(error => {
            createStatusModalElement(false, 'Reset password', error.code);
        });
});

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

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const emailInput = document.getElementById('email-section__email-input').value;
    const passwordInput = document.getElementById('password-section__password-input').value;
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
        .then(credentials => {
            const user = credentials.user;
            console.log(user);
            update(DB, 'users/' + user.uid, {
                lastTimeLogin: new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(),
            });
            if (auth.currentUser) signOut(auth);
            createStatusModalElement(true, 'Login');
        })
        .catch(error => {
            createStatusModalElement(false, 'Login', error.code);
        });
});
