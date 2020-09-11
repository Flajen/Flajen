// ==========================================
let num = 1;

function change() {
    document.querySelector(".place").innerHTML = num++ + " товаров";
};

const btn = document.querySelector(".button");

btn.addEventListener("click", function() {
	change()
});

function add_cart() {
	document.querySelector(".cart_more").style.display = 'block'
}

const cart = document.querySelector(".cart_mouse");

cart.addEventListener("click", function() {
	add_cart()
});


