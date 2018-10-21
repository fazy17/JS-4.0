window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let userAge = document.getElementById('age'),
        start = document.getElementsByTagName('button')[0],
        userName = prompt('Имя', 'Name'),
        userSurname = prompt('Фамилия', 'Family');


        function User(name, surname, age) {
            this.name = userName;
            this.surname = userSurname;
            this.age = age;
            this.showUser = function User(surname, name, age) {
                alert(`Пользователь ${this.surname} ${this.name}, его возраст ${this.age}`);
            }
        }

    start.addEventListener('click', function() {
        let newUser = new User(userName.value, userSurname.value, userAge.value);

        newUser.showUser();
    });
});