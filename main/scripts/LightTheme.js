const ThemeBtn = document.querySelector('.theme-toggle');
const root = document.querySelector('.root');

ThemeBtn.addEventListener('click', () => {
    if (root.classList.contains('dark')) {
      root.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
      ThemeBtn.classList.add('active');
    } else {
      root.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
      ThemeBtn.classList.remove('active')
    }
});

const theme = localStorage.getItem('theme');

if (theme) {
  root.classList.add(theme);
  ThemeBtn.classList.toggle('active');
}