let box = document.querySelector('.box');


box.addEventListener('click', function() {
    let start = Date.now();
    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      box.style.left = timePassed / 10 + 'px';
      if (timePassed > 2000) clearInterval(timer);

    }, 20);
});