document.addEventListener('DOMContentLoaded', function () {
    // Функція для додавання завдання
    function addTask(event) {
        event.preventDefault()

        const taskName = document.getElementById('task-name').value.trim();
        const taskDate = document.getElementById('task-date').value.trim();
        const taskPriority = document.getElementById('task-priority').value;
        
        if (!taskName || !taskDate) {
            displayError('Заповніть всі поля.');
            return;
        }

        const tasksList = document.querySelector('ol');
        const newTask = document.createElement('li');

        newTask.textContent = `${taskName} - ${taskDate} (${taskPriority})`;

        // Додавання кнопки для позначення виконання завдання
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Натисни після виконання';
        completeButton.addEventListener('click', function () {
            if (completeButton.textContent !== 'Виконано') {
                completeButton.textContent = 'Виконано';
            }
        });

        newTask.appendChild(completeButton);
        tasksList.appendChild(newTask);

        clearForm();
    }

    // Функція для очищення форми
    function clearForm() {
        document.getElementById('task-name').value = '';
        document.getElementById('task-date').value = '';
        document.getElementById('task-priority').value = 'low';
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

    // Додавання слухача подій для кнопки додавання завдання
    document.querySelector('form').addEventListener('submit', addTask);
    
});