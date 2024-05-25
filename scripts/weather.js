// Copy from https://github.com/migueravila/Bento/blob/master/assets/js/weather.js
const iconElement = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.weatherValue p');
const descElement = document.querySelector('.weatherDescription p');

const weather = {};
weather.temperature = {
	unit: 'celsius',
};

var tempUnit = 'C';

const KELVIN = 273.15;
const key = `${CONFIG.openweatherAPI}`;


// Hanoi 21.0278° N, 105.8342° E
getWeather(21.0278, 105.8342)

function getWeather(latitude, longitude) {
	let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=en&appid=${key}`;
	fetch(api)
		.then(function(response) {
			let data = response.json();
			return data;
		})
		.then(function(data) {
			let celsius = Math.floor(data.main.temp - KELVIN);
			weather.temperature.value = tempUnit == 'C' ? celsius : (celsius * 9) / 5 + 32;
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;
		})
		.then(function() {
			displayWeather();
		});
}

function displayWeather() {
	iconElement.innerHTML = `<img src="assets/icons/weatherIcon/${weather.iconId}.png" alt="weather icon"/>`;
	tempElement.innerHTML = `${weather.temperature.value.toFixed(0)}°<span class="darkfg">${tempUnit}</span>`;
	descElement.innerHTML = weather.description;
}