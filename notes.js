console.log("hello world");
console.log("wuhan");
console.log(typeof("wuhan"));
//number
let num = 92099228
console.log(num);
console.log(typeof(num));
//number
let num2 = 9209.9228
console.log(num2);
console.log(typeof(num2));
//boolen value
// let student = true
console.log(student);
console.log(typeof(student));
//comment

let isattentive;
console.log(typeof isattentive)

let isattentive2= undefined;
console.log(typeof isattentive2)

let isattentive3=null;
console.log(typeof isattentive3)

let student2 ={
    studentname: "wuhan",
    isalive: true,
    roll:9
}
console.log(student2)
console.log(typeof student2)
console.log(student2.studentname)
console.log(student2["roll"])


// Cannot be a reserved Keyword
// should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

//  Upper Case(A,B, C) & Lower Case(a, b, c)


// let nameofProgrammer = "Virus"


// console.log(nameofProgrammer)

// const rollNumber = 9
// // rollNumber = 10

// console.log(rollNumber)



// Primitive types

// Boolean
// String
// Number
// undefined
// null
// Symbol

let nameOfStudent = "Aninda"
let isPresent = false
let rollNumber = 9
let isAttentive = null

// null -> memory allocated
// undefined -> memory not allocated

// Reference types
// Object
// Array
// function


// Object
// key value pair
let student5 = {
    studentName: "Aninda",
    isPresent: true,
    rollNumber: 15
}

// Property access
// Dot notation
console.log(student5.isPresent)

// Bracket notation
let selectedProperty = "rollNumber"
console.log(student5[selectedProperty])

// Human
// property
// 2 hands, 2 legs, 1 head, 2 eye
// method
// walk(), run(), eat(), talk()





let book = {
    auther:"wuhan",
    name:"bookof",
    price: 16
}

console.log(book)

console.log(book["price"])
console.log(book["auther"])
console.log(book["name"])



let book2 = {
    auther2:"wuhan",
    name2:"cycloe wars",
    price2: 1000000
}
console.log(book2.price2)
console.log(book2.auther2)
console.log(book2.name2)

let highscore = 960000 //probably

console.log(highscore)
let toiletpaper = 100;
let toiletpaper2 = 0;
let toiletpaper3 = null;
let toiletpaper4;
//just as a joke practice
console.log("toiletpaper meme = ",toiletpaper,toiletpaper2,toiletpaper3,toiletpaper4)
const hname = "wuhan"//for errror reasons
console.log(hname)

let newarray = ["aninda", "apurbo"]
console.log(newarray[0])
console.log(newarray[1])
console.log(newarray[2])
newarray[3]= "arko"
console.log(newarray[3])
newarray[0]= "aditta"
console.log(newarray[0])
console.log(newarray.lenth)
//let userinput = prompt("enter your name")
//console.log(userinput)
function greet(name){
    console.log("hello " + name)
}

greet("aninda")
greet("wuhan")

function square(num){
    let result = num* num
    return num
}
// Array 
// list of data

let notunArray = ["Aninda", "Apurbo"]
// console.log(notunArray[])

notunArray[2] = "Arko"
notunArray[0] = "Aditya"
notunArray[3] = {}
// console.log(notunArray.length)


// let userInput = prompt("Enter your name")

// console.log(userInput)


// performs
function greet2(fname, lname){
    console.log("Hello " + fname + " " + lname)
}
greet2("sheikh shaheed", "rizwan wuhan")

// greet2("Aninda", "Reza")

// greet2("Samiul", "Muztaba")

// Calculate

function square(num){
    let result = num * num
    return result
}


// console.log(square(4))
// let value = square(4)
// console.log(value)


function areaofcircle(num12){
    console.log(3.14 * (num12 * num12))
}

areaofcircle(12)

justarray=["redacted", "programming", 2000, true, 14, null]
console.log("student info")
console.log("name " + justarray[0])
console.log("hobby " + justarray[1])
console.log("birth " + justarray[2])
console.log("student " + justarray[3])
console.log("age " + justarray[4])
console.log("projects " + justarray[5])

let upgradedbook = {
    auther:"wuhan",
    name:"bookof",
    price: 16,
    read: function(){
        console.log("you have reading at the speed of 100 pages per minute")
    }
}
upgradedbook.read()
console.log(upgradedbook)

//tsetarray=["hello","test#1",123,true,{console.log("hello")}]
//console.log(tsetarray[])

function areaofcircle2(num12){
    num12 = prompt("enter the radius in meter")
    console.log(3.14 * (num12 * num12) +" " +"meters")
}

// areaofcircle2()
function convertingstring() {
    let input = prompt("Enter the text that will be converted to uppercase:");
     input = input.toUpperCase();
    console.log(input);
  }
// convertingstring();
  

// Part 00
// In JS we have different operators. 
// with these operators we make expressions ,
// and with expressions we make algorithms

// x + y -z +10 expressions

// Operators:

// Arithmatic 
// Assignment
// Comparison
// Logical
// Bitwise

// Part 01
// Arithmatic Operators
// let x = 10;
// let y = 15;

// console.log(x + y) 
// x + y is an expression. 
// + is an addition operator. It takes two operands. Then makes an expression.
// An expression is something that produces a value.

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)
// console.log(x ** y)

// Increment (++)
// let x = 10;
// console.log(++x)
// console.log(x++)
// let z = x++

// x++;
// x = x + 1

// console.log(x)

// Decrement (--)
// same as increment
// console.log(--x)
// console.log(x--)
// console.log(x)



// Part 02 : Assignment Operator
// =, ++ , --

// let x = 10;

// x++;
// x = x + 1;

// x = x + 5;
// x += 5;

// x = x * 3;
// x *=3;

// x = x / 2
// x /=2



// Part 03: Comparison Operators

// let x = 1;

// Relational
// console.log(x > 0)
// const y = x> 0
// console.log("y : ", y)

// console.log(x >= 1)

// console.log(x < 1)
// console.log(x <= 1)

// Equality
// let x = 10
// console.log(x === 10);
// console.log(x !== 10);


