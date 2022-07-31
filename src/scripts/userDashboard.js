import { getAuth, signOut } from 'firebase/auth';

const navList = document.querySelector('.nav-list');
const loginLinkClone = document.querySelector('.nav-list__item_login').cloneNode(true);
const auth = getAuth();

const userDashboard = username => {
    const userPanel = document.createElement('li');
    const usernameHeadingElement = createUsernameHeadingElement(username);
    const userPanelLogoutButton = createLogOutButton();
    userPanel.append(usernameHeadingElement, userPanelLogoutButton);
    userPanel.classList.add('user-panel');
    if (navList.querySelector('.user-panel')) removeUserDashboard();
    navList.append(userPanel);
    userPanel.addEventListener('click', () => userPanelLogoutButton.classList.toggle('visible'))
    return userPanel;
};

const createUsernameHeadingElement = username => {
    const userDisplayedNameElement = document.createElement('h2');
    userDisplayedNameElement.textContent = username;
    userDisplayedNameElement.classList.add('user-panel__user-name');
    return userDisplayedNameElement;
};

const createLogOutButton = () => {
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'logout';
    logoutButton.classList.add('user-panel__logout-btn');
    logoutButton.addEventListener('click', () => {
        signOut(auth);
        removeUserDashboard();
    });
    return logoutButton;
};

export const createUserDashboard = username => navList.append(userDashboard(username));

export const removeUserDashboard = () => {
    document.querySelector('.user-panel').remove()
    navList.append(loginLinkClone)
};