const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

async function getWeather(city){

    try{

        const apiKey = "2e9b25364cd35efcfc786fddd0d61c98";

        const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        console.log(url);
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        weatherResult.innerHTML = `
        <div class="weather-card">
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
        `;

    }

    catch(error){

        weatherResult.innerHTML = `
        <p style="color:red;">
            ${error.message}
        </p>
        `;

    }
}
searchBtn.addEventListener("click", () => {

    const city = cityInput.value;

    getWeather(city);

});
cityInput.addEventListener("keypress", (event) => {

    if(event.key === "Enter"){

        searchBtn.click();

    }

});