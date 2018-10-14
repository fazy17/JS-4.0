'use_strict';
let str = 'урок-3-был слишком легким';

    function firstSymbolToUpperCase() {
        if (str.charAt(0) === str.toUpperCase()) {
            console.log('Буква в верхнем регистре');
        } else {
            str = str[0].toUpperCase() + str.substring(1);
            console.log('Буква была нижнем регистре, и я перевел ее в верхний <3!');
        }

    }

    firstSymbolToUpperCase();

    function reset() {
        for (let i = 0; i < str.length; i++) {
            str = str.replace('-', ' ');
        }
    }

    reset();

    function getSqrt() {
        let arr = [20, 33, 1, 'Человек', 2, 3];

        arr = Math.sqrt(Math.pow(arr[0], 3) + Math.pow(arr[1], 3) + Math.pow(arr[2], 3) + Math.pow(arr[4], 3) + Math.pow(arr[5], 3)).toFixed();

        console.log(arr);
    }

    getSqrt();

    function replaceEasy() {
        str = str.replace('легким', '');

        let easy = 'урок-3-был слишком легким';

        easy = easy.substr(19);

        easy = `${easy[0]}${easy[1]}${easy[2]}${easy[3]}оo`;

        console.log(easy);
    }

    replaceEasy();

    function getCountry() {
        a = prompt('Укажите страну проживания');

        if(typeof(a) === 'string') {
            alert('Верно, это строка!');
        } else {
            alert('К сожалению это не строка((');
        }

        for (let i = 0; i <= a.length; i++) {
            a = a.replace(' ', '');
        }

        if (a.length >= 50) {
            a = a.substr(0, 50) + '...';
        }
        
        console.log(a);
    }

    getCountry();

    document.write(str);
