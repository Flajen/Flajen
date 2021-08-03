$(document).ready(function(){
  var scrollPrev = 0,
      sizeWindow = $(window).width();
  $("body").on('click', '[href*="#"]', function(e){
    if (sizeWindow >= parseInt('1600px')) {
      var fixed_offset = 100;
    } else {
      var fixed_offset = 30;
    }
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
  $('input[type="tel"]').mask("+7(999) 999-99-99",{autoclear: false});
  if (sizeWindow >= parseInt('1600px')) {
    $(window).scroll(function() {
      var scrolled = $(window).scrollTop();
      if (scrolled > 10) {
        $('.nav-fly').css({
          'padding':'10px 0 10px 0',
          'background':'#FFF',
        });
      } else {
        $('.nav-fly').css({
          'padding':'35px 0 10px 0',
          'background':'transparent',
        });
      }
      scrollPrev = scrolled;
    });
  };
  $('.connection-input').click(function(){
    if ($(this).is(':checked')){
  		$('.connection-btn').removeAttr('disabled').prop({type:"submit"});
  	} else {
  		$('.connection-btn').attr('disabled', 'disabled').prop({type:"button"});
  	}
  })
  var galleryPrev = $('.galleryPrev'),
      galleryNext = $('.galleryNext'),
      partnersPrev = $('.partnersPrev'),
      partnersNext = $('.partnersNext');
  partnersNext.click(function(){
    var partnersItemPrev = $('.Pprev'),
        partnersItemPrevPrev = $('.Pprevprev'),
        partnersItemCenterOne = $('.centerOne'),
        partnersItemCenterTwo = $('.centerTwo'),
        partnersItemCenterThree = $('.centerThree'),
        partnersItemCenterFour = $('.centerFour'),
        partnersItemNext = $('.Pnext'),
        partnersItemNextNext = $('.Pnextnext');
    partnersItemPrevPrev.removeClass('Pprevprev').next().addClass('Pprevprev');
    partnersItemPrev.removeClass('Pprev').next().addClass('Pprev');
    partnersItemCenterOne.removeClass('centerOne').next().addClass('centerOne');
    partnersItemCenterTwo.removeClass('centerTwo').next().addClass('centerTwo');
    partnersItemCenterThree.removeClass('centerThree').next().addClass('centerThree');
    partnersItemCenterFour.removeClass('centerFour').next().addClass('centerFour');
    partnersItemNext.removeClass('Pnext').next().addClass('Pnext');
    partnersItemNextNext.removeClass('Pnextnext').next().addClass('Pnextnext');
    $('.partners_slider-item:nth-child(1)').appendTo('.partners_slider-window');
  });
  partnersPrev.click(function(){
    var partnersItemPrev = $('.Pprev'),
        partnersItemPrevPrev = $('.Pprevprev'),
        partnersItemCenterOne = $('.centerOne'),
        partnersItemCenterTwo = $('.centerTwo'),
        partnersItemCenterThree = $('.centerThree'),
        partnersItemCenterFour = $('.centerFour'),
        partnersItemNext = $('.Pnext'),
        partnersItemNextNext = $('.Pnextnext');
    $(".partners_slider-item:nth-child(1)").before($('.partners_slider-item:last-child'));
    $(".partners_slider-item:last-child").appendTo(".partners_slider-window");
    partnersItemPrevPrev.removeClass('Pprevprev').prev().addClass('Pprevprev');
    partnersItemPrev.removeClass('Pprev').prev().addClass('Pprev');
    partnersItemCenterOne.removeClass('centerOne').prev().addClass('centerOne');
    partnersItemCenterTwo.removeClass('centerTwo').prev().addClass('centerTwo');
    partnersItemCenterThree.removeClass('centerThree').prev().addClass('centerThree');
    partnersItemCenterFour.removeClass('centerFour').prev().addClass('centerFour');
    partnersItemNext.removeClass('Pnext').prev().addClass('Pnext');
    partnersItemNextNext.removeClass('Pnextnext').prev().addClass('Pnextnext');
  });
  galleryNext.click(function(){
    var galleryItemPrev = $('.prev'),
        galleryItemCenterL = $('.centerL'),
        galleryItemCenterR = $('.centerR'),
        galleryItemNext = $('.next'),
        galleryItem = $('.gallery-slider-item');
    galleryItemCenterL.removeClass('centerL next prev').addClass('prev').next().addClass('centerR');
    galleryItemCenterR.removeClass('centerR next prev').addClass('centerL').next().removeClass('next prev').addClass('centerR');
    galleryItemNext.next().removeClass('prev next').addClass('next');
    if (galleryItemCenterR.hasClass('four')) {
      $(".gallery-slider-item.first").removeClass('prev next').addClass('next');
    }
    if (galleryItemCenterR.hasClass('last')) {
      $(".gallery-slider-item.first").removeClass('prev next').addClass('centerR');
    }
  });
  galleryPrev.click(function(){
    var galleryItemPrev = $('.prev'),
        galleryItemCenterL = $('.centerL'),
        galleryItemCenterR = $('.centerR'),
        galleryItemNext = $('.next'),
        galleryItem = $('.gallery-slider-item');
    galleryItemCenterL.removeClass('centerL next prev').addClass('centerR').prev().removeClass('next prev').addClass('centerL')
    galleryItemCenterR.removeClass('centerR next prev').addClass('next');
    galleryItemPrev.prev().removeClass('prev next').addClass('prev');
    if (galleryItemCenterL.hasClass('two')) {
      $(".gallery-slider-item.last").removeClass('prev next').addClass('prev');
    }
    if (galleryItemCenterL.hasClass('first')) {
      $(".gallery-slider-item.last").removeClass('prev next').addClass('centerL');
    }
  });
});
