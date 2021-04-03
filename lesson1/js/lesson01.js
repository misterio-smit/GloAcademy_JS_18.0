"use strict";
let money = 47550;
let income = 'калым на работе'; 
let addExpenses = 'Бензин, Продукты, Коммуналка, Сотовый, Интернет'; 
let deposit = true;
let mission = 250000; 
let period = 6;

let lowercase = (addExpenses.toLocaleLowerCase());
let splitString = (lowercase.split(', '));
 
  




console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length); 
console.log('Период равен ' + period +' месяцев');
console.log(splitString);


