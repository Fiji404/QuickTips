const ThemeBtn = document.querySelector('.theme-toggle');
const root = document.querySelector('.root');

ThemeBtn.addEventListener('click', () => {
    ThemeBtn.classList.toggle('active');
    if (root.classList.contains('dark')) {
      root.classList.replace('dark', 'light')
    } else {
      root.classList.replace('light', 'dark')
    }
  });