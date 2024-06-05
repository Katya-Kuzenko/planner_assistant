const { useState } = React;

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Реєстрація</h2>
            <label>
                Ім'я користувача:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </label>
            <br />
            <label>
                Пароль:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Зареєструватися</button>
            <p>{message}</p>
        </form>
    );
}

ReactDOM.render(<RegisterForm />, document.getElementById('register-form'));