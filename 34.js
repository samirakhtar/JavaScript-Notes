// for in loop in array
const fruits  =["apple","mango","grapes","fruits"]
const fruits2 =[];
for(let index in fruits){
   fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits);//(4) ['apple', 'mango', 'grapes', 'fruits']
console.log(fruits2);//(4) ['APPLE', 'MANGO', 'GRAPES', 'FRUITS']

