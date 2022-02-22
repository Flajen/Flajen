$(document).ready(function(){
  var disableScroll = false,
      scrollPos = 0;
  function disabledScroll() {
    $('body').addClass('no-scroll');
    // disableScroll = true;
    // scrollPos = $(window).scrollTop();
  }
  function enableScroll() {
    $('body').removeClass('no-scroll');
    // disableScroll = false;
  };
  $(function(){
    $(window).bind('scroll', function(){if(disableScroll) $(window).scrollTop(scrollPos);});
    $(window).bind('touchmove', function(){$(window).trigger('scroll');});
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 35){$('.header-body').addClass('fly')}
    else{$('.header-body').removeClass("fly");}
  });
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  // Мобилка
  $('.header_mobile-btn').click(function(){
    var mobileBtn = $(this);
    if ($('header').hasClass('open')) {
      mobileBtn.removeClass('open');
      $('header').animate({height: 0}, 500).animate({opacity: 0,maxHeight: 0},0);
      $('header').removeClass('open');
      enableScroll()
    } else{
      mobileBtn.addClass('open');
      $('header').animate({opacity: 1, height: '100%',maxHeight: '100%'}, 500);
      $('header').addClass('open');
      disabledScroll()
    }
  })

  var blockOptionBtn = $('.home_block-option-btn'),
      blockOption = $('.home_block-option');
  blockOptionBtn.click(function(){
    var thParent = $(this).parent();
    thParent.toggleClass('open');
    thParent.find('.home_block-select-lists').addClass('open');
    blockOption.click(function(){
      var th = $(this);
      th.parent().parent().find(blockOptionBtn).html(th.html())
      thParent.removeClass('open');
    })
    $('body').mouseup(function (e){
      var div = $('.home_block-select-lists');
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        thParent.removeClass('open');}});
  })
  $('.phone').inputmask({"mask": "+ 7 (999) 999-99-99"});
  var form = $('form');
  form.submit(function(e){
    e.preventDefault();
    if ($('.phone').val().length == 19) {
      alert('Отправить')
    }
  });
  $('.price_table-btn').click(function(){
    $(`.${$(this).attr('name')}`).addClass('open');
    disabledScroll();
  });
  const jobsSwiper = new Swiper('.jobs_swiper', {
    slidesPerView: 3,
    centeredSlides: false,
    navigation: {
      nextEl: '.jobs_swiper-next',
      prevEl: '.jobs_swiper-prev',
    },
    breakpoints: {
      320:{
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 400,
      },
      576:{
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 500,
      },
      768:{
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 700,
      },
    }
  });
  const jobsPopupSwiper = new Swiper('.jobs_popup_swiper', {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 20,
    speed: 700,
    // pagination: {
    //   el: '.jobs_swiper-pagination',
    //   type: 'fraction',
    // },
    // navigation: {
    //   nextEl: '.jobs_popup_swiper-next',
    //   prevEl: '.jobs_popup_swiper-prev',
    // },
    breakpoints: {
      320:{
        spaceBetween: 10,
        speed: 400,
        pagination: false,
        navigation: false,
      },
      576:{
        spaceBetween: 20,
        speed: 500,
      },
      768:{
        spaceBetween: 30,
        speed: 700,
        pagination: {
          el: '.jobs_swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.jobs_popup_swiper-next',
          prevEl: '.jobs_popup_swiper-prev',
        },
      },
    }
  });
  var ind = 0;
  $('button[name="slide"]').each(function(){
    ind += 1;
    $(this).attr('name',ind);
  })
  $('.jobs_swiper-slide').click(function(){
    if ($(this).attr('name')) {
      $('.jobs_popup-wrapper').addClass('open');
      disabledScroll();
      var elem = parseInt($(this).attr('name'))-1;
      jobsPopupSwiper.slideTo(elem, 0, false);
    }
  })
  new Swiper('.price_table_swiper', {
    slidesPerView: 'auto',
    freeMode: false,
    centeredSlides: false,
    // breakpoints: {
    //   320:{
    //     spaceBetween: 10,
    //     speed: 400,
    //   },
    //   576:{
    //     spaceBetween: 10,
    //     speed: 500,
    //   },
    //   768:{
    //     spaceBetween: 25,
    //     speed: 700,
    //   },
    // }
  });
  new Swiper('.cooperation_swiper', {
    slidesPerView: 'auto',
    freeMode: false,
    centeredSlides: false,
    breakpoints: {
      320:{
        spaceBetween: 10,
        speed: 400,
      },
      576:{
        spaceBetween: 10,
        speed: 500,
      },
      768:{
        spaceBetween: 25,
        speed: 700,
      },
    }
  });
  function closePopup() {
    $('.popup').removeClass('open');
    enableScroll();
  }
  $('.popup-close').click(function(){closePopup()});
  $('.popup').mouseup(function (e){
    var div = $('.popup-check');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
        closePopup()}});
})