// Part 04: Equality Operators
// Strict Equality (Type + Value)
// console.log(1 === 1) // true
// console.log("1" === 1) // false

// Lose Equality (Value)
// console.log(1 == 1) 
// console.log("1" == 1) // true
// console.log(true == 1) // true
// console.log(false == 1) // true
// console.log(false == 0) // true



// Part 06 : Ternary Operator

// My favorite
// If a programmer solves 100 problems he is a "gold" level programmer, otherwise he is a silver level programmar.

// let problems = 110;

// let level = problems > 100 ? "gold" : "silver"

// console.log(level)

// 80 >    A+
// 70 >    A
// else    Pass

// let problems = 50;

// let level = problems > 80 ?  "A+" : problems > 70 ? "A" : "Pass"




// let type = problems > 100 ? "gold" : "silver";

// console.log(type)


// Part 07 : Logical Operators

// Logical AND (&&) 
// Returns TRUE if both operands are TRUE
// console.log(true && true)


// let curiosity = true;
// let industrious = true;
// let helpfull = true;
// let goodDeveloper = curiosity && industrious && helpfull

// console.log(goodDeveloper)

// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore
// console.log(eligibleForLoan)


// Logical OR (||)
// Returns true if one of the operands is true

// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore

// console.log("Eligible", eligibleForLoan)

// NOT (!)
// let applicationRefused = !eligibleForLoan;
// console.log("Application Refused", applicationRefused)

// let x = !(-18)
// console.log(x)
// falsy, truthy

// window.alert("hello")
// Hour
// If hour is between 6am and 12pm: Good morning!
// if hour is between 12pm and 6pm: Good afternoon!
// Otherwise: Good Evening

let hour = 14

if(hour >= 6 && hour <= 12)
    console.log("Good Morning!")
else if(hour > 12 && hour <= 18)
    console.log("Good Afternoon")
else 
    console.log("Good Evening")
    // Logical Operators with Non-booleans

// false || true
// false || "Aninda"
// false || 1

// Falsy (false) values
// undefined
// null
// 0
// false
// ""
// NaN



// Truthy -> Anything that is not falsy

// false || 1 || 2
// short-circuiting

// Real world example
// let userColor = "";
// let defaultColor = "blue";

// let currentColor = userColor || defaultColor

// console.log(currentColor)


// Operators Precedence
// let x = (3 + 4) * 5

// console.log(x)

//Operator Section :  Final Exercise

// Swapping Variables
// let a = "red"
// let b = "green"

// Your ans goes here


// console.log(a) // a should be green
// console.log(b) // b should be red



// Conditional Statements
// 1. if...else
// 2. Switch...case


// 1. if...else
// Hour
// If hour is between 6am and 12pm: Good morning!
// if hour is between 12pm and 6pm: Good afternoon!
// Otherwise: Good Evening

// let hour = 12

// if(hour >= 6 && hour <=12)
//     console.log("Good Morning!")
// else if(hour > 12 && hour <=18)
//     console.log("Good Afternoon")
// else 
//     console.log("Good Evening!")


// if(condition){
//     statement
// }
// else if(anotherCondition){
//     statement
// }
// else if (yetAnotherCondition){
//     statement
// }
// else statement


// 2. Switch...case
// let role = "guest"

// switch(role){
//     case "guest":
//         console.log("Guest User!");
//         break;
//     case "moderator":
//         console.log("Moderator User!");
//         break
//     default:
//         console.log("User not found")
// }

// if(role === "guest") console.log("Guest User")
// else if(role === "moderator") console.log("Moderator User")
// else console.log("User Not Found")


// Loop
// for
// while 
// do ... while



// for(let index=1; index<=3; index++){
//     console.log("Hello", index)
// }

// let index = 1
// while(index <= 3){
//     console.log("Hello While", index)
//     index++
//     console.log("value of index after increment: ", index)
// }


// maximum of two numbers

// function maximum(){
    // code goes here
    
// }

// let maxValue = maximum(5, 3)

// console.log(maxValue)

// assignment 01: Swapping Variables
let a = "red"
let b = "green"
let c;
c = a;
a = b;
b = c;

console.log(a) // a is green now
console.log(b) // b is red now

// assignment 02: maximum of two numbers

function maximum(num1, num2){
    if(num1 <= num2){
        return num2;
    }else{
        return num1;
    }
    
}

let maxValue = maximum(3, 2);

console.log(maxValue);

// project 2 assitant
// let userinput;
// while(userinput =="exit")
//  userinput = prompt("How may i help you today?");
//  userinput = userinput.toLowerCase()
    
// if (userinput == "hello" || userinput == "hi") {
    // console.log("hello,how are you?")
// }else if (userinput == "i am fine") {
    // console.log("i am glad to hear that")
// }else if (userinput=="cow"){
    // console.log("an animal?")
// }

// Use for and while loop to console all the odd/even numbers

// for (let i = 1; i<=10; i++){
//     if(i % 2 ===1) console.log(i)
// }

// let i = 20;
// while(i <= 10){
//     if(i% 2 === 0 ) console.log(i)
//     i++
// }

// do - while loop

// let i = 20
// do{
//     if(i%2 === 0) console.log(i)
//     i++
// } while(i<=10)

// for - in loop

// const teacher  = {
//     name: "Aninda",
//     age: "28"
// }

// let selectedProperty = "age"
// console.log(teacher[selectedProperty])

// for (let key in teacher){
//     // How to get the values?
//     console.log(key, teacher[key])    
// }


// const colors = ["red", "green", "blue"]

// for(let index in colors){
//     console.log(index, colors[index])
// }

// for - of loop

// for (let color of colors){
//     console.log(color)
// }

// Break and continue
// Break -> we jump out of the loop
// continue -> we jump to the next iteration

// let k = 0;
// while(k<= 10){
//     // if(k===5) break
//     if(k%2=== 0){
//         k++;
//         continue;
//     }
//     console.log(k)
//     k++
// }


// Exercise - Landscape or portrait
// function isLandscape(width, height){
//     // if(width > height) return true
//     // else return false

