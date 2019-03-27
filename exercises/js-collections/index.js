const { getPersons } = require('./data/persons');

/* Given 1000 persons. Each has the following attributes:
    - id
    - firstName
    - lastName
    - age
    - salary
*/
const persons = getPersons(1000);
console.log(persons.length);

// 1. Count the number of perons whose age is between 20 to 30 inclusive
const peopleAge = persons.filter(function(person) {
    return person.age >= 20 && person.age <= 30;
})

console.log(peopleAge.length);


// 2. List all the persons whose last name begin with letter 'D' (case-insensitive)
const peopleName = persons.filter(function(person) {
    return person.lastName.charAt(0).toUpperCase() === 'D';
})

console.log(peopleName);

// 3. Find the average salary of persons between 30 to 40 years old
const salarys = persons
    .filter(function(person) {
        return person.age >= 30 && person.age <= 40;
    })
    .map((person) => person.salary)


const totalSalary = salarys.reduce((acc, cur) => acc + cur, 0);

// let totalSalary = 0;
// for (x in salarys) {
//     totalSalary += salarys[x];
// }
let averageSalary = totalSalary / salarys.length;

console.log(averageSalary);

// 4. Find the person with the highest salary
// let maxSalary = 0;
// for (x in salarys) {
//     if (salarys[x] > maxSalary) {
//         maxSalary = salarys[x];
//     }
// }
const hpp = persons.reduce((select, p) => {
    if (p.salary > select.salary) select = p;
    return select;
})

console.log(hpp);