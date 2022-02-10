document.addEventListener("DOMContentLoaded", () => {
  // Слайдер
  $('.home-slider-track').slick({
  dots: false,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1200,
  easing: 'easeOutSine',
  adaptiveHeight:true,
  variableWidth: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  touchThreshold: 15,
  waitForAnimate: false,
  centerMode: false,
  prevArrow: $('.homePrev'),
  nextArrow: $('.homeNext'),
  responsive: [{
    breakpoint: 1140,
    settings: {
    slidesToShow: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    }
  }]
  });

  $('.gallery-popup-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    easing: 'easeOutSine',
    adaptiveHeight:true,
    variableWidth: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    touchThreshold: 15,
    waitForAnimate: false,
    centerMode: false,
    prevArrow: $('.prevGallery'),
    nextArrow: $('.nextGallery'),
    responsive: [{
      breakpoint: 1140,
      settings: {
      slidesToShow: 1,
      arrows: false,
      centerMode: false,
      centerPadding: '0',
      }
    }]
    });
})