document.addEventListener('DOMContentLoaded', function() {
    // Open external links in new tab
    document.querySelectorAll('a').forEach(link => {
        if (link.href.includes(document.location.host)) return;
        link.setAttribute('target', '_blank');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
