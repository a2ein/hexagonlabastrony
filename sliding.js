// scripts.js
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Initialize the first slide
showSlide(currentSlide);

// Auto-slide functionality
function autoSlide() {
    showSlide(currentSlide + 1);
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds
