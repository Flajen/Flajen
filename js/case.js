document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiperOne", {
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 12000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
  new Swiper(".swiperTwo", {
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 12000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });
  const sliderPage = document.querySelector(".wrapper");
  const before = document.querySelector(".before");
  const beforeImage = before.querySelector("img");
  const change = document.querySelector(".change");
  const body = document.body;
  let isActive = false;
  document.addEventListener("DOMContentLoaded", () => {
    let width = sliderPage.offsetWidth;
    beforeImage.style.width = `${width}px`;
  });
  change.addEventListener("mousedown", () => {
    isActive = true;
  });
  body.addEventListener("mouseup", () => {
    isActive = false;
  });
  body.addEventListener("mouseleave", () => {
    isActive = false;
  });
  const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, sliderPage.offsetWidth));
    before.style.width = `${shift}px`;
    change.style.left = `${shift}px`;
  };
  const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };
  body.addEventListener("mousemove", (e) => {
    if (!isActive) {
      return;
    }
    let x = e.pageX;
    x -= sliderPage.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
  });
  change.addEventListener("touchstart", () => {
    isActive = true;
  });
  body.addEventListener("touchend", () => {
    isActive = false;
  });
  body.addEventListener("touchcancel", () => {
    isActive = false;
  });
  body.addEventListener("touchmove", (e) => {
    if (!isActive) {
      return;
    }
    let x;
    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
      x = e.changedTouches[i].pageX;
    }

    x -= sliderPage.getBoundingClientRect().left;

    beforeAfterSlider(x);
    pauseEvents(e);
  });
});
