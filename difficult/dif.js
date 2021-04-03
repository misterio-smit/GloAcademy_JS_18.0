"use strict";

let num = 266219;
let str = String(num); 

let sum = 1;

  for (let digit of str) {
      sum = sum * Number(digit);
  } 
  let pow = sum ** 3;
  let str2 = pow.toString;

  
  console.log(sum);
  console.log(str2.slice(3));

  
