// primitive data types
// In primitive data types data is store in stack and it give seprate memory in stack this is why when we increment num1 value it don't change the value of num2
let num1=6;
let num2=num1;
console.log(num1); //6
console.log(num2); //6
num1++;

console.log("after incrementing num1")
console.log(num1); //7
console.log(num2); //6

// reference data types
// array
let array1 = ["item1","item2","item3"];
let array2 = array1;
console.log(array1); // (3) ['item1', 'item2', 'item3']
console.log(array2); // (3) ['item1', 'item2', 'item3']
array1.push("item4");

console.log("after pushing element to array 1 ");
console.log(array1); //(4) ['item1', 'item2', 'item3', 'item4']
console.log(array2); //(4) ['item1', 'item2', 'item3', 'item4']

// in reference data_type data is stored in heap and it share or point the pointer to the address to stack this is why it gives us the incremented value . 

