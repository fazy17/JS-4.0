document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Loaded');
});
let menuBtn = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    menuBtnFive = document.createElement('li'),
    title = document.getElementById('title'),
    adversting = document.querySelector('.adv'),
    apple = prompt('Как вы относитесь к Apple?'),
    answerApple = document.getElementById('prompt');
    
    menu.insertBefore(menuBtn[2], menuBtn[1]);

    console.log(menuBtn);
    menuBtnFive.classList.add('menu-item');
    menu.appendChild(menuBtnFive);
    menuBtnFive.textContent = 'Пятый пункт';

    document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat';

    title.textContent = 'Мы продаем только подлинную технику Apple';

    adversting.style.display = 'none';

    answerApple.textContent = apple;


    


