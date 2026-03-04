document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#main-nav a');
    const form = document.querySelector('form');
    const heading = document.querySelector('h1');

    function showPage(page) {
        if (!form || !heading) return;

        if (page === 'home') {
            heading.textContent = 'Home';
            form.style.display = 'none';
        } else if (page === 'about') {
            heading.textContent = 'About';
            form.style.display = 'none';
        } else {
            // checkout
            heading.textContent = 'WAI Secured Checkout Form';
            form.style.display = 'block';
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

