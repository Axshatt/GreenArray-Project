document.addEventListener("DOMContentLoaded", function() {
    
    // Contact Form Submission
    const contactForm = document.querySelector(".contact-content form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent the form from submitting the default way
            
            // Collect form data
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const message = document.querySelector('textarea[name="message"]').value;
            
            // Email validation (basic)
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Show a success message after form submission
            if (name && email && message) {
                alert("Thank you for contacting us! We will get back to you shortly.");
                // Optionally, reset the form fields after submission
                contactForm.reset();
            } else {
                alert("Please fill out all the fields before submitting.");
            }
        });
    }

    // Product Card Hover Effect (Optional: Add dynamic behavior to cards if needed)
    const productCards = document.querySelectorAll(".card");
    productCards.forEach(card => {
        card.addEventListener("mouseover", function() {
            card.style.transform = "scale(1.05)"; // Slightly enlarge the card on hover
        });
        card.addEventListener("mouseout", function() {
            card.style.transform = "scale(1)"; // Reset to original size when not hovered
        });
    });

    // Smooth Scroll for Navigation (Optional: Enable smooth scrolling)
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1); // Get target ID (remove '#')
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Scroll with an offset for header
                    behavior: 'smooth' // Smooth scroll effect
                });
            }
        });
    });

    // Toggle Mobile Navigation Menu (for small screens)
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-container");

    if (navToggle) {
        navToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active"); // Toggle the visibility of the navigation menu
        });
    }

});

// Scroll to Top Button (Optional: For convenience, add a button to scroll back to the top)
const scrollTopButton = document.createElement("button");
scrollTopButton.textContent = "↑";
scrollTopButton.classList.add("scroll-top");
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/Hide Scroll Top Button based on scroll position
window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});
