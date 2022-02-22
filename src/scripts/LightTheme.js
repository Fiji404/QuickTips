const ThemeBtn = document.querySelector('.toggle__dot');
const root = document.querySelector('.root');

ThemeBtn.addEventListener('click', () => {
    if (root.classList.contains('dark')) {
      root.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
      localStorage.setItem('checked', 'false');
      localStorage.setItem('icon', 'active');
      ThemeBtn.classList.add('active');
    } else {
      root.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('checked', 'false');
      localStorage.setItem('icon', '');
      ThemeBtn.classList.remove('active');
    }
});

const theme = localStorage.getItem('theme');
const checked = localStorage.getItem('checked');
const active = localStorage.getItem('icon', 'active');

if (theme) {
  root.classList.add(theme);
}

if (checked) {
  document.getElementById('themeToggle').checked = checked;
}

if (active) {
  ThemeBtn.classList.add(active)
}