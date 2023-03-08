// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get the values of the query parameters
const name = urlParams.get('name');
const job = urlParams.get('job');
const email = urlParams.get('email');
const phone = urlParams.get('phone');
const social1 = urlParams.get('social1');
const social2 = urlParams.get('social2');
const social3 = urlParams.get('social3');
const social4 = urlParams.get('social4');

// Set the values of the profile fields
document.getElementById('profile-name').textContent = name;
document.getElementById('profile-job').textContent = job;
//document.getElementById('profile-email').textContent = email;
document.getElementById('profile-email-link').href = `mailto:${email}`;
document.getElementById('profile-phone').textContent = phone;
document.getElementById('profile-phone-link').href = `tel:${phone}`;
document.getElementById('profile-social1').href = social1;
document.getElementById('profile-social2').href = social2;
document.getElementById('profile-social3').href = social3;
document.getElementById('profile-social4').href = social4;

// Function to make a phone call when clicking on the phone number link
function makeCall(event) {
    event.preventDefault();
    const phoneNumber = event.target.textContent.trim();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = `tel:${phoneNumber}`;
    } else {
        const phoneElement = document.getElementById('profile-phone');
        phoneElement.classList.add('show-phone');
    }
}

// Add click event listener to phone icon
const phoneLink = document.getElementById('profile-phone-link');
phoneLink.addEventListener('click', makeCall);
