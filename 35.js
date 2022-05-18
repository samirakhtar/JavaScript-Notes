// array destructing
const myArray = ["value1","value2","value3","value4","value5"];
let [myvar1, ,myvar2, ...myNewArray] = myArray; //one more commoma in beetween will skip the current index and it will move to next index
console.log(myvar1);//value1
console.log(myvar2);//value3
console.log(myNewArray); //(2) ['value4', 'value5']//...will give the rest element which is inside the array