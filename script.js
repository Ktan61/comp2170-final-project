// MENU SCROLL BUTTONS
document.addEventListener("DOMContentLoaded", function() {
    const handleScroll = (elementId) => {
        document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
    };

    document.querySelectorAll('[data-scroll-target]').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-scroll-target');
            handleScroll(targetId);
        });
    });
});
