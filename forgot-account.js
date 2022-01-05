const inputEmail = document.querySelector('.card__input');

inputEmail.addEventListener('focus', () => {
    inputEmail.classList.add('focused');
})