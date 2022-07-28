'use strict';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, update, get } from 'firebase/database';

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

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const emailInput = document.getElementById('email-section__email-input').value;
    const passwordInput = document.getElementById('password-section__password-input').value;
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
        .then(userCredential => {
            const user = userCredential.username;
            const date = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format();
            console.log(user);
            update(DB, 'users/' + user, {
                lastTimeLogin: date,
            });
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
});

// const logoutButton = document.querySelector('.userLoggedIn_logout');
// const userLoggedUsername = document.querySelector('.userLoggedIn__title');
// const loginLink = document.querySelector('.login-item');
// const userButton = document.querySelector('.userLoggedIn');
// const user = auth.currentUser;
// onAuthStateChanged(auth, user => {
//     const logoutIcon = document.querySelector('.userLoggedIn__icon');
//     userButton.addEventListener('click', () => {
//         logoutButton.classList.toggle('active');
//         logoutIcon.classList.toggle('active');
//     });

//     if (user) {
//         loginLink.classList.add('hidden');
//         userButton.classList.add('active');
//         // userLoggedUsername.textContent = user.uid;
//         const getUser = ref(database, 'users/' + userUsername);
//         onValue(getUser, snapshot => {
//             const data = snapshot.val();
//             console.log(data);
//             userLoggedUsername = data.email;
//         });

//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
// });

// logoutButton.addEventListener('click', () => {
//     signOut(auth)
//         .then(() => {
//             alert('signout success');
//             userLoggedUsername.textContent = '';
//             loginLink.classList.remove('hidden');
//             userButton.classList.remove('active');
//         })
//         .catch(error => {
//             // An error happened.
//         });
// });