//     // return width > height ? true : false

//     return width > height
// }


// console.log(isLandscape(300, 200))


// Exercise - FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => "Not a number"

// function fizzBuzz(input){                                  
// }

// fizzBuzz()


// Exercise- Even and odd number

// if limit is 6 then:
// Output: 
// 0 "Even"
// 1 "ODD"
// 2 "Even"
// 3 "ODD"
// 4 "Even"
// 5 "ODD"
// 6 "Even"


// function showNumber(limit){                                           

// }
// showNumber(6)

// console.log("ANinda")

// Swapping variable solution
// let a = "red";
// let b = "green"

// let c;
// c = a
// a = b
// b = c


// b = a
// a = b

// console.log("a", a)
// console.log("b", b)
// console.log("C :", c)
// maximum of two numbers

// function maximum(num1, num2){
//     // code goes here
//     // if(num1 > num2) {
//     //     return num1
//     // }
//     // else {
//     //     return num2
//     // }
  
//     return num1 > num2 ? num1 : num2
// }

// let maxValue = maximum(500, 30)

// // let maxValue = Math.max(5, 30)

// console.log(maxValue)

// Use for and while loop to console all the odd/even numbers

// for (let i = 1; i<+10; i++){
//     console.log(i)
// }


// Do- while loop

// let i = 0;
// do {
//     console.log("Hello")
//     i++
// } while(i<=5)


// let index = 10
// while(index <= 3){
//     console.log("Hello While", index)
//     index++
//     console.log("value of index after increment: ", index)
// }
 
// Exercise 1: 
// Speed Limit = 70   ---> output: ok                                
// 5 -> 1 point
// Math.floor(1.4)
// 12 points -> suspended ---> output: License Suspended

// checkSpeed(200) // ok
// checkSpeed() // 1 point
// checkSpeed(200) // License suspended


// Exercise 2:
// Falsy values:
// undefined
// null
// ""
// false
// 0
// NaN

// let isActive = ""
// if(isActive) console.log("hello")

// let myArray = ['', 2, 3,10,"hello", undefined, false]

// countTruthy(myArray) // 4

// function countTruthy(array){}


// Exercise 3:

// Show All the "string properties" of an object

// const movie = {
//     title: "a",
//     releaseYear: 2023,
//     rating: 4.5,
//     director: "b"
// }

// function showProperties(obj){
//     // Code
// }
// showProperties(movie)


// Exercise 4: 
// Sum of Multiples of 3 and 5

// Multiples of 3: 3, 6, 9,
// Multiples of 5: 5, 10

// function sum(limit){

// }
// console.log(sum(10))


// FizzBuzz

// function fizzBuzz(num) {
//     if(typeof num !== "number"){
//         console.log("It's not a number")
//     } else if( num % 3 === 0 && num % 5 === 0){
//         console.log("FizzBuzz")
//     } else if(num % 5 === 0){
//         console.log("Buzz")
//     } else if(num % 3 === 0){
//         console.log("Fizz")
//     }
// }

// fizzBuzz(15) 

// function showNumber(limit){
//     for(let i = 1; i<=limit; i++){
//         if(i%2 === 0){
//             console.log(i, "Even")
//         } else {
//             console.log(i, "Odd")
//         }
//     }

// }

// showNumber(10)
// 0 "EVEN"
// 1 "ODd"



// Basic

// Objects are collections of key-value pairs
// Purpose: Group related variables
// let radius = 1;
// let x = 1;
// let y = 1;


// Object literal syntax
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function (){
//         console.log("draw")
//     }
// }


// Object-oriented Programming (OOP)
// In OOP, a function inside an object is called Method


// circle.draw()

// Factory Functions
// If we have logic inside an object, we need a different way of constructing an object
// Then we need factory function

// function createCircle(radius){
//     return {
//         radius,
//         draw(){
//             console.log("Draw")
//         },
//     }
// }

// function createCircle(radius){
//     return {
//         radius ,
//         draw: function(){
//             console.log("draw")
//         }
//     }
// }


// let newCircle = createCircle(10)

// let againNewCircle = createCircle(15)

// console.log(newCircle)
// console.log(againNewCircle)

// {}
// factory function


// constructor function


// Camel Notation: oneTwoThree
// Pascal Notation: OneTwoThree

// function Circle(radius){
//     this.radius = radius,
//     this.draw = function(){
//         console.log("draw")
//     }
// }
// let circle1 = new Circle(10)
// let xyz = {}
// xyz.radius = 10
// xyz.draw = function(){
//     console.log("draw")
// }

// When we use "new" operator, three things happen:
// 1. it creates an empty js object
// 2. it will point "this" to this empty object
// 3. Finally it will return the new object.


// console.log(circle1)
// "this" is a reference to the object, that is executing this piece of code.
// for now imagine this is an empty object({})


// Dynamic Nature of Objects
// const circle = {
//     radius: 1
// }

// circle = {}

// circle.color = "red"
// circle.draw = function(){}
// circle.radius = 10


// delete circle.color;
// delete circle.draw;

// console.log(circle)

// What kind of constant is cicrle??


// we cannot reassign cicle object, but we can change property.

// Functions are Objects

// function Circle(radius){
//     this.radius = radius,
//     this.draw = function(){
//         console.log("Draw")
//     }
// }

// const circle = new Circle(10)

// const str = new String(23)
// console.log(str.length)

// Circle.name
// Circle.length
// new Function()


// Value vs Reference Types

// let x = 10;
// let y = x;
// x = 20;

// Only the values are copied, so they are independent of each other
// console.log(x)
// console.log(y)

// let arko = {
//     value: 10,
// }
// let supto = arko
// 023947x6

// arko.value = 20


// Primitives are copied by their value
// Objects are copied by their reference

// Another Example
let numberObj = {
    value: 10
};

function increase(obj){
    obj.value++
}

increase(numberObj)
console.log(numberObj)
// Same thing with obj
 // Arrays
// Adding new elements
// Finding elements
// Removing elements
// Splitting arrays
// Combining arrays
// etc

// 01. Adding Elements

// End
// numbers.push(3, 4)

// console.log(numbers)

// Beginning

// numbers.unshift(9)
// console.log(numbers)

// Middle
// let numbers = [1, 2, 3, 4, 5]
// numbers.splice(2, 0, 'a')

// console.log(numbers)

// 02. Finding Elements(primitive)

// const numbers = [1, 2, 1, 3, 4, 1];
// console.log(numbers.indexOf(1, 2))
// with second argument
// console.log(numbers.indexOf(1, 2))

// console.log(numbers.lastIndexOf(1))

// Check if an element exists in an array
// console.log(numbers.indexOf(10) !== -1)
// Alternative and better way
// console.log(numbers.includes(10))

// Exercise
// function findAllIndex(array, element){

// }
// findAllIndex(numbers, 1)

// RDBMS --> Relational Database Management System

// MongoDB

// function notunFunc() {
//   let a = 10;
//   let b = 12;
//   console.log(a);
//   let c = a * b;
//   return a + b;
//   console.log(c);
// }

// const value = notunFunc();
// console.log(value);

// 03. Finding Elements(Reference Types)
// const students = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
//   { id: 3, name: "c" },
//   { id: 4, name: "d" },
// ];

// 510tk -->

// console.log(students.includes())
// It doesn't work, because objects are reference types

// function findTheElementFromArray(array, obj){
//     for(let i = 0; i<array.length; i++){
//         console.log(i)
//         if(array[i].id == obj.id){
//             console.log("Hi")
//         }
//     }
// }
// findTheElementFromArray(students, {id:1, name: 'a'})

// const student = students.findIndex(function (stdnts, ind) {
//     return stdnts.id == 2
// });
// // CallBack Function
// console.log(student)

// console.log(course)

// another is FindIndex --> To find the index

// 04. Arrow Functions

// const course1 = courses.find((course)=> course.name === "a")
// console.log(course1)

const students = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 2, name: "d" },
  ];
  
  const student = students.find((stdnts) => stdnts.id == 2);
  // CallBack Function
  console.log(student);
  
  let value = () => {
      console.log("Kaj")
  }
  value()
  // 05. Removing Elements

