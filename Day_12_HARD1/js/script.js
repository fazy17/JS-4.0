window.addEventListener('DOMContentLoaded', function() {
    let inputUsd = document.getElementById('usd'),
        inputRub = document.getElementById('rub');

    inputRub.addEventListener('input', function() {
        function catchData() {

            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('GET', 'js/current.json');
                requset.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                request.send();

                request.addEventListener('readystatechange', function() {
                    if (request.readyState < 4) {
                        
                    } else if (request.readyState === 4 && request.status == 200) {
                            resolve(this.response);
                        } else {
                            reject();
                        }
                });
            });
        }
        
        catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => inputUsd.value = 'Что-то пошло не так');
    });
    
});