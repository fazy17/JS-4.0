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

    // плавная прокрутка

    let link = document.getElementsByTagName('li');

        function animate(draw, duration) {
            let start = performance.now(); 
            requestAnimationFrame(function animate(time) {

                let timePassed = time - start;

                if (timePassed >= duration) {
                    timePassed = duration;
                }
                draw(timePassed);

                if (timePassed < duration) {
                    requestAnimationFrame(animate);
                }
            });
        }

        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener('click', function(event) {
                event.preventDefault();

                animate(function () {

                    let target = event.target;
                    let section = document.getElementById(target.getAttribute('href').slice(1));
        
                    window.scrollBy(0, section.getBoundingClientRect().top / 11);
                }, 1000); 
            }) 
        }
        
        // Модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        popup = document.querySelector('.popup'),
        descriptionBtn = document.querySelectorAll('.description-btn');

    // other

    console.log(navigator.userAgent);
        
    let user = navigator.userAgent;
        

    for (let i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', function() {
            if (user.search(/Edge/) > 0 || user.search(/Internet Explorer/) > 0) {
                overlay.classList.add('fade')
            } else if (user.search(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/) > 0) {
                overlay.classList.remove('fade');
            } else {
                overlay.classList.remove('fade');
                animation();
            }
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

    function animation() {
        
        let start = Date.now();

        let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 1000) {
            clearInterval(timer);
            return;
        }
        draw(timePassed);

        }, 20);

        function draw(timePassed) {
            popup.style.top = timePassed / 5 + 'px';
        }
    }
    
});