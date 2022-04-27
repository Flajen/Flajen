var swiperClients = new Swiper(".swiper_clients", {
  slidesPerView: "auto",
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: false,
  },
  breakpoints: {
    1: {
      spaceBetween: 15,
    },
    577: {
      spaceBetween: 30,
    },
  },
  observeParents: true,
  observeSlideChildren: true,
  observer: true,
});
var swiperLicenses = new Swiper(".swiper_licenses", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".licenses-button-next",
    prevEl: ".licenses-button-prev",
  },
  loop: true,
  breakpoints: {
    1: {
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 60,
        modifier: 4.12,
        slideShadows: true,
      },
      allowTouchMove: true,
      slideToClickedSlide: false,
    },
    576: {
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 60,
        modifier: 3,
        slideShadows: true,
      },
      allowTouchMove: false,
      slideToClickedSlide: true,
    },
    768: {
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 50,
        modifier: 4.88,
        slideShadows: true,
      },
      allowTouchMove: false, // Отключить перетаскивание
      slideToClickedSlide: true,
    },
  },
  observeParents: true,
  observeSlideChildren: true,
  observer: true,
});
var swiperReviews = new Swiper(".swiper_reviews", {
  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  observeParents: true,
  observeSlideChildren: true,
  observer: true,
});
let slideActive = document.querySelectorAll(".swiper_licenses .swiper-slide");
for (let i = 0; i < slideActive.length; i++) {
  slideActive[i].addEventListener("click", function () {
    document.querySelector(".popup-zoom").classList.add("open");
    body.classList.add("open");
    body.style.paddingRight = scrollbarWidth + "px";
    disableScroll();
  });
}
var swiperLicensesPopup = new Swiper(".swiper_licenses_popup", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".licenses_popup-button-next",
    prevEl: ".licenses_popup-button-prev",
  },
  observeParents: true,
  observeSlideChildren: true,
  observer: true,
});
