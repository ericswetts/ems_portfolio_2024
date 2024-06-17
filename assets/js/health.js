function updateHealthBars() {
    const healthBars = document.querySelectorAll('.health');
    healthBars.forEach(bar => {
        const width = parseInt(bar.style.width, 10);
        bar.style.background = getColorForPercentage(width);
    });
}

document.addEventListener('DOMContentLoaded', updateHealthBars);
function getColorForPercentage(percentage) {
    if (percentage >= 90) {
        return '#1165aa'; // Dark blue for high values
    } else if (percentage >= 60) {
        return '#3a93c3'; // Medium blue
    } else if (percentage >= 60) {
        return '#3a93c3'; // Medium blue
    } else if (percentage >= 40) {
        return '#f6a382'; // Light orange
    } else if (percentage >= 20) {
        return '#d75f4b'; // Darker orange
    } else {
        return '#880e1d'; // Red for low values
    }
}
