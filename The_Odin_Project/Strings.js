// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings

const firstName = "Carlos";
const lastName = "Stevenson";
const thisYear = 1965;
const birthYear = 1948;
const fullName = `${firstName} ${lastName}`
const age = thisYear - birthYear;

const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";
const greeting$ = `Hello! My name is ${fullName} and I am ${age} years old.`;


console.log(greeting);
console.log(greeting$);
