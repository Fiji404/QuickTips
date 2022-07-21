const changeThemeBtn = document.querySelector('.theme-toggle-btn__dot');
const bodyElement = document.body;
const themePreference = localStorage.getItem('theme');

const checkUserPreferences = () => {
  if (themePreference === 'light') {
    changeThemeBtn.classList.add('active');
    bodyElement.classList.replace('dark', 'light')
  }
}

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

window.addEventListener('DOMContentLoaded', checkUserPreferences);