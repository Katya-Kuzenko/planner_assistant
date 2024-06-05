document.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    if (hour >= 20 || hour < 6) {
        document.body.classList.add('night-mode');
    } else {
        document.body.classList.remove('night-mode');
    }
});