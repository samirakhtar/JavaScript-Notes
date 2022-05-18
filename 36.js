// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// keys are byDefult in string 
// objects don't have index

// how to create objects

// const person ={name:"Samir" ,age:21};
const person ={
    name:"Samir",
    age:21,
    hobbies: ["coding","multitasking","designing"]
}
console.log(person); //{name: 'Samir', age: 21, hobbies: Array(3)}

//how to access data from objects using Dot notaion 

console.log(person.name); //Samir
console.log(person.age); //21
console.log(person.hobbies) //(3) ['coding', 'multitasking', 'designing']


//how to access data from objects using bracket notaion 

console.log(person["name"]); //Samir
console.log(person["age"]); //21
console.log(person["hobbies"]) //(3) ['coding', 'multitasking', 'designing']


// how to add key value pair to objects using Dot notaion

person.gender="male"
console.log(person); //{name: 'Samir', age: 21, hobbies: Array(3), gender: 'male'}

// how to add key value pair to objects using bracket notaion

person["gender"]="male"
console.log(person); //{name: 'Samir', age: 21, hobbies: Array(3), gender: 'male'}


person.hobbies.push("fighting")
console.log(person.hobbies)//4) ['coding', 'multitasking', 'designing', 'fighting']