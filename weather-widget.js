const { useState, useEffect } = React;

function WeatherWidget() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=7a5f73159c4e885bff5124233d07ae15&units=metric&lang=uk');
                if (!response.ok) {
                    throw new Error('Помилка при завантаженні даних');
                }
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
    }, []);

    if (loading) {
        return <p>Завантаження...</p>;
    }

    if (error) {
        return <p>Помилка: {error}</p>;
    }

    return (
        <div>
            <h3>Погода в Києві</h3>
            <p>Температура: {weather.main.temp}°C</p>
            <p>Опис: {weather.weather[0].description}</p>
        </div>
    );
}

document.getElementById('weather-button').addEventListener('click', () => {
    document.getElementById('weather-widget').style.display = 'block';
    ReactDOM.render(<WeatherWidget />, document.getElementById('weather-widget'));
});