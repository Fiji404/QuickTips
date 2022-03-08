const aside = document.querySelector(".aside");
const asideBtn = document.querySelector(".aside-toggle");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const footer = document.querySelector(".footer");
const openFooterIcon = document.querySelector(".footer-toggle__up-arrow");
const aboutSite = document.querySelector(".about");
const aboutSiteBtn = document.querySelector(".about-site");
const footerButton = document.querySelector(".footer-toggle");


hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
});

aboutSite.addEventListener("click", () => {
    footer.classList.toggle("active");
    aboutSiteBtn.classList.add("active");
    if (footer.classList.contains("active")) {
        openFooterIcon.classList.add("active");
    } else {
        openFooterIcon.classList.remove("active");
    }
});

asideBtn.addEventListener("click", function () {
    aside.classList.toggle("active");
    asideBtn.classList.toggle("active");
});
    
footerButton.addEventListener("click", () => {
    aboutSiteBtn.classList.remove("active");
    footer.classList.toggle("active");
    if (footer.classList.contains("active")) {
        openFooterIcon.classList.add("active");
    } else {
        openFooterIcon.classList.remove("active");
    }
});