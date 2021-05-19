if ($('.burger-btn')) {
  $('.burger-btn').click(function(){
    if ($('.nav').hasClass('nav-help')) {
      $('body').css('overflow', 'scroll');
      $('.nav').removeClass('nav-help');
    } else {
      $('body').css('overflow', 'hidden');
      $('.nav').addClass('nav-help');
    }
    $('.nav').click(function(){
      $('body').css('overflow', 'scroll');
      $(this).removeClass('nav-help');
    });
  });
}

var pause = 150;
function basicServices() {
  $('#basic-services').addClass('price-btn-active');
  $('#complexes').removeClass('price-btn-active');
  $('#additionally').removeClass('price-btn-active');
  $('.basic-services').css('display', 'flex');
  $('.complexes').css({
    'opacity': '0',
    'display': 'none',
  })
  $('.additionally').css({
    'opacity': '0',
    'display': 'none',
  });
  setTimeout(function () {
    $('.basic-services').css('opacity', '1');
  }, pause);
}
function complexes() {
  $('#basic-services').removeClass('price-btn-active');
  $('#complexes').addClass('price-btn-active');
  $('#additionally').removeClass('price-btn-active');
  $('.basic-services').css({
    'opacity': '0',
    'display': 'none',
  });
  $('.complexes').css('display', 'flex');
  $('.additionally').css({
    'opacity': '0',
    'display': 'none',
  });
  setTimeout(function () {
    $('.complexes').css('opacity', '1');
  }, pause);
}
function additionally() {
  $('#basic-services').removeClass('price-btn-active');
  $('#complexes').removeClass('price-btn-active');
  $('#additionally').addClass('price-btn-active');
  $('.basic-services').css({
    'opacity': '0',
    'display': 'none',
  });
  $('.complexes').css({
    'opacity': '0',
    'display': 'none',
  });
  $('.additionally').css('display', 'flex');
  setTimeout(function () {
    $('.additionally').css('opacity', '1');
  }, pause);
}
if(window.location.hash == '#complexes'){
  complexes();
} else if(window.location.hash == '#additionally'){
  additionally();
} else{
  basicServices();
}
$('#basic-services').click(function(){
  basicServices();
});
$('#complexes').click(function(){
  complexes();
});
$('#additionally').click(function(){
  additionally();
});

var nextBtn = $('button[name="nextBtn"]'),
    prevBtn = $('button[name="prevBtn"]'),
    item = $('.gallery_slider-item'),
    textLeft = $('item-left'),
    textCenter = $('item-center'),
    textRight = $('item-right'),
    count = true;
function checkCount() {
  setTimeout(function () {
    count = true;
  }, 1200);
};
prevBtn.click(function(){
  if (count == true) {
    count = false;
    var itemLeft = $('.gallery_slider-item-left'),
        itemCenter = $('.gallery_slider-item-center'),
        itemRight = $('.gallery_slider-item-right');
    if (item.hasClass("gallery_slider-item-left")) {
      itemLeft.removeClass('gallery_slider-item-left').addClass('gallery_slider-item-center').find('.gallery_slider-blackout').css('background-color', 'rgba(35, 30, 27, 0)');
      itemCenter.removeClass('gallery_slider-item-center').addClass('gallery_slider-item-right').find('.gallery_slider-blackout').css('background-color', 'rgba(35, 30, 27, 0.85)');
      itemRight.removeClass('gallery_slider-item-right').addClass('gallery_slider-item-left').find('.gallery_slider-blackout').css('background-color', 'rgba(35, 30, 27, 0.85)');
    };
    checkCount();
  };
});
nextBtn.click(function(){
  if (count == true) {
    count = false;
    var itemLeft = $('.gallery_slider-item-left'),
        itemCenter = $('.gallery_slider-item-center'),
        itemRight = $('.gallery_slider-item-right');
    if (item.hasClass("gallery_slider-item-left")) {
      itemLeft.removeClass('gallery_slider-item-left').addClass('gallery_slider-item-right').find('.gallery_slider-blackout').css('background-color', 'rgba(35, 30, 27, 0.85)');
      itemCenter.removeClass('gallery_slider-item-center').addClass('gallery_slider-item-left').find('.gallery_slider-blackout').css('background-color', 'rgba(35, 30, 27, 0.85)');
      itemRight.removeClass('gallery_slider-item-right').addClass('gallery_slider-item-center').find('.gallery_slider-blackout').css('background-color', 'rgba(35, 30, 27, 0)');;
    };
    checkCount();
  };
});
