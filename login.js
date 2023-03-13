const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('#submit-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        login();
      });
    } else {
      console.log('Submit button not found');
    }
  });
  
  function login() {
    // your login code here
  }
  