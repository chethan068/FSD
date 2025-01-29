document.getElementById("fetchWeatherBtn").addEventListener("click", fetchWeather);

async function fetchWeather() {
    const city = document.getElementById("cityname").value;
    const apiKey = "4816ac7e73570702ad36ef266f065dcc";

    try {
       
        const weatherRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
        const weatherData = await weatherRes.json();

        if (!weatherData.length) {
            throw new Error("City not found");
        }

        const latitude = weatherData[0].lat;
        const longitude = weatherData[0].lon;

       
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
        const weatherDetails = await weatherResponse.json();
        const cityName = weatherDetails.name;
        const tempCelsius = weatherDetails.main.temp;
        const weatherCode = weatherDetails.weather[0].id; 

       
      

        
        document.getElementById("weather").innerHTML = `
            <h2>Weather in ${cityName}</h2>
            <p><strong>Temperature:</strong> ${tempCelsius}°C</p>
           
            <p><strong>MIN TEMP:</strong> ${weatherDetails.main.temp_min}</p>
            <p><strong>MAX TEMP:</strong> ${weatherDetails.main.temp_max}</p>
            <p><strong>HUMIDITY:</strong> ${weatherDetails.main.humidity}</p>
        `;
    } catch (error) {
        document.getElementById("weather").innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
