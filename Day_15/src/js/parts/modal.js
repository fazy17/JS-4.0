function modal() {
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
}

module.exports = modal;