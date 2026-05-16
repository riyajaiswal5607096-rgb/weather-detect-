async function getWeather(){

	let city = document.getElementById("city").value;

	let apiKey= "4fac1e8f47815a717b07ba0d91183cb6";

	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	let response = await fetch(url); 

	let data = await response.json();

	let weatherDiv = document.getElementById("weather");

	if(data.cod === 200){
		weatherDiv.innerHTML = `
			<h2> ${data.name}</h2>
			<p>Temperature: ${data.main.temp}°C</p>
			<p>Weather: ${data.weather[0].main}</p>
		`;
	} else{
		weatherDiv.innerHTML = "city not found"
	}
}
