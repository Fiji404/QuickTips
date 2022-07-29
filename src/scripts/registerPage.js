'use strict';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, set, ref, update, onValue, child } from 'firebase/database';
import { createStatusHeadingElement, createStatusModalElement } from './statusModal';

const firebaseConfig = {
    apiKey: 'AIzaSyCc1rgGJxFGcZTJL7AADjy2exF1-aN3-wU',
    authDomain: 'quick-tips-app.firebaseapp.com',
    databaseURL: 'https://quick-tips-app-default-rtdb.firebaseio.com',
    projectId: 'quick-tips-app',
    storageBucket: 'quick-tips-app.appspot.com',
    messagingSenderId: '867547460819',
    appId: '1:867547460819:web:ab8854d60ad3627e191026',
    measurementId: 'G-TWB6CE3N9N',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();
const registerForm = document.querySelector('.register-form');

registerForm.addEventListener('submit', ev => {
    ev.preventDefault();
    const usernameInput = document.getElementById('register-form__username').value;
    const passwordInput = document.getElementById('register-form__password').value;
    const repeatPasswordInput = document.getElementById('register-form__password-repeat').value;
    const emailInput = document.getElementById('register-form__email').value;
    if (passwordInput === repeatPasswordInput && passwordInput && repeatPasswordInput) {
        createUserWithEmailAndPassword(auth, emailInput, passwordInput)
            .then(userCredential => {
                const user = userCredential.user;
                set(ref(db, 'users/' + user.uid), {
                    username: usernameInput,
                    password: passwordInput,
                    email: emailInput,
                    accountCreationDate: new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short' }).format(),
                });
                registerForm.reset();
                createStatusModalElement(true, 'Registration');
            })
            .catch(error => {
                createStatusModalElement(false, 'Registration', error.code);
            });
    }
});
