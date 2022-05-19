// spread operator in array //this join the elements of more than 1 array
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray =[...array1,...array2,89,69];
console.log(newArray);//(8) [1, 2, 3, 5, 6, 7, 89, 69]


//Spread operator in objects

const obj1 ={
    key1:"value1",
    key2:"value2"
};
const obje2 ={
    key1:"valueUnique",
    key3:"value3",
    key4:"value4"
};
const newObject ={...obj1,...obje2,key69:"value69"}//{key1: 'valueUnique', key2: 'value2', key3: 'value3', key4: 'value4', key69: 'value69'}
// const newObject ={...["item1","item2"]}; //{0: 'item1', 1: 'item2'}
// const newObject ={..."abcdefghighijklmnopqrstuvwxyz"}//{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'g', 10: 'h', 11: 'i', 12: 'j', 13: 'k', 14: 'l', 15: 'm', 16: 'n', 17: 'o', 18: 'p', 19: 'q', 20: 'r', 21: 's', 22: 't', 23: 'u', 24: 'v', 25: 'w', 26: 'x', 27: 'y', 28: 'z'}
console.log(newObject);