document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".projectsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".projectsSwiper-next",
      prevEl: ".projectsSwiper-prev",
    },
    // loop: true,
    speed: 1000,
    breakpoints: {
      0: {
        spaceBetween: 15,
      },
      1220: {
        spaceBetween: 20,
      },
    },
  });
});
