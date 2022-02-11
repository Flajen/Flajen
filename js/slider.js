document.addEventListener("DOMContentLoaded", () => {
  const swiperMain = new Swiper('.home-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
    speed: 1400,
    loop: true,
    navigation: {
      nextEl: '.swiperMain-next',
      prevEl: '.swiperMain-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
    speed: 1400,
    loop: true,
    pagination: {
      el: '.swiper1-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper1-next',
      prevEl: '.swiper1-prev',
    },
    observer: true,
    observeParents: true,
    observeChildren: true,
  });
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
    speed: 1400,
    loop: true,
    pagination: {
      el: '.swiper2-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper2-next',
      prevEl: '.swiper2-prev',
    },
  });
  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 5,
    speed: 1500,
    loop: true,
    pagination: {
      el: '.swiper3-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper3-next',
      prevEl: '.swiper3-prev',
    },
  });
})