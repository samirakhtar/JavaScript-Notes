// break keywork
for(let i=1; i<=10;i++){
    if(i===4){
        break;//after using break it will terminate the execution 
    }
    console.log(i);
}

for(let i=1; i<=10; i++){
    if(i===4){
        continue;//it will skip the 4 and print the rest 
    }
    console.log(i);
}