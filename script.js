document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".mainSwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
