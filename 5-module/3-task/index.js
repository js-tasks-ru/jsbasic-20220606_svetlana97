function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = document.querySelector('.carousel__inner'); 
  const slides = document.querySelectorAll('.carousel__slide');
  const slideWidth = carouselInner.offsetWidth; 

  const carouselArrowRight = document.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  carouselArrowLeft.style.display = 'none';

  let currentSlideCount = 1;
  let position = 0; 

  carousel.addEventListener('click', (e) => {
    if (e.target.closest('.carousel__arrow_right')) {
      currentSlideCount += 1;
      position += slideWidth;
      carouselInner.style.transform = `translateX(-${position}px)`;
    } else if (e.target.closest('.carousel__arrow_left')) {
      position = position - slideWidth;
      carouselInner.style.transform = `translateX(-${position}px)`;
      currentSlideCount -= 1;
    }
    if (currentSlideCount > 1) {
      carouselArrowLeft.style.display = 'flex';
    } else {
      carouselArrowLeft.style.display = 'none';
    } if (currentSlideCount === slides.length) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = 'flex';
    }
  });
  
}