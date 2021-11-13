var tips = document.getElementById('tip_abbr');
var mutablecontent = document.querySelector('.tips-content');
var contentshow = document.querySelector('.show');
var discord = document.querySelector('.discord');
var dcinfo = document.querySelector('.discord-info')
    tips.addEventListener('click', function() {
        mutablecontent.classList.toggle('show');
});

discord.addEventListener('click', function() {
    dcinfo.classList.toggle('show-info')
})
