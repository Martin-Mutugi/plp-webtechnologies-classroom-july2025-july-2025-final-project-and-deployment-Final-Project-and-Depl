// js/form-validation.js
// Client-side form validation for the contact form

document.addEventListener('DOMContentLoaded', function () {
    initializeFormValidation();
});

function initializeFormValidation() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) {
        return;
    }

    // Get form fields and error elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    /**
     * Validates the name field.
     * @returns {boolean} True if valid, false otherwise.
     */
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }

    /**
     * Validates the email field using a simple regex.
     * @returns {boolean} True if valid, false otherwise.
     */
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    /**
     * Validates the message field.
     * @returns {boolean} True if valid, false otherwise.
     */
    function validateMessage() {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter a message.';
            return false;
        } else {
            messageError.textContent = '';
            return true;
        }
    }

    // Add real-time validation on input
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    // Validate all fields on form submit
    contactForm.addEventListener('submit', function (event) {
        // Prevent form submission if validation fails
        let isNameValid = validateName();
        let isEmailValid = validateEmail();
        let isMessageValid = validateMessage();

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            event.preventDefault(); // Stop the form from submitting
            // Optionally, focus on the first invalid field
            if (!isNameValid) {
                nameInput.focus();
            } else if (!isEmailValid) {
                emailInput.focus();
            } else {
                messageInput.focus();
            }
        }
        // If all valid, the form will submit to Netlify
    });
}