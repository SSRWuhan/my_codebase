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
let student = true
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


console.log(square(4))
let value = square(4)
console.log(value)


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
    
// false || 1 || 2
// short-circuiting

// Real world example
// let userColor = "";
// let defaultColor = "blue";

// let currentColor = userColor || defaultColor

// console.log(currentColor)


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


// assignment 03: FizzBuzz

function FizzBuzz(input){
    if (input % 3 === 0 && input % 5 === 0){
        console.log("FizzBuzz");
    }else if(input % 3 === 0){
        console.log("Fizz");
    }else if(input % 5 === 0){
        console.log("Buzz");
    }else if(typeof(input) !== "number"){
        console.log("NOT AN NUMBER");
    }else{
        console.log(input); 
    }
}
// FizzBuzz()

// assignment 04: Even and odd number

function showNumber(limit){
    for (let i = 1; i < limit+1; i++) {
        if (i % 2 == 0) {
            console.log(i, "\"Even\"") 

        }else{
            console.log(i, "\"Odd\"");
        }
        
    }
}
// showNumber()

// assignment 05: speed limit

function checkSpeed(speed){
    speed = Math.floor(speed);
    let points = 0;
    if(speed > 74){
        for(let i = 75; i < speed+1; i+=5) points = points + 1;
        if (points < 12)  console.log("you're point is: ", points);   
        else console.log("LICENSE SUSPENDED!");
    }else console.log("you're driving speed is ok");

}

// checkSpeed(100)

// assignment 06: check for falsy values

function countTruthy(array){
    let truevalues = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element) {
             truevalues++;
        };
        
    };
    console.log("the number of truthy values is: ", truevalues);
};

// countTruthy(["", null, 1, 9, 0, false, NaN, 8, "test#1", 0])

// assignment 06: Show All the "string properties" of an object

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key]);   
        }
    }
}
// showProperties(movie)

// assignment 07: Sum of Multiples of 3 and 5

function sumofmutiples3and5(limit){
    let storageof3 = 0;
    let storageof5 = 0;
    let sum = 0;
    for(let i = 1; i < limit; i++){
        if (i % 3 == 0) {
            storageof3 = limit;
            sum += storageof3  
        }
        if (i % 5 == 0) {
            storageof5 = limit;
            sum += storageof5; 
        }
    }
    console.log("sum of 3 and 5: ", sum);
   
}

// sumofmutiples3and5(10);

// project 03: binary to decimal

function convertToInteger(str) {
    str = prompt("please enter the number which will be converted from binary to decimal: ")
    return parseInt(str, 2)
   }
   
// console.log(convertToInteger());

// project 04: number guessing game

function numberguessinggame(guess){
    let num = Math.floor(Math.random() * 8);
    // console.log(num);
    guess = prompt("enter your guess between 1 to 7");
    if (guess == num) {
       console.log("correct"); 
    } else {
        console.log("wrong answer. better luck next time!"); 
    }

}

// numberguessinggame()

// project 05: DNA to RNA
function DNAtoRNA(dna) {
    //splits up the input into an array
    let rna = dna.split('')
    for(let i = 0; i < rna.length; i++){
      if(rna[i] === "T") rna[i] = "U";
    }
    //joins it back
    return rna.join('');
  }

// console.log(DNAtoRNA("GGTT"));

// assignment 08: find all of the positions of an element in an array
function findAllIndex(array, element){
    let requestedelementsofthearray = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            requestedelementsofthearray.push(i);
        }
    }
    return requestedelementsofthearray;
   };
//test cases
// console.log(findAllIndex([1, 2, 2, 1, 1, 1], 1));

// assignment 09: Array from a range
function arrayFromRange(num1, num2){
let array = [];
for(let i = num1; i <= num2; i++) {
    array.push(i);
}
return array;
}
//this is the test case
// const theArray = arrayFromRange(1, 5) // output: [1, 2, 3, 4, 5]
// console.log(theArray);



// assignment 10: Make an includes function
function handmadeincludes(array, searchElement){
    let statement;
  for(let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
        statement = true;
        break;
    } else {
        statement = false;
    }
  }
  return statement;
}
//test cases
// const nums = [1, 2, 3, 4];
// console.log(handmadeincludes(nums, 3));


// assignment 11: Except function
function except(array, excludedElementArray) {
    let j = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === excludedElementArray[j]) {
            array.splice(i, 1);
            j++;
            continue;
        }
    }
    return array;
}
// // test cases
// const numbersArray = [1, 2, 3, 4];
// const output = except(numbersArray, [1, 3]);
// console.log(output); // [2, 4]


