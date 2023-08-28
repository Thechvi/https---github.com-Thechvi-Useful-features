const arr = [
	{ name: 'Ivan', age: 12, salary: 2500, position: 'middle' },
	{ name: 'Vlad', age: 58, salary: 8500, position: 'lead' },
	{ name: 'Vitalik', age: 38, salary: 500, position: 'junior-' }

];

/*// use 'forEach'
const sumSalaries = (users) => {
	let sum = 0;
	users.forEach((el) => {
		sum += el.salary;

	});
	return sum;
};
console.log(sumSalaries(arr));
// use 'reduce'
const sumSalaries = (users) => {
	let sum = users.reduce((i, x) => i + x.salary, 0);
	return sum;
};
console.log(sumSalaries(arr));
*/
/*// Who have the highest salary?
const hightSalaries = (users, propName = 'name', positName = 'position', salLevel = 'salary') => {
	let max = 0;
	let maxIndex = -1;
	users.forEach((user, index) => {

		if (user.salary > max) {
			max = user.salary;
			maxIndex = index;
		};
	});
	return `${'name: ' + users[maxIndex][propName] + '\n' + 'position: ' + users[maxIndex][positName] + '\n' + 'salary: ' + users[maxIndex][salLevel]}`;
};
console.log(hightSalaries(arr));
*/
// Who have the lowest salary?
const lowestSalary = (users, propName = 'name', positName = 'position', salLevel = 'salary') => {
	let max = 10000;
	let maxIndex = -1;
	users.forEach((user, index) => {

		if (user.salary < max) {
			max = user.salary;
			maxIndex = index;
		};
	});
	return `${'name: ' + users[maxIndex][propName] + '\n' + 'position: ' + users[maxIndex][positName] + '\n' + 'salary: ' + users[maxIndex][salLevel]}`;
};
console.log(lowestSalary(arr));