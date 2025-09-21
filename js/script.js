// js/script.js
// Lumen Archive - Main Interactive Functionality

/**
 * Initializes all interactive functionality when the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', function () {
    initializeMobileMenu();
    // initializeDarkMode(); // <-- We can add this function later
    // initializeImageModals(); // <-- We can add this function later for the gallery
    console.log('Lumen Archive JS initialized successfully.');
});

/**
 * Initializes the mobile navigation menu toggle functionality.
 * Handles button click and updates accessibility attributes.
 */
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Check if the necessary elements exist on the current page.
    if (!menuToggle || !mainNav) {
        // console.debug('Mobile menu elements not found on this page.'); // Optional debug log
        return; // Exit the function gracefully if elements aren't found
    }

    /**
     * Toggles the visibility of the navigation menu and updates the button's accessibility state.
     */
    function toggleMenu() {
        const isVisible = mainNav.classList.toggle('visible');
        // Update ARIA attribute for screen readers
        menuToggle.setAttribute('aria-expanded', isVisible);
        
        // Optional: Change the button text/icon based on state
        // menuToggle.textContent = isVisible ? '✕ Close' : '☰ Menu';
    }

    // Add the click event listener to the menu button
    menuToggle.addEventListener('click', toggleMenu);

    /**
     * Closes the mobile menu if it's open and the viewport is resized to a larger width.
     * This prevents the menu from being stuck open after resizing.
     */
    function handleResize() {
        if (window.innerWidth > 768 && mainNav.classList.contains('visible')) {
            mainNav.classList.remove('visible');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Add a resize event listener to close the menu on large screens
    window.addEventListener('resize', handleResize);
}

// --- PLACEHOLDER FOR FUTURE ENHANCEMENTS ---

/**
 * (Future Feature) Initializes dark/light mode toggle functionality.
 * Would read/write the user's preference to localStorage.
 */
// function initializeDarkMode() {
//   const themeToggle = document.getElementById('theme-toggle');
//   // ... logic to toggle the [data-theme] attribute on the <html> tag
// }

/**
 * (Future Feature) Initializes modal popups for gallery images.
 * Would open a larger view of an image when its thumbnail is clicked.
 */
// function initializeImageModals() {
//   const galleryImages = document.querySelectorAll('.gallery-img');
//   // ... logic to create and display a modal on click
// }