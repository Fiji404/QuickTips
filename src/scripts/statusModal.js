const registerForm = document.querySelector('.register-form');

export const createStatusHeadingElement = (status, message, errorMessage, modal) => {
    const headingStatusElement = document.createElement('h2');
    headingStatusElement.innerHTML = `${message} ${
        status ? 'was successful <i class="fa-solid fa-check"></i>' : 'failed <i class="fa-solid fa-xmark"></i>'
    }
    `;
    modal.append(headingStatusElement);
    if (!status) {
        const errorDescriptionElement = document.createElement('p');
        const errorSlashChar = errorMessage.indexOf('/');
        const splitErrorMessage = errorMessage
            .slice(errorSlashChar + 1)
            .split('-')
        errorDescriptionElement.textContent = splitErrorMessage.join(' ');
        modal.append(errorDescriptionElement);
    }
};

export const createStatusModalElement = (status, message, error = '') => {
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal');
    createStatusHeadingElement(status, message, error, modalElement);
    document.body.prepend(modalElement);
    modalElement.addEventListener('click', () => modalElement.remove());
    setTimeout(() => modalElement.remove(), 5000);
};
