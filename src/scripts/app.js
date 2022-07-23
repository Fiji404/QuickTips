const tipsToggle = document.querySelector('.tips--toggle');
const tipsContent = document.querySelector('.tips-section');
const accessibilityToggle = document.querySelector('.availability_toggle');
const accessibilityContent = document.querySelector('.availability-section');
const tipsCards = document.querySelectorAll('.card-tip');
const containerCategory = document.querySelector('.container-tips');
const hideTip = document.querySelector('.tip-card_hide');
const infoBoxExpander = document.querySelectorAll('.availability-content_expander');

tipsToggle.addEventListener('click', () => {
    tipsContent.classList.toggle('active');
    if (accessibilityContent.classList.contains('active')) {
        accessibilityContent.classList.remove('active');
    }
});

accessibilityToggle.addEventListener('click', () => {
    accessibilityContent.classList.toggle('active');
    if (tipsContent.classList.contains('active')) {
        tipsContent.classList.remove('active');
    }
});

containerCategory.addEventListener('click', e => {
    tipsCards.forEach(el => {
        if (el.classList.contains('active')) return;
    });
});

tipsCards.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.add('active');

        tipsCards.forEach(element => {
            if (element.classList.contains('active')) {
                hideTip.classList.add('visible');
                return;
            }
            element.classList.add('hide');
        });
    });
});

hideTip.addEventListener('click', () => {
    tipsCards.forEach(el => {
        el.classList.remove('hide');
        el.classList.remove('active');
        hideTip.classList.remove('visible');
    });
});

infoBoxExpander.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
        const infoExpand = element.nextElementSibling;
        if (infoExpand.style.maxHeight) {
            infoExpand.style.maxHeight = null;
        } else {
            infoExpand.style.maxHeight = `${infoExpand.scrollHeight}px`;
        }
    });
});
