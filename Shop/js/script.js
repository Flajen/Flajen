// Переменные
var num = 1; // Кол-во корзины
let text = "товар"; // Правильность написания
let amount = 1; // Кол-во товара
let price = 132;

// Кнопки
const btn = document.querySelector(".button");
const cart = document.querySelector(".cart_mouse");
const products = document.querySelector(".product_img");

// Функции
function change() { // Изменения товара
	document.querySelector(".place").innerHTML = num++ + " " + text;
	if (num == 1) {
		text;
	}else if (num < 5) {
		text = "товара";
	}else {
		text = "товаров"
	};
};

function add_cart() { // Показ корзины
	document.getElementById("showing").classList.toggle("showing");
}

function add_product() { // Выбор продука
	document.getElementById("product_img").classList.add("product_img_active");
}

// Клик
btn.addEventListener("click", function() {
	change();
});

// $('.btn_arrange').click(function() {
// 	if ($('#checkout').css("display") == "block") {
// 		console.log("работает");
// 	} else {
// 		console.log("не работает");
// 	}
// })

cart.addEventListener("click", function() {
	add_cart();
	$('#filterPng').attr('style', 'display: block');
	if ($('.cart_mouse').attr('display') == "block") {
		alert('Привет');
	} else {
		console.log('нет');
	}
});

$('#filterPng').click(function() {
	add_cart();
	$('#filterPng').attr('style', 'display: none');
})


products.addEventListener("click", function() {
	add_product();
});


var products4343 = {
	"NorthBlue6" : {
		"name" : "«North Blue» Полированная",
		"amount" : 15,
		"cost" : 1088.00,
		"img" : "img/product/North_Blue_polished_600x400.png",
	},
	"NorthBlue4" : {
		"name" : "«North Blue» Полированная",
		"amount" : 12,
		"cost" : 1088.00,
		"img" : "img/product/North_Blue_polished_400x400.png",
	},
};

var out = '';
for (var key in products4343) {
	out+="Название: "+products4343[key]['name'] + '<br>';
	price+="Количество: "+products4343[key]['amount'] + '<br>';
	out+="Цена: "+products4343[key]['cost'] + '<br>';
	out+='<img src="'+products4343[key].img+'">';
};

// document.getElementById('cart_info').innerHTML = out;

var show = function (state) {
	document.getElementById("checkout").style.display = state;
	document.getElementById("filter").style.display = state;
};

// JQuery
$('#tabDescription').click(function(){
	$('.recognition_btn').removeClass('recognition_active');
	$('#description_outline').addClass('recognition_active');

	$('.active').removeClass('active')
	$('.description').addClass('active')
});

$('#tabSpecifications').click(function(){
	$('.recognition_btn').removeClass('recognition_active');
	$('#specifications_outline').addClass('recognition_active');

	$('.active').removeClass('active')
	$('.specifications').addClass('active')
});

$('#tabPickup').click(function(){
	$('.recognition_btn').removeClass('recognition_active');
	$('#pickup_outline').addClass('recognition_active');

	$('.active').removeClass('active')
	$('.pickup').addClass('active')
});

function burgerMenu(selector) {
	let menu = $(selector);
	let burgerButton = menu.find('.burger_menu_btn');
	let links = menu.find('.burger_menu_links');
	let overlay = menu.find('.burger_menu_overlay');

	burgerButton.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	})

	links.on('click', (e) => { toggleMenu(); })

	overlay.on('click', (e) => { toggleMenu(); })

	function toggleMenu() {
		menu.toggleClass('burger_menu_active')

		if (menu.hasClass('burger_menu_active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
};

burgerMenu('.burger_menu');

$('.choice_img').click(function() {
	$('.choice_img').removeClass('pif_active');
})

$('.fake_choice').click(function() {
	$('.fake_choice').removeAttribute("checked");
})

let meter44 = 0.16;
var meter = $('#meter');
var thing = $('#thing');
let thingSize = 1;
let things = 1;
let tMeter = $('#meter').attr('value');

function meterPlus() {
	for (var i = 0; i < 1; i++) {
		tMeter = Number(tMeter) + Number(1.20);
		console.log(tMeter);
		thingСhange();
		meter.attr('value', tMeter.toFixed(2));
		return tMeter;
	};
}

function meterMinus() {
	for (var i = 0; i < 1; i++) {
		tMeter = Number(tMeter) - Number(1.20);
		thingСhange();
		meter.attr('value', tMeter.toFixed(2));
		return tMeter;
	};
}

function thingСhange() {
	for (var i = 0; i < 1; i++) {
		thingSize = Number(meter.attr('value')) / 0.24;
		return thingSize;
	};
}

function thingPlus() {
	for (var i = 0; i < 1; i++) {
		tMeter+= 0.24;
		meter.attr('value', tMeter.toFixed(2));
		meterChange();
	};
}

function thingMinus() {
	for (var i = 0; i < 1; i++) {
		meter64-= 0.24;
		meter.attr('value', meter64.toFixed(2));
	};
}

function meterChange() {
	for (var i = 0; i < 1; i++) {
		thingSize = Number(thing.attr('value')) * 0.24;
		return thingSize;
	};
}

$('#meter_minus').click(function() {
	if (meter.attr('value') < 1.45) {
		return meter;
	} else {
		meterMinus();
		thingСhange();
		thing.attr('value', thingSize.toFixed(0));
		return meter;
	}
})

$('#meter_plus').click(function() {
	meterPlus();
	thingСhange();
	thing.attr('value', thingSize.toFixed(0));
})

$('#thing_minus').click(function() {
	if (things <= 6) {
		return things;
	} else {
		things--;
		thing.attr('value', things);
		thingMinus();
		return things;
	}
})

$('#thing_plus').click(function() {
	things++;
	thing.attr('value', things)
	thingPlus()
	console.log($('#meter').attr('value'));
	return things;
})

$('.mobile_find_btn').click(function() {
	$('#filter').attr('style', 'display:block');
	$('.find').attr('style', 'display: block');
})

$('#filter').click(function() {
	if (screen.width <= '576') {
		$('.find').attr('style', 'display: none');
	}
})

$('.remove_img').click(function() {
	$('.cart_full_body').attr('style', 'display: none')
})

$('.btn_proceed').click(function() {
	$('#filter').attr('style', 'display: none');
	$('#checkout').attr('style', 'display: none');
})


$('#indefication').click(function() {
	$('.cart_card').attr('style', 'display: none');
	$('#indefication_one').attr('style', 'display: none');
	$('#indefication_two').attr('style', 'display: none');
})

$('#indefication_one').click(function() {
	$(this).attr('style', 'display: none');
	$('#indeficationOne').attr('style', 'display: none');
})

$('#indefication_two').click(function() {
	$(this).attr('style', 'display: none');
	$('#indeficationTwo').attr('style', 'display: none')
})


function open_cart() {
	$('.page_product').attr('style', 'display: none');
	$('.page_cart').attr('style', 'display: block');
}

$('.cart_price_btn').click(function() {
	open_cart();
	$('#filterPng').attr('style', 'display:block');
	$('.showing').remove();
	$('.cart_mouse').remove()
	$('.filter_png').remove();
})

$('#delet_cm_product_one').click(function() {
	$('.cm_produtct_one').remove();
})

$('#delet_cm_product_two').click(function() {
	$('.cm_produtct_two').remove();
})
