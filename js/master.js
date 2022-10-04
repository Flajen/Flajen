document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 920) {
    const homeImg = document.querySelectorAll(".home-img");
    const homeCard = document.querySelectorAll(".home_card");
    for (let i = 0; i < homeCard.length; i++) {
      const element = homeCard[i];
      element.addEventListener("mouseover", () => {
        homeImg.forEach((img) => {
          img.classList.remove("show");
          if (img.classList[1] == element.classList[1]) {
            img.classList.add("show");
          }
        });
      });
    }
  }
});