// const numbers = [1, 2, 3, 4, 5];

// numbers.push() // add an element at the end
// numbers.unshift() // add an element at the beginning
// numbers.splice() // remove at the middle by index

// Remove at

// End
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// Beginning
// const first = numbers.shift();
// console.log(numbers);
// console.log(first)

// Middle
// const numbers = [1, 2, 3, 4, 5];

// numbers.splice(2, 1, 10);
// console.log(numbers);

// Exercise 01: Array from a range

// Write a function which takes two arguments while calling.
// Return an array from that function

// function arrayFromRange(num1, num2){

// }

// const theArray = arrayFromRange(1, 5) // output: [1, 2, 3, 4, 5]

// Exercise 02: Make an includes function

// const nums = [1, 2, 3, 4];

// console.log(nums.includes(3));

// function includes(array, searchElement){
//   // Code
// }

// Exercise 03: Except function
// const numbersArray = [1, 2, 3, 4];

// const output = except(numbersArray, [1, 3]);

// // console.log(output); // [2, 4]

// function except(array, excludedElementArray) {
//     // Code goes here
// }

// Exercise 04: Count Occurences:

// const numbs = [1, 2, 3, 4, 1];

// const count = countOccurences(numbs, 1)

// // console.log(count) // 2

// function countOccurences(array, searchElement){

// }

// 07. Emptying an Array
// let numbers = [1, 2, 3, 4];

// let another = numbers;

// Solution 1
// numbers = []
// console.log(numbers)
// console.log("Another",another)

// Solution 2
// numbers.length = 0
// console.log(numbers)

// Solution 3
// numbers.splice(0, numbers.length)

// Solution 4
// while (numbers.length > 0) {
//   numbers.pop();
//   console.log(numbers)
// }

// console.log(numbers)
// console.log(another)

// 08. Combining and Slicing Arrays

// const first = [1, 2, 3]
// const second = [4, 5, 6]
// // [1, 2, 3, 4, 5, 6]

// const combined = first.concat(second)

// const ar = new Array(4)
// console.log(ar)

// first[0].id = 10;
// console.log(combined)

// const slice = combined.slice(2, 5)
// console.log(slice)
// console.log(combined)

// console.log(slice)

// 09. The Spread Operator
const first = ["1", 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second)
const combined = [...first,"a", ...second];
// first[0].id = 10;

// const slice = combined.slice(2, 4)
// const copy = combined.slice()
const copy = [...combined];

console.log(combined);
// console.log(slice)


 

// 10. Iterating an Array
// const numbers = [1, 2, 3];

// for (let number of numbers) {

// }

// for(let i = 0; i<numbers.length; i++){
//     console.log(numbers[i])
// }

// numbers.forEach((number, i)=> {
//     // console.log(number)
//     console.log(i)

// })

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum = sum + item
// }

// numbers.forEach((number) => console.log(number));
// numbers.forEach((number, index) => console.log(number));

// 11. Joining Array
// const numbers = [1, 2, 3, 4, 5, 6]
// const joined = numbers.slice(1, 4).join("-")
// console.log( joined)
// console.log(numbers)

// const message = "Thisismyfirstmessage"
// const parts = message.split('')
// const firstPart = parts.slice(0, 4)
// console.log(parts)
// console.log(firstPart)

// const combined = parts.join("")
// console.log(combined)
// Frequently used in URL Slug

// Sorting Arrays

// Primitive elements
// const numbers = [2, 3, 1]
// numbers.sort()
// console.log(numbers)

// numbers.reverse()
// console.log(numbers)

// Reference Type elements
const courses = [
    {id: 1, name: "Node.js"},
    {id: 2, name: "JavaScript"}
]
// const courses = [3, 2, 1];
// [2, 3, 1]
// [2, 1, 3]
// [1, 2, 3]

