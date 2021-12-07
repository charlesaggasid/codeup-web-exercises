	//MapBox
	mapboxgl.accessToken = mapKey;
	const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	center: [-98.4916, 29.4252], // starting position [lng, lat]
	zoom: 9 // starting zoom
});

var marker = new mapboxgl.Marker()
	.setLngLat([-98.4916, 29.4260])
	.setDraggable(true)
	.addTo(map);

	var alamoPopup = new mapboxgl.Popup()
		.setLngLat(marker.getLngLat())
		.setHTML("<p>Remember The Alamo!</p>")
		marker.setPopup(alamoPopup)
		.addTo(map)


	marker.on('dragend', function() {
		$('.coordinates').html('Current Location: Latitude' + marker.getLngLat())
	})
	
	let weather = {
		apiKey: openWeatherKey,
		fetchWeather: function (city) {
			fetch(
				"https://api.openweathermap.org/data/2.5/weather?q=" +
				city +
				"&units=imperial&appid=" +
				weather.apiKey
			)
				.then((response) => response.json())
				.then((data) => weather.displayWeather(data));
		},
		
		displayWeather: function (data) {
			const { name } = data;
			const { icon, description } = data.weather[0];
			const { temp, humidity } = data.main;
			const { temp_max, temp_min } = data.main;
			const { speed } = data.wind;
			console.log(name, icon, description, temp, humidity, speed);
			document.querySelector(".city").innerText = `Current weather | ${name}`;
			document.querySelector(".icon").src =
				"https://openweathermap.org/img/wn/" + icon + "@2x.png";
			document.querySelector(".description").innerText = description;
			document.querySelector(".temp").innerText = temp.toFixed(0) + " ° F";
			$(".max-min").text(`H:${temp_max.toFixed(0)}° | L:${temp_min.toFixed(0)}°`);
			document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
			document.querySelector(".wind").innerText = `Wind speed: ${speed.toFixed(
				0
			)} m/h`;
			document.querySelector(".weather").classList.remove("loading");
			document.body.style.backgroundImage =
				"url('https://source.unsplash.com/1600x900/?" + name + "')";
				
		},
		search: function () {
			weather.fetchWeather(document.querySelector(".search-bar").value);
		},
	};
	
	document.querySelector(".search button").addEventListener("click", function () {
		weather.search();
	});
	
	document.querySelector(".search-bar").addEventListener("keyup", function (e) {
		if (e.key === "Enter") {
			weather.search();
		}
	});
	
		weather.fetchWeather("Honolulu");



