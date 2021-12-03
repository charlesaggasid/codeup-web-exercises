// <!--Map script-->
	mapboxgl.accessToken = mapKey;
	const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL
	center: [-98.6015072, 29.616065], // starting position [lng, lat]
	zoom: 9 // starting zoom
});

//geojson data for house
const geojsonHouse = {
	type: 'FeatureCollection',
	features: [
			{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-98.59927910501348, 29.616009563776714]
			},
			properties: {
				title: 'Apartment',
				description: 'Infinity at the Rim'
			}
		}
	]
};
// add markers to map
	for (const feature of geojsonHouse.features) {
// create a HTML element for each feature
	const el = document.createElement('div');
	el.className = 'houseMarker';
// make a marker for each feature and add to the map
	var houseMarker =	new mapboxgl.Marker(el)
	.setLngLat(feature.geometry.coordinates)
	.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
	.setHTML(`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`))
	.addTo(map);
}

//geojsonRestaurant  for 3 restaurants
const geojsonRestaurants = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-98.61132713869416, 29.593211957783524]
			},
			properties: {
				title: '<a href="whiskeycake.com">WhiskeyCake<a>',
				address: '15900 La Cantera Pkwy Suite 21200, San Antonio, TX 78256',
				description: 'Sizable bar/eatery offering seasonal, locally sourced farm-to-kitchen dishes in a woodsy-chic space.'
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-98.59834226639465, 29.61009268171503]
			},
			properties: {
				title: '<a href="https://therustic.com">The Rustic<a>',
				address: '17619 La Cantera Pkwy Ste 204, San Antonio, TX 78257',
				description: 'Casual indoor/outdoor music venue & eatery serving farm-to-table regional fare, local beer & more.'
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-98.5735052, 29.552608]
			},
			properties: {
				title: '<a href="https://www.facebook.com/AjuuaMexicanGrill/">Ajuaa Mexican Grill<a>',
				address: '11703 Huebner Rd #208, San Antonio, TX 78230',
				description: 'Colorful spot offering all-you-can-eat brunch & happy hour in a low-key setting with patio dining.'
			}
		}
	]
};
// add markers to restaurants map
	for (const feature of geojsonRestaurants.features) {
// create a HTML element for each feature
	const el = document.createElement('div');
	el.className = 'restaurantMarker';
// make a marker for each feature and add to the map
	var restaurantMarkerVar =	new mapboxgl.Marker(el)
	.setLngLat(feature.geometry.coordinates)
	.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
	.setHTML(`<h2>${feature.properties.title}</h2>
	<p style="font-size: 10px;">${feature.properties.address}</p>
	<p style="font-weight: bold; font-size: 14px;">${feature.properties.description}</p>`
	))
	.addTo(map);
	}

// Center the map on the coordinates of any clicked circle from the 'circle' layer.
map.on('click', restaurantMarkerVar, (e) => {
	map.flyTo({
		center: e.features[0].geometry.coordinates
		});
	});
	
//Hide/Show Markers

//Control Zoom
	const nav = new mapboxgl.NavigationControl({
	visualizePitch: true
		});
	map.addControl(nav, 'bottom-right');

//Zoom Options
	var chooseZoom = document.getElementById('zoomOptions');
	chooseZoom.addEventListener('input', function(){
	map.setZoom(chooseZoom.value)
})

//Maps search
// Add the control to the map.
	map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
		})
	);
	
	
//Full screen control
	const fullScreen = new mapboxgl.FullscreenControl();
	map.addControl(fullScreen, 'bottom-right')
	
	//Driving
	// map.addControl(
	//   new MapboxDirections({
// 	  accessToken: mapboxgl.accessToken
//   }),
//   'top-left'
// );


//Pulsing DOT

const size = 200;

// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
const pulsingDot = {
	width: size,
	height: size,
	data: new Uint8Array(size * size * 4),

// When the layer is added to the map,
// get the rendering context for the map canvas.
	onAdd: function () {
		const canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		this.context = canvas.getContext('2d');
	},

// Call once before every frame where the icon will be used.
	render: function () {
		const duration = 1000;
		const t = (performance.now() % duration) / duration;
		
		const radius = (size / 2) * 0.3;
		const outerRadius = (size / 2) * 0.7 * t + radius;
		const context = this.context;

// Draw the outer circle.
		context.clearRect(0, 0, this.width, this.height);
		context.beginPath();
		context.arc(
			this.width / 2,
			this.height / 2,
			outerRadius,
			0,
			Math.PI * 2
		);
		context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
		context.fill();

// Draw the inner circle.
		context.beginPath();
		context.arc(
			this.width / 2,
			this.height / 2,
			radius,
			0,
			Math.PI * 2
		);
		context.fillStyle = 'rgba(255, 100, 100, 1)';
		context.strokeStyle = 'white';
		context.lineWidth = 2 + 4 * (1 - t);
		context.fill();
		context.stroke();

// Update this image's data with data from the canvas.
		this.data = context.getImageData(
			0,
			0,
			this.width,
			this.height
		).data;

// Continuously repaint the map, resulting
// in the smooth animation of the dot.
		map.triggerRepaint();

// Return `true` to let the map know that the image was updated.
		return true;
	}
};

map.on('load', () => {
	map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
	
	map.addSource('dot-point', {
		'type': 'geojson',
		'data': {
			'type': 'FeatureCollection',
			'features': [
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': [-157.94550763754268, 21.42773510265232] // icon position [lng, lat]
					}
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': [121.10406249033315, 16.083860758939053] // icon position [lng, lat]
					}
				},
				{
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': [-98.50159122438156, 29.44938235050661] // icon position [lng, lat]
					}
				},
				
			]
		}
	});
	map.addLayer({
		'id': 'layer-with-pulsing-dot',
		'type': 'symbol',
		'source': 'dot-point',
		'layout': {
			'icon-image': 'pulsing-dot'
		}
	});
	
	
});