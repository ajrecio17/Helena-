// Helena• Musicians Website - Interactive JavaScript

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
    initFormSubmission();
    initSmoothScroll();
    initMobileMenu();
    initParallaxEffect();
    initSectionAnimations();
});

// Scroll Reveal Animation - Reveal elements as they come into view
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    // Add scroll-reveal class to elements that should animate in
    const servicCards = document.querySelectorAll('.service-card');
    const contactBoxes = document.querySelectorAll('.contact-info-box');
    const whyChoose = document.querySelector('.why-choose');
    
    [servicCards, contactBoxes].forEach(collection => {
        collection.forEach(el => {
            if (!el.classList.contains('scroll-reveal')) {
                el.classList.add('scroll-reveal');
                revealOnScroll.observe(el);
            }
        });
    });

    if (whyChoose && !whyChoose.classList.contains('scroll-reveal')) {
        whyChoose.classList.add('scroll-reveal');
        revealOnScroll.observe(whyChoose);
    }
}

// Form Submission Handler
function initFormSubmission() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = form.querySelector('input[placeholder="Your name"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const phone = form.querySelector('input[type="tel"]').value;
            const date = form.querySelector('input[type="date"]').value;
            const service = form.querySelector('select').value;
            const eventType = form.querySelector('input[placeholder="Wedding, Party, Corporate, etc."]').value;
            const message = form.querySelector('textarea').value;

            // Validate form
            if (!name || !email || !phone || !date || !service || !message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }

            // Show loading state
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Processing...';
            button.disabled = true;
            button.classList.add('form-submit-loading');

            // Simulate processing
            setTimeout(() => {
                // Construct mailto link
                const mailtoLink = `mailto:peperr111ws@gmail.com,jericdechavez07@gmail.com?subject=Helena Booking Inquiry - ${eventType || 'Event'}&body=Name: ${name}%0DEmail: ${email}%0DPhone: ${phone}%0DEvent Date: ${date}%0DService Type: ${service}%0DEvent Type: ${eventType}%0D%0DMessage:%0D${message}`;
                
                // Open email client
                window.location.href = mailtoLink;

                // Reset button
                button.textContent = originalText;
                button.disabled = false;
                button.classList.remove('form-submit-loading');

                // Show success message
                showNotification('Your booking inquiry has been prepared for submission!', 'success');

                // Reset form after a delay
                setTimeout(() => {
                    form.reset();
                }, 2000);
            }, 500);
        });
    }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Add slight delay for smooth visual effect
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    // Check if mobile menu exists
    const navToggle = document.querySelector('[data-mobile-menu-toggle]');
    const navMenu = document.querySelector('[data-mobile-menu]');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('hidden');
            this.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.add('hidden');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Parallax Effect on Hero Section
function initParallaxEffect() {
    const heroSection = document.querySelector('section:first-of-type');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const heroElements = heroSection.querySelectorAll('.hero-decorative');
            
            heroElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrollPosition * speed}px)`;
            });
        });
    }
}

// Enhanced Section Animations
function initSectionAnimations() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add staggered animation to section elements
                    const children = entry.target.querySelectorAll('[data-animate]');
                    children.forEach((child, childIndex) => {
                        setTimeout(() => {
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, childIndex * 100);
                    });
                }
            });
        }, {
            threshold: 0.1
        });
        
        observer.observe(section);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
        background-color: ${type === 'success' ? 'rgba(76, 175, 80, 0.9)' : type === 'error' ? 'rgba(244, 67, 54, 0.9)' : 'rgba(33, 150, 243, 0.9)'};
        color: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Auto-remove notification
    setTimeout(() => {
        notification.style.animation = 'fadeInUp 0.3s ease-out reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add ripple effect on button clicks
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn-helena');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                animation: ripple 0.6s ease-out;
            `;

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Initialize ripple effect
document.addEventListener('DOMContentLoaded', initRippleEffect);

// Add active state to navigation based on scroll position
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-pink');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-pink');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initActiveNavigation);

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Press 'B' to scroll to booking section
    if (event.key === 'b' || event.key === 'B') {
        const bookingSection = document.querySelector('#booking');
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Press 'C' to scroll to contact section
    if (event.key === 'c' || event.key === 'C') {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Console welcome message
console.log('%c🎵 Welcome to Helena• Musicians Website!', 'color: #ff1493; font-size: 20px; font-weight: bold;');
console.log('%cPress B to go to Booking | Press C to go to Contact', 'color: #d4af37; font-size: 14px;');
