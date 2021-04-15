function disabledScroll() {
	var paddingOffset = window.innerWidth - $('body').outerWidth() + 'px';
	$('body').css('overflow', 'hidden')
	$('body').css('padding-right', paddingOffset)
};
function enableScroll() {
	$('body').css('overflow', 'auto')
	$('body').css('padding-right', 0)
};
function showPopup() {
  $('.popup-blackout').show();
  $('.comparison_popup-window').css('transform', 'translate(-50%, -50%) scale(1)');
}
function hidePopup() {
  $('.popup-blackout').hide();
  $('.comparison_popup-window').css('transform', 'translate(-50%, -50%) scale(0)');
}
$(document).ready(function(){
	$('input[name="phone"]').mask("+7(999) 999-9999",{autoclear: false});

	$('.project_form').submit(function(e) {
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
  $('.comparison_form-btn').click(function(){
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
		// else {
		// 	showPopup();
		// 	disabledScroll();
		// }
  })
  $('.popup-blackout').click(function(){
    hidePopup();
    enableScroll();
  })
  $('.comparison_popup-close').click(function(){
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
});
