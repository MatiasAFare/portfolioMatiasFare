// Loading Overlay
document.addEventListener('DOMContentLoaded', function () {
    const loading = document.querySelector('.loading-overlay');
    if (loading) {
        loading.style.opacity = '0';
        loading.style.pointerEvents = 'none';
        setTimeout(() => loading.remove(), 500);
    }


    initSkillsSection();
    initScrollAnimations();
});

// Skills Section
function initSkillsSection() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');


    initSkillBars();


    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');


            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');


            filterSkills(filter, skillCards);
        });
    });


    observeSkillCards();
}

function initSkillBars() {
    const levelBars = document.querySelectorAll('.level-bar');

    levelBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.setProperty('--level-width', level + '%');
    });
}

function filterSkills(filter, skillCards) {
    skillCards.forEach((card, index) => {
        const category = card.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;


        setTimeout(() => {
            if (shouldShow) {
                card.classList.remove('hidden');

                setTimeout(() => {
                    card.classList.add('animate');
                }, 300);
            } else {
                card.classList.add('hidden');
                card.classList.remove('animate');
            }
        }, index * 50);
    });
}

function observeSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add('animate');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '50px'
    });

    skillCards.forEach(card => {

        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';

        observer.observe(card);
    });
}

// Scroll Animations
function initScrollAnimations() {

}

// Skill Card Interactions
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateZ(20px)
                translateY(-10px)
            `;
        });


        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });


        card.addEventListener('click', () => {
            card.style.animation = 'pulse 0.6s ease';
            setTimeout(() => {
                card.style.animation = '';
            }, 600);
        });
    });
});

// Dynamic CSS

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes skillEntrance {
        from { 
            opacity: 0; 
            transform: translateY(30px) rotateX(90deg); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0) rotateX(0deg); 
        }
    }
`;
document.head.appendChild(style);
