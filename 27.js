// array push pop

let fruits = ["apple","banana","mango",];
console.log(fruits); //(3) ['apple', 'banana', 'mango']

//push
fruits.push("grapes");//push add elements in the last
console.log(fruits);//(4)['apple', 'banana', 'mango', 'graps']

// pop

let poppedFruits= fruits.pop();//pop will remove the elements and it will start from last
console.log(fruits); //(3) ['apple', 'banana', 'mango']
console.log("popped fruits is", poppedFruits); //popped fruits is grapes

// array shift unshift
fruits.unshift("watermelon");//unshift will add new elements starting from index no.0
fruits.unshift("guava");
console.log(fruits);// (5)['guava', 'watermelon', 'apple', 'banana', 'mango']

// array shift
let removeFruit = fruits.shift();//shift will remove  elements starting from  index no.0
console.log(fruits); //(4) ['watermelon', 'apple', 'banana', 'mango']
console.log("removed fruits is", removeFruit);

// push & pop is fast as compared to shift & unshift;