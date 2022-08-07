import { getDatabase, ref, get, set, child } from 'firebase/database';

const pageSectionLinks = document.querySelector('.available-tips-intro');
const pageSections = [...document.querySelectorAll('.tips-section, .javascript-section')];
const tipsContainer = document.querySelector('.container-tips');
const returnToAllTipsBtn = document.querySelector('.tip-card_hide');
const db = ref(getDatabase());

const renderTipsInUI = (title, desc, src) => {
    const tipTemplateStructure = `
    <section style="--tipCard-delay: 0.2s" class="card-tip">
        <button class="card-tip__button">${title}</button>
        <section class="hidden-content">
        <p class="hidden-content__text">
            ${desc}
        </p>
        <iframe
            class="hidden-content__iframe"
            scrolling="no"
            title="REM and EM comparsion"
            src=${src}
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
        >
        </iframe>
        </section>
    </section>`;
    tipsContainer.insertAdjacentHTML('beforeend', tipTemplateStructure);
};

const getTipsFromDB = () => {
    get(child(db, 'tips/')).then(tips => {
        const tipsArray = Object.values(tips.val());
        tipsArray.forEach(tip => {
            const { title, description, source } = tip;
            renderTipsInUI(title, description, source);
        });
    });
};

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
        document.querySelectorAll('.card-tip').forEach(el => {
            if (el !== tipCard) {
                el.classList.add('hide');
            }
        });
        returnToAllTipsBtn.classList.add('active');
    }
});

returnToAllTipsBtn.addEventListener('click', () => {
    document.querySelectorAll('.card-tip').forEach(el => {
        el.classList.remove('hide', 'active');
    });
    returnToAllTipsBtn.classList.remove('active');
});

window.addEventListener('DOMContentLoaded', () => {
    getTipsFromDB();
});
