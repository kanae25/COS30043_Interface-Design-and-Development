document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#main-nav a');
    const form = document.querySelector('form');
    const heading = document.querySelector('h1');
    const homeContent = document.querySelector('#home-content');

    function showPage(page) {
        if (!form || !heading) return;

        if (page === 'home') {
            heading.textContent = 'WAI - God of PCs';
            form.style.display = 'none';
            if (homeContent) homeContent.style.display = 'block';
        } else if (page === 'about') {
            heading.textContent = 'About';
            form.style.display = 'none';
            if (homeContent) homeContent.style.display = 'none';
        } else {
            // checkout
            heading.textContent = 'WAI Secured Checkout Form';
            form.style.display = 'block';
            if (homeContent) homeContent.style.display = 'none';
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

