'use strict';
/***************************** GET ALL MOVIES  ***********************************/
// const API_URL = 'https://bird-showy-spur.glitch.me/movies';

const API_URL_search = `https://www.omdbapi.com/?apikey=716933c2&s=${searchText}`;


$(document).ready(() => {
console.log('loaded')
$('#searchForm').on('submit', (e) => {
	let searchText = $('#searchText').val()
	getMovies(searchText);
	e.preventDefault();
	});
});

// function getMovies(searchText) {
// 	console.log(searchText)
// 	fetch(API_URL_search)
// 	.then((response) => {
// 		console.log(response)
// 	})
// 		.catch(err => console.error(err));
// };


let getMovies = (input) => {
	return fetch(`${API_URL_search}`)
		.then(resp => resp.json())
		.catch(err => console.error(err))
}
getMovies().then(data => console.log(data));