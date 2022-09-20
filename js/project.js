document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".otherSwiper", {
    slidesPerView: 2,
    navigation: {
      nextEl: ".otherSwiper-next",
      prevEl: ".otherSwiper-prev",
    },
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: "auto",
        spaceBetween: 15,
      },
      1220: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
});
