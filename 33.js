// for of loop in array //it will print all the elements of array
const fruits = ["apple","mango","grapes"];
const fruits2 = [];
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits);//(3) ['apple', 'mango', 'grapes']
console.log(fruits2);//(3) ['APPLE', 'MANGO', 'GRAPES']

//Traditional method
for(let i=0; i<=fruits.length;i++){
    console.log(fruits2);
}
