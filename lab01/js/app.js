document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#main-nav a');
    const form = document.querySelector('form');
    const heading = document.querySelector('h1');
    const homeContent = document.querySelector('#home-content');
    const aboutContent1 = document.querySelector('#about-content1');
    const aboutContent2 = document.querySelector('#about-content2');

    function showPage(page) {
        if (!form || !heading) return;

        if (page === 'home') {
            heading.textContent = 'WAI - God of PCs';
            form.style.display = 'none';
            if (homeContent) homeContent.style.display = 'block';
            if (aboutContent1) aboutContent1.style.display = 'none';
            if (aboutContent2) aboutContent2.style.display = 'none';
        } else if (page === 'about') {
            heading.textContent = 'About Us';
            form.style.display = 'none';
            if (homeContent) homeContent.style.display = 'none';
            if (aboutContent1) aboutContent1.style.display = 'block';
            if (aboutContent2) aboutContent2.style.display = 'block';
        } else {
            // checkout
            heading.textContent = 'WAI Secured Checkout Form';
            form.style.display = 'block';
            if (homeContent) homeContent.style.display = 'none';
            if (aboutContent1) aboutContent1.style.display = 'none';
            if (aboutContent2) aboutContent2.style.display = 'none';
        }
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page || 'checkout');
        });
    });
    showPage('checkout');
});

