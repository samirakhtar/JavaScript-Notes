// how to iterate(loop) object
const person ={
    name:"Samir",
    age:21,
    "person hobbies":"['coding', 'multitasking', 'designing', 'fighting']"
}
// for in loop



for(let key in person){
    console.log(key);//name age person hobbies //this will give key element
}


for(let key in person){
    console.log(person[key]); //Samir //this will give key value
                             // 21
                            // ['coding', 'multitasking', 'designing', 'fighting']
                              
}
for(let key in person){
    console.log(`${key} : ${person[key]}`); //key value pair  //name : Samir
                                                             //age : 21 
                                                            //person hobbies : ['coding', 'multitasking', 'designing', 'fighting']

}
//one more method 
for(let key in person){
    console.log(key,":", person[key]); //key value pair //name : Samir
                                                       //age : 21 
                                                      //person hobbies : ['coding', 'multitasking', 'designing', 'fighting']
}

// object.keys
console.log(typeof (Object.keys(person)));////Samir 21 ['coding', 'multitasking', 'designing', 'fighting']
const val = Array.isArray((Object.keys(person)))
console.log(val);//true

// 2nd method 
for(let key of Object.keys(person)){
    console.log(person[key]) //Samir 21 ['coding', 'multitasking', 'designing', 'fighting']
} 
