// JavaScript code for the portfolio website

// index.html code - Skill icons animation
document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.head-menu');

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle classes
            hamburgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Prevent scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking on navigation links
        const navLinks = document.querySelectorAll('.anchor-head');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    const skillIcons = document.querySelectorAll('.skill-icons span');

    skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transition = 'transform 0.5s ease';
            icon.style.transform = 'rotate(360deg) scale(1.1)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'rotate(0deg) scale(1)';
        });
    });

    const navLinks = document.querySelectorAll('.anchor-head');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else {
                window.location.href = targetId;
            }
        });
    });
});


// contact.html code - Type effect and animations

document.addEventListener("DOMContentLoaded", function () {
    const text = "Send me a message!";
    let index = 0;
    const h2 = document.querySelector(".contact-form-section h2");

    if (h2) {
        h2.innerHTML = "";

        function typeEffect() {
            if (index < text.length) {
                h2.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100);
            }
        }

        typeEffect();
    }

    // Social icons animation
    const icons = document.querySelectorAll(".contact-socials a");
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.transform = "translateY(0)";
            icon.style.opacity = "1";
        }, index * 200);
    });

    // Floating shape interaction
    const floatingShape = document.querySelector(".floating-shape");
    if (floatingShape) {
        floatingShape.addEventListener("mouseenter", () => {
            floatingShape.style.transform = "scale(1.2)";
        });

        floatingShape.addEventListener("mouseleave", () => {
            floatingShape.style.transform = "scale(1)";
        });
    }

    // Form submission
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const successMessage = document.createElement("p");
            successMessage.textContent = "✅ ¡Mensaje enviado con éxito!";
            successMessage.style.color = "green";
            successMessage.style.fontSize = "1.2rem";
            successMessage.style.textAlign = "center";
            successMessage.style.marginTop = "1rem";

            const existingMessage = this.querySelector('p[style*="color: green"]');
            if (existingMessage) {
                existingMessage.remove();
            }

            this.appendChild(successMessage);

            this.reset();

            setTimeout(() => {
                if (successMessage.parentNode) {
                    successMessage.remove();
                }
            }, 3000);
        });
    }
});


// Loading animation
window.addEventListener('load', function () {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
            setTimeout(() => {
                loadingOverlay.remove();
            }, 500);
        }, 1000);
    }

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 200);
    });
});

// Loading animation for contact page
window.addEventListener('load', function () {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
            setTimeout(() => {
                loadingOverlay.remove();
            }, 500);
        }, 800);
    }
});

// Enhanced scroll animations
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.skill-icons span');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
});
