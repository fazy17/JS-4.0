'use_strict'; 

let money = +prompt('Ваш бюджет на месяц?', '30000'),
    time = prompt('Введите дату в формате YYYY-MM-DD', '04.10.2018'),
    expensesItem1 = prompt('Введите обязательную статью расходов в этом месяце', 'Бензин'),
    expensesCost1 = +prompt('Во сколько обойдется?', '300'),
    expensesItem2 = prompt('Введите обязательную статью расходов в этом месяце', 'Газ'),
    expensesCost2 = +prompt('Во сколько обойдется?', '300');

let expenses = {
        [expensesItem1]: expensesCost1,
        [expensesItem2]: expensesCost2
      }
let appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: {},
    income: [],
    savings: false

};


console.log(appData);

alert('Бюджет на 1 день ' + appData.budget / 30);