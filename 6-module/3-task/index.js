import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.insertAdjacentHTML('afterbegin', `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
      </div>
    `);

    this.carouselInner = this.elem.querySelector('.carousel__inner');

    for (let slide of this.slides) {
      const slideInner = document.createElement('div');
      slideInner.classList.add('carousel__slide');
      slideInner.setAttribute('data-id', slide.id);

      slideInner.insertAdjacentHTML('afterbegin', `
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
      `);
      this.carouselInner.append(slideInner);
      const button = slideInner.querySelector('.carousel__button');
      button.addEventListener('click', () => {
        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: slide.id,
          bubbles: true
        }));
      });
    }

    this.right = this.elem.querySelector('.carousel__arrow_right');
    this.left = this.elem.querySelector('.carousel__arrow_left');
    this.left.style.display = 'none';
    this.slideIndex = 0;
    this.sliderTransform = 0;
    this.slides = this.elem.querySelectorAll('.carousel__slide');

    this.left.addEventListener('click', () => {
      const slide = this.slides[this.slideIndex];
      const width = slide.offsetWidth;
      this.sliderTransform = this.sliderTransform + width;
      this.carouselInner.style.transform = `translateX(${this.sliderTransform}px)`;
      this.slideIndex--;
      this.checkDisplay();
    });

    this.right.addEventListener('click', () => {
      const slide = this.slides[this.slideIndex];
      const width = slide.offsetWidth;
      this.sliderTransform = this.sliderTransform - width;
      this.carouselInner.style.transform = `translateX(${this.sliderTransform}px)`;
      this.slideIndex++;
      this.checkDisplay();
    });
  }

  checkDisplay() {
    if (this.slideIndex === 0) {
      this.left.style.display = 'none';
    } else {
      this.left.style.display = '';
    }

    if (this.slideIndex === this.slides.length - 1) {
      this.right.style.display = 'none';
    } else {
      this.right.style.display = '';
    }
  }
}
