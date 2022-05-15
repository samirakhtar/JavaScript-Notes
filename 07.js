// trim()
let firstName = "     Samir      ";

console.log(firstName.length);
firstName = firstName.trim();//"Samir"//This code will trim the spaces
console.log(firstName);
console.log(firstName.length);


// toUpperCase()
console.log(firstName.toUpperCase()); //This code will make string to a upperCase Char.
// toLowerCase()
console.log(firstName.toLowerCase()); //This code will make string to a lowerCase Char.



// slice
 //start index
 //end index
 
 let newString = firstName.slice(0,3); //it will only print upto index number 2
 console.log(newString);