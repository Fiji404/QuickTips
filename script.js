var tips = document.getElementById('tip_abbr');
var mutablecontent = document.querySelector('.tips-content');
var contentshow = document.querySelector('.show');
    tips.addEventListener('click', function (event) {
        mutablecontent.classList.toggle('show')
    }, 1000);