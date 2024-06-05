document.addEventListener('DOMContentLoaded', function () {
    // Функція для обробки вибору настрою
    function handleMoodSubmit(event) {
        event.preventDefault();

        const mood = document.getElementById('mood').value;
        const recommendations = document.getElementById('recommendations');
        
        // Очищення попередніх рекомендацій
        recommendations.innerHTML = '';

        // Додавання рекомендацій на основі настрою
        if (mood === 'happy') {
            recommendations.innerHTML = `
                <li>Подивіться нову комедію</li>
                <li>Зустрічайтеся з друзями</li>
                <li>Поділіться щастям у соціальних мережах</li>
            `;
        } else if (mood === 'sad') {
            recommendations.innerHTML = `
                <li>Подивіться смішне відео</li>
                <li>Почитайте надихаючі історії</li>
                <li>Вийдіть на прогулянку</li>
            `;
        } else if (mood === 'neutral') {
            recommendations.innerHTML = `
                <li>Займіться хобі</li>
                <li>Почитайте цікаву книгу</li>
                <li>Спробуйте новий рецепт</li>
            `;
        }
    }

    // Додавання слухача подій для форми вибору настрою
    document.querySelector('form').addEventListener('submit', handleMoodSubmit);
});