// // Chapter 9-11
// // Q1
// // var cityName = prompt("Enter a city name:");
// // if (cityName.toLowerCase() === "karachi") {
// //     alert("Welcome to the city of lights!");
// // } else {
// //     alert("Welcome to an amazing city!");
// // }
// // Q2
// // var gender= prompt("Enter Your Gender (Male or Female):")
// // if (gender.toLocaleLowerCase() === "male") {
// //     alert("Good Morning Sir.")
// // } 
// // else if(gender.toLowerCase() === "female"){
// //     alert("Good morning Ma'am.")
// // }
// // else{
// //     alert("Good Morning!")
// // }
// // Q3
// // var singnalcolor= prompt("Enter the color of the road traffic signal:").toLowerCase()
// // if (singnalcolor.toLocaleLowerCase="Red")
// // {
// //     alert("Must Stop")
// // }
// // else if (singnalcolor.toLocaleLowerCase="Yellow"){
// //     alert("Ready to move")
// // }
// // else if (singnalcolor.toLocaleLowerCase="Green"){
// //     alert("Move now")
// // }
// // else{
// //     alert("Invalid Enter the colour")
// // }
// // Q4
// // const remainingFuel =(prompt("Enter the remaining fuel in your car (in liters):"));
// // if (remainingFuel < 0.25) {
// //     alert("Please refill the fuel in your car.");
// // } else {
// //     alert("You have enough fuel. Keep driving!");
// // }
// // Q5
// //a.
// // var a = 4;
// // if (++a === 5) {
// //     alert("given condition for variable a is true");
// // }

// // //b.
// // var b = 82;
// // if (b++ === 83) {
// //     alert("given condition for variable b is true");
// // }

// // //c.
// // var c = 12;
// // if (c++ === 13) {
// //     alert("condition 1 is true");
// // }
// // if (c === 13) {
// //     alert("condition 2 is true");
// // }
// // if (++c < 14) {
// //     alert("condition 3 is true");
// // }
// // if (c === 14) {
// //     alert("condition 4 is true");
// // }

// // //d.
// // var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost) {
// //     alert("The cost equals");
// // }

// // //e.
// // if (true) {
// //     alert("True");
// // }
// // if (false) {
// //     alert("False");
// // }

// // //f.
// // if ("car" < "cat") {
// //     alert("car is smaller than cat");
// // }
// // Q6
// // var totalmarks=219
// // var maxmarks=300
// // var percentage=(totalmarks /maxmarks)
// // var grade, remarks
// // if (percentage >= 80){
// //     grade="A-one"
// //     remarks="Excellent"
// // }
// // else if (percentage >= 70){
// //     grade="A"
// //     remarks="Good"
// // }
// // else if (percentage >= 60){
// //     grade="B"
// //     remarks="You need to improve"
// // }
// // else{
// //     grade="Fail"
// //     remarks="Sorry"
// // }
// // alert('Total Marks: ', maxmarks)
// // alert('Marks Obtained: ', totalmarks)
// // alert('Percentage: ', percentage.toFixed(2) + '%')
// // alert('Grade: ', grade)
// // alert('Remarks: ', remarks)
// // Q7
// // var secretNumber = Math.floor(Math.random() * 10) + 1
// // var userGuess = parseInt(prompt('Guess the secret number (between 1 and 10):'))
// // if (userGuess === secretNumber){
// //     alert('Bingo! Correct answer.')
// // }
// // else if(userGuess === secretNumber + 1){
// //     alert('Close enough to the correct answer.')
// // }
// // else {
// //     alert(`Sorry, the secret number was ${secretNumber}. Try again!`)
// // }
// // Q8
// // var userNumber = parseInt(prompt('Enter a number:'))
// // if (userNumber % 3 === 0) {
// //     alert(`The number ${userNumber} is divisible by 3.`);
// // } else {
// //     alert(`The number ${userNumber} is not divisible by 3.`);
// // }
// // Q9
// // var userNumber = parseInt(prompt('Enter a number:'))
// // if (userNumber % 2 === 0) {
// //     alert(`The number ${userNumber} is even.`)
// // } else {
// //     alert(`The number ${userNumber} is odd.`)
// // }
// // Q10
// // var temperature = prompt("Enter the temperature:")
// // temperature = parseFloat(temperature)

