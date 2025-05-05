// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
const formFeedback = document.getElementById('form-feedback');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    
    // Simulate form submission
    formFeedback.textContent = 'Thank you for subscribing!';
    formFeedback.style.color = 'var(--success-color)';
    
    // Clear the form
    newsletterForm.reset();
    
    // Hide the message after 3 seconds
    setTimeout(() => {
        formFeedback.textContent = '';
    }, 3000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dark mode toggle (bonus feature)
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.background = 'var(--primary-color)';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '50%';
darkModeToggle.style.width = '50px';
darkModeToggle.style.height = '50px';
darkModeToggle.style.fontSize = '1.5rem';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.zIndex = '1000';
darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Add dark mode styles
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #121212;
        color: #f1f1f1;
    }
    
    .dark-mode .post-card {
        background-color: #1e1e1e;
        color: #f1f1f1;
    }
    
    .dark-mode .post-content h2,
    .dark-mode .post-content h3 {
        color: #f1f1f1;
    }
`;
// Back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆️';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '80px';
backToTopButton.style.right = '20px';
backToTopButton.style.background = 'var(--primary-color)';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.width = '50px';
backToTopButton.style.height = '50px';
backToTopButton.style.fontSize = '1.5rem';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.zIndex = '1000';
backToTopButton.style.display = 'none';
backToTopButton.setAttribute('aria-label', 'Back to top');

document.body.appendChild(backToTopButton);

// Show/hide back-to-top button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic year in footer
const footerYear = document.querySelector('.footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded!');
});
