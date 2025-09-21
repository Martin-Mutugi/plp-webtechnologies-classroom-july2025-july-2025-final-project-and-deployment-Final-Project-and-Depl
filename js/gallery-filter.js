// js/gallery-filter.js
// Filter functionality for the Archive gallery

document.addEventListener('DOMContentLoaded', function () {
    initializeGalleryFilter();
});

function initializeGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Check if we're on a page with the gallery filter
    if (filterButtons.length === 0 || galleryItems.length === 0) {
        return; // Exit if not
    }

    /**
     * Handles the click event on filter buttons.
     * Filters the gallery based on the selected category.
     */
    function handleFilter() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        // Loop through all gallery items
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            // If 'all' is selected, or if the item's category matches the filter, show it.
            if (filterValue === 'all' || filterValue === itemCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilter);
    });
}