const str = "hello";
const str2 = "world";

let result = str + " " +  str2;

console.log(result)

const name = "ranveer";
result.concat(`my name is ${name}`)
console.log(result.concat(`my name is ${name}`)
)


const gameName = new String("PUBG-BGMI");

console.log(gameName)
console.log(typeof gameName)  // {}

console.log(gameName.length) // 9

console.log(gameName.at(2)); // B

console.log(gameName.charAt(4)) // G

console.log(gameName.includes("-bg".toLocaleUpperCase())) // true -bg

console.log(gameName.indexOf('G')) //3

const newString = gameName.substring(0,6);

console.log(newString); // PUBG-B

const anotherString = gameName.slice(0,8);

console.log(anotherString);

const string = "   Ranveer   ";

console.log(string);
console.log(string.trim());


const url = `https://google.com/ranveer%20singh`;

console.log(url.replace('%20','-'))

const splittedString = url.split('/');

console.log(splittedString)


const anchoredString = gameName.anchor('PUBG');

console.log(anchoredString)

console.log(gameName.at(6));
console.log(gameName.charAt(6));

console.log(gameName.charCodeAt(3))