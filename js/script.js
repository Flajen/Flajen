let menu = $('.menu'),
	navBtn = $('.menu-links_nav__btn');

// Запущенный документ
$(document).ready(function(){
	menu.click(function(){
		console.log('Меню');
		$('.menu-links').toggleClass('menu-links__help');
	});
})

// Клик по документу
$(document).click(function (e){
	// Личный кабинет
	if (!navBtn.is(e.target) && 
		!menu.is(e.target) && 
		navBtn.has(e.target).length === 0 && 
		menu.has(e.target).length === 0) {$('.menu-links').addClass('menu-links__help');}
});