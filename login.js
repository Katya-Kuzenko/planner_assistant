const { useState } = React;

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('/login', {
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
        <form onSubmit={handleLogin}>
            <h2>Авторизація</h2>
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
            <button type="submit">Увійти</button>
            <p>{message}</p>
        </form>
    );
}

ReactDOM.render(<LoginForm />, document.getElementById('login-form'));