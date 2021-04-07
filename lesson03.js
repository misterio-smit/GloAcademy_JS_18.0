"use strict";

let money = prompt('Ваш месячный доход?', 55000);
let income = 'калым на работе'; 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 250000; 
let period = 6;



  
let split = addExpenses.toLowerCase().split(', ');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?', 1700);
let expenses2 = prompt ('Введите обязательную статью расходов?');
let amount2 = +prompt ('Во сколько это обойдется?', 2230);

let amount = amount1 + amount2;
let budgetMonth = money - amount;
let target = Math.ceil(mission / budgetMonth);

let budgetDay = budgetMonth / 30;
let periodMission = Math.ceil(mission / budgetMonth);




console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length); 
console.log('Период равен ' + period +' месяцев');
console.log(`Цель заработать ${mission} рублей.`);
console.log(addExpenses);
console.log(split);
console.log('Бюджет на месяц: ' + money);
console.log('Бюджет на день: ' + Math.floor(budgetDay));
console.log('Цель будет достигнута  за  ' + periodMission + ' месяцев(-а)');



if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} 
else if(budgetDay >= 600 && budgetDay < 1200){
  console.log('У вас средний уровень дохода');
}
else if  (budgetDay < 600 && budgetDay > 0){
  console.log('К сожалению у вас уровень дохода ниже среднего');
}
else if (budgetDay <= 0){
  console.log('Что то пошло не так');
}
