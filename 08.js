// typeof operator

let age = 22;
let firstName ="Samir";

console.log(typeof age);//number
console.log(typeof firstName);//string

//convert number to string
age = age + ""; //these double quotesion will change number into string
console.log(typeof age); 

// 2nd method
age =18;
age =String(age);
console.log(typeof age);

// convert string to number
let myStr = +"21"; //+ will change number to string
console.log(typeof myStr);

// 2nd method
age ="18";
age =Number(age);
console.log(typeof age);