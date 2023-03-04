const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('job');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const social1Input = document.getElementById('social1');
const social2Input = document.getElementById('social2');
const social3Input = document.getElementById('social3');
const social4Input = document.getElementById('social4');
const social5Input = document.getElementById('social5');
const social6Input = document.getElementById('social6');
const submitBtn = document.getElementById('submit-btn');
const profileName = document.getElementById('profile-name');
const profileJob = document.getElementById('profile-job');
const profilePhone = document.getElementById('profile-phone');
const profileEmail = document.getElementById('profile-email');
const profileSocial1 = document.getElementById('profile-social1');
const profileSocial2 = document.getElementById('profile-social2');
const profileSocial3 = document.getElementById('profile-social3');
const profileSocial4 = document.getElementById('profile-social4');

const formContainer = document.querySelector('.form-container');
const profileContainer = document.querySelector('.profile-container');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Retrieve form values
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    const phoneValue = phoneInput.value;
    const emailValue = emailInput.value;
    const social1Value = social1Input.value;
    const social2Value = social2Input.value;
    const social3Value = social3Input.value;
    const social4Value = social4Input.value;

    // Update profile elements
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;
    profileSocial1.href = social1Value;
    profileSocial2.href = social2Value;
    profileSocial3.href = social3Value;
    profileSocial4.href = social4Value;
    formContainer.style.display = 'none';
    profileContainer.style.display = 'flex';

    // Update email link and span elements
    emailLink.href = `mailto:${emailValue}`;
    
});

function makeCall(event) {
    event.preventDefault();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "tel:" + phoneInput.value;
    } else {
        profilePhone.innerHTML = phoneInput.value;
    }
}

const emailIcon = document.getElementById("email-icon");


// Get the email input field and the email link elements

const emailLink = document.getElementById("profile-email-link");

// Set the href attribute of the email link to the email input value
emailLink.href = `mailto:${emailInput.value}`;

// Set the text content of the email span to the email input value
const emailSpan = document.getElementById("profile-email");
emailSpan.textContent = emailInput.value;

