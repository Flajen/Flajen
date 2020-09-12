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

	document.querySelector(".cart_heading").innerHTML = "«North Blue» Полированная 600/400";

	document.querySelector(".cart_amount").innerHTML = "Количество: " + amount++;

	document.querySelector(".cart_price").innerHTML = "Цена: " + price++ + " руб.";
});

cart.addEventListener("click", function() {
	if (num == 1) {
	}else {
		add_cart();
	};
});

products.addEventListener("click", function() {
	add_product();
});


var products4343 = {
	"1" : {
		"name" : "«North Blue» Полированная",
		"amount" : 15,
		"cost" : 1088.00,
		"img" : "img/product/North_Blue_polished_400x400.png",
	},
};

var out = '';
for (var key in products4343) {

};

var show = function (state) {
	document.getElementById("checkout").style.display = state;
	document.getElementById("filter").style.display = state;
};
