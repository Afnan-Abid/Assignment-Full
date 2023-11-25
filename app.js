/*Question1

let firstName = prompt("Enter your First Name");
let lastName = prompt("Enter your Last Name");

let fullName = firstName + " " + lastName;

console.log(fullName);*/

/* Question 2 

let favMobModel = prompt("Enter your favourite mobile model")

console.log(favMobModel.length)*/

/* Question 3 

let word = ["Pakistani"];
let indexOfN = word[0].indexOf('n');

console.log(indexOfN);*/
/* Question 4 

let word = ["Pakistani"];
let indexOfI = word[0].lastIndexOf('i');

console.log(indexOfI);*/

/* Question 5 
let word = ["Pakistani"];
let characterThirdIndex= word[0][3];

console.log(characterThirdIndex);*/

/* Question 6 

let firstName = prompt("Enter your First Name");
let lastName = prompt("Enter your Last Name");

let fullName = firstName.concat(" ", lastName);

console.log(fullName);*/

/* Question 7 

const word = "Hyderabad";

console.log(word.replace("Hyder", "Islam"));*/

/* Question 8 

const lines = "Ali and sami are best friends. They play cricket and football together.";

console.log(lines.replaceAll("and", "&"));*/

/* Question 9 

const str = "472";
const number = parseInt(str);
console.log(number);*/

/*; Question 10 
let url = prompt("Enter your URL");
let replacement = url.replace('www', '');
document.write(`User URL: ${url} <br> Domain: ${replacement}`);*/

/* Question 11 
const para = prompt("Enter your word");

console.log(para.toUpperCase());*/

/* Question 12 


const para = prompt("Enter your word");

console.log(para.toLowerCase());*/


/*Question 13 

const para = prompt("Enter your word");

console.log(para.toTitlecase())*/

/* Question 14 
var num = 35.36;
var numberString = num.toString();
var dotString = numberString.replace(".", "");

console.log(dotString);*/

/* Question 15

var a = "3";
var b = "3";
var result = a + b;
console.log(result);*/

/* Question 16 

var a = "3";
var b = "3";
var result = a - b;
console.log(result);*/

// Question 17 //
/* Question 18 

const A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Enter the item you want to search:");

let found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput.toLowerCase()) {
        found = true;
        break;
    }
}
if (found) {
    alert("Yes, the item is found in the list.");
} else {
    alert("No, the item is not found in the list.");
}*/

/* question 19 

let string1 = prompt("Enter the first string:");
let string2 = prompt("Enter the second string:");
if (string1 > string2) {
    alert(`${string1} is greater than ${string2}`);
} else if (string1 < string2) {
    alert(`${string1} is less than ${string2}`);
} else {
    alert("Both strings are equal.");
}*/

// question 20 //

/* question 21 

var university = "University of Karachi";

var universityArray = university.split(' ');
console.log(universityArray);*/

/* Question 22 

let userInput = prompt("Enter a word:");
if (userInput.length > 0) {
    let lastCharacter = userInput.charAt(userInput.length - 1);
    alert(`The last character of "${userInput}" is: ${lastCharacter}`);
} else {
    alert("Please enter a valid word.");
}*/

/* Question 23 

const lines = "The Quick Brown fox Jumps over the lazy dog";
const lowerLines = lines.toLowerCase();
const wordToCount = "the";
const wordsArray = lowerLines.split(' ');
let count = 0
for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordToCount) {
        count++;
    }
}
console.log(`Number of occurrences of "${wordToCount}": ${count}`);*/

/* MATH METHODS

// Question 1 //

// a
let number = prompt("Enter a number:");
number = parseFloat(number);

console.log("Original Number:", number);

// b
let roundNum = Math.round(number);
console.log("Rounded Value:", roundNum);

// c
let floorNum = Math.floor(number);
console.log("Floor Value:", floorNum);

// d
let ceilNum = Math.ceil(number);
console.log("Ceil Value:", ceilNum);

// Question 2 //

// a
let number = prompt("Enter a number:");
number = parseFloat(number);

console.log("Original Number:", number);

// b
let roundNum = Math.round(number);
console.log("Rounded Value:", roundNum);

// c
let floorNum = Math.floor(number);
console.log("Floor Value:", floorNum);

// d
let ceilNum = Math.ceil(number);
console.log("Ceil Value:", ceilNum);

/* Question 3 
// a //
let userInput = prompt("Enter a positive number:");
let number = parseFloat(userInput);
if (number > 0) {
    console.log("a. Original Number:", number);

// b //
    let roundNum = Math.round(number);
    console.log("b. Rounded Value:", roundNum);
// c //
    let floorNum = Math.floor(number);
    console.log("c. Floor Value:", floorNum);
// d //
    let ceilNum = Math.ceil(number);
    console.log("d. Ceil Value:", ceilNum);
} else {
    console.log("Please enter a positive floating-point number.");
}*/

