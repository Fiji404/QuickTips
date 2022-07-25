const usernameInput = document.querySelector('.user-input');
const passwordInput = document.querySelector('.password-input');
const userLabel = document.querySelector('.user-label');
const passwordLabel = document.querySelector('.password-label');
const passwordIcon = document.querySelector('.password-toggle');

usernameInput.addEventListener(
    'blur',
    () => {
        userLabel.classList.toggle('lift', usernameInput.value);
    },
    true
);

passwordInput.addEventListener(
    'blur',
    () => {
        passwordLabel.classList.toggle('change', passwordInput.value);
    },
    true
);

passwordIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.setAttribute('type', 'text');
        passwordIcon.classList.add('active');
    } else {
        passwordInput.setAttribute('type', 'password');
        passwordIcon.classList.remove('active');
    }
});

passwordInput.addEventListener('input', ({ target: { value } }) => {
    passwordIcon.classList.toggle('visible', !!value);
    passwordInput.classList.toggle('focused', !!value);
});