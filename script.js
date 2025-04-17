// Toggle Navigation Menu on Mobile
const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form Validation
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let isValid = true;

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());

    // Validate Name
    if (nameInput.value.trim() === '') {
        isValid = false;
        displayError(nameInput, 'Name is required');
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        displayError(emailInput, 'Please enter a valid email');
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        isValid = false;
        displayError(messageInput, 'Message is required');
    }

    if (isValid) {
        alert('Form submitted successfully');
        form.reset();
    }
});

// Display error message
function displayError(inputElement, message) {
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    inputElement.parentElement.appendChild(errorMessage);
}

// Scroll to Top Button
const scrollTopButton = document.getElementById('scrollTopButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
