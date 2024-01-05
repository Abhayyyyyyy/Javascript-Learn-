let score = false

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//  33 -> 33
//  33abc -> NaN
//  null -> object
//  undefined  -> undefined
//  true = 1 or false = 0

let isLoggedIn = "Abhay";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 -> true  0 -> false
// " " -> false
// "Abhayy" -> true

let someNumber = "123";
let StringSomeNumber = String(someNumber);
console.log(StringSomeNumber); 
console.log(typeof StringSomeNumber);