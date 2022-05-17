// into to arrays
// Arrays are collection of elements 
// ordered collection of items
// In Arrays we can store any dataType

let fruits = ["apple","banana","mango","grapes"];
let number = [1,2,3,4,5];
let mixed  = [1,2,2.1,null,"string",undefined];
console.log(fruits[3]);//grapes
console.log(number); //(5) [1, 2, 3, 4, 5]
console.log(mixed); //(6) [1, 2, 2.1, null, 'string', undefined]

console.log(fruits); //(4) ['apple', 'banana', 'mango', 'grapes']
fruits[0]="pineapple";//this will change the value of index number 0
console.log(fruits) //(4) ['pineapple', 'banana', 'mango', 'grapes']
console.log(typeof fruits);//object
console.log(Array.isArray(fruits)); //this will check typeof Array is true or false

// array indexing