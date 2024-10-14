/* Memory In JS */

// Stack & Heap

// stack includes primitive values 

let a  = 4 ; const b = "lkdf";

let x = a ;

x = 90;

let y = b ;
y = 0;
console.log("priv", a,b)

console.log("new",x,y)


// Heap includes primitive values 

let arr = ["a","b","c"] ; 
let obj = {email:"hi@google.com",id:1001,amount:10000};
console.log(arr  , obj )

let arr2 = arr;

arr2[1] = 1;

let obj2 = obj;

obj2.email = "hello@gmail.com";

console.log(arr , arr2 , obj , obj2)