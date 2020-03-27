/* eslint-disable no-unused-vars */
const findObjPropsHasOwn = obj => {
  let array = [];  
    for(let key in obj){
if(obj.hasOwnProperty([key])){
    array.push(key)
  }
 } return array.join(", ")
}

const findObjKeys = obj => {
 let array = Object.keys(obj);
 return array.join(", ")
}