courses.sort(function (a, b) {
  console.log({ a });
  console.log({ b });
  // a < b => -1
  // a > b => 1
  // a == b => 0
  if (a > b) return -1;
  if (a < b) return 1;
  if (a === b) return 0;
});
console.log(courses);

// courses.sort(function(a,b){
    
// })

// console.log(courses)
 



 

// let a = "5";
// let b = 3;
// console.log(a + b);

// 12.Every and some
// const ages = [32, 33, 16, 40];

// const output = ages.some(function (age) {
//   return age > 18;
// });

// console.log(output)

// function checkAge(age) {
//   return age > 18;
// }

// 13. map() method
// const numbers = [65, 44, {}, 4];
// const newArr = numbers.map((num, i) => {
//   console.log(i)
//   return num * 10
// });

// console.log({ numbers });
// console.log({ newArr });

// const persons = [
//   { firstname: "Malcom", lastname: "Reynolds" },
//   { firstname: "Kaylee", lastname: "Frye" },
//   { firstname: "Jayne", lastname: "Cobb" },
// ];

// const fullName = persons.map((person, index) => {
//   return [person.firstname, person.lastname].join(" ");
// });

// console.log(fullName);
// persons.map(getFullName);

// function getFullName(item) {
//   return [item.firstname,item.lastname].join(" ");
// }

 
// 14. filter method
// const ages = [32, 33, 16, 40, 41, 10];
// const result = ages.filter((age) => {
//   if (age >= 18) {
//     return age;
//   } else return false;
// });
// const result = ages.filter((age) => (age >= 50 ? true : false));

// const result = ages.filter((age, index)=> {
//     if(index % 2 === 0){
//         return true
//     }else return false
// });

// Mutability  Immutability

// console.log(result);

// function checkAdult(age) {
//   return age >= 18;
// }

// 15. Reduce method
const numbers = [175, 50, 25];

const result = numbers.reduce(myFunc, 0);
console.log(result);

function myFunc(prevValue, num, i) {
  console.log({prevValue, num, i})
  return prevValue + num;
}











 // <!DOCTYPE html>
    // <html lang="en">
    //   <head>
    //     <meta charset="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>Document</title>
    //   </head>
    //   <body>
    //     <h1 id="introText">Hello JS</h1>
    //     <button id="btn">Toggle</button>
    //     <script src="script.js"></script>
    //   </body>
    // </html>




//     const button = document.getElementById("btn");
// console.dir(button);

// // Event

// const theme = {
//   mode: "light",
// };

// button.addEventListener("click", function () {

//   // Text change
//   if (button.innerText === "Ooops!") {
//     button.innerText = "Pops!";
//   } else {
//     button.innerText = "Ooops!";
//   }

//   // Theme change
//   if (theme.mode === "light") {
//     theme.mode = "dark";
//     colorChange()
//   } else {
//     theme.mode = "light";
//     colorChange()
//   }
//   console.log(theme);
// });


// function colorChange(){
//   if (theme.mode === "light") {
//     document.body.style.background = "cyan";
//     document.body.style.color = "black";
//   } else {
//     document.body.style.background = "black";
//     document.body.style.color = "white";
//   }
// }


// button.addEventListener("click", function(){
//   // console.log(button.innerText)
//   button.innerText = "Pops!"
// })

// const button = document.getElementById("btn");
// const hText = document.getElementById("introText")
// console.dir(hText)

// console.log(navigator);
// const theme = {
//   mode: "dark",
// };

// button.addEventListener("click", () => {
//   if (theme.mode === "dark") {
//     theme.mode = "light";
//   } else {
//     theme.mode = "dark";
//   }

//   console.log(theme);
//   if (theme.mode === "dark") {
//     document.body.style.backgroundColor = "gray";
//     document.body.style.color = "white";
//     hText.innerHTML = "Ooops!"
//   } else {
//     document.body.style.backgroundColor = "cyan";
//     document.body.style.color = "black";
//   }
// });

// 01. Function Declaration vs Fucntion Expression
// Function Declaration
// function run() {
//   console.log("Run");
// }

// Function Expression
// let fly = function () {
//   console.log("Fly");
// };

// console.dir(fly())

// Named Function Expression
// let fly1 = function fn() {
//   console.log("fly1");
// };

// Atom = A(no) + tomos

// Anonymous Function Expression
// let fly2 = function () {
//   console.log("fly2");
// };

// let move = fly2;
// fly1();
// console.log(move);

// 02. Hoisting
// Function Declaration

// run()
// function run() {
//   console.log("Run");
// }

// run()

// Function Expression
// fly()
// const fly = function () {
//     console.log("fly");
// };

// Hoisting -> it is the process of moving a function declaration to the top of the file

// 03. Arguments

// function sum() {
//     console.log(arguments);
//     let total = 0;
//     for (const iterator of arguments) {
//       total += iterator;
//     }
//     return total;
//   }
  
  // console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
  
  // let arr = [2, 3, 4, 5];
  // // console.log(arr)
  // let obj = {
  //     name: "Aninda",
  //     profession: "Developer"
  // }
  
  // function test(kichuEkta){
  //     for (const iterator of kichuEkta) {
  //         console.log(iterator)
  //     }
  // }
  
  // test(arr)
  // test(obj)
  
  // 04. The Rest Operator
  
  // function sum2(...args) {
  //   return args.reduce((prev, curr) => prev + curr, 0);
  // }
  // console.log(sum2(1, 2, 3, 4, 5, 6));
  
  // function sum3(discount,shopName, ...prices ) {
  
  //   const total = prices.reduce((a, b) => a + b, 0);
  //   return total * (1 - discount);
  // }
  // console.log(sum3(0.1,"Shafin Mobile shop", 20, 30, ));
  
  // 05. Default Parameter
  
//   function interest(priciple, rate= 1.5 , years = 2){
//       // years = years || 2
//       return priciple * rate / 100 * years
//   }
  
//   console.log(interest(100))

 
// 06. Getters and setters
// const person = {
//   firstName: "Ibtesum",
//   lastName: "Aninda",
//   age: 10,
//   fullname(){
//     return person.firstName + " " + person.lastName
//   }
// }
// person.fullName = "Samiul Muztaba"

