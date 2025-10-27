/**
 * Portfolio JavaScript
 * Author: Dienes Stein
 * Description: Interactive functionality for the portfolio website
 */

/**
 * Initialize the application when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeFormHandlers();
});

/**
 * Initialize navigation active state based on current page
 * Highlights the current page link in the navigation menu
 */
function initializeNavigation() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Initialize form handlers for contact form
 * Adds event listeners and validation
 */
function initializeFormHandlers() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

/**
 * Handle contact form submission
 * Validates form data before submission
 * @param {Event} event - The form submission event
 */
function handleFormSubmit(event) {
    const form = event.target;
    const nameInput = form.querySelector('#contact-name');
    const emailInput = form.querySelector('#contact-email');
    const subjectInput = form.querySelector('#contact-subject');
    const messageInput = form.querySelector('#contact-message');

    // Validate form fields
    if (!validateFormFields(nameInput, emailInput, subjectInput, messageInput)) {
        event.preventDefault();
        showErrorMessage('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Form is valid, allow submission
    console.log('Form submitted successfully');
}

/**
 * Validate form fields
 * @param {HTMLElement} nameField - Name input field
 * @param {HTMLElement} emailField - Email input field
 * @param {HTMLElement} subjectField - Subject input field
 * @param {HTMLElement} messageField - Message textarea field
 * @returns {boolean} - True if all fields are valid
 */
function validateFormFields(nameField, emailField, subjectField, messageField) {
    const isNameValid = nameField && nameField.value.trim().length > 0;
    const isEmailValid = emailField && isValidEmail(emailField.value);
    const isSubjectValid = subjectField && subjectField.value.trim().length > 0;
    const isMessageValid = messageField && messageField.value.trim().length > 0;

    return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Display error message to user
 * @param {string} message - Error message to display
 */
function showErrorMessage(message) {
    // Create error notification element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-notification';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #ff6b6b;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(errorElement);

    // Remove error message after 5 seconds
    setTimeout(() => {
        errorElement.remove();
    }, 5000);
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of the element to scroll to
 */
function smoothScrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Add animation styles for error notifications
 */
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(styleSheet);

