window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Таймер

    let deadline = '2018-10-18';
    
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }; 
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            
            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            }

            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }

            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }

            if (t.total <= 0) {
                hours.textContent = 0;
                minutes.textContent = 0;
                seconds.textContent = 0;

                clearInterval(timeInterval);
            }
        }    
    }

    setClock('timer', deadline);

    // Модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.description-btn');

    for (let i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', function() {
            this.classList.add('more-splash');
            openModal();
        });
    }

    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        openModal();
    });
    
    close.addEventListener('click', function() {
        more.classList.remove('more-splash');
        closeModal();
    });

    function openModal() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    // form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failed: 'Что-то пошло не так...'
    };

    let form = document.getElementsByClassName('main-form')[0],
        formBottom = document.getElementById('form'),
        input = form.getElementsByTagName('input'),
        inputBottom = formBottom.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
        event.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);

        function postData(data) {

            return new Promise(function(resolve,reject) {
                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');
                
                request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
                
                let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

                request.send(json);

                request.onreadystatechange = function() {
                    if (request.readyState < 4) {
                        resolve()
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                           resolve() 
                        }
                        else {
                            reject()
                        }
                    }
                }

                request.send(data);
            });
 
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }

            for (let i = 0; i < inputBottom.length; i++) {
                inputBottom[i].value = '';
            }
        }

        postData(formData)
            .then(()=> statusMessage.textContent = message.loading)
            .then(()=> statusMessage.textContent = message.success)
            .catch(()=> statusMessage.textContent = message.failed)
            .then(clearInput)
    });

}       
sendForm(form);
sendForm(formBottom);


    // Модальное окно
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('input', function(){
            input[i].value = input[i].value.replace(/[^0-9+]/g, '');
        });
    }


    // Контакты
    for (let i = 0; i < inputBottom.length; i++) {
        inputBottom[1].addEventListener('input', function(){
            inputBottom[1].value = inputBottom[1].value.replace(/[^0-9+]/g, '');
        });
    }

    // Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlides(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', ()=> {
        plusSlides(-1);
    });
    
    next.addEventListener('click', ()=> {
        plusSlides(1);
        animate(function(timePassed) {
            slides.style.left = timePassed / 1 + 'px';
            slides.style.top = timePassed / 2 + 'px';
        }, 2000);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlides(i);
            }
        }
    });

    function animate(draw, duration) {
        let start = performance.now();
    
        requestAnimationFrame(function animate(time) {
            let timePassed = time - start; 
            
            if (timePassed > duration) timePassed = duration;
    
            draw(timePassed);
    
            if (timePassed < duration) {
                requestAnimationFrame(animate);
            }
        });
    }

    // Калькулятор

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.textContent = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if (restDays.value == '' || persons.value == '') {
                totalValue.textContent = 0;
            } else {
                totalValue.textContent = total * place.options[place.selectedIndex].value;
            }   
        });

        restDays.addEventListener('change', function() {
                daysSum = +this.value;
                total = (daysSum + personsSum)*4000;

                if (persons.value == '' || restDays.value == '') {
                    totalValue.textContent = 0;
                } else {
                    totalValue.textContent = total * place.options[place.selectedIndex].value;
                }
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.textContent = 0;
            } else {
                let a = total;
                totalValue.textContent = a * this.options[this.selectedIndex].value;
            }
        });

        persons.addEventListener('input', function() {
            this.value = this.value.replace(/[^\d]/g, '');;
        })
            
        restDays.addEventListener('input', function() {
            this.value = this.value.replace(/[^\d]/g, '');;
        });
});