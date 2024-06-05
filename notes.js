document.addEventListener('DOMContentLoaded', function () {
    // Функція для додавання нотатки
    function addNote(event) {
        event.preventDefault();

        const noteDate = document.getElementById('note-date').value.trim();
        const noteContent = document.getElementById('note-content').value.trim();
        
        if (!noteDate || !noteContent) {
            displayError('Заповніть всі поля.');
            return;
        }

        const notesTable = document.querySelector('table tbody');
        const newRow = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = noteDate;
        newRow.appendChild(dateCell);

        const contentCell = document.createElement('td');
        contentCell.textContent = noteContent;
        newRow.appendChild(contentCell);

        notesTable.appendChild(newRow);

        clearForm();
    }

    // Функція для очищення форми
    function clearForm() {
        document.getElementById('note-date').value = '';
        document.getElementById('note-content').value = '';
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

    // Додавання слухача подій для кнопки додавання нотатки
    document.querySelector('form').addEventListener('submit', addNote);
});