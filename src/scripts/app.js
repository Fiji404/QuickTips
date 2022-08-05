const pageSectionLinks = document.querySelector('.available-tips-intro');
const pageSections = [...document.querySelectorAll('.tips-section, .javascript-section')];
const tipsContainer = document.querySelector('.container-tips');
const returnToAllTipsBtn = document.querySelector('.tip-card_hide');
const tipCards = document.querySelectorAll('.card-tip');

pageSectionLinks.addEventListener('click', ({ target, currentTarget }) => {
    if (target !== currentTarget) {
        const targetSectionElement = document.querySelector(target.closest('a').getAttribute('href'));
        if (pageSections.some(el => el.classList.contains('active'))) {
            pageSections.forEach(el => el.classList.remove('active'));
        }
        targetSectionElement.classList.toggle('active');
        targetSectionElement.scrollIntoView({
            behavior: 'smooth',
        });
    }
});

tipsContainer.addEventListener('click', e => {
    if (e.target.matches('.card-tip__button')) {
        const tipCard = e.target.closest('.card-tip');
        tipCard.classList.toggle('active');
        tipCards.forEach(el => {
            if (el !== tipCard) {
                el.classList.add('tip-card_hide');
            }
        });
        returnToAllTipsBtn.classList.add('active');
    }
});

returnToAllTipsBtn.addEventListener('click', () => {
    tipCards.forEach(el => {
        el.classList.remove('tip-card_hide', 'active');
    });
    returnToAllTipsBtn.classList.remove('active');
});