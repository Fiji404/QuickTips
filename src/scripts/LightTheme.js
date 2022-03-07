const themeBtn = document.querySelector('.button-theme__dot');
const body = document.querySelector('body');

themeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
      localStorage.setItem('checked', 'false');
      localStorage.setItem('icon', 'active');
      themeBtn.classList.add('active');
    } else {
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('checked', 'false');
      localStorage.setItem('icon', '');
      themeBtn.classList.remove('active');
    }
});

const theme = localStorage.getItem('theme');
const checked = localStorage.getItem('checked');
const active = localStorage.getItem('icon', 'active');


if (theme) {
  body.classList.add(theme);
}

if (checked) {
  document.getElementById('themeToggle').checked = checked;
}

if (active) {
  themeBtn.classList.add(active)
}