//Primitive Data Types

// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

const BigInt = 234567890157


//Reference Types (Non Primitive)

// Array, Objects, Functions 

const heros = ["shaktiman","Naagraj","Doga"] //Arrays
let myObj = {                                //Objects  
    name: "Abhay",
    age: 22
}

const myFun = function(){
    console.log("Hello World");
}
// console.log(typeof myFun );

 // https://262.ecma-international.org/5.1/#sec-11.4.3



 // ################################################################################################

                                //******Memory******

// Stack (Primitive DataTypes) copy data, Heap (Non-Primitive DataType) reference data

let myYoutubeName = "Abhayy"

let anotherName = myYoutubeName
anotherName = "Chai&Code"

//console.log(myYoutubeName);
//console.log(anotherName);

let userOne = {
    email: "abc@gmail.com",
    upi: "user@ybl"
}
console.log(userOne.email);
let userTwo = userOne
userTwo.email = "xyz@rediff.com"

console.log(userOne.email);
console.log(userTwo.email);
