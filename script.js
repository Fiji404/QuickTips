let tips = document.getElementById('tip_abbr');
let mutablecontent = document.querySelector('.tips-content');
let contentshow = document.querySelector('.show');
let discord = document.getElementById('discord');
let dcinfo = document.querySelector('.discord-info');
let infocat = document.querySelector('.category-info');
let column = document.querySelector('.links-wrapper')
let alternate = document.querySelector('.footer');
    tips.addEventListener('click', function() {
        mutablecontent.classList.toggle('show');
});

discord.addEventListener('click', function() {
    dcinfo.classList.toggle('show-info')
})

