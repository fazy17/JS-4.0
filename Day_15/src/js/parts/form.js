function form() {
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

                    let obj = {};
                    formData.forEach(function(value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);

                    request.send(json);
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
}

module.exports = form;