// // if (temperature > 40) {
// //     alert("It is too hot outside.")
// // } else if (temperature > 30) {
// //     alert("The Weather today is Normal.")
// // } else if (temperature > 20) {
// //     alert("Today’s Weather is cool.")
// // } else if (temperature > 10) {
// //     alert("OMG! Today’s weather is so Cool.")
// // } else {
// //     alert("Temperature not in expected range.")
// // }
// // Q11
// let firstNumber = parseFloat(prompt("Enter the first number:"))
// let secondNumber = parseFloat(prompt("Enter the second number:"))
// let operation = prompt("Enter operation (+, -, *, /, %):")
// let result
// if (operation === '+') {
//     result = firstNumber + secondNumber
//     alert(`Result: ${result}`)
// } else if (operation === '-') {
//     result = firstNumber - secondNumber
//     alert(`Result: ${result}`)
// } else if (operation === '*') {
//     result = firstNumber * secondNumber
//     alert(`Result: ${result}`)
// } else if (operation === '/') {
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber
//         alert(`Result: ${result}`)
//     } else {
//         alert("Division by zero is not allowed.")
//     }
// } else if (operation === '%') {
//     if (secondNumber !== 0) {
//         result = firstNumber % secondNumber
//         alert(`Result: ${result}`)
//     } else {
//         alert("Modulo by zero is not allowed.")
//     }
// } else {
//     alert("Invalid operation. Please enter +, -, *, /, or %.")
// }
// Chapter 12-13
// Q1 
// var userInput = prompt("Enter a character (number or letter):");
// var charCode = userInput.charCodeAt(0)
// if (charCode >= 48 && charCode <= 57) {
// alert("The input is a number.")
// } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//     if (charCode >= 65 && charCode <= 90) {
//         alert("The input is an uppercase letter.")
//     } else {
//         alert("The input is a lowercase letter.")
//     }
// } else {
//     alert("Invalid input. Please enter a valid character.")
// }
// // Q2
// // var firstNumber = parseInt(prompt('Enter the first integer:'))
// // var secondNumber = parseInt(prompt('Enter the second integer:'))
// // if (firstNumber > secondNumber) {
// //     alert(`The larger number is ${firstNumber}.`)
// // } else if (secondNumber > firstNumber) {
// //     alert(`The larger number is ${secondNumber}.`)
// // } else {
// //     alert('The two integers are equal.')
// // }
// // Q3
// // var userInput = parseFloat(prompt('Enter a number:'))
// // if (userInput > 0) {
// //     alert('The number is positive.')
// // } else if (userInput < 0) {
// //     alert('The number is negative.')
// // } else {
// //     alert('The number is zero.')
// // }
// // Q4
// // var userInput = prompt('Enter a character (string of length 1):')
// // var char = userInput.toUpperCase()
// // var isVowel = char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U';
// // alert(`Is '${userInput}' a vowel? ${isVowel}`)
// // Q5
// // var originalPassword = 'Kawasaki'
// // var userPassword = prompt('Enter your password:')
// // if (!userPassword) {
// //     alert('Please enter your password.')
// // } else {
// //     if (userPassword === originalPassword) {
// //         alert('Correct! The password you entered matches the original password.')
// //     } else {
// //         alert('Incorrect password.')
// //     }
// // }
// // Q6
// // var greeting
// // var hour = 13
// // if (hour < 18) {
// //     greeting = "Good day"
// // } else {
// //     greeting = "Good evening"
// // }
// // Q7
// // function getGreeting(time) {
// //     var hour = parseInt(time.substring(0, 2))
// //     if (hour >= 0 && hour < 6) {
// //         return "Good night!"
// //     } else if (hour < 12) {
// //         return "Good morning!"
// //     } else if (hour < 18) {
// //         return "Good afternoon!"
// //     } else {
// //         return "Good evening!"
// //     }
// // }
// // var userInput = prompt("Enter the time (24-hour format, e.g., 1900):")
// // var greeting = getGreeting(userInput)
// // alert(greeting)


