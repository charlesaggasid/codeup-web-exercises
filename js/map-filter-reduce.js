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
let languagesArr = users.filter(language => {
	return language.languages.length >= 3
})
console.table(languagesArr);
/*_________________________________________________*/
let emailsArr = users.map(email => {
	return email.email
})
console.log(emailsArr);
/*_________________________________________________*/
let yearsTotalArr = users.reduce((a,c) => {
	return a + c.yearsOfExperience
},0)
let averageYears = yearsTotalArr / users.length
console.log(averageYears)
/*_________________________________________________*/
let longestEmail = users.reduce((a,c) => {
	return (a.email.length > c.email.length) ? a : c;
})
console.log(longestEmail);
/*_________________________________________________*/
let allUserNames = users.reduce((a,c) => {
	return (a.name || a) + ', ' + c.name
});
console.log(allUserNames);