import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, get, child } from 'firebase/database';
import { createUserDashboard } from './userDashboard';

const logInLink = document.querySelector('.nav-list__item_login');
const navList = document.querySelector('.nav-list');

const auth = getAuth();
const db = ref(getDatabase())

onAuthStateChanged(auth, user => {
    console.log(user);

    if (user) {
        logInLink.remove();
        get(child(db, `users/${user.uid}`)).then(data => {
            if (data.exists()) {
                const userData = data.val();
                createUserDashboard(userData.username);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
});