// assignment 12: Count Occurences
function countOccurences(array, searchElement){
    let CountOccurences = 0; 
    for(let i = 0; i < array.length; i++) {
        if (array[i] === searchElement)  CountOccurences++;
    }
    return CountOccurences;
}
// test cases
// const numbs = [1, 2, 3, 4, 1];
// const count = countOccurences(numbs, 1);
// console.log(count);


// project 06: reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
//   reverseString("hello");

// assignment 13: Reference Type name sorting

// Reference Type elements
const courses = [
    {id: 1, name: "Node.js"},
    {id: 2, name: "JavaScript"}
]


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


// project 07: truncate a String
  function truncateString(str, num) {
    let result;

    if (str.length > num) {
        let str2 = str.slice(0, num);
        result = str2 + '...';
    } else {
        result = str;
    }

    return result;
}

// project 08.1: array tester

// function findElement(arr, func) {
//     let num = 0;
//     for(let i=0; i < arr.length; i++){
//       num = arr[i];
//       let test = func
//      if(test(num)=== true){
//         return test(num)
//      }
//     }
    
//   }
  

// project 08.2: array tester

function findElement(arr, func) {
    let num = 0;
    for(let i=0; i < arr.length; i++){
      num = arr[i];
      let test = func
     if(test(num)=== true){
        return num;
     }
    }
  }

  
// project 09: inserter(array)


  function getIndexToIns(arr, num) {
    let posi = 0;
    arr.sort((a, b) => a-b);
    if(arr.length === 0) {
        return posi = 0;
    }
    for(let i=0; i < arr.length; i++){
      if(arr[i] >= num) {
        return posi = i;
      }if(i === arr.length-1 || arr[i] > num) {
        return arr.length
      }
   }
  }


// project 10: divide(array)
function chunkArrayInGroups(arr, size) {
    let subarray;
     let newarr=[];
     let start = 0;
     let end = size;
     for(let i=0; i < arr.length/size; i++) {
       subarray=(arr.slice(start, end));
       newarr.push(subarray);
       subarray = [];
       start += size;
       end += size;
     }
     return newarr;;
 }
 

// project 11: if a word contains the required words(array)
 function mutation(arr) {
    let bool;
    let word = arr[0].toLowerCase().split(''); 
    let wordsneededtobepresent = arr[1].toLowerCase().split('');
    for(let i=0; i < wordsneededtobepresent.length; i++) {
      if(word.includes(wordsneededtobepresent[i])){
        bool = true;
      } else {
        return bool = false;
      }
    }
    return bool;
  }
 

// project 12: turn every first word to upper case and the rest to lower case
  function titleCase(str) {
    let str2 = str.split(' ');
    for(let i =0; i < str2.length;i++){
      str2[i] = str2[i].toLowerCase().split('');
      str2[i][0] = str2[i][0].toUpperCase();
      str2[i] = str2[i].join('');
    }
  
    return str2.join(' ');
  }
  
// project 12: encryptor and decryptor
function encryptor(str){
    let arr = str.toLowerCase().split('');
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {

        case "a":
            arr[i] = "kfdh"
            break;
        case "b":
            arr[i] = "puwd"
            break;
        case "c":
            arr[i] = "dfbe"
            break;    
        case "d":
            arr[i] = "oxhj"
            break;
        case "e":
            arr[i] = "sown"
            break;
        case "f":
            arr[i] = "bcfo"
            break;
        case "g":
            arr[i] = "qpcg"
            break;    
        case "h":
            arr[i] = "zpfb"
            break;
        case "i":
            arr[i] = "tdoc"
            break;
        case "j":
            arr[i] = "vkuu"
            break;
        case "k":
            arr[i] = "jusp"
            break;    
        case "l":
            arr[i] = "ljhg"
            break;    
        case "m":
            arr[i] = "kopd"
            break;
        case "n":
            arr[i] = "f8hc"
            break;
        case "o":
            arr[i] = "u39s"
            break;    
        case "p":
            arr[i] = "p8dj"
            break;
        case "q":
            arr[i] = "f9eu"
            break;
        case "r":
            arr[i] = "mcoe"
            break;
        case "s":
            arr[i] = "d87f"
            break;
        case "t":
            arr[i] = "l48g"
            break;
        case "u":
            arr[i] = "n85q"
            break;
        case "v":
            arr[i] = "036d"
            break;                
        case "w":
            arr[i] = "qa9d"
            break;
        case "x":
            arr[i] = "kdo2"
            break;
        case "y":
            arr[i] = "co64"
            break;
        case "z":
            arr[i] = "jc1u"
            break;    
        case " ":
            arr[i] = "kc4g"
            break;
            
    }

  }

  return arr.join('');  

}

