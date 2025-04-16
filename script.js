// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]');
  const email = document.querySelector('input[type="email"]');
  const message = document.querySelector('textarea');
  let isValid = true;

  // Validate Name
  if (!name.value.trim()) {
    alert('Please enter your name.');
    name.focus();
    isValid = false;
  }

  // Validate Email
  else if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
    alert('Please enter a valid email address.');
    email.focus();
    isValid = false;
  }

  // Validate Message
  else if (!message.value.trim()) {
    alert('Please enter your message.');
    message.focus();
    isValid = false;
  }

  // If all fields are valid, submit the form
  if (isValid) {
    alert('Thank you for your message!');
    this.reset();
  }
});
