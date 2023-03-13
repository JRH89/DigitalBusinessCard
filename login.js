const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  
  // Check if email and password are not empty
  if (!email || !password) {
    alert('Please enter your email and password.');
    return;
  }
  
  // Check if email is valid
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Check if password is at least 6 characters long
  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }
  
  // TODO: Submit the form to the server
  alert('Form submitted successfully!');
});

function isValidEmail(email) {
  // A simple regex pattern to validate email addresses
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
