var MenuBtn = $('.menu_burger'),
	MenuElementOne = $('.menu_burger-btn_element_one'),
	MenuElementTwo = $('.menu_burger-btn_element_two'),
	MenuElementThree = $('.menu_burger-btn_element_three'),
	Body = $('.body'),
	Menu = $('.menu'),
	MenuHelp = $('.menu__help');

$(document).ready(function() {
	MenuBtn.click(function() {
		if ( Menu.hasClass('menu__help')) {
			Menu.removeClass('menu__help');
			Body.css('overflow-y', 'scroll');

			MenuElementOne.css('top', '30%');
			MenuElementOne.css('transform', 'translate(-50%, -30%) rotate(0)');
			MenuElementTwo.css('opacity', '1')
			MenuElementTwo.css('width', '25px')
			MenuElementThree.css('top', '70%');
			MenuElementThree.css('transform', 'translate(-50%, -70%) rotate(0)');
		}else {
			Menu.addClass('menu__help');
			Body.css('overflow-y', 'hidden');

			MenuElementOne.css('top', '50%');
			MenuElementOne.css('transform', 'translate(-50%, -50%) rotate(45deg)');
			MenuElementTwo.css('opacity', '0')
			MenuElementTwo.css('width', '0')
			MenuElementThree.css('top', '50%');
			MenuElementThree.css('transform', 'translate(-50%, -50%) rotate(-45deg)');
		}
	})
})