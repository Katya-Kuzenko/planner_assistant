document.addEventListener('DOMContentLoaded', function () {
    // Функція для видалення користувачів
    function handleDeleteUser(event) {
        const row = event.target.closest('tr');
        row.remove();
    }

    // Додавання слухача подій для кнопки видалення користувачів
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', handleDeleteUser);
    });

    // Функція для додавання статті
    function handleAddArticle(event) {
        event.preventDefault();

        const articleTitle = document.getElementById('article-title').value.trim();
        const articleContent = document.getElementById('article-content').value.trim();
        const articlesList = document.getElementById('articles-list');

        if (!articleTitle || !articleContent) {
            displayError('Заповніть всі поля.');
            return;
        }

        const newArticle = document.createElement('li');
        newArticle.textContent = articleTitle;
        articlesList.appendChild(newArticle);

        clearForm();
    }

    // Функція для очищення форми
    function clearForm() {
        document.getElementById('article-title').value = '';
        document.getElementById('article-content').value = '';
        removeError();
    }

    // Функція для відображення повідомлення про помилку
    function displayError(message) {
        let errorDiv = document.getElementById('error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'error-message';
            errorDiv.style.color = 'red';
            document.querySelector('main section').prepend(errorDiv);
        }
        errorDiv.textContent = message;
    }

    // Функція для видалення повідомлення про помилку
    function removeError() {
        const errorDiv = document.getElementById('error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    // Додавання слухача подій для форми
    document.querySelector('form').addEventListener('submit', handleAddArticle);
});