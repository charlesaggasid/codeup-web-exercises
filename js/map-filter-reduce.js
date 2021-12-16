// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4, 6, 8, 10]
//
// const incremented = numbers.map(n => n + 1);
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];
/*_________________________________________________*/
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
let languagesArr = users.filter(language => {
	return language.languages.length >= 3
})
console.table(languagesArr);
/*_________________________________________________*/
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let emailsArr = users.map(email => {
	return email.email
})
console.log(emailsArr);
/*_________________________________________________*/
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let yearsTotalArr = users.reduce((a,c) => {
	return a + c.yearsOfExperience
},0)
let averageYears = yearsTotalArr / users.length
console.log(averageYears)
/*_________________________________________________*/
// Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((a,c) => {
	return (a.email.length > c.email.length) ? a : c;
})
console.log(longestEmail);
/*_________________________________________________*/
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let allUserNames = users.reduce((a,c) => {
	return (a.name || a) + ', ' + c.name
});
console.log(allUserNames);