//objects inside array
// very useful in real world applications

const users =[
    {userId:1,firstName:"Samir",gender:"male"},
    {userId:2,firstName:"Ashish",gender:"male"},
    {userId:3,firstName:"Mohit",gender:"male"}
];
for(let user of users){
  
    console.log(user.userId); //1 2 3
    console.log(user.firstName);//Samir Ashish Mohit
    console.log(user.gender);//male male male
};