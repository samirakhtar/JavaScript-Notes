 let array1 = ["item1","item2"];
 let array2 = array1.slice().concat(["item3","item4"]); //this will take all the element from array1 and create a seperate memory space in heap and changes in array1 will not effect array2
     array2 = [].concat(array1,["item3","item4"]);//this will take all the element from array1 and create a seperate memory space in heap and changes in array1 will not effect array2

    //  New_way
    // Spread operator
    let oneMoreArray = ["item3","item4"]
        array2 =[...array1,...oneMoreArray];//this will take all the element from array1 and create a seperate memory space in heap and changes in array1 will not effect array2

        array1.push("item3");

      console.log(array1===array2);//false
      console.log(array1);//(3) ['item1', 'item2', 'item3']
      console.log(array2);//(4)['item1', 'item2', 'item3', 'item4']