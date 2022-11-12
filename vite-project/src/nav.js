const menu = document.querySelector('.menu');

const navColumn = [...document.querySelectorAll('.nav-column')];

const siteNav = document.querySelector('.site-nav');

const navLinks = [...document.querySelectorAll('.nav-wrapper a')];

const currentPage = window.location.pathname;

const socialLinks = [...document.querySelectorAll('.social-me a')]

navLinks.forEach(function (item) {
    if (item.href.includes(`${currentPage}`)) {
        item.classList.add('active-page');
    };
    item.addEventListener('mouseover', function (e) {
        const hoveredLink = e.currentTarget;
        navLinks.forEach(function (link) {
            if (link != hoveredLink) {
                link.classList.remove('active-page');
            }
        });
    });
    item.addEventListener('mouseout', function () {
        navLinks.forEach(function (link) {
            if (!link.classList.contains('active-page')) {
                if (link.href.includes(`${currentPage}`)) {
                    link.classList.add('active-page');
                };
            };
        });
    });
});

navColumn.forEach(function (items, index) {
    items.style.transitionDelay = `${0 + index * 0.05}s`;
});

menu.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('menu-active');
    siteNav.classList.toggle('nav-active');
});

navLinks.forEach(function (items, index) {
    items.style.transitionDelay = `${0 + index * 0.1}s`;
});

socialLinks.forEach(function (item, index) {
    item.style.transitionDelay = `${0 + index * 0.2}s`;
});