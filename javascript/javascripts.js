document.addEventListener('DOMContentLoaded', function() {
    const logoWrapper = document.querySelector('.logo-wrapper');
    const navMenu = document.querySelector('.nav-menu');
    const navBg = document.querySelector('.nav-background');
    const body = document.body;
    logoWrapper.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        navBg.classList.toggle('open');
        body.classList.toggle('nav-open');
    });
});
