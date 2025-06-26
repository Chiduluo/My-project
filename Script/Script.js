
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const email = document.getElementById('inner-email')
  // Create close icon
  const closeIcon = document.createElement('img');
  closeIcon.src = './images/icon-close.svg'; // Make sure you have this image
  closeIcon.alt = 'Close menu';
  closeIcon.classList.add('close-icon');
  hamburger.appendChild(closeIcon);
  
  // Toggle menu function
  function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
  
  // Hamburger click event
  hamburger.addEventListener('click', toggleMenu);
  
  // Close menu when clicking on a link (optional)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
  // Close menu when clicking outside (optional)
  document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    }
  });
});


document.querySelectorAll(".tab").forEach((tab) => {
  tab.onclick = () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  };
});

document.querySelectorAll(".question").forEach((q) => {
  q.onclick = () => {
    const item = q.parentNode;
    item.classList.toggle("active");

    // Close others
    document.querySelectorAll(".item").forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });
  };
});

const contactForm = document.getElementById('contactForm');
        const emailInput = document.getElementById('emailInput');
        const inputContainer = document.getElementById('inputContainer');

        // A simple regex for email validation
        function isValidEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        contactForm.addEventListener('submit', function(event) {
            // Prevent the form from actually submitting
            event.preventDefault(); 
            
            const emailValue = emailInput.value.trim();

            if (!isValidEmail(emailValue)) {
                // If the email is NOT valid, add the 'error' class
                inputContainer.classList.add('error');
            } else {
                // If the email IS valid, remove the 'error' class
                inputContainer.classList.remove('error');
                // You can add your form submission logic here
                alert('Form submitted successfully!');
            }
        });

        // Optional: Remove error when the user starts typing again
        emailInput.addEventListener('input', () => {
            if (inputContainer.classList.contains('error')) {
                inputContainer.classList.remove('error');
            }
        });