// But this is Read-only

// console.log(person.firstName +" " + person.lastName)
// console.log(`${person.firstName} ${person.lastName}`)

// console.log(`I am ${person.firstName} ${person.lastName}`)
// console.log(person.fullname())

// getters => access property
// setters => change (mutate) them

// const person1 = {
//   firstName: "Ibtesum",
//   lastName: "Aninda",
//   get fullName(){
//     return `${person1.firstName} ${person1.lastName}`
//   },
//   set fullName (value){
//     let parts = value.split(" ")
//     this.firstName = parts[0]
//     this.lastName = parts[1]
//   }
// }

// person1.fullName = "Samiul Muztaba"

// console.log(person1.fullName)

// person1.fullName = "Aditya Banerjee"
// console.log(person1.fullName)

// person1.fullName = "Shafin Al Islam"

// console.log(person1.fullName)

// 07. Try Catch

// Defensive programming --> Write error cases at the beginning of a function

// const person1 = {
//   firstName: "Ibtesum",
//   lastName: "Aninda",
//   get fullName() {
//     return `${person1.firstName} ${person1.lastName}`;
//   },
//   set fullName(value) {
//     if (typeof value !== "string")
//       throw new Error("Please give your full name in string format!");

//     let parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// // person1.fullName = true
// try{
//   person1.fullName = null;
// } catch(error){
//   // alert(error)
// }

// 08. Local vs Global Scope


// const text = "Hello World";


// {
//   const text = "hijibiji"
//   console.log(text);
// }

// console.log(text);

// const x = "hey"

// function func(){
//   console.log(x)
// }

// func()

// 08. Local vs Global Scope

// const text = "Hello World";

// function a() {
//   const text = "hijibiji";
//   console.log(text);
//   if (true) {
//     const tea = "I love it";
//     const text = "aso";
//     console.log(text);
//     console.log(tea);
//   }
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

// }
// a();

// function a() {
//   const text = "sldfsdf";
//   console.log(text)
// }

// console.log(text);

// const x = "hey"

// function func(){
//   console.log(x)
// }

// func()

// 09. Let vs Var

// for(var j = 0; j<5; j++){
//   console.log(j)
// }

// console.log(j)

// function test(){
//   var x = "something"
//   console.log(x)
// }

// test()
// console.log(x)

// 10. this keyword

// method ---> obj
// function ---> global(window, global)

// const video = {
//   title: "Class going on",
//   play() {
//     console.log(this);
//   },
// };

// video.play();
// video.stop = function(){
//   console.log(this)
// }

// video.stop()


// function playIt() {
//   console.log(this)
// }
// playIt()

// function playVideo(title, name) {
//   this.titl = title;
//   this.nam = name;
//   // console.log(this);
// }

// const aName = new playVideo("hello", "Aninda"); // {}
// console.log(aName)



// function obstacle(height, width, speed) {
//   this.height = height;
//   this.width = width;
//   this.speed = speed;
// }
// const secondObstacle = {
//   height: 14,
//   width: 15,
//   speed: 20
// }



// const firstObstacle =  new obstacle(13, 1, 12);
// console.log(firstObstacle)

// console.log(firstObstacle)
// console.log(this.document)

// const video = {
//     title: "Amader Title",
//     tags: ["a", "b", "c"],
//     showTags() {
//       const self = this;
//       this.tags.forEach(function (tag) {
//         console.log(this);
//         console.log(this.title, tag);
//       }, this);
//     },
//   };
  
  // video.showTags();
  
  // Changing this: Call, apply
  // Solution as all the methods dont have the thisArg
  
//   function test() {}
  
//   const person = {
//     fullName: function (age, birthday) {
//       return this.firstName + " " + this.lastName + " " + age + ", " + birthday;
//     },
//   };
  
//   const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//   };
//   const person2 = {
//     firstName: "Mary",
//     lastName: "Doe",
//   };
  
//   console.log(person.fullName.call(person2, 30, "1 Dec"));
  
//   console.log(person.fullName.apply(person2, [30, "1 Dec"]));

 
// const video = {
//   title: "Amader Title",
//   tags: ["a", "b", "c"],
//   showTags() {
//     const self = this;
//     this.tags.forEach(function (tag) {
//       console.log(this);
//       console.log(this.title, tag);
//     }, this);
//   },
// };

// video.showTags();

// Changing this: Call, apply
// Solution as all the methods dont have the thisArg

// function test() {}

// const person = {
//   fullName: function (age, birthday) {
//     return this.firstName + " " + this.lastName + " " + age + ", " + birthday;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// console.log(person.fullName.call(person2, 30, "1 Dec"));

// console.log(person.fullName.apply(person2, [30, "1 Dec"]));

// const button = document.getElementById("btn");

// button.addEventListener("click", function () {
//   console.log(this);
//   console.dir(this)
// });

// const video = {
//   title: "Amader Title",
//   tags: ["a", "b", "c"],
//   showTags() {
//     console.log(this)
//     this.tags.forEach((tag) => {
//       console.log(this.title, tag);
//     });
//   },
// };

// video.showTags();

// Changing this: Call, apply
// Solution as all the methods dont have the thisArg

// const person = {
//   fullName: function (age, birthday) {
//     console.log(this);
//     return this.firstName + " " + this.lastName + " " + age + ", " + birthday;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// let fullname = person.fullName.bind(person1);

// console.log(fullname(10, "Dec 19"));

// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// person1.fullName()

// console.log(person.fullName.call(person1, 10, "Jan 10"))

// console.log(person.fullName.call(person2, 12, "Feb 10"))

// const args = [10, "Jan 10"]

// console.log(person.fullName.apply(person1, args));

// console.log(person.fullName.apply(person2, args))

// function test(){
//   console.log(this)
// }
// test()
// window.test()
// console.log(window)

// const button = document.getElementById("btn")

// button.addEventListener("click", function(){
//   console.log(this)
//   console.dir(this)
// })


