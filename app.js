/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x
    } else {
        return y
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

console.log('\n----------\n')

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (inputAge) => {
    if (inputAge >= 18) {
        return 'Adult'
    } else {
        return 'Minor'
    }
}

console.log('Exercise 2 Result (21):', isAdult(21));
console.log('Exercise 2 Result (17):', isAdult(17));

console.log('\n----------\n')

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (inputChar) => {
    if (inputChar === 'a' || inputChar === 'e' || inputChar === 'i' || inputChar === 'o' || inputChar === 'u') {
        return true
    }
    else {
        return false
    }

}

console.log('Exercise 3 Result (a):', isCharAVowel("a"));
console.log('Exercise 3 Result (b):', isCharAVowel("b"));

console.log('\n----------\n')

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (inputName, inputDomain) => {
    return `${inputName}@${inputDomain}`
};

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


console.log('\n----------\n')

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/


const greetUser = (inputName, inputTimeOfDay) => {
    return `Good ${inputTimeOfDay}, ${inputName}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

console.log('\n----------\n')

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (x, y, z) => {
    if (x >= y && x >= z) {
        return x
    }
    else if (y >= x && y >= z) {
        return y
    }
    else if (z >= x && z >= y) {
        return z
    }
    else {
        //should not get triggered since I used >= not just >, but just in case, return an error message.
        return "Something went wrong."
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

console.log('\n----------\n')

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (billAmount, tipPercentage) => {
    return `Your tip amount is: ${(billAmount * tipPercentage) / 100}`
}

//first argument is the bill amount, second argument is the tip percentage
console.log('Exercise 7 Result:', calculateTip(50, 20));

console.log('\n----------\n')


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temperature, scale) => {
    if (scale === 'C') {
        return `${(temperature * 1.8) + 32} (Fahrenheit)`
    }
    else if (scale === 'F') {
        return `${(temperature - 32) / 1.8} (Celsius)`
    }
    else {
        return "Ensure you are inputting C or F in the scale or a valid temperature."
    }
}
console.log('Exercise 8 Result (to Fahrenheit):', convertTemperature(32, "C"));
console.log('Exercise 8 Result (to Celsius):', convertTemperature(32, "F"));

console.log('\n----------\n')

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (num1, num2, operation) => {
    if (operation === 'add') {
        return num1 + num2
    }
    else if (operation === 'subtract') {
        return num1 - num2
    }
    else if (operation === 'multiply') {
        if (num1 === 0 || num2 === 0) {
            return "Error: Multiplication by zero is not allowed."
        }
        return num1 * num2
    }
    else if (operation === 'divide') {
        if (num1 === 0 || num2 === 0) {
            return "Error: Division by zero is not allowed."
        }
        return num1 / num2
    }
    else {
        return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'."
    }
}
console.log('Exercise 9 Result (add): ', basicCalculator(10, 5, "add"));
console.log('Exercise 9 Result (subtract): ', basicCalculator(10, 5, "subtract"));
console.log('Exercise 9 Result (multiply): ', basicCalculator(10, 5, "multiply"));
console.log('Exercise 9 Result (divide): ', basicCalculator(10, 5, "divide"));
console.log('Exercise 9 Result (multiply by zero): ', basicCalculator(10, 0, "multiply"));

console.log('\n----------\n')

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (inputScore) => {
    if (inputScore >= 90) {
        return 'A'
    }
    else if (inputScore >= 80) {
        return 'B'
    }
    else if (inputScore >= 70) {
        return 'C'
    }
    else if (inputScore >= 60) {
        return 'D'
    }
    else {
        return 'F'
    }
}

console.log('Exercise 10 Result (95):', calculateGrade(95));
console.log('Exercise 10 Result (85)', calculateGrade(85));
console.log('Exercise 10 Result (59):', calculateGrade(59));

console.log('\n----------\n')

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (fName, lName) => {

    //Used Ai here to figure out which default function does trim text in JS

    let newFName = fName.substring(0,3)
    let newLName = lName.substring(0,3)
    let fullNameLength = fName.length + lName.length

    return newFName+newLName+fullNameLength

}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

console.log('\n----------\n')

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// const numArgs = () => {
//     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#using_the_arguments_object

//     let argNumber = 0
//     for (let index = 0; index < arguments.length; index++) {
        
//         argNumber++
//     }
//     return argNumber
// }  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//------------------Arrow functions dont have "arguments" Object by default according to Gemini so I need to use the regular function syntax

function numArgs() {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#using_the_arguments_object

    let argNumber = 0
    for (let index = 0; index < arguments.length; index++) {
        
        argNumber++
    }
    return argNumber
}

console.log('Exercise 12 Result (4):', numArgs(1, 2, 3, 4));
console.log('Exercise 12 Result (6):', numArgs(1, 2, 3, 4, 5, 6));
console.log('Exercise 12 Result (10):', numArgs(1, 2, 3, 4, 5 , 6 ,7, 8, 9, 10));
