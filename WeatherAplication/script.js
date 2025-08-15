const cityNameElmt = document.querySelector("#cityName");
const resultElmt = document.querySelector("#result");
const searchBtn = document.querySelector("#searchBtn");

async function fetchWeather(city) {
    const apiKey = "ca018df54353f065aaed7d802825b8be"; // Your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            resultElmt.innerHTML = `<p>City not found. Try again.</p>`;
            return;
        }

        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

function displayWeather(data) {
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    resultElmt.innerHTML = `
        <h2>${data.name} <img src="https://flagsapi.com/${data.sys.country}/flat/32.png"></h2>
        <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png' alt='${data.weather[0].description}'>
        <h3>${data.main.temp.toFixed(1)}°C</h3>
        <p>${data.weather[0].description}</p>

        <div class="extra-info">
            <div>🌡 Feels like: ${data.main.feels_like.toFixed(1)}°C</div>
            <div>💧 Humidity: ${data.main.humidity}%</div>
            <div>🌬 Wind: ${data.wind.speed} km/h</div>
            <div>🌅 Sunrise: ${sunrise}</div>
            <div>🌇 Sunset: ${sunset}</div>
        </div>
    `;
}

function handleSubmit() {
    const city = cityNameElmt.value.trim();
    if (city) fetchWeather(city);
}

searchBtn.addEventListener("click", handleSubmit);
cityNameElmt.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        handleSubmit();
    }
});
