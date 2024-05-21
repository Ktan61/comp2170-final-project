// MENU SCROLL BUTTONS
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the scrolling
    const handleScroll = (elementId) => {
        document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
    };

    // Attach event listeners to buttons
    document.querySelectorAll('[data-scroll-target]').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-scroll-target');
            handleScroll(targetId);
        });
    });
});
