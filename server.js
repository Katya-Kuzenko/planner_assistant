const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const usersFilePath = path.join(__dirname, 'users.json');

// Реєстрація користувачів
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    let users = [];

    if (fs.existsSync(usersFilePath)) {
        users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    }

    if (users.find(user => user.username === username)) {
        return res.json({ message: 'Користувач з таким ім\'ям вже існує' });
    }

    users.push({ username, password });
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.json({ message: 'Реєстрація успішна' });
});

// Авторизація користувачів
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!fs.existsSync(usersFilePath)) {
        return res.json({ message: 'Невірне ім\'я користувача або пароль' });
    }

    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.json({ message: 'Авторизація успішна' });
    } else {
        res.json({ message: 'Невірне ім\'я користувача або пароль' });
    }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});