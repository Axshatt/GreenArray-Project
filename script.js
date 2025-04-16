// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Select all team member cards
  const teamCards = document.querySelectorAll('.team-card');
  // Select modal elements
  const modal = document.getElementById('teamModal');
  const modalImage = document.getElementById('modalImage');
  const modalName = document.getElementById('modalName');
  const modalRole = document.getElementById('modalRole');
  const closeModal = document.querySelector('.close');

  // Function to open the modal with the selected team member's details
  const openModal = (card) => {
    const name = card.getAttribute('data-name');
    const role = card.getAttribute('data-role');
    const imageSrc = card.getAttribute('data-image');

    modalName.textContent = name;
    modalRole.textContent = role;
    modalImage.src = imageSrc;
    modalImage.alt = name;

    modal.style.display = 'block';
  };

  // Function to close the modal
  const closeModalFunction = () => {
    modal.style.display = 'none';
  };

  // Add click event listeners to each team card
  teamCards.forEach(card => {
    card.addEventListener('click', () => openModal(card));
  });

  // Add click event listener to the close button
  closeModal.addEventListener('click', closeModalFunction);

  // Add click event listener to close the modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModalFunction();
    }
  });

  // Add keydown event listener to close the modal when pressing the Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      closeModalFunction();
    }
  });
});
