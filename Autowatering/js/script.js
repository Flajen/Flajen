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
		} else {
			showPopup();
			disabledScroll();
		}
  })
  $('.popup-blackout').click(function(){
    hidePopup();
    enableScroll();
  })
  $('.comparison_popup-close').click(function(){
    hidePopup();
    enableScroll();
  })
});
