// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form submission handling (for demonstration - doesn't actually send data)
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Your message has been sent! (This is a demo)');
        this.reset(); // Clear the form after "submission"
    });
}

// You can add more JavaScript functionality here, such as:
// - Image carousels for the products section
// - Dynamic loading of plant data
// - Interactive plant care guides
// - Form validation
// - More complex UI interactions
