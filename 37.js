// difference between dot and bracket notaion
const key = "e-mail";
const person = {
      name:"Samir",
      age: 21,
     "person hobbies": ['coding', 'multitasking', 'designing', 'fighting']
}

console.log(person["person hobbies"]); //you can't access person hobbies using .Dot notaion because space is not allowed in programming languages this is why we use bracket notation
                                      //['coding', 'multitasking', 'designing', 'fighting']    
person[key]="akhtarsamir242@gmail.com"; //don't use double quote so this will compute what is the value of key which is "email" and it will be assigned
                                       
console.log(person);//{name: 'Samir', age: 21, person hobbies: Array(4), e-mail: 'akhtarsamir242@gmail.com'} 