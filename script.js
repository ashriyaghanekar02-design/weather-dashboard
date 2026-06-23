const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

async function getWeather(city){

     try{
    const apiKey = "2e9b25364cd35efcfc786fddd0d61c98";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }
}
searchBtn.addEventListener("click", () => {

    const city = cityInput.value;

    getWeather(city);

});