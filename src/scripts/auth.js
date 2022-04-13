import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getDatabase, set, ref, update, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCc1rgGJxFGcZTJL7AADjy2exF1-aN3-wU",
    authDomain: "quick-tips-app.firebaseapp.com",
    projectId: "quick-tips-app",
    storageBucket: "quick-tips-app.appspot.com",
    messagingSenderId: "867547460819",
    appId: "1:867547460819:web:ab8854d60ad3627e191026",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const analytics = getAnalytics(app);

const signUpForm = document.querySelector(".form-register");

const userUsername = document.querySelector("#form-register__username").value;
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userPassword = document.querySelector("#form-register__password").value;
    const userEmail = document.querySelector("#form-register__email").value;
    const ageUser = document.querySelector(".form-register__date").value;
    const errorPopUp = document.querySelector(".form-register_error");
    const errorText = document.querySelector(".error-code");
    const successPopUp = document.querySelector(".form-register_success");
    errorPopUp.addEventListener("click", () => {
        errorPopUp.classList.remove("active");
    });

    successPopUp.addEventListener("click", () => {
        successPopUp.classList.remove("active");
    });
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            signUpForm.reset();
            const user = userCredential.user;
            set(ref(database, "users/" + user.uid), {
                username: userUsername,
                password: userPassword,
                email: userEmail,
                age: ageUser,
            });

            successPopUp.classList.add("active");
            if (errorPopUp.classList.contains("active")) {
                errorPopUp.classList.remove("active");
            }
        })
        .catch((error) => {
            // const errorMessage = error.message;
            const errorCode = error.code;
            errorPopUp.classList.add("active");
            errorText.textContent = `Error Code: ${errorCode}`;
        });
});

const loginSubmit = document.querySelector(".form-login__submit");

loginSubmit.addEventListener("click", () => {
    const userPassword = document.querySelector("#form-login__password").value;
    const userEmail = document.querySelector("#form-login__email").value;
    const successPopUp = document.querySelector(".form-login_success");
    const errorPopUp = document.querySelector(".form-login_error");
    const errorText = document.querySelector(".error-code");
    errorPopUp.addEventListener("click", () => {
        errorPopUp.classList.remove("active");
    });

    successPopUp.addEventListener("click", () => {
        successPopUp.classList.remove("active");
    });
    signInWithEmailAndPassword(auth, userEmail, userUsername)
        .then((userCredential) => {
            const user = userCredential.user;
            const date = new Date();
            update(ref(database, "users/" + userUsername), {
                last_login: date,
            });
            successPopUp.classList.add("active");
            if (errorPopUp.classList.contains("active")) {
                errorPopUp.classList.remove("active");
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            errorPopUp.classList.add("active");
            errorText.textContent = `Error Code: ${errorCode}`;
        });
});

const logoutButton = document.querySelector(".userLoggedIn_logout");
const userLoggedUsername = document.querySelector(".userLoggedIn__title");
const loginLink = document.querySelector(".login-item");
const userButton = document.querySelector(".userLoggedIn");
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    const logoutIcon = document.querySelector(".userLoggedIn__icon");
    userButton.addEventListener("click", () => {
        logoutButton.classList.toggle("active");
        logoutIcon.classList.toggle("active");
    });
    
    if (user) {
        loginLink.classList.add("hidden");
        userButton.classList.add('active');
        // userLoggedUsername.textContent = user.uid;
        const getUser = ref(database, 'users/' + userUsername);
        onValue(getUser, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            userLoggedUsername = data.email;
        })
        

        // ...
    } else {
        // User is signed out
        // ...
    }
});

logoutButton.addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            alert('signout success');
            userLoggedUsername.textContent = '';
            loginLink.classList.remove("hidden");
            userButton.classList.remove('active');
        })
        .catch((error) => {
            // An error happened.
        });
});




