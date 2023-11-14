let firstName = "Waldo";

console.log( `hello ${1}` ); // hello 1
console.log(`hello ${"firstName"}` ); // hello firstName
console.log( `hello ${firstName}` ); // hello Waldo

//bigInt | not compatible in IE https://caniuse.com/
const bigInt = 1234567890123456789012345678901234567890n;

const string = "The revolution will not be televised.";
console.log(string);

const String2 = string;
console.log(String2 + "\n- Gil Scott-Heron");

const name = 'Waldo'; //single quotes
const double = "Double quotes"; //double quotes | same meaning
let hello = "Hello";
//Concatenation
let greeting = `${hello}, ${name}`; //template literal | embed JS | multiple lines

console.log(name);
console.log(double);
console.log(greeting); //"Hello, Waldo
console.log('I\'ve…');

document.querySelector()