// Objects

// 01. Object Literals

// 02. Factories

// 03. Constructors

// 04. Constructor Property
// function Book(pageNumber, name) {
//   this.page = pageNumber;
//   this.name = name;
//   this.read = function () {
//     console.log(`Reading ${this.name}. It has ${this.page} pages`);
//   };
// }

// const book1 = new Book(70, "You Dont Know JS Yet");

// function createBook(name) {
//   return {
//     name: name,
//     read: function () {
//       console.log("Reading");
//     },
//   };
// }

// const book2 = createBook("Eloquent JS");

// book1.constructor
// book2.constructor

// let x = {};
// meaning new Object()
// new Number()
// etc

// let y = new Object();

// 06. Functions are Objects too!!

// function Book(pageNumber, name) {
//     console.log(this);
//     this.page = pageNumber;
//     this.name = name;
//     this.read = function () {
//       console.log(`Reading ${this.name}. It has ${this.page} pages`);
//     };
//     console.log(this);
//   }
//   // let book1 =new Book(10, "JS"); // {}
//   let book2 = Book.call({}, 15, "Python")
//   let book3 = Book.apply({}, [20, "C"])
  
  
  // // Book.constructor ---> check it
  
  // const Khata = new Function(
  //   "pageNum",
  //   "name",
  //   `
  //   this.name = name;
  //   this.page = pageNum;
  //   this.write = function(){
  //     console.log("Writing")
  //   }
  // `);
  // // console.log(Khata);
  
  // let khata1 = new Khata(10, "my khata")
  
  // console.log(khata1.write())
  
  // const Book1 = new Function(
  //   "pageNumber",
  //   "name",
  //   `
  // this.page = pageNumber;
  //   this.name = name;
  //   this.read = function () {
  //     console.log("Reading")
  //   }
  // `
  // );
  
  // const newBook = new Book1(10, "hey")
  
  // console.log(newBook)
  
  // Now deep into "new"
  
  // Book.call({}, 10, "Hello")
  // Book.apply({}, [10, "Hello"])
  // Book.apply(window, [10, "Hello"])
  // Book.apply({}, [10, "Hello"])
  
  // let num = new Number(5)
  // let num1 = 5
  // new Boolean()
  // new String()
  
  // 07. Primitive vs Reference Types
  
  // 08. Adding or removing properties
//   const myObj = {
//     name: "amar obj"
//   }
//   myObj.age = 10
  
//   myObj = new Object()
  
//   const z = 15
//   z = z + 1
  // console.log(z)
  
  // console.log(myObj)


  // 09. Enumerating Properties

// to enumerate
// for in loop

// to get all the keys
// Object.keys()

// const myObj = {
//   name: "amar obj",
//   age: 29
// }

// console.log(Object.keys(myObj))

// to check
// in obj

// if('name' in myObj) console.log("yaaay")

// 10. Abstraction
// Hide the details, show only the essentials

// function Book(pageNumber, name) {
//     console.log(this);
//     this.page = pageNumber;
//     this.name = name;
//     let defaultPageSize = "A4";
//     let computePageCost = function () {
//       // ....
//       console.log(defaultPageSize);
//     };
//     this.buy = function (numOfCopy) {
//       computePageCost();
//     };
//     this.read = function () {
//       console.log(`Reading ${this.name}. It has ${this.page} pages`);
//     };
//     console.log(this);
//   }
  
  
//   // const book = new Book(10, "YDKJSY");
  
//   // console.log(book);
//   // book.buy()
  
//   // 11. Private properties and methods
//   // Using local variable
  
//   // 12. Getters and Setters
  
//   function Book(pageNumber, name) {
//     this.page = pageNumber;
//     this.name = name;
//     let defaultPageSize = "A4";
//     let computePageCost = function () {
//       // ....
//       console.log(defaultPageSize);
//     };
  
//     // this.text = "Fantastic Book"
  
//     Object.defineProperty(this,"text",{
//       value: "Nice Book!"
//     })
  
//     let imageURL = "www.faltu.com"
  
//     Object.defineProperty(this, "image", {
//       get : function (){
//         return imageURL
//       }
//     })
//   }
  
//   const book = new Book(10, "YDKJSY")
//   const book2 = new Book(15, "Faltu Book")
  
  
  
//   console.log(book)
//   console.log(book2)
  
  
  
  
//   // Define object
//   const obj = {counter : 0};
  
//   // Define setters and getters
//   Object.defineProperty(obj, "reset", {
//     get : function () {this.counter = 0;}
//   });
  
  
  
  
  
  
  
//   Object.defineProperty(obj, "increment", {
//     get : function () {this.counter++;}
//   });
//   Object.defineProperty(obj, "decrement", {
//     get : function () {this.counter--;}
//   });
  
  
  
//   Object.defineProperty(obj, "add", {
//     set : function (value) {
//       console.log(value)
//       this.counter += value;}
//   });
  
  
  
  
//   Object.defineProperty(obj, "subtract", {
//     set : function (value) {this.counter -= value;}
//   });
  
//   // Play with the counter:
//   obj.reset;
//   obj.add = 5;
//   obj.subtract = 1;
//   obj.increment;
//   obj.decrement;


 
// 01. Inheritance
// Circle, Square   <-- Shape

// 02. Prototypes and Prototypical Inheritance

// let x = {};

// console.log(Object.getPrototypeOf(x));
// console.log(x.__proto__)

// let y = "hello";
// console.log(Object.getPrototypeOf(y));
// console.log(y.constructor);
// console.log(y.toUpperCase());
// console.log(Object.getPrototypeOf(y));
// compare

// 03. Multilevel Inheritance

// function Student(rollNumber) {
//   this.roll = rollNumber;
//   this.toString = function () {
//     console.log("Uhu! I will not work as expected.");
//   };
// }
// let x = 10

// const shafin = new Student(10);
// console.log(Object.getPrototypeOf(shafin));
// using constructor function

// 04. Property Descriptors

// Property attributes
// let person = { name: "Aninda", age: "Bolbo na" };

