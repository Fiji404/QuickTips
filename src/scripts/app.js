import { getDatabase, ref, get, set, child } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const sectionLinks = document.querySelector('.available-tips-intro');
const pageSections = [...document.querySelectorAll('.tips-section, .javascript-section')];
const tipsContainer = document.querySelector('.container-tips');
const returnToAllTipsBtn = document.querySelector('.tip-card_hide');
const auth = getAuth();
const db = getDatabase();

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
    get(child(ref(db), 'tips/')).then(tips => {
        const tipsArray = Object.entries(tips.val());
        const sortedTipsArr = tipsArray.sort((a, b) => +a[0].slice(3) - +b[0].slice(3)).map(val => val[1]);
        sortedTipsArr.forEach(tip => {
            const { title, description, source } = tip;
            renderTipsInUI(title, description, source);
        });
    });
};

sectionLinks.addEventListener('click', ({ target, currentTarget }) => {
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

const addAddTipForm = () => {
    const addTipFormTemplate = `
    <dialog class="add-tip-modal">
    <span class="add-tip-modal_cancel-action"><i class="fa-solid fa-xmark"></i></span>
    <h2 class="add-tip-modal__title">Add your favourite tip ✨</h2>
    <form class="add-tip-form">
        <div class="add-tip-form__input-container">
            <label class="add-tip-form__input-label" for="add-tip-form__title">Title</label>
            <input class="add-tip-form__input" type="text" id="add-tip-form__title" name="title" required/>
        </div>
        <div class="add-tip-form__input-container">
            <label class="add-tip-form__input-label" for="add-tip-form__desc">Description</label>
            <input class="add-tip-form__input" type="text" id="add-tip-form__desc" name="description" required/>
        </div>
        <div class="add-tip-form__input-container">
            <label class="add-tip-form__input-label" for="add-tip-form__source">Source (URL from Codepen)</label>
            <input class="add-tip-form__input" type="url" id="add-tip-form__source" name="source" required/>
        </div>
        <button class="add-tip-form__submit" type="submit">submit</button>
    </form>
</dialog>
    `;
    document.body.insertAdjacentHTML('afterbegin', addTipFormTemplate);
    document.body.style.overflow = 'hidden';
    const dialogElement = document.querySelector('.add-tip-modal');
    const formElement = document.querySelector('.add-tip-form');
    const tipTitle = document.getElementById('add-tip-form__title');
    const tipDescription = document.getElementById('add-tip-form__desc');
    const tipSource = document.getElementById('add-tip-form__source');
    dialogElement.showModal();
    dialogElement.addEventListener('click', e => {
        if (e.target.closest('.add-tip-modal_cancel-action')) {
            dialogElement.remove();
            document.body.style.overflow = null;
        }
    });
    formElement.addEventListener('submit', e => {
        e.preventDefault();
        const tipElementsLength = document.querySelectorAll('.card-tip').length;
        set(ref(db, `tips/tip${tipElementsLength}`), {
            title: tipTitle.value,
            description: tipDescription.value,
            source: tipSource.value,
        });
        renderTipsInUI(tipTitle.value, tipDescription.value, tipSource.value);
        formElement.reset();
        dialogElement.remove();
        document.body.style.overflow = null;
    });
};

const enableAddTip = () => {
    const addTipButton = `
        <section style="--tipCard-delay: 0.2s" class="card-tip add-tip-btn">
            <button class="card-tip__add-tip-btn"><span>add tip</span>
            <i class="fa-solid fa-plus"></i></button>
        </section>`;
    tipsContainer.insertAdjacentHTML('beforeend', addTipButton);
    document.querySelector('.add-tip-btn').addEventListener('click', addAddTipForm);
};

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
    if (e.target.matches('.add-tip-btn')) {
        addAddTipForm();
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

onAuthStateChanged(auth, user => {
    if (!user) return;
    enableAddTip();
});
