document.getElementById("fetchWeatherBtn").addEventListener("click", fetchWeather);

async function fetchWeather() {
    const city = document.getElementById("cityname").value;
    const apiKey="4816ac7e73570702ad36ef266f065dcc";
    try {
        const weatherd = await (await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)).json();
        if (!weatherd.results.length) throw new Error("City not found");

        const { lat, lon } = weatherd.results[0];
        const weatherData = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`)).json();

        document.getElementById("weather").innerHTML = `
            <h2>Weather in ${city}</h2>
            <p><strong>Temperature:</strong> ${weatherData.current_weather.temperature}°C</p>
            <p><strong>Description:</strong> ${getWeatherDescription(weatherData.current_weather.weathercode)}</p>`;
    } catch (error) {
        document.getElementById("weather").innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function getWeatherDescription(code) {
    return {
        0: "Clear sky", 1: "Partly cloudy", 2: "Partly cloudy", 3: "Partly cloudy", 4: "Cloudy",
        5: "Fog", 6: "Fog", 7: "Fog", 8: "Fog", 9: "Dust", 10: "Light rain", 11: "Light rain",
        12: "Heavy rain", 13: "Heavy rain", 14: "Heavy rain", 15: "Sleet", 16: "Snow", 17: "Snow",
        18: "Snow", 19: "Hail", 20: "Thunderstorm"
    }[code] || "Unknown condition";
}