/* question 4 

// a //
let userInput = prompt("Enter a Negative number:");
let number = parseFloat(userInput);
if (number > 0) {
    console.log("a. Original Number:", number);

// b //
    let roundNum = Math.round(number);
    console.log("b. Rounded Value:", roundNum);
// c //
    let floorNum = Math.floor(number);
    console.log("c. Floor Value:", floorNum);
// d //
    let ceilNum = Math.ceil(number);
    console.log("d. Ceil Value:", ceilNum);
} else {
    console.log("Please enter a Negative floating-point number.");
}*/

/* Question 5 
let userInput = prompt("Enter a number:");

let number = parseFloat(userInput);

let absoluteValue = Math.abs(number);
console.log(`The absolute value of ${number} is ${absoluteValue}`);*/

/* Question 6 

let diceValue = Math.floor(Math.random() * 6) + 1;
console.log("Dice Value:", diceValue);*/
/* Question 7 
let coinTossResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
console.log("Coin Toss Result:", coinTossResult);*/

/* Question 8 
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNumber);*/

/* Question 9 
let userWeightInput = prompt("Please enter your weight (e.g., '50', '50kgs', '50.2kgs', '50.2kilograms'):");
let userWeight = parseFloat(userWeightInput.replace(/[^\d.]/g, ''));

document.write("Your weight is: " + userWeight + " kgs");*/

/* Question 10 
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Guess the secret number (between 1 and 10):");
userGuess = parseInt(userGuess);
if (userGuess === secretNumber) {
    console.log("Congratulations! You guessed the secret number!");
} else {
    console.log("Sorry, the secret number was " + secretNumber + ". Try again!");
}*/

/* Question 11  

let currentDate = new Date();
console.log("Current Date and Time:", currentDate);*/

/* Question 12 
let currentDate = new Date();
let currentMonth = currentDate.getMonth() + 1;
let monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentMonthInWords = monthNames[currentMonth - 1];
alert("Current Month: " + currentMonthInWords);*/

/* Question 13 
let currentDate = new Date();
let currentDayIndex = currentDate.getDay();
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDayInThreeLetters = dayNames[currentDayIndex];
alert("Current Day: " + currentDayInThreeLetters);*/

 /* Question 14 
let currentDate = new Date();
let currentDayIndex = currentDate.getDay()
if (currentDayIndex === 6 || currentDayIndex === 0) {
    console.log("It's Fun Day!");
} else {
    console.log("It's not Fun Day. Enjoy your day!");
}*/

/* Question 15 
let currentDate = new Date();
let currentDayOfMonth = currentDate.getDate();
if (currentDayOfMonth < 16) {
    console.log("First fifteen days of the month.");
} else {
    console.log("Last days of the month.");
}*/

// Question 16 //
/* Question 17 
let currentDate = new Date();
let currentHour = currentDate.getHours();
if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}*/

/* Question 18 
let laterDate = new Date(2020, 11, 31);

console.log("Later Date:", laterDate);*/

/* Question 19 
let firstRamadanDate = new Date(2015, 5, 18);
let currentDate = new Date();
let millisecondsSinceFirstRamadan = currentDate - firstRamadanDate;
let daysSinceFirstRamadan = Math.floor(millisecondsSinceFirstRamadan / (1000 * 60 * 60 * 24));

alert("Number of days since 1st Ramadan: " + daysSinceFirstRamadan);*/

/* question 20 
let beginningOf2015 = new Date(2015, 0, 1); 
let seconds = Math.floor(beginningOf2015.getTime() / 1000);

document.write("Seconds since the beginning of 2015: " + seconds);*/

/* Question 21 

let currentDate = new Date();
let currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
console.log("Modified Date:", currentDate);*/

/* Question 22 

let currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date 100 years ago: " + currentDate);*/

/* Question 23 
let userAge = prompt("Please enter your age:");
let age = parseInt(userAge);
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
console.log("Your birth year is:", birthYear);*/




































































































































































































































































