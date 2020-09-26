// Переменные


var fixed_offset = 25;



// Функции



// Скрипты


// Отключения перехода тега а
$('a.current-page').click(function() { return false; });
// Скролл по кнопке
	// Форма
$('.d_btn').click(() => {
    $('html, body').animate({
        scrollTop: $('.c_wrapper_img').offset().top - fixed_offset
    }, 400);
});
	// О нас
$('.Nabout').click(() => {
    $('html, body').animate({
        scrollTop: $('#Sabout').offset().top - fixed_offset
    }, 400);
});
	// Услуги
$('.Nservices').click(() => {
    $('html, body').animate({
        scrollTop: $('#Sservices').offset().top - fixed_offset
    }, 400);
});
	// Наши работы
$('.Nwork').click(() => {
    $('html, body').animate({
        scrollTop: $('#Swork').offset().top - fixed_offset
    }, 400);
});
	// Лицензии
$('.Nlicenses').click(() => {
    $('html, body').animate({
        scrollTop: $('#Slicenses').offset().top - fixed_offset
    }, 400);
});
	// Наши заказчики
$('.Ncustomer').click(() => {
    $('html, body').animate({
        scrollTop: $('#Scustomer').offset().top - fixed_offset
    }, 400);
});

// Переключение вкладок
$('#cw_one').click( function() {
	if ($('#cw_one').hasClass('active')) {
	} else {
		$('.cw_text').removeClass('active');
		$('#cw_one').addClass('active');
		$('#cw__work_one').attr('checked', true);
		$('#cw__work_two').removeAttr('checked');
	}
})

$('#cw_two').click( function() {
	if ($('#cw_two').hasClass('active')) {
	} else {
		$('.cw_text').removeClass('active');
		$('#cw_two').addClass('active');
		$('#cw__work_two').attr('checked', true);
		$('#cw__work_one').removeAttr('checked');
	}
})

