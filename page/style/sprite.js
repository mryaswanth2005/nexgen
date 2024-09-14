
    // Initialize ScrollReveal
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top', reset: true, distance: '80px', duration: 1500, delay: 100 });
    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, contact form', { origin: 'bottom', reset: true, distance: '80px', duration: 1500, delay: 100 });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left', reset: true, distance: '80px', duration: 1500, delay: 100 });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right', reset: true, distance: '80px', duration: 1500, delay: 100 });

    const typed = new Typed('.multiple-text', {
        strings: ['Flutter Developer', 'UI/UX Designer', 'Content Writer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
