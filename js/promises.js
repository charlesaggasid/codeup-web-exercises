"use strict";

/** Exercises
1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.**/

//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
function getDateOfLastCommit(username) {
	const GITHUB_URL_config_with_fetch = fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GITHUB_KEY}`}});
	
	return GITHUB_URL_config_with_fetch
		.then(data => {
			console.log(data)
			return data.json();
	}).then(jsonData => {
			console.log(jsonData);
			let createdDate = new Date(`${jsonData[0].created_at}`).toDateString()
			return `Last date commit is: ${createdDate}  user name is: ${jsonData[0].actor.display_login}`
	}).catch(err => console.log(err))
}
getDateOfLastCommit('charlesaggasid')
.then(data => console.log(data));

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.


function wait(seconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.4) {
				resolve('Problem resolved');
			}else{
		}   reject('Erro 404')
		}, seconds)
	});
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log(`You'll see this after 3 seconds`));









// fetch(url, {headers: {'Authorization': 'token GITHUB_KEY'}});
/*********** GET DATA ***************/
fetch('https://api.github.com/users')
	.then(response => console.log(response))
	.catch(error => console.error(error));

/************** CREATING OWN PROMISE VAR *****************/
const myPromise = fetch('https://api.github.com/users');
// myPromise.then(function (response) {
// 	console.log(response)
// })
// SAME as BELOW
myPromise.then(response => console.log(response));
myPromise.catch(error => console.error(error));

/********** STORING PROMISES IN A VAR TO USE IN PROMISE.ALL 🥰  ***********/
const githubPromise = fetch('https://api.github.com/repositories');
const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
Promise.all([githubPromise, bitbucketPromise])
	.then(function(data) {
		// here data is an array of the resolved values from each promise
		// we can now do something with both pieces of data
	})
	.catch(function(error) {
		// handle errors
	});
console.log(githubPromise, bitbucketPromise)

//Chaining
Promise.resolve('one').then((one) => {
	console.log(one);
	return 'two';
}).then((two) => {
	console.log(two);
	return 'three';
}).then((three) => {
	console.log(three);
});

/**FETCHING WITH DATA AND DO SOMETHING WITH THE DATA DISPLAYING USER**/
fetch('https://api.github.com/users')
.then( response => {
		response.json().then( users => {
		users.forEach( user => {
			// do something with each user object...
			// console.log(user);
		});
	});
});
//LIST OF JUST USERNAMES
// fetch('https://api.github.com/users')
// 	.then(function(response) {
// 	response.json().then(function(users) {
// 	users.forEach(function (userObj) {
// 		console.log(userObj.login)
// 		})
// 	});
// });
fetch('https://api.github.com/users')
	.then( response => {
	response.json().then( users => {
	users.forEach( userObj  => {
			// do something with the username login
	// console.log(userObj.login);
		});
	});
});
// PROMISE CHAINING AND FEW ARROW FUNCTIONS
fetch('https://api.github.com/users')
	.then(response => response.json())
	.then(users => {
		users.forEach( userObj => {
			// do something with each username
			// console.log(userObj.login);
		})
	})
	.catch(error => console.error(error));


/** PROMISE is an OBJECT - WE can STORE them in VARIABLES - RETURN THEM FROM FUNCTIONS**/

function getGithubUsernames() {
	return fetch('https://api.github.com/users')
		.then(response => response.json())
}
// later on...
	getGithubUsernames().then( users => {
		users.forEach( userObj => {
		// do something with each username
		// console.log(userObj.login);
	});
}).catch(error => console.error(error));

/************* CREATING CUSTOM PROPERTIES ******************/
// const myPromise1 = new Promise((resolve, reject) => {
// 	if (Math.random() > 0.5) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });
// myPromise1.then(() => console.log('resolved!'));
// myPromise1.catch(() => console.log('rejected!'));


/*************EXTRA STUFF FROM THE WEB******************/
fetch('https://restcountries.com/v2/all')
	.then(response => {
	return response.json()
}).then(json => {
	let countries = json
	// console.log(countries);
}).catch(err => {
	console.log('errors:' + err.message)
})
// let response = fetch(fetch('https://restcountries.com/v2/all'))
// console.log(response);

/**************CALLBACKS*****************/
// const posts = [
// {title: 'Post one', body: 'This is post one'},
// {title: 'Post two', body: 'This is post two'}
// ]
//
// function getPosts() {
// 	setTimeout(() => {
// 		let output = '';
// 		// console.log(output);
// 		posts.forEach((post, index) =>  {
// 			output += `<li>${post.title}</li>`;
// 		});
// 		document.body.innerHTML = output
// 	}, 1000);
// }
//
// function createPost(post, callback) {
// 	setTimeout(() => {
// 		posts.push(post)
// 		callback()
// 	}, 2000);
// }
//
// createPost({
// 	title: 'Post Three', body: 'This is an added post. Three'
// },getPosts);

/**************  PROMISES  *****************/
const posts = [
	{title: 'Post one', body: 'This is post one'},
	{title: 'Post two', body: 'This is post two'}
]
function getPosts() {
	setTimeout(() => {
		let output = '';
		// console.log(output);
		posts.forEach((post, index) =>  {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output
	}, 1000);
}
function createPost(post, callback) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post)
			
			const error = false
			
			if(!error) {
				resolve();
			}else {
				reject('Error: 404');
			}
		}, 2000);
	});
}

// createPost({
// 	title: 'Post Three', body: 'This is an added post. Three'
// })
// 	.then(getPosts)
// 	.catch(err => console.log(err));

/************ASYNC AWAIT FETCH*******************/
/* Async Await is a elegant way to handle promises
*
* create a function. Needs to be labeled ASYNC if you wanna use AWAIT inside of it. AWAIT just want for asynchronous process.
* //Async Await is to handle responses
*
* */

async function init() {
	await createPost({
	title: 'Post Three', body: 'This is an added post. Three'
	});
	getPosts();
}
init();

//Async / Await with Fetch
async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json()
	// console.log(data);
}
fetchUsers()
/*******************************/


// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve, 2000, ' Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
// res.json()
// );
//
// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values))