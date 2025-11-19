document.addEventListener('DOMContentLoaded', () => {
    // Noise overlay setup
    const noiseOverlay = document.createElement('div');
    noiseOverlay.classList.add('fixed', 'inset-0', 'pointer-events-none', 'z-50', 'opacity-[0.03]', 'mix-blend-overlay');
    noiseOverlay.style.backgroundImage = `url('noise_texture.png')`; // Will need to ensure path is correct
    document.body.appendChild(noiseOverlay);

    // Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Modal Logic
    const modal = document.getElementById('video-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close-modal');
    const videoFrame = document.getElementById('video-frame');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.dataset.videoId;
            // For demo purposes, using a placeholder video or just opening the modal
            // In a real app, this would set the src of an iframe or video tag
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            // Animate in
            setTimeout(() => {
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
        });
    });

    const closeModal = () => {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            videoFrame.src = ''; // Stop video
        }, 200);
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});
