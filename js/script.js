// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const body = document.body;

// Add a small delay to the overlay to create a smoother transition
function openMenu() {
    hamburger.classList.add('active');
    nav.classList.add('active');
    body.classList.add('no-scroll');
    
    // Small delay for overlay to create a smoother transition
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
}

function closeMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
}

hamburger.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

overlay.addEventListener('click', closeMenu);

// Close menu when clicking on a nav link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            closeMenu();
        }
    });
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        closeMenu();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
const formSuccess = document.querySelector('.form-success');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    try {
        // Submit the form to Formspree
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show success message
            formSuccess.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        } else {
            throw new Error('Form submission failed');
        }
        
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form. Please try again later.');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.service-card, .testimonial-card, .about-content, .contact-content').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Add scroll-based header styling
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

document.addEventListener('DOMContentLoaded', function() {
    // Service card expansion
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Add index to list items for staggered animation
    serviceCards.forEach(card => {
        const listItems = card.querySelectorAll('.service-details li');
        listItems.forEach((item, index) => {
            item.style.setProperty('--i', index);
        });
    });

    // Handle click events
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link inside the card
            if (e.target.tagName === 'A') {
                return;
            }

            const wasActive = this.classList.contains('active');
            
            // First remove active class from all cards
            serviceCards.forEach(otherCard => {
                if (otherCard !== this && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                }
            });
            
            // Then toggle this card
            if (!wasActive) {
                this.classList.add('active');
                
                // Scroll card into view if it's not fully visible
                const rect = this.getBoundingClientRect();
                const isFullyVisible = (
                    rect.top >= 0 &&
                    rect.bottom <= window.innerHeight
                );
                
                if (!isFullyVisible) {
                    const offset = rect.top + window.scrollY - 100; // 100px from top
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                }
            } else {
                this.classList.remove('active');
            }
        });
        
        // Keyboard accessibility
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});