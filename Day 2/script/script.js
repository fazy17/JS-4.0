'use_strict'; 

let money = +prompt('Ваш бюджет на месяц?', '30000'),
    time = prompt('Введите дату в формате YYYY-MM-DD', '05.10.2018');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', 'Бензин'),
    b = +prompt('Во сколько обойдется?', '300');
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done!');
        appData.expenses[a] = b;
    }
    else {
        i = i - 1;
    }
};

appData.moneyPerDay = Math.floor(appData.budget / 30);

console.log(appData);

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if(appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка!');
}

/* Это второй вид цикла

i = 0;

do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', 'Бензин'),
    b = +prompt('Во сколько обойдется?', '300');
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done!');
        appData.expenses[a] = b;
        i++;
        console.log('Это второй вид цикла');
    }
    else {

    }
} 
while ( i < 2); */

/* Это третий вид цикла

while (i < 2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', 'Бензин'),
    b = +prompt('Во сколько обойдется?', '300');
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done!');
        appData.expenses[a] = b;
        i++;
        console.log('Это третий вид цикла');
    }
    else {

    }
}; */