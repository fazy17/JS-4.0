'use_strict'; 

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '30000');
    time = prompt('Введите дату в формате YYYY-MM-DD', '05.10.2018');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '30000');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', 'Бензин'),
            b = +prompt('Во сколько обойдется?', '300');
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done!');
                appData.expenses[a] = b;
            }
            else {
                i--;
            }
        }  
    },
    detectDayBudget: function() {
        appData.moneyPerDay = Math.floor(appData.budget / 30);

        alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if(appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            a = prompt('Статья необязательных расходов?', '');
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                console.log('done!');
                appData.optionalExpenses[i] = a;
            }
            else {
                i--;
            }
        }
    },
    checkSavings: function() {
            if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', '');
                percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save/100/12*percent;
            alert(`Доход в месяц с вашего депозита ${appData.monthIncome}`)
        } 
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)', '');
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();

            if ((typeof(items))=== 'string' && (typeof(items)) != null && items != '') {
                console.log('Good!');
            }
            else {
                i--;
            }

            appData.income.forEach(function(item, i) {
                console.log(`Способы доп. заработка: ${i + 1} ${item}`);
            });
        }
    }
};

for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key}`);
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