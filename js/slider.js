document.addEventListener("DOMContentLoaded", () => {
  function disabledScroll() {
  	var paddingOffset = window.innerWidth - $('body').outerWidth() + 'px';
  	$('body').css('overflow', 'hidden');
  	$('body').css('padding-right', paddingOffset);
  }
  function enableScroll() {
  	$('body').css('overflow', 'auto');
  	$('body').css('padding-right', 0);
  }
  const swiperMain = new Swiper('.home-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
    speed: 1600,
    loop: true,
    navigation: {
      nextEl: '.swiperMain-next',
      prevEl: '.swiperMain-prev',
    },
    autoplay: {
      delay: 3300,
      disableOnInteraction: false
    },
    breakpoints: {
      320: {
        spaceBetween: 0,
      },
      480: {
        spaceBetween: 5,
      }
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });
  const peculiaritiesSliderOne = new Swiper('.peculiaritiesSliderOne', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    speed: 1100,
    navigation: {
      nextEl: '.peculiaritiesSliderOne-next',
      prevEl: '.peculiaritiesSliderOne-prev',
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });
  const peculiaritiesSliderTwo = new Swiper('.peculiaritiesSliderTwo', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    speed: 1100,
    navigation: {
      nextEl: '.peculiaritiesSliderTwo-next',
      prevEl: '.peculiaritiesSliderTwo-prev',
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });
  peculiaritiesSliderOne.controller.control = peculiaritiesSliderTwo;
  peculiaritiesSliderTwo.controller.control = peculiaritiesSliderOne;
  function linkTop() {
    var target = $("#linktop").offset().top;
		$("html, body").animate({scrollTop: target-150}, 800);
  }
  $('.peculiarities-sticky-link').click(function(e){
		e.preventDefault();
    $('.peculiarities-sticky-link').removeClass('active');
    $('.peculiarities-block-wrapper').removeClass('active');
    var dataLink = $(this).attr('data-link');
    $(`.peculiarities-sticky-link[data-link="${dataLink}"]`).addClass('active');
    $(`.${$(this).attr('data-link')}`).addClass('active');
    linkTop();
  });
  peculiaritiesSliderOne.on('slideChange', function(){
    var peculiaritiesActive = $('.swiper-slide-active').find('.peculiarities-sticky-link').attr('data-link');
    if (peculiaritiesActive == 'filtration'){
      $('.filtration').removeClass('active');
      $('.bowl').addClass('active');
    }else{
      $('.filtration').addClass('active');
      $('.bowl').removeClass('active');
    }
    linkTop();
  })
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
    speed: 1400,
    loop: true,
    pagination: {
      el: '.swiper1-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper1-next',
      prevEl: '.swiper1-prev',
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
    speed: 1400,
    loop: true,
    pagination: {
      el: '.swiper2-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper2-next',
      prevEl: '.swiper2-prev',
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });
  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
    speed: 1500,
    loop: true,
    pagination: {
      el: '.swiper3-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper3-next',
      prevEl: '.swiper3-prev',
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });
  function closePopup() {
    $('.popup-wrapper').removeClass('show');
    enableScroll();};
  $('.btn_form').click(function(){
    $('.popup-wrapper-form').addClass('show');
    disabledScroll();});
  $('.popup-close').click(function(){closePopup();});
  $('.popup-wrapper-success').mouseup(function (e){
    var div = $('.popup-check');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
        closePopup();}});
  function checkInput(form,name) {
    var input = $(`.${form}`).find($(`input[name="${name}"]`));
    if (input.val() == '') {
      input.addClass('necessary');
      input.addClass('shake');
      setTimeout(() => {
        input.removeClass('shake');
      }, 150);
      input.bind('input', function(){
        if (input.val() != '') {
          input.removeClass('necessary');
        } else {
          input.addClass('necessary');
          input.addClass('shake');
          setTimeout(() => {
            input.removeClass('shake');
          }, 150);}});}}
  $('.popup-form').submit(function(e) {
    e.preventDefault();
    let th = $(this);
    var inputName = th.find('input[name="name"]');
    var inputPhone = th.find('input[name="phone"]');
    if (inputName.val() == '' && inputPhone.val() == ''){
      if (inputName.val() == ''){checkInput('popup-form', inputName.attr('name'))}
      if (inputPhone.val() == ''){checkInput('popup-form', inputPhone.attr('name'))}
    } else{
      $.ajax({
        type: "POST",
        url: 'form/formCall.php',
        data: th.serialize(),
        success: function(){
         $('.popup-wrapper-form').removeClass('show');
         $('.popup-wrapper-success').addClass('show');
         th.trigger('reset');
       }, error: function(){}
     });}});
  $('.gone').click(function(){
		$('.gallery-popup-one').addClass('show');
		disabledScroll();})
	$('.gtwo').click(function(){
		$('.gallery-popup-two').addClass('show');
		disabledScroll();})
	$('.gthree').click(function(){
		$('.gallery-popup-three').addClass('show');
		disabledScroll();})
  $('.peculiarities-video-one').click(function(){
    $('.peculiarities-popup-one').addClass('show');
    disabledScroll();})
  $('.peculiarities-video-two').click(function(){
    $('.peculiarities-popup-two').addClass('show');
    disabledScroll();})
	function closePeculiaritiesPopup() {
		$('.peculiarities-popup').removeClass('show'); // скрываем его
		enableScroll();
    $("iframe").each(function() {
      $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });}
  $('.peculiarities-popup-close').click(function(){closePeculiaritiesPopup()})
	$('.peculiarities-popup').mouseup(function (e){
		var div = $('.peculiarities-popup-video');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
        closePeculiaritiesPopup();}});
  function closeGalleryPopup() {
		$('.gallery-popup').removeClass('show');
		enableScroll();}
	$('.gallery-popup-close').click(function(){closeGalleryPopup()})
	$('.gallery-popup').mouseup(function (e){
		var div = $('.gallery-popup-body');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			closeGalleryPopup();}});
})