AOS.init({ duration: 1000, once: true });

const navbar = document.getElementById('navbar');
const workSection = document.getElementById('work');
const dot = document.getElementById('dot');
const outline = document.getElementById('outline');

window.addEventListener('scroll', () => {
    const workTop = workSection.offsetTop - 50;
    const workBottom = workTop + workSection.offsetHeight - 50;
    const scrollPos = window.scrollY;

    if (scrollPos >= workTop && scrollPos < workBottom) {
        navbar.classList.add('dark-mode');
        document.documentElement.style.setProperty('--nav-text', '#eaddcf');
        dot.style.background = '#eaddcf';
        outline.style.borderColor = '#eaddcf';
    } else {
        navbar.classList.remove('dark-mode');
        document.documentElement.style.setProperty('--nav-text', '#4a040e');
        dot.style.background = '#4a040e';
        outline.style.borderColor = '#4a040e';
    }
});

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;
    outline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
});

document.querySelectorAll('a, .btn, .card-image').forEach(el => {
    el.addEventListener('mouseenter', () => {
        outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        outline.style.background = "rgba(74, 4, 14, 0.1)";
    });
    el.addEventListener('mouseleave', () => {
        outline.style.transform = "translate(-50%, -50%) scale(1)";
        outline.style.background = "transparent";
    });
});

const hamburger = document.getElementById('hamburger');
const navOverlay = document.getElementById('nav-overlay');
const navLinks = document.querySelectorAll('.nav-overlay-links a');

// Fungsi Toggle Menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Mencegah scroll saat menu buka
    if (navOverlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Tutup menu saat salah satu link diklik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Update juga pada bagian Mousemove (agar outline kursor tetap bekerja di hamburger)
document.querySelectorAll('.hamburger, .nav-overlay-links a').forEach(el => {
    el.addEventListener('mouseenter', () => {
        outline.style.transform = "translate(-50%, -50%) scale(1.5)";
        outline.style.background = "rgba(74, 4, 14, 0.1)";
    });
    el.addEventListener('mouseleave', () => {
        outline.style.transform = "translate(-50%, -50%) scale(1)";
        outline.style.background = "transparent";
    });
});