'use_strict';

let week = ['Понедельник <br>', 'Вторник <br>', 'Среда <br>', 'Четверг <br>', '<i>Пятница</i><br>', '<b>Суббота</b> <br>', '<b>Воскресенье</b><br>'];

document.write(week);

let arr = ['38423232', '74223232', '82232342', '314222323', '24322323', '72323422', '83932322'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7) {
        console.log(arr[i]);
    }
}
