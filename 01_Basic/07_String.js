const name = "Abhiii"
const repoCount = 60

// console.log(name + repoCount + "Value");

//backtick character (`______`)

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com")

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(4));
//console.log(gameName.indexOf('y'));
const newString = gameName.substring(0, 6)
//console.log(newString);

const anotherString = gameName.slice(-8, 4)
//console.log(anotherString);

const newStringOne = "   hitesh.    "
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20Singh"
console.log(url.replace('%20', '-'))

console.log(url.includes('abhay'))

console.log(gameName.split('-'));
