let box = document.querySelector('.box');

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

box.addEventListener('click', function() {
    animate(function(timePassed) {
        box.style.left = timePassed / 1 + 'px';
        box.style.top = timePassed / 2 + 'px';
    }, 2000);
});
