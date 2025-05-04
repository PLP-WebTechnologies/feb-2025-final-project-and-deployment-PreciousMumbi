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
document.head.appendChild(style);