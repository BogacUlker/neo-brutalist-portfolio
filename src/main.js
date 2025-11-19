import './style.css'

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

// 3D Cube & Card Interaction
const hero = document.getElementById('hero');
const pyramid = document.getElementById('pyramid');
const floatingCard = document.getElementById('floating-card');

if (hero && pyramid) {
    hero.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = hero;
        const { clientX: x, clientY: y } = e;

        const xPos = (x / width - 0.5);
        const yPos = (y / height - 0.5);

        // Rotate the scene
        const scene = document.querySelector('.scene');
        if (scene) {
            scene.style.transform = `
        rotateY(${xPos * 40}deg)
        rotateX(${-yPos * 40}deg)
      `;
        }

        // Parallax the floating card (moves opposite to mouse for depth)
        if (floatingCard) {
            floatingCard.style.transform = `
        rotate(-2deg)
        translateX(${xPos * -30}px)
        translateY(${yPos * -30}px)
      `;
        }
    });

    hero.addEventListener('mouseleave', () => {
        const scene = document.querySelector('.scene');
        if (scene) {
            scene.style.transform = `rotateY(0deg) rotateX(0deg)`;
        }
        if (floatingCard) {
            floatingCard.style.transform = `rotate(-2deg) translateX(0) translateY(0)`;
        }
    });
}
