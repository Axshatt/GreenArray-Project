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

// Basic form submission handling with visual feedback
const contactForm = document.getElementById('contactForm');
const formResponseDiv = document.getElementById('form-response');

if (contactForm && formResponseDiv) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simulate form submission (replace with actual API call if needed)
        setTimeout(() => {
            const isSuccess = Math.random() < 0.8; // Simulate success 80% of the time

            if (isSuccess) {
                formResponseDiv.textContent = 'Your message has been sent successfully!';
                formResponseDiv.className = 'success';
                contactForm.reset();
            } else {
                formResponseDiv.textContent = 'Oops! Something went wrong. Please try again later.';
                formResponseDiv.className = 'error';
            }

            formResponseDiv.style.display = 'block';

            // Hide the response message after a few seconds
            setTimeout(() => {
                formResponseDiv.style.display = 'none';
                formResponseDiv.className = ''; // Reset class
                formResponseDiv.textContent = ''; // Clear text
            }, 5000);
        }, 1000); // Simulate a 1-second delay for submission
    });
}

// You can add more JavaScript functionality here, such as:
// - Image carousels for the products section
// - Dynamic loading of plant data
// - Interactive plant care guides
// - Form validation
// - More complex UI interactions
