const tooltips = document.querySelectorAll('.tooltip');
let currentIndex = 0; // To keep track of the current tooltip

function highlightTooltip(index) {
    tooltips.forEach((tooltip, i) => {
        const tooltipText = tooltip.querySelector('.tooltiptext');
        if (i === index) {
            tooltipText.classList.remove('fade-out'); // Show current tooltip
            tooltipText.style.visibility = 'visible'; // Ensure current tooltip is visible
            tooltip.classList.remove('greyed-out'); // Ensure current tooltip is not greyed out
        } else {
            tooltipText.classList.add('fade-out'); // Fade out other tooltips
            tooltip.classList.add('greyed-out'); // Grey out other tooltips
        }
    });
}

// Function to cycle through tooltips automatically
function autoHighlight() {
    highlightTooltip(currentIndex);
    currentIndex = (currentIndex + 1) % tooltips.length; // Move to the next tooltip
}

// Start the automatic highlighting every 2 seconds (2000 milliseconds)
setInterval(autoHighlight, 2000);

// Add mouseenter and mouseleave event listeners for manual control
tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseenter', () => {
        clearInterval(autoHighlight); // Stop automatic highlighting on hover
        highlightTooltip(Array.from(tooltips).indexOf(tooltip)); // Highlight the hovered tooltip
    });

    tooltip.addEventListener('mouseleave', () => {
        autoHighlight(); // Resume automatic highlighting on mouse leave
    });
});