// // Chapter 10 (if statements)
// // Q1
// // var city = "Karachi";
// // if (city === "Karachi") {
// //     console.log("The City of Lights");
// // }
// // Q2

// // Q3
// // const ZipCode = "10010" 
// // if (ZipCode === "10010") {
// //     alert("Karachi")
// // } else {
// //     alert("Please write the correct city")
// // }
// // Q4
// // var x= 1
// // if (x === 1)
// // {
// //     x=42
// // }
// // console.log("The updated value of x is: {x}")
// // Chapter 11 (Comparison Operators)
// // Q1
// // var variable1 = 10
// // var variable2 = 20
// // if (variable1 !== variable2) {
// //     alert("Variable1 is not equal to Variable2.");
// // }
// // Q2
// // var variable1 = 10
//  var variable2 = 20
//  if (variable1 >= variable2) 
//  {
//     console.log("Variable1 is greater than or equal to Variable2.")
// }
// Q3
// var myNumber= 42
// if (myNumber !== 10){
//     myNumber=20
// }
// console.log("Updated value of myNumber", myNumber)
// Q4
// let myNumber = 42
// if (myNumber !== 10) {
//   alert("Congratulations! Your number is not equal to 10.")
// }
// Q5
// var enteredName = prompt("Please enter your first name:")
// var otherName= "Alice"
// if (enteredName !== otherName){
//     alert("No Match")
// }
// Chapter 12 (if…else and else if statements)
// Q1
// var variable1 = 10
// var variable2 = 7
// if (variable1 >= variable2) {
//   alert("Variable 1 is greater than or equal to Variable 2.")
// } else {
//   alert("Variable 1 is less than Variable 2.")
// }
// Q2
// var marks = 85
// if (marks >= 90) { 
//     alert("Grade A") 
// } else if (marks >= 80) { 
//     alert("Grade B") 
// } else { 
//     alert("Grade C") 
// }
// Q3
// var a = 10
// if (a === 10) { 
//     alert("a is 10")
// } else { 
//     alert("The correct value of a is ____") 
// Q4
// var city = prompt("Enter a city:")
// if (city === "Karachi") { 
//     alert("Acknowledging it is Karachi") 
// } else if (city === "Lahore") { 
//     alert("Acknowledging it's Lahore") 
// } else { 
//     alert("Different city")
// }
// Chapter 13 (Testing sets of conditions)
// Q1
// var a = 9, b = 9, c = 10, d = 18
// if (a === b && c === d) { 
//     alert("Both conditions are true")
// }
// Q2
// if (a === b || c !== d) { 
    
// }

// Q3
// var name = "Hussain"
// var age = 50
// if ((name === "Hussain" || name === "Hasnain") && age < 60) { 
//     alert("Either or both conditions are true")
// }
// Q4
// var var1 = 8, var2 = 10
// if (var1 < var2 || var1 > var2) { 
//     alert("The first variable is less than or greater than the second variable") 
// }
// Q5
// var firstName = "Shahzaib"
// var lastName = "Khanzada"
// var userFirstName = prompt("Enter your first name:")
// var userLastName = prompt("Enter your last name:")
// if (userFirstName === firstName && userLastName === lastName) { 
//     alert("Your first and last names match")
// }
// Chapter 14 (If statements nested)
//  Q1
// var password = prompt("Enter your password:");
// if (password !== "") { 
//     if (password.length <= 5) { 
//         alert("Password must be greater than 5"); 
//     } else { 
//         alert("OK"); 
//     } 
// }

// Q2
// if (a === 1) { 
//     if (c === "Max") { 
//         alert("OK"); 
//     } 
// }

//  Q3
// if (a === 1 && c === "Max") { 
//     alert("OK"); 
// }

// Q4
// var num1 = 5, num2 = 5;
// if (num1 === num2 && num1 <= num2) { 
//     alert("Equal"); 
// }