// for (let key in person) console.log(key);

// // Or
// console.log(Object.keys(person));

// In JS, our properties have attributes attached to them.

// let text = "hello"

// for (let x in text) console.log(x, text[x])
// for (let x of text) console.log(x)

// let person = { name: "Aninda" };  
// let objectBase = Object.getPrototypeOf(person);
// // // let's see the attributes attached to the 'toString' property/method.
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

// console.log(descriptor);
// console.log(Object.keys(person))

// configurable: true ---> means you can delete this member if you want to.
// enumerable: false --->

// Object.defineProperty(person, "name", {
//   writable: false, // becomes Read-only
//   enumerable: false, // will not show up in Object.keys
//   configurable: true, // cannot delete
// });
// person.name = "Aditya";


// delete person.name;
// console.log(person);

// console.log(Object.keys(person));

// 05. Constructor Prototypes
// obj.__proto__ == Object.prototype
// also with arrays

// let person = {}



// 06. Prototype vs Instance Members
// function Student(rollNumber){
//     // instance members
//     this.roll = rollNumber;

//     // this.attendClass = function(){

//     // }

// }

// prototype members
// Student.prototype.attendClass = function(){
//     console.log("Attending!")
// }

// const shafin = new Student(6)
// const supto = new Student(5)

// 07. Iterating instance and prototype members

// function Student(rollNumber) {
//     // instance members
//     this.roll = rollNumber;
  
//     // this.attendClass = function(){
//     // }
//   }
//   // prototype members
//   Student.prototype.attendClass = function () {
//     console.log("attending");
//   };
  
//   const shafin = new Student(6);
//   const supto = new Student(5);
  
  // Returns instance members
  // console.log(Object.keys(shafin))
  
  // Returns all members (instance + prototype)
  // for (let key in shafin) console.log(key)
  
//   console.log(supto.hasOwnProperty("roll"));
//   console.log(supto.hasOwnProperty("attendClass"));
  
  // 08. Dont modify the built in Objects
  // Object.prototype.toString = function () {
  //   console.log("yaaaaaayayyayayay!");
  // };
  
//   console.log(Object.prototype);
//   let x = 4;
//   console.log(x.toString);
  
  // 09. Exercise (Stopwatch with Prototype)
  
  // function Stopwatch(){
  //     let startTime
  //     start(){
  //         // 
  //     }
  // }


  // 01. Creating your own Prototypical inheritance

// function Shape() {}

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.duplicate = function () {
//   console.log("duplicating");
// };
// function Square() {
//   ...
// }

// Square.prototype.duplicate = function () {
//   console.log("duplicating");
// };



// Circle.prototype = Object.create(Object.prototype); // objectBase

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.draw = function () {
//   console.log("draw");
// };
// const c = new Circle(1);
// const sq = new Square();
// console.log(Circle.prototype);
// console.log(c.constructor)
// // Circle.prototype.duplicate = function () {
// //   console.log("duplicate");
// // };

// Square.prototype.duplicate = function () {};

// const c = new Circle(1);
// const s = new Shape();
// --------------------------------
// 02. Resetting the Constructor

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle()
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// console.log(Circle.prototype);
// const c = new Circle(1);
// console.log(c.constructor)



// 01. Creating your own Prototypical inheritance

// function Shape() {}

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.duplicate = function () {
//   console.log("duplicating");
// };
// function Square() {
//   // ...
// }

// Square.prototype.duplicate = function () {
//   console.log("duplicating");
// };

// Circle.prototype = Object.create(Object.prototype); // objectBase

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
// Circle.prototype.draw = function () {
//   console.log("draw");
// };
// const c = new Circle(1);
// const sq = new Square();
// console.log(Circle.prototype);
// console.log(c.constructor)
// // Circle.prototype.duplicate = function () {
// //   console.log("duplicate");
// // };

// Square.prototype.duplicate = function () {};

// const c = new Circle(1);
// const s = new Shape();
// --------------------------------
// 02. Resetting the Constructor

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle()
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// console.log(Circle.prototype);
// const c = new Circle(1);
// console.log(c.constructor)

// 03. Calling the Super Constructor
// function Shape(color) {
//   this.color = color; // look
// }

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle(radius, color) {
//   Shape.call(this, color);
//   this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// function Square(color) {
//   Shape.call(this, color);
// }

// const c = new Circle(1, "blue"); // {}
// const s = new Square("Red");

// 04. Intermediate Function Inheritance
// extend

// function Shape(color) {
//   this.color = color; // look
// }

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }
// function Circle(radius, color) {
//   Shape.call(this, color);
//   this.radius = radius;
// }

// extend(Circle, Shape);

// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// function Square(size) {
//   this.size = size;
// }

// extend(Square, Shape);


// 5. Method Overriding
// Meaning reimplementing a method in child object.

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape() {}

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle() {}

// extend(Circle, Shape);
// // OVerriding duplicate method
// Circle.prototype.duplicate = function () {
//     // Shape.prototype.duplicate(); // if you want to call it from Shape prototype
//     Shape.prototype.duplicate.call(this); // if you want to call it with `this`

//   console.log("duplicating Circle");
// };

// const c = new Circle();

// 06. Polymorphism
// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape() {}

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle() {}
// extend(Circle, Shape);

// // OVerriding duplicate method
// Circle.prototype.duplicate = function () {
//   console.log("duplicating Circle");
// };

// function Square() {}

// extend(Square, Shape);

// Square.prototype.duplicate = function () {
//   console.log("duplicating Square");
// };

// let shapes = [new Circle(), new Square()];

// let c = {};
// function duplicateSth(obj) {}
// duplicateSth();
// for of loop

// for (let shape of shapes) {
//   shape.duplicate();
// }

// 07. When to use inheritance

//  Example : animal --> human, birds, fish

// animal ---> canEat(), 


// animal --> stholochor(canWalk()), jolochor(canSwim)
// human <=== stholochor
// birds <=== stolochor

// fish <=== jolochor



// Solution: Composition Pattern
// canEat, canSwim, canWalk