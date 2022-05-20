// object destructing
const band = {
    bandName: "led zeppelin",
    famousSong:"stairway to heaven",
    year:1969,
    anotherFamousSong: "khwahish",
};

    let {bandName, famousSong, ...restProps} =band;//  key will be the variable byDefult//...will give rest elements of objects
console.log(bandName);//led zeppelin
console.log(restProps);//1969 khwahish