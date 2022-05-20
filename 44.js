// call invoke run all are sam
function singhHappyBirthday(){
    console.log("Happy birthday to you......");
}
singhHappyBirthday();

function sumThreeNumber(number1,number2,number3){
    return number1 + number2 + number3;
}
const returnValue = sumThreeNumber(2,3,5);
    console.log(returnValue);

    // Question1
// isEven
// input : 1 number
// output :true,false

function isEven(number){
    return number % 2 === 0;
    
}
console.log(isEven(23));//false
    //Question2   
//function
// input:string
// output:firstCharacter

function firstCharacter(anyString){
    return anyString[0];
}
console.log(firstCharacter("samir"))//s

// Question3
// function
// input : array, target (number)
// output: index of target if target present in array

function findTarget(array, target){
    for(let i = 0; i<array.length;i++){
        if (array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray =[1,3,2,8,90]
const ans = findTarget(myArray, 1);
console.log(ans);//0
