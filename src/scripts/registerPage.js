'use strict';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, set, ref, update, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyCc1rgGJxFGcZTJL7AADjy2exF1-aN3-wU',
    authDomain: 'quick-tips-app.firebaseapp.com',
    projectId: 'quick-tips-app',
    storageBucket: 'quick-tips-app.appspot.com',
    messagingSenderId: '867547460819',
    appId: '1:867547460819:web:ab8854d60ad3627e191026',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();

const passwordInputElement = document.querySelector('.input-container__input_password');
const passwordRepeatInputElement = document.querySelector('.input-container__input_password-repeat');
const registerForm = document.querySelector('.register-form');

registerForm.addEventListener('submit', ev => {
    e.preventDefault();
    const usernameInput = document.getElementById('register-form__username').value;
    const passwordInput = document.getElementById('register-form__password').value;
    const repeatPasswordInput = document.getElementById('register-form__password-repeat').value;
    const emailInput = document.getElementById('register-form__email').value;
    if (passwordInputElement.value !== passwordRepeatInputElement.value && passwordInputElement.value && passwordRepeatInputElement.value) {
        ev.preventDefault();
        createUserWithEmailAndPassword(auth, userEmail, passwordInput)
            .then(userCredential => {
                signUpForm.reset();
                const user = userCredential.user;
                set(ref(database, 'users/' + user.uid), {
                    Username: usernameInput,
                    Password: passwordInput,
                    Email: emailInput,
                    accountCreationDate: new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format()
                });
            })
            .catch(error => {
                // const errorMessage = error.message;
                const errorCode = error.code;
                errorPopUp.classList.add('active');
                errorText.textContent = `Error Code: ${errorCode}`;
            });
    }
});
