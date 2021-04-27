function disabledScroll() {
	var paddingOffset = window.innerWidth - $('body').outerWidth() + 'px';
	$('body').css('overflow-y', 'hidden')
	$('body').css('padding-right', paddingOffset)
};
function enableScroll() {
	$('body').css('overflow-y', 'auto')
	$('body').css('padding-right', 0)
};
function showPopup() {
  $('.blackout').show();
  $('.form').css('transform', 'translate(-50%, -50%) scale(1)');
}
function hidePopup() {
  $('.blackout').hide();
  $('.form').css('transform', 'translate(-50%, -50%) scale(0)');
}
function showPopupThanks() {
  $('.blackout').show();
  $('.popup-thanks').css('transform', 'translate(-50%, -50%) scale(1)');
}
function hidePopupThanks() {
  $('.blackout').hide();
  $('.popup-thanks').css('transform', 'translate(-50%, -50%) scale(0)');
}
$(document).ready(function(){
	$('input[name="phone"]').mask("+7(999) 999-99-99",{autoclear: false});

	$('.trade-form').submit(function(e) {
        e.preventDefault();
				let th = $(this);
				let btn = $('.project_form-btn');
        $.ajax({
            type: "POST",
            url: 'check.php',
            data: th.serialize(),
            success: function(){
							showPopup();
							disabledScroll();
							th.trigger('reset');
           }, error: function(){}
       });
     });
  $('.btn55555').click(function(){
		if ($('.comparison_form-input_tel').val() == '') {
			$('.comparison_form-input_tel').css('border', '1.29811px solid rgb(248 35 35)');
		} else if ($('.comparison_form-input_file').val() == '') {
			$('.comparison_form-input_file-btn').css('border-bottom', '1px dashed rgb(248 35 35)');
		} else {
      showPopup();
			disabledScroll();
		}
  })
  $('.project_form-btn').click(function(){
		if ($('.project_form-input').val() == '') {
			$('.project_form-input').css('border', '1.29811px solid rgb(248 35 35)')
		}
  })
  $('.btn').click(function(){
    showPopup();
    disabledScroll();
  })
  $('.blackout').click(function(){
    hidePopup();
    enableScroll();
  })
  $('.popup-close').click(function(){
		hidePopupThanks();
    hidePopup();
    enableScroll();
  })
	$('.burger').click(function(){
		if ($('.header-nav').hasClass("header-nav_help")) {
			$('.header-nav').removeClass('header-nav_help');
			$('.whatsapp_bubl').css('right', '20px');
			$('.whatsapp_bubl').css('bottom', '20px');
			$('.mini_logo').css('top', '20px');
			enableScroll();
		} else {
			$('.header-nav').addClass('header-nav_help');
			$('.whatsapp_bubl').css('right', '-100%');
			$('.whatsapp_bubl').css('bottom', '-100%');
			$('.mini_logo').css('top', '-100%');
			disabledScroll();
		}
	})
	if(window.location.hash == '#back_window'){
		$('.price-nav-service_two').show();
		$('.price-btn_two').addClass('price-btn_active');
		$('.price-btn_one').removeClass('price-btn_active');
		$('.price-nav-service_one').hide();
	} else {
		$('.price-nav-service_one').show();
		$('.price-btn_one').addClass('price-btn_active');
		$('.price-btn_two').removeClass('price-btn_active');
		$('.price-nav-service_two').hide();
	}


	$('.price-btn_one').click(function(){
		$('.price-nav-service_one').show();
		$('.price-btn_one').addClass('price-btn_active');
		$('.price-btn_two').removeClass('price-btn_active');
		$('.price-nav-service_two').hide();
	})
	$('.price-btn_two').click(function(){
		$('.price-nav-service_two').show();
		$('.price-btn_two').addClass('price-btn_active');
		$('.price-btn_one').removeClass('price-btn_active');
		$('.price-nav-service_one').hide();
	})
});
