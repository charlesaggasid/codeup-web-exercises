
$(document).ready(function () {
	
	/******************************FETCH THE WEATHER****************************************/
	function callOneCallWeather(lat, lon) {
		$.get("http://api.openweathermap.org/data/2.5/onecall", {
			APPID: openWeatherKey,
			lat: lat,
			lon: lon,
			units: 'imperial'
		}).done(function (data) {
			/********** DO SOMETHING WITH THE DATA PLEASE BE CREATIVE IF CAN ***********/
			console.log(data);
			
			$('.four-days').html('');
			/*LOOP 5 TIMES*/
			for (let i=1; i<5; i++){
				const {timezone} = data;
				const {temp, feels_like} = data.current
				const {max, min, day, night} = data.daily[i].temp
				const {icon, description} = data.daily[i].weather[0];
				const {humidity} = data.daily[i];
				const {wind_speed} = data.daily[i];
				const {sunrise, sunset} = data.daily[i];
				const days = new Date(data.daily[i].dt * 1000).toString().substring(0, 4);
				console.log(timezone, temp, icon, description, humidity, wind_speed, max, min, sunrise, sunset);
				/*Start DOM-inating/jQuer'ing*/
				let card = '';
				// card+= `<div class="card" style="width: 18rem;">`
				// card+= `<div class="card-header">Weather in ${timezone} </div>`
				// card+= `<ul class="list-group list-group-flush">`
				// card+= `<li class="list-group-item">An item</li>`
				// card+= `<li class="list-group-item">A second item</li>`
				// card+= `<li class="list-group-item">A third item</li></ul></div>`
				card+=`<div class="">`
				card+=`<h3 class="card-header">${days.toUpperCase()}</h3>`
				card+=`<ul class="list-group list-group-flush">`
				card+=`<h5 class="">Low:${min.toFixed(0)}\u00B0 F | High:${max.toFixed(0)}\u00B0 F</h5>`
				card+=`<div class="">`
				card+=`<img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png" alt="" class="">`
				card+=`<div>${description}</div>`
				card+=`</div>`
				card+=`<div class="">Humidity:${humidity}</div>`
				card+=`<div class="">Wind speed:${wind_speed}m/h</div></ul></div>`
				
				// card += `<div class="card">test`;
				// card+= `</div>`
				// card += $('.temp').text(`${temp.toFixed(0)}\u00B0 F `);
				// card += $('.max-min').text(`H: ${max.toFixed(0)}\u00B0 F | L:${min.toFixed(0)}\u00B0 F`);
				// card += $('.description').text(`${description}`)
				$('.four-days').append(card);
			} //FOR LOOP ENDS
			$('.weather-div').html('');
			for(let j=0; j<1; j++){
				let currrentCard = '';
				currrentCard+=`<div class="">`
				currrentCard+=`<h3 class="card-header">Current Weather in ${data.timezone}</h3>`
				currrentCard+=`<ul class="list-group list-group-flush">`
				currrentCard+=`<h1 class="">${data.current.temp.toFixed(0)}\u00B0 F</h1>`
				currrentCard+=`<div class="">`
				currrentCard+=`<img src="https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" alt="" class="">`
				currrentCard+=`<div class="">${data.current.weather[0].description}</div>`
				currrentCard+=`<div class="">feels like: ${data.current.feels_like.toFixed(0)}\u00B0 F</div>`
				currrentCard+=`</div>`
				currrentCard+=`<div class="">Humidity: ${data.current.humidity}%</div>`
				currrentCard+=`<div class="">Wind speed: ${data.current.wind_speed}m/h</div></ul></div>`
				$('.weather-div').append(currrentCard)
			}
		});
		
	}
	callOneCallWeather(21.2963109, -158.0280758)
	
	// /*FORECAST*/
	// function callForecatWather(city) {
	//
	//
	// }
	/**********************************************************************/
	/**********************************************************************/
	/**********************************************************************/
	
	mapboxgl.accessToken = mapKey;
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v9',
		center: [-158.0280758, 21.2963109],
		zoom: 9
	});
	
	const markerStart = new mapboxgl.Marker()
		.setLngLat([-158.0280758, 21.2963109])
		.setDraggable(true)
		.addTo(map);
	
	markerStart.on('dragend', function () {
		var location = markerStart.getLngLat();
		console.log(location);
		reverseGeocode(location, mapKey).then(function (local) {
			$('.markerLoc').html(local);
		})
		callOneCallWeather(location.lat, location.lng);
	});
	
	function onDragMarker(info, token, map) {
		geocode(info.address, token).then(function (coord) {
			console.log(coord)
			markerStart.setLngLat(coord)
				.addTo(map);
			map.flyTo({
				center: [coord[0], coord[1]],
				zoom: 9,
			});
			callOneCallWeather(coord[1], coord[0])
		});
	}
	
	$('.submit-search').click(function (event) {
		event.preventDefault()
		var input = {address: $('.search').val()};
		var title = $('.search').val().toUpperCase();
		$('.markerLoc').html(title);
		onDragMarker(input, mapKey, map);
	})
	
	
	
	
});
