// nested destructuring
const users =[
    {userId:1,firstName:"Samir",gender:"male"},
    {userId:2,firstName:"Ashish",gender:"male"},
    {userId:3,firstName:"Mohit",gender:"male"}
]

const [{firstName: user1FirstName,userId},,{gender:user3Gender}]=users;
console.log(user1FirstName);//Samir
console.log(userId);       //1
console.log(user3Gender); //male