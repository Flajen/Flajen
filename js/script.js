function preloader() {
	$(() => {
		setInterval(() => {
			let p = $('.preloader');
			p.css('opacity', 0);
			$('body').css('overflow', 'auto');
			setInterval(
				() => p.remove(),
				parseInt(p.css('--duration')) * 1000
			)
		}, 500);
	});
}
let menu = $('.menu'),
	navBtn = $('.menu-links_nav__btn'),
	paddingHeader = $('.cap').innerWidth();
$('.header').css('padding-left', paddingHeader);
$(document).ready(function(){
	var slider = $('.slider').width(),
			sliderTrack = $('.slider_track'),
			sliderWidthTrack = 0,
			sliderWidthMax = (slider * $('.slider_item').length) - slider,
			sliderBtnNext = $('.arrow-right'),
			sliderBtnPrev = $('.arrow-left');
	$('.slider').css('min-width', `${slider}px`);
	sliderBtnPrev.click(function() {
		if (sliderWidthTrack == 0) {
			sliderWidthTrack = -sliderWidthMax;
		} else {
			sliderWidthTrack = sliderWidthTrack + slider;
		}
		sliderTrack.css('transform', `translateX(${sliderWidthTrack}px)`);
	});
	sliderBtnNext.click(function() {
		if (sliderWidthTrack <= -sliderWidthMax) {
			sliderWidthTrack = 0;
		} else {
			sliderWidthTrack = sliderWidthTrack - slider;
		}
		sliderTrack.css('transform', `translateX(${sliderWidthTrack}px)`);
	});
	setTimeout(function () {
		$('.cap').css({
			'left': '0',
			'transform': 'scale(1)',
		});
	}, 550);
	preloader();
})
