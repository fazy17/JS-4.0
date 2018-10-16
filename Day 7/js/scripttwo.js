

    
let update = setTimeout(function updateTime() {
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        timer = document.querySelector('.timer');

        function formatDate(date) {
            if (hours < 10) hours = '0' + hours;
        
            if (minutes < 10) minutes = '0' + minutes;
        
            if (seconds < 10) seconds = '0' + seconds;
        
            return hours + ':' + minutes + ':' + seconds;
        }
    
    timer.innerHTML = formatDate();
    setTimeout(updateTime, 1000);
});
