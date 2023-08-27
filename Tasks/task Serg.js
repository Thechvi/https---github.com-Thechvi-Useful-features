const arr = [
	{ name: 'Ivan', age: 12, salary: 2500, position: 'middle' },
	{ name: 'Vlad', age: 58, salary: 8500, position: 'lead' },
	{ name: 'Vitalik', age: 38, salary: 500, position: 'junior-' }

];

// use 'forEach'
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
