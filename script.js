document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', clickHandler);
    });

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);

        // Scroll smoothly to the target section
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
});