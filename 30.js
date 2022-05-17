//  for loop in array

let fruits = ["apple","banana","grapes","mango"];
let fruits2=[];
for(let i=0; i < fruits.length; i++){      //loop will run for all elements of array
    fruits2.push(fruits[i].toUpperCase()); // array1 element will be pushed into array2
}
console.log(fruits2);//(4) ['APPLE', 'BANANA', 'GRAPES', 'MANGO']