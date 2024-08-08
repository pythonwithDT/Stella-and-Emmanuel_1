
// variables // 

// let myAge = 30;   

// let year = 2024 


// console.log(myAge, year);



// constants //

// const myAge = 50;

// console.log(myAge)

// string concatenation

// const firstName = "Emmanuel"
// const lastName = "Tetteh"
// const myAge = 30;

// const fullName = firstName + " " + lastName + " " + myAge;

// console.log(fullName);


// console.log(fullName.length);


// console.log(lastName[3]);


// // common strings methods 

// email = "emmanueltdortey@yahoo.com";

// result = email.lastIndexOf('t');
// console.log(result);

// result = email.slice(6,15);
// console.log(result);

// // numbers 

// let tep = 30;
// const tepi = 50;

// + - * / ** //-- exponentiating  // 
// %

// let radius = 10;
// const pi = 3.14;

// const area = pi * radius * radius;
// console.log(area);

// Template Strings 

// const firstName = "Emmanuel"
// const lastName = "Tetteh"
// const myAge = 30;

// fullName = `My name is ${firstName + " " + lastName} i am ${myAge} years old`;

// console.log(`My name is `, firstName + lastName, `i am`, myAge);

// console.log(fullName);


// let title = "This is my first html"

// let html = `<h2>${title}</h2>`;

// console.log(html);

// // array

// let names = ['stella', 'emmanuel', 'gideon', 'benjamin'];
// console.log(names);



// booleans

// let score = 100

// score = String(score);


// score = String(100)

// console.log( typeof score);


// Write a JavaScript program that prompts the user for their name and age, then calculates and alerts the year they were born. This exercise demonstrates how to interact with users and process simple data.

// Steps:
// Prompt for Name and Age:

// Use the prompt() function to ask the user for their name. Store the input in a variable named userName.
// Use prompt() again to ask for the user's age. Store this in a variable named userAge.
// Calculate Year of Birth:

// Determine the current year using new Date().getFullYear().
// Subtract userAge from the current year to calculate the year of birth. Store this in a variable named yearOfBirth.
// Display the Result:

// Use alert() to show a message to the user that includes their name and the calculated year of birth.



// let name = 'Emmanuel'
// let age = 20

// let userName = prompt("Please enter your name: ");
// let userAge = prompt('Please enter your age');

// About = `My name is ${userName}. I am ${userAge} years old.`

// console.log(About);


// control flow

// a code that prints a number from 1 to 10

// const stella = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// for (let i = 0; i <= 10; i++ ) {
//     console.log(i);   
// } // run a code a specific number of times


// let i = 0; 
// while(i < 5){
//     console.log(i);
//     i++;
// }  // specific condition 

// //printing an even number from 0 t0 10 

// let even = 0; // 0 = 2 --- 0 = 4 
// while (even <= 10) {
//     if (even % 2 === 0) { // a specific condition
//         console.log(even)
//     }  
//     even++
// }


// let i = 5;
// do {
//     console.log(i);
//     i++
// } while(i < 5) // it executes once b4 chekignt the condition




// // ensure user enters a positive number 

// let userName;
// do{
//     userName = prompt('Enter a possitive number');
// }while(userName <= 0);
// console.log(`You entered: ${userName}`);


// Find the first prime number in an array
const numbers = [4, 6, 8, 9, 11, 12, 15];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 2) continue; // Skip non-prime candidates

    let isPrime = true;
    for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`First prime number: ${numbers[i]}`);
        break;
    }
}

// const numbers = [4, 6, 8, 9, 11, 12, 15];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 2) continue;

//     let isPrime = true;
//     for (let j = 2; j < numbers[i]; j++) {
//         if (numbers[i] % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(numbers[i] + " is prime");
//     } else {
//         console.log(numbers[i] + " is not prime");
//     }
// }

































