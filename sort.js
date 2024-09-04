const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];
const sortedPersons = persons.sort();
// console.log(sortedPersons);

//sort --->
// const numbers = [3, 5, 6, 8, 5, 3];

/**
 * Ascending ---> smaller to larger:[2,3,4,5,6,7,8];
 * Descending ---> larger to smaller: [7,6,5,4,3,2,1];
 */

// const numbers = [3, 5, 6, 8, 5, 3];

const numbers = [3, 15, 56, 8, 5, 3, 1];

// const numbers_asc =  numbers.sort(); //not working
const numbers_asc =  [...numbers].sort(function (a, b) { return a - b})
const numbers_dsc =  [...numbers].sort(function (a, b) { return b - a})

console.log(numbers_asc);
console.log(numbers_dsc);