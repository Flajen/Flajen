let priceSelectBtn = document.querySelectorAll(".price_select-btn");
for (let i = 0; i < priceSelectBtn.length; i++) {
  priceSelectBtn[i].addEventListener("click", function () {
    if (this.parentNode.classList.contains("open")) {
      this.parentNode.classList.remove("open");
    } else {
      this.parentNode.classList.add("open");
    }
  });
}