// Слайдер
$(document).ready(function() {
	const aPrev = $('#prev_arrow'),
		aNext = $('#next_arrow'),
		sItem = $('.s_item'),
		btnBack = $('.back_btn'),
		btnNext = $('.next_btn');


	const sImgOne = $('.ia_one'),
		sPicksOne = $('.pick_one');

	const sImgTwo = $('.ia_two'),
		sPicksTwo = $('.pick_two');

	const sImgThree = $('.ia_three')
		sPicksThree = $('.pick_three');

	const sImgFour = $('.ia_four')
		sPicksFour = $('.pick_four');

	const sImgFive = $('.ia_five')
		sPicksFive = $('.pick_five');

	const sImgSix = $('.ia_six')
		sPicksSix = $('.pick_six');

	const sImgSeven = $('.ia_seven')
		sPicksSeven = $('.pick_seven');

	const sImgEight = $('.ia_eight')
		sPicksSeven = $('.pick_eight');

	const sImgNine = $('.ia_nine')
		sPicksSeven = $('.pick_nine');

	const sPickOne = document.querySelectorAll('.pick_one');
	const sPickTwo = document.querySelectorAll('.pick_two');
	const sPickThree = document.querySelectorAll('.pick_three');
	const sPickFour = document.querySelectorAll('.pick_four');
	const sPickFive = document.querySelectorAll('.pick_five');
	const sPickSix = document.querySelectorAll('.pick_six');
	const sPickSeven = document.querySelectorAll('.pick_seven');
	const sPickEight = document.querySelectorAll('.pick_eight');
	const sPickNine = document.querySelectorAll('.pick_nine');

	let changeBuss = $('.text_bussines');

	let index = 0;
	let indexImg = 0;

// Слайдер изображений

// Первый
	function backIaOne() {
		if (indexImg == 0) {
			indexImg = sImgOne.length - 1;
			activeImgOne(indexImg);
			activePickOne(indexImg);
		} else {
			indexImg--;
			activeImgOne(indexImg);
			activePickOne(indexImg);
		}
	}
	function nextIaOne() {
		if (indexImg == sImgOne.length - 1) {
			indexImg = 0;
			activeImgOne(indexImg);
			activePickOne(indexImg);
		} else {
			indexImg++;
			activeImgOne(indexImg);
			activePickOne(indexImg);
		}
	}
// Второй
	function backIaTwo() {
		if (indexImg == 0) {
			indexImg = sImgTwo.length - 1;
			activeImgTwo(indexImg);
			activePickTwo(indexImg);
		} else {
			indexImg--;
			activeImgTwo(indexImg);
			activePickTwo(indexImg);
		}
	}
	function nextIaTwo() {
		if (indexImg == sImgTwo.length - 1) {
			indexImg = 0;
			activeImgTwo(indexImg);
			activePickTwo(indexImg);
		} else {
			indexImg++;
			activeImgTwo(indexImg);
			activePickTwo(indexImg);
		}
	}
// Третий
	function backIaThree() {
		if (indexImg == 0) {
			indexImg = sImgOne.length - 1;
			activeImgThree(indexImg);
			activePickThree(indexImg);
		} else {
			indexImg--;
			activeImgThree(indexImg);
			activePickThree(indexImg);
		}
	}
	function nextIaThree() {
		if (indexImg == sImgOne.length - 1) {
			indexImg = 0;
			activeImgThree(indexImg);
			activePickThree(indexImg);
		} else {
			indexImg++;
			activeImgThree(indexImg);
			activePickThree(indexImg);
		}
	}
// Четвертый
	function backIaFour() {
		if (indexImg == 0) {
			indexImg = sImgTwo.length - 1;
			activeImgFour(indexImg);
			activePickFour(indexImg);
		} else {
			indexImg--;
			activeImgFour(indexImg);
			activePickFour(indexImg);
		}
	}
	function nextIaFour() {
		if (indexImg == sImgTwo.length - 1) {
			indexImg = 0;
			activeImgFour(indexImg);
			activePickFour(indexImg);
		} else {
			indexImg++;
			activeImgFour(indexImg);
			activePickFour(indexImg);
		}
	}

	btnNext.click(function() {
		if (index == 0) {
			nextIaOne();
		} else if (index == 1) {
			nextIaTwo();
		} else if (index == 2) {
			nextIaThree();
		} else if (index == 3) {
			nextIaFour();
		}
	})

	btnBack.click(function() {
		if (index == 0) {
			backIaOne();
		} else if (index == 1) {
			backIaTwo();
		} else if (index == 2) {
			backIaThree();
		} else if (index == 3) {
			backIaFour();
		}
	})

	function activeSlide(n) {
		for (item of sItem) {
			sItem.removeClass('s_active');
		}
		$(sItem[n]).addClass('s_active');
		change_bussines();
	}

	function nextSlide() {
		if (index == sItem.length - 1) {
			index = 0;
			activeSlide(index);
		} else {
			index++;
			activeSlide(index);
		}
	}

	function prevSlide() {
		if (index == 0) {
			index = sItem.length - 1;
			activeSlide(index);
		} else {
			index--;
			activeSlide(index);
		}
	}

	function change_bussines() {
		if (index == 0) {
			changeBuss.text('ЛОТТЕ Москва'); //1
		} else if (index == 1) {
			changeBuss.text('Рольф TOYOTA-LEXUS'); //2
		} else if (index == 2) {
			changeBuss.text('РАНХиГС'); //3
		} else if (index == 3) {
			changeBuss.text('Рольф MAZDA,MITSUBISI'); //4
		} else if (index == 4) {
			changeBuss.text('ЛОТТЕ Плаза'); //5
		} else if (index == 5) {
			changeBuss.text('ВЭРОНД'); //6
		} else if (index == 6) {
			changeBuss.text('Школа'); //7
		} else if (index == 7) {
			changeBuss.text('Башня Федерация'); //8
		} else if (index == 8) {
			changeBuss.text('Башня на Набережной'); //9
		} else {
			return;
		}
	}
		// слайд вперед
	aNext.click(function() {
		nextSlide();
		// indexImg = 0;
	})
		// слайд назад
	aPrev.click(function() {
		prevSlide();
		// indexImg = 0;
	})

	// ----------------------Перебор фотографии----------------------
	function activeImgOne(n) {
		for (imgOne of sImgOne) {
			sImgOne.removeClass('img_active');
		}
		$(sImgOne[n]).addClass('img_active');
	}

	function activeImgTwo(n) {
		for (imgTwo of sImgTwo) {
			sImgTwo.removeClass('img_active');
		}
		$(sImgTwo[n]).addClass('img_active');
	}

	function activeImgThree(n) {
		for (imgThree of sImgThree) {
			sImgThree.removeClass('img_active');
		}
		$(sImgThree[n]).addClass('img_active');
	}

	function activeImgFour(n) {
		for (imgFour of sImgFour) {
			sImgFour.removeClass('img_active');
		}
		$(sImgFour[n]).addClass('img_active');
	}

	function activeImgFive(n) {
		for (imgFive of sImgFive) {
			sImgFive.removeClass('img_active');
		}
		$(sImgFive[n]).addClass('img_active');
	}

	function activeImgSix(n) {
		for (imgSix of sImgSix) {
			sImgSix.removeClass('img_active');
		}
		$(sImgSix[n]).addClass('img_active');
	}

	function activeImgSeven(n) {
		for (imgSeven of sImgSeven) {
			sImgSeven.removeClass('img_active');
		}
		$(sImgSeven[n]).addClass('img_active');
	}

	function activeImgEight(n) {
		for (imgSeven of sImgEight) {
			sImgEight.removeClass('img_active');
		}
		$(sImgEight[n]).addClass('img_active');
	}

	function activeImgNine(n) {
		for (imgSeven of sImgNine) {
			sImgNine.removeClass('img_active');
		}
		$(sImgNine[n]).addClass('img_active');
	}
	// --------------------------------------------------------------

	// ----------------------Перебор боксов----------------------
	function activePickOne(n) {
		for (pickitem of sPicksOne) {
			sPicksOne.removeClass('pick_active');
		}
		$(sPicksOne[n]).addClass('pick_active');
	}

	function activePickTwo(n) {
		for (pickitem of sPicksTwo) {
			sPicksTwo.removeClass('pick_active');
		}
		$(sPicksTwo[n]).addClass('pick_active');
	}
	
	function activePickThree(n) {
		for (pickitem of sPicksThree) {
			sPicksThree.removeClass('pick_active');
		}
		$(sPicksThree[n]).addClass('pick_active');
	}

	function activePickFour(n) {
		for (pickitem of sPicksFour) {
			sPicksFour.removeClass('pick_active');
		}
		$(sPicksFour[n]).addClass('pick_active');
	}

	function activePickFive(n) {
		for (pickitem of sPicksFive) {
			sPicksFive.removeClass('pick_active');
		}
		$(sPicksFive[n]).addClass('pick_active');
	}

	function activePickSix(n) {
		for (pickitem of sPicksSix) {
			sPicksSix.removeClass('pick_active');
		}
		$(sPicksSix[n]).addClass('pick_active');
	}

	function activePickSeven(n) {
		for (pickitem of sPicksSeven) {
			sPicksSeven.removeClass('pick_active');
		}
		$(sPicksSeven[n]).addClass('pick_active');
	}

	function activePickEight(n) {
		for (pickitem of sPicksEight) {
			sPicksEight.removeClass('pick_active');
		}
		$(sPicksEight[n]).addClass('pick_active');
	}

	function activePickNine(n) {
		for (pickitem of sPicksNine) {
			sPicksNine.removeClass('pick_active');
		}
		$(sPicksNine[n]).addClass('pick_active');
	}
	// -----------------------------------------------------------

	sPickOne.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickOne(indexImg);
			activeImgOne(indexImg);
		})
	})

	sPickTwo.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickTwo(indexImg);
			activeImgTwo(indexImg);
		})
	})

	sPickThree.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickThree(indexImg);
			activeImgThree(indexImg);
		})
	})

	sPickFour.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickFour(indexImg);
			activeImgFour(indexImg);
		})
	})

	sPickFive.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickFive(indexImg);
			activeImgFive(indexImg);
		})
	})

	sPickSix.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickSix(indexImg);
			activeImgSix(indexImg);
		})
	})

	sPickSeven.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickSeven(indexImg);
			activeImgSeven(indexImg);
		})
	})

	sPickEight.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickEight(indexImg);
			activeImgEight(indexImg);
		})
	})

	sPickNine.forEach((picks, indexPick) => {
		picks.addEventListener('click', () => {
			indexImg = indexPick;

			activePickNine(indexImg);
			activeImgNine(indexImg);
		})
	})
})



// Проверка работы скрипта
