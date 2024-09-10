//Number conversion

let score = 85;

console.log(typeof score) // number

let marks = "90"

console.log(typeof marks); // string

let marks_value = Number(marks)

//converted in number
console.log(typeof marks_value) // number


let x = "33anc"
let x_value = Number(x)

console.log(x_value) //NaN


let a = null;

console.log(typeof a) //object

let a_value = Number(a);

console.log(a_value , typeof a_value); //0 number


//Boolean conversion

let isLoggedIn = 1;
console.log(Boolean(isLoggedIn)); // true

let str = "ranveer"
console.log(Boolean(str)) // true


let str1 = ""
console.log(Boolean(str)) // false


let isTrue = 1;

console.log(typeof String(isTrue)) // string "1"

