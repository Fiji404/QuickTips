import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, get, child } from 'firebase/database';
import { createUserDashboard } from './utils/userDashboard';

const logInLink = document.querySelector('.nav-list__item_login');

const auth = getAuth();
const db = ref(getDatabase());

onAuthStateChanged(auth, user => {
    // if (!user) return;

    get(child(db, `users/${user.uid}`))
        .then(user => {
            if (user.exists()) {
                logInLink.remove();
                const { username } = user.val();
                createUserDashboard(username);
            }
        })
        .catch(error => {
            console.log(error);
        });
});
