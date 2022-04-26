let burger = document.querySelector(".burger");
let headerPhone = document.querySelector(".header_phone");
burger.addEventListener("click", function () {
  if (headerPhone.classList.contains("open")) {
    headerPhone.classList.remove("open");
  } else {
    headerPhone.classList.add("open");
  }
});
let navBtn = document.querySelectorAll(".nav-btn");
let navModal = document.querySelectorAll(".nav_modal");
let headerPhoneModal = document.querySelector(".header_phone-modal");
for (let i = 0; i < navBtn.length; i++) {
  navBtn[i].addEventListener("click", function () {
    navBtn[i].classList.toggle("open");
    if (window.screen.width < 1100) {
      if (headerPhoneModal.classList.contains("open")) {
        headerPhoneModal.classList.remove("open");
      } else {
        headerPhoneModal.classList.add("open");
      }
    } else {
      if (this.nextElementSibling.classList.contains("open")) {
        this.nextElementSibling.classList.remove("open");
      } else {
        this.nextElementSibling.classList.add("open");
      }
    }
  });
}
let navModalLink = document.querySelectorAll(".nav_modal-link");
for (let i = 0; i < navModalLink.length; i++) {
  navModalLink[i].addEventListener("click", function () {
    for (let i = 0; i < navModal.length; i++) {
      navModal[i].classList.remove("open");
    }
  });
}
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
let body = document.body;
let headerFly = document.querySelector(".header_fly");
let btn = document.querySelectorAll(".btn-order");
let popup = document.querySelectorAll(".popup");
let popupFeedback = document.querySelector(".popup-feedback");
let popupBody = document.querySelector(".popup-body");
let popupClose = document.querySelectorAll(".popup-close");
let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    popupBody.classList.add("open");
    popupFeedback.classList.add("open");
    body.classList.add("open");
    body.style.paddingRight = scrollbarWidth + "px";
  });
}
for (let i = 0; i < popupClose.length; i++) {
  popupClose[i].addEventListener("click", (e) => {
    popupBody.classList.remove("open");
    popup[i].classList.remove("open");
    body.classList.remove("open");
    body.style.paddingRight = 0;
  });
}
// for (let i = 0; i < popup.length; i++) {
//   popup[i].addEventListener("click", (e) => {
//     popupBody.classList.remove("open");
//     popup[i].classList.remove("open");
//     body.classList.remove("open");
//     body.style.paddingRight = 0;
//   });
// }
let scrollReload = window.scrollY;
if (scrollReload > 0) {
  headerFly.classList.add("open");
}
document.onscroll = function () {
  let scroll = window.scrollY;
  if (scroll > 199) {
    headerFly.classList.add("open");
  } else {
    headerFly.classList.remove("open");
  }
  for (let i = 0; i < navModal.length; i++) {
    navModal[i].classList.remove("open");
    navBtn[i].classList.remove("open");
  }
};
let slideActive = document.querySelectorAll(".swiper_licenses .swiper-slide");
for (let i = 0; i < slideActive.length; i++) {
  slideActive[i].addEventListener("click", function () {
    document.querySelector(".popup-zoom").classList.add("open");
    body.classList.add("open");
    body.style.paddingRight = scrollbarWidth + "px";
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
