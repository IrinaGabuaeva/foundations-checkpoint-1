/* eslint-disable no-unused-vars */
const multiplicationTable = (rows,columns) => {
   let array = [];
    
    for (let i = 1; i <= rows; i++){
       let currentArr = []; 
         for(let j = 1; j <= columns; j++){
         currentArr.push(i*j);
         } 
         array.push(currentArr);
    } 
    console.log(array)
    return array;
}