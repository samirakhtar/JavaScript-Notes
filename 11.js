// undefined

let firstName;
console.log(typeof firstName);//undefined
firstName="Samir";
console.log(typeof firstName, firstName)//string Samir

// null

let myVariable = null;
console.log(myVariable);//null
myVariable ="Samir";
console.log(myVariable, typeof myVariable);//Samir string
console.log(typeof null);//object---> this is bug , error in JS


//BigInt 
let myNumber = BigInt(12);
let sameMyNumber = 123n;//we can also use n-->for BigInt
 console.log(myNumber);
//  console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+sameMyNumber);