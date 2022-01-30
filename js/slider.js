$(document).ready(function(){
  // Слайдер
  $('.index-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    easing: 'easeOutSine',
    adaptiveHeight:true,
    autoplay: true,
    // autoplaySpeed: 2500,
    centerMode: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    touchThreshold: 15,
    variableWidth: true,
    prevArrow: $('.index-prev'),
    nextArrow: $('.index-nex'),
    // waitForAnimate: false, // Быстрый переход(откл анимации)
    // centerMode: true,
    // centerPadding: '60px',
    responsive: [{
      breakpoint: 1180,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },{
      breakpoint: 760,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },{
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }]
  });
});
