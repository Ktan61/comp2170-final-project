// MENU SCROLL BUTTONS
document.addEventListener("DOMContentLoaded", function() {
    const handleScroll = (elementId) => {
        document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
    };

    document.querySelectorAll('[data-scroll-target]').forEach(menuItem => {
        menuItem.addEventListener('click', function() {
            const targetId = this.getAttribute('data-scroll-target');
            handleScroll(targetId);
        });
    });
});

// Event listener for spinning plant
document.addEventListener('DOMContentLoaded', () => {
    const plantImages = document.querySelectorAll('.pothos');
    
    const spinPlant = (event) => {
        event.target.classList.add('spin');
    };

    const stopSpinPlant = (event) => {
        event.target.classList.remove('spin');
    };

    plantImages.forEach(plantImage => {
        plantImage.addEventListener('pointerover', spinPlant);
        plantImage.addEventListener('pointerout', stopSpinPlant);
    });
});
