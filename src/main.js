import './style.css'

// Mechanism Parallax
const hero = document.getElementById('hero');
const mechanism = document.querySelector('.mechanism');

if (hero && mechanism) {
    hero.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = hero;
        const { clientX: x, clientY: y } = e;

        const xPos = (x / width - 0.5);
        const yPos = (y / height - 0.5);

        mechanism.style.transform = `
      rotateY(${xPos * 30}deg)
      rotateX(${-yPos * 30}deg)
    `;
    });

    hero.addEventListener('mouseleave', () => {
        mechanism.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
}

// Scroll Reveal
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
    observer.observe(element);
});

// Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('is-open');
            menuBtn.textContent = 'CLOSE';
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('is-open');
            menuBtn.textContent = 'MENU';
            document.body.style.overflow = '';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('is-open');
            menuBtn.textContent = 'MENU';
            document.body.style.overflow = '';
        });
    });
}
