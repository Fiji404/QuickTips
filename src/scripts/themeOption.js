const changeThemeBtn = document.querySelector('.theme-toggle-btn__dot');
const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navigationBar = document.querySelector('.nav-list');
const bodyElement = document.body;
const themePreference = localStorage.getItem('theme');

const checkUserPreferences = () => {
    if (themePreference === 'light') {
        changeThemeBtn.classList.add('active');
        bodyElement.classList.replace('dark', 'light');
    }
};

changeThemeBtn.addEventListener('click', () => {
    if (bodyElement.classList.contains('dark')) {
        changeThemeBtn.classList.add('active');
        bodyElement.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        bodyElement.classList.replace('light', 'dark');
        localStorage.removeItem('theme');
        changeThemeBtn.classList.remove('active');
    }
});

navToggleBtn.addEventListener('click', () => {
    navToggleBtn.classList.toggle('active');
    navigationBar.classList.toggle('active');
    bodyElement.classList.toggle('disabled');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        bodyElement.classList.remove('disabled');
        navToggleBtn.classList.remove('active');
        navigationBar.classList.remove('active');
    }
});

window.addEventListener('DOMContentLoaded', checkUserPreferences);