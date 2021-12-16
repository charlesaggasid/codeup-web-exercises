"use strict";

//


const API_URL = 'https://codeup-restful-example.glitch.me/reviews'
let getAllBlog = () => {
	return fetch(API_URL).then(resp => resp.json());
}
getAllBlog().then(data => console.log(data)).catch(error => console.error((error)));

//Get request by ID
let getBlogByID = (id) => {
	return fetch(`${API_URL}/${id}`).then(resp => resp.json())
}
getBlogByID(3)
.then(data => console.log(data))
.catch(err => console.log(err));



//
// const editBLog = blog => {
// 	let options = {
// 			method = 'PUT',
// 			headers = {
//
//
// 			}
// 	}
// }