// console.log(encryptor("hello how are you donig"));

function decryptor(str) {
     let arr = str.split('');
     let parts;
     let decoddedstr = [];  
     let start = 0;
     let end = 4;
     for (let i = 0; i < arr.length; i++) {
       parts = arr.slice(start, end).join('');
       switch (parts) {
        case "kfdh":
            parts = "a";
            decoddedstr.push(parts);
            break;
        case "puwd":
            parts = "b";
            decoddedstr.push(parts);
            break;
        case "dfbe":
            parts = "c";
            decoddedstr.push(parts);
            break;
        case "oxhj":
            parts = "d";
            decoddedstr.push(parts);
            break;
        case "sown":
            parts = "e";
            decoddedstr.push(parts);
            break;
        case "bcfo":
            parts = "f";
            decoddedstr.push(parts);
            break;
        case "qpcg":
            parts = "g";
            decoddedstr.push(parts);
            break;
        case "zpfb":
            parts = "h";
            decoddedstr.push(parts);
            break;
        case "tdoc":
            parts = "i";
            decoddedstr.push(parts);
            break;
        case "vkuu":
            parts = "j";
            decoddedstr.push(parts);
            break;
        case "jusp":
            parts = "k";
            decoddedstr.push(parts);
            break;
        case "ljhg":
            parts = "l";
            decoddedstr.push(parts);
            break;
        case "kopd":
            parts = "m";
            decoddedstr.push(parts);
            break;
        case "f8hc":
            parts = "n";
            decoddedstr.push(parts);
            break;
        case "u39s":
            parts = "o";
            decoddedstr.push(parts);
            break;
        case "p8dj":
            parts = "p";
            decoddedstr.push(parts);
            break;
        case "f9eu":
            parts = "q";
            decoddedstr.push(parts);
            break;
        case "mcoe":
            parts = "r";
            decoddedstr.push(parts);
            break;
        case "d87f":
            parts = "s";
            decoddedstr.push(parts);
            break;
        case "l48g":
            parts = "t";
            decoddedstr.push(parts);
            break;
        case "n85q":
            parts = "u";
            decoddedstr.push(parts);
            break;
        case "036d":
            parts = "v";
            decoddedstr.push(parts);
            break;            
        case "qa9d":
            parts = "w";
            decoddedstr.push(parts);
            break;
        case "kdo2":
            parts = "x";
            decoddedstr.push(parts);
            break;
        case "co64":
            parts = "y";
            decoddedstr.push(parts);
            break;
        case "jc1u":
            parts = "z";
            decoddedstr.push(parts);
            break;
        case "kc4g":
            parts = " ";
            decoddedstr.push(parts);
            break;
    }
    
       start += 4;
       end += 4;
     }

     return decoddedstr.join('');
}


// console.log(decryptor("zpfbsownljhgljhgu39skc4gzpfbu39sqa9dkc4gkfdhmcoesownkc4gco64u39sn85qkc4goxhju39sf8hctdocqpcg"));

//project 13: undefined

// const filteredList = watchList
// .filter(movie => Number(movie["imdbRating"]) >= 8.0)
// .map( movie => ({
// title: movie["Title"],
// rating: movie["imdbRating"]
// }));


// project 14: strint to url slug
function urlSlug(title) {
    let url = title.toLowerCase().split(" ");
    let filteredurl = url.filter((word) => word !== "")
    return filteredurl.join("-")
    }





let colourchanger = (notcondition, backgroundcolour, textcolour) => {
    if(status.innerHTML != notcondition){
        status.innerHTML = notcondition;
        document.body.style.backgroundColor = backgroundcolour;
        document.body.style.color = textcolour;
    }
}


let status = document.getElementById("status");

let bluebtn = document.getElementById("blue");

let cyanbtn = document.getElementById("cyan");

let purplebtn = document.getElementById("purple");

let darkmodebtn = document.getElementById("darkmode");

let defaultbtn = document.getElementById("default"); 

bluebtn.addEventListener("click", () => {
    colourchanger("colour status: blue", "blue", "white")
});

purplebtn.addEventListener("click", () => {
    colourchanger("colour status: purple", "purple", "black")
});

darkmodebtn.addEventListener("click", () => {
    colourchanger("colour status: dark mode", "black", "white")
});

