document.addEventListener('DOMContentLoaded', function() {
    
    let Data = new Date(),
        Hour = Data.getHours(),
        Minutes = Data.getMinutes(),
        Seconds = Data.getSeconds(),
        Day = Data.getDate(),
        Month = Data.getMonth() + 1,
        Year = Data.getFullYear(),
        btn = document.getElementsByTagName('button')[0];

        function formatDate(date) {
            if (Day < 10) Day = '0' + Day;
        
            if (Month < 10) Month = '0' + Month;
        
            if (Year < 10) Year = '0' + Year;
        
            return Day + '.' + Month + '.' + Year;
        }

        console.log(formatDate(`${Hour}:${Minutes}:${Seconds} ${Day}.${Month}.${Year}`));

        function currentDay() {
            let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

            dayNumber = Data.getDay() - 1;

            for (let i = 0; i < days.length; i++) {
                if(i === dayNumber) {
                    console.log(`<br> ${days[i]}`);
                }
            }
        }

        currentDay();

        function differenceDate() {
            let beforeDay = document.querySelector('.before').value,
                afterDay = document.querySelector('.after').value,
                beforeDayDate = new Date(beforeDay),
                afterDayDate = new Date(afterDay),
                result = document.querySelector('.result');

                a = beforeDayDate.getTime();
                b = afterDayDate.getTime();

                resultValue = Math.abs((b - a)/86400000);

                result.value = resultValue;    
        }

        btn.addEventListener('click', function() {
            differenceDate();
        });
        
});
