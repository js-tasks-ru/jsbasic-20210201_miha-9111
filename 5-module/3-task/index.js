function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const right = document.querySelector('.carousel__arrow_right');
  const left = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');

  let slideIndex = 0;
  left.style.display = 'none';
  let sliderTransform = 0;

  function checkDisplay() {
    if (slideIndex === 0) {
      left.style.display = 'none';
    } else {
      left.style.display = '';
    }

    if (slideIndex === 3) {
      right.style.display = 'none';
    } else {
      right.style.display = '';
    }
  }

  left.addEventListener('click', function() {
    const slide = slides[slideIndex];
    const width = slide.offsetWidth;
    sliderTransform = sliderTransform + width;
    carouselInner.style.transform = `translateX(${sliderTransform}px)`;
    slideIndex--;
    checkDisplay();
  });

  right.addEventListener('click', function() {
    const slide = slides[slideIndex];
    const width = slide.offsetWidth;
    sliderTransform = sliderTransform - width;
    carouselInner.style.transform = `translateX(${sliderTransform}px)`;
    slideIndex++;
    checkDisplay();
  });
}