defaultbtn.addEventListener("click", () => {
    colourchanger("colour status: default", "white", "black")
});

cyanbtn.addEventListener("click", () => {
    colourchanger("colour status: cyan", "cyan", "white")
});


let canvas = document.getElementById("drawbox");
let ctx = canvas.getContext("2d");
// window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

// })

let mouse = {
    x: undefined,
    y: undefined
};

canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    drawcircle();
    console.log(event);
})

function drawcircle(){
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI*2);
    ctx.fill();
};

let canvas2 = document.getElementById("gamebox");
let gctx = canvas2.getContext("2d"); // gctx = game ctx

let  position = {
    x: 150,
    y: 250
};

gctx.fillStyle = "red";
gctx.fillRect(250, 250, 50, 50);

 //project 14: twitter # tagger
function generateHashtag (str) {
    let str2 = str.split(' ');
  for(let i =0; i < str2.length;i++){
    if(str2[i] !== "") {
    str2[i] = str2[i].toLowerCase().split('');
    console.log(str2[i]);
    str2[i][0] = str2[i][0].toUpperCase();
     console.log(str2[i]);
    str2[i] = str2[i].join('');
     console.log(str2[i]);
    }
  }
  let result = str2.join('');
  console.log(result);
if(result.length === 0) return false;
else if(result.length < 140){ 
  let finalResult = "#" + result; 
  console.log(finalResult);
  return finalResult;
}
else return false;
}

//project 15: complete DNA
function dnaStrand(dna){
    let otherside = dna.split("").map((strand) => {
      if (strand === "A") return strand = "T";
      else if (strand === "C") return strand = "G";
      else if (strand === "T") return strand = "A";
      else if (strand === "G") return strand = "C";
    });
    return otherside.join("");
  }

//project 16: digital root
function digitalRoot(n) {
    let num = String(n).split("").reduce((a, b) => Number(a) + Number(b), 0);
    while(String(num).length !== 1){
      num = String(num).split("").reduce((a, b) => Number(a) + Number(b), 0);
    }
    return num;
  }

//project 17: tick-tac-toe game checker
function checker(board, value) {
    if (
      (board[0][0] === value && board[1][1] === value && board[2][2] === value) ||
      (board[0][1] === value && board[1][1] === value && board[2][1] === value) ||
      (board[0][2] === value && board[1][1] === value && board[2][0] === value) ||
      (board[2][1] === value && board[1][1] === value && board[0][1] === value) ||
      (board[0][0] === value && board[0][1] === value && board[0][2] === value) ||
      (board[0][0] === value && board[1][0] === value && board[2][0] === value) ||
      (board[2][0] === value && board[2][1] === value && board[2][2] === value) ||
      (board[2][2] === value && board[1][2] === value && board[0][2] === value)
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function isSolved(board) {
    if (checker(board, 1)) {
      return 1; 
    } else if (checker(board, 2)) {
      return 2; 
    } else if (board.some(row => row.includes(0))) {
      return -1; 
    } else {
      return 0; 
    }
  }

  //assignment unknown: handmademap 
  let arr12 = [1, 2, 4, 7, 9 ,0, 6, 2];

  function handmademap(arr, func){
    let newarr = [];
    for(let i=0; i < arr.length; i++){
        let value = func(arr[i]);
        console.log(value);
       newarr.push(value);
    }
    return newarr;
  }
  console.log(handmademap(arr12, function(num){ return num % 2 === 0; }));
  console.log(handmademap(arr12, function(num){ return num * 2; }));

  function CHARECTERMAKER(name = null, age = null, power = null, family = null){
    this.name = name;
    this.age = age;
    this.power = power;
    this.family = family;
  }
  let SSRW = new CHARECTERMAKER( null , 14, "programming", "reality bender");
  console.log(SSRW);
  console.log(null_entity = new CHARECTERMAKER());


  // assignment 20: stopwatch constructor
  function Stopwatch(){
    let running = false;
    let time = {
        seconds: 0
    };
    this.duration = 0;

    Object.defineProperty(this, 'start', {
        get: function(){
            if(!running){
                time.seconds = Date.now();
                running = true;
            }
            else{
                throw new Error("stopwatch has already been started");
            }
                
            }
    })

    Object.defineProperty(this, 'stop', {
        get: function(){
            if(running){
                this.duration =(Date.now() - time.seconds) / 1000;
                running = false;
            }
            else{
                throw new Error("stopwatch has already been stoped");
            }
            }
    })
  }
