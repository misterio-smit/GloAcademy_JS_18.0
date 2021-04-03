"use strict";

let num = 266219;
let str = String(num); 

let sum = 1;

  for (let digit of str) 
      sum = sum * Number(digit);
   
  let pow = (sum ** 3);
  

  console.log(pow);
  console.log(pow.toString().substring(0 , 2));
  

  
