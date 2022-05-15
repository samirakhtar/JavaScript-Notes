//  and(&&)  operator
// && In and operator both the condition should be true then only it will work if not && will give fasle output
let firstName ="Samir";
let age=22;

if (firstName[0]==="S" && age >=22){
    console.log("your name star with S and age is above 18  ");//your name star with S and age is above 18
}else{
    console.log("inside else")
}

// or(||) operator
// if only one condition is true and one is false then also it will give you true value , if both the value is false then it will give you fasle value
if (firstName[0]==="S" || age >=22){
    console.log("your name star with S and age is above 18  ");//your name star with S and age is above 18
}else{
    console.log("inside else");
}
