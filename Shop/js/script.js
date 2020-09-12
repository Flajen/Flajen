// ==========================================
var num = 1;
let text = "товар";

function change() {
    document.querySelector(".place").innerHTML = num++ + " " + text;
    if (num == 1) {
		text;
	}else if (num < 5) {
		text = "товара";
	}else {
		text = "товаров"
	};
};

const btn = document.querySelector(".button");

btn.addEventListener("click", function() {
	change();
});


function add_cart() {
	document.getElementById("showing").classList.toggle("showing");

}

let cart = document.querySelector(".cart_mouse");

cart.addEventListener("click", function() {
	if (num == 1) {
	}else {
		add_cart();
	};
});


// =========
