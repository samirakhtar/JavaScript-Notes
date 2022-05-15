// nested if else
// winning number is 22
// 22 your guess is right
// 18 too low
// 25 too high

let winningNumber=22;
let userGuess= + prompt("Guess your number");//prompt is use to take user input but it take only string so we use + before promot so it can change it into number
if (userGuess === winningNumber){
    console.log("Your guess is right !!");
}else{
    if(userGuess<winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!! ");
    }
}