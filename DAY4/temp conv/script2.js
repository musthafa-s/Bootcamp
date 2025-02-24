
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    // Auto slide every 3 seconds
    setInterval(function() {
        showSlide(currentIndex + 1);
    }, 3000);
});