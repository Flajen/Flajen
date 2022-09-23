document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".homeSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    speed: 9500,
    loop: true,
    allowTouchMove: false,
    breakpoints: {
      0: {
        spaceBetween: 15,
      },
      840: {
        spaceBetween: 50,
      },
      1000: {
        spaceBetween: 100,
      },
      1200: {
        spaceBetween: 150,
      },
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  // Общие переменные
  const blackout = document.querySelector(".blackout");

  // Шапка
  var headerHight = document.querySelector("header").clientHeight,
    headerBtn = document.querySelector(".header-btn"),
    headerMenu = document.querySelector(".header_menu");
  if (window.scrollY > headerHight) {
    document.querySelector("header").classList.add("fly");
  }
  document.addEventListener("scroll", () => {
    if (window.scrollY > headerHight) {
      document.querySelector("header").classList.add("fly");
    } else {
      document.querySelector("header").classList.remove("fly");
    }
  });
  headerBtn.addEventListener("click", () => {
    if (headerBtn.classList.contains("open")) {
      headerBtn.classList.remove("open");
      headerMenu.classList.remove("open");
      blackout.classList.remove("open");
    } else {
      headerBtn.classList.add("open");
      headerMenu.classList.add("open");
      blackout.classList.add("open");
      document.querySelector(".blackout").addEventListener("click", () => {
        headerBtn.classList.remove("open");
        headerMenu.classList.remove("open");
        blackout.classList.remove("open");
      });
    }
  });

  // Блокировка скролла
  var check = false;
  let disableScroll = function () {
    let pagePosition = window.scrollY;
    document.body.classList.add("disable-scroll");
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + "px";
    check = true;
  };
  let enableScroll = function () {
    if (check) {
      let pagePosition = parseInt(document.body.dataset.position, 10);
      document.body.style.top = "auto";
      document.body.classList.remove("disable-scroll");
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute("data-position");
    }
    check = false;
  };
  // Слайдеры
  new Swiper(".materialsSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoHeight: true,
    pagination: {
      el: ".swiper_controls-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper_controls-next",
      prevEl: ".swiper_controls-prev",
    },
    breakpoints: {
      0: {
        speed: 800,
        pagination: {
          type: "fraction",
        },
        allowTouchMove: true,
      },
      1000: {
        speed: 1100,
        pagination: {
          type: "bullets",
        },
        allowTouchMove: false,
      },
    },
  });
  new Swiper(".photosSwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    speed: 1000,
    breakpoints: {
      0: {
        speed: 1000,
        centeredSlides: true,
        spaceBetween: 15,
      },
      770: {
        centeredSlides: false,
        spaceBetween: 20,
      },
      1000: {
        speed: 1300,
        pagination: {
          type: "bullets",
        },
      },
    },
    slidesPerGroupSkip: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper_controls-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper_controls-next",
      prevEl: ".swiper_controls-prev",
    },
  });
  // Вопросы
  var faqCardOne = document.querySelectorAll(".faq_card");
  var faqCardContentOne = faqCardOne[0].querySelector(
    ".faq_card-content-wrapper"
  );
  faqCardOne[0].classList.add("open");
  if (window.innerWidth < 1200) {
    gsap.to(faqCardContentOne, {
      opacity: 1,
      height: "auto",
      duration: 0.7,
    });
  } else {
    gsap.to(faqCardContentOne, {
      opacity: 1,
      x: 0,
      duration: 0.7,
    });
  }
  document.querySelectorAll(".faq_card").forEach((faqCard) => {
    faqCard.addEventListener("click", function (e) {
      if (
        !e.target.classList.contains("faq_card-content") &&
        !e.target.parentElement.classList.contains("faq_card-content")
      ) {
        let faqCardContent = faqCard.querySelector(".faq_card-content-wrapper");
        if (faqCard.classList.contains("open")) {
          faqCard.classList.remove("open");
          if (window.innerWidth < 1200) {
            gsap.to(faqCardContent, {
              opacity: 0,
              height: 0,
              duration: 0.7,
            });
          } else {
            gsap.to(faqCardContent, {
              opacity: 0,
              x: -20,
              duration: 0.7,
            });
          }
        } else {
          faqCard.classList.add("open");
          if (window.innerWidth < 1200) {
            gsap.to(faqCardContent, {
              opacity: 1,
              height: "auto",
              duration: 0.7,
            });
          } else {
            gsap.to(faqCardContent, {
              opacity: 1,
              x: 0,
              duration: 0.7,
            });
          }
        }
      }
    });
  });
  // Сравнение
  document.querySelectorAll(".no-js").forEach((el) => {
    el.classList.remove("no-js");
  });
  const splitContainers = document.querySelectorAll(".split-container");
  function touchOrMousePosition(event) {
    if (/^touch/.test(event.type)) return event.touches[0].clientX;
    return event.clientX;
  }
  splitContainers.forEach((container) => {
    var positionX = 0;
    var containerPositionX = container.getBoundingClientRect().left;
    var containerWidth = container.clientWidth;
    var active = false;
    const splitContentRight = container.querySelector(".split-content-right");
    const separator = document.createElement("div");
    separator.className = "separator";
    separator.style.marginLeft = "50%";
    container.appendChild(separator);
    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("touchmove", drag, false);
    container.addEventListener("mousemove", drag, false);
    function dragStart(e) {
      containerPositionX = container.getBoundingClientRect().left;
      containerWidth = container.clientWidth;
      positionX = touchOrMousePosition(e) - containerPositionX;
      positionX =
        positionX < 0
          ? 0
          : positionX > containerWidth
          ? containerWidth
          : positionX;
      setClipPath(positionX);
      setSeparator(positionX);
      separator.classList.add("active");
      active = true;
    }
    function drag(e) {
      if (active) {
        e.preventDefault();
        positionX = touchOrMousePosition(e) - containerPositionX;
        positionX =
          positionX < 0
            ? 0
            : positionX > containerWidth
            ? containerWidth
            : positionX;
        setClipPath(positionX);
        setSeparator(positionX);
      }
    }
    function dragEnd(e) {
      separator.classList.remove("active");
      active = false;
    }
    function setClipPath(positionX) {
      const path = `polygon(${positionX}px 0%, 100% 0%, 100% 100%, ${positionX}px 100%)`;
      splitContentRight.style.clipPath = path;
      splitContentRight.style.webkitClipPath = path; // Necessary for Safari (both MacOS and iOS)
    }
    function setSeparator(positionX) {
      separator.style.marginLeft = positionX + "px";
    }
  });
  // Попапы
  var portfolioCardBtn = document.querySelectorAll(".portfolio_card-btn"),
    styleCardBtn = document.querySelectorAll(".stylePopupBtn"),
    popup = document.querySelectorAll(".popup"),
    popupPortfolio = document.querySelector(".portfolio-popup");
  document.querySelectorAll(".popup-scroll").forEach(
    (elem) =>
      new SimpleBar(elem, {
        autoHide: false,
      })
  );
  function checkPopup() {
    for (let i = 0; i < popup.length; i++) {
      if (popup[i].classList.contains("open")) {
        var popupSwiperBig = popup[i].querySelector(".popupSwiperBig");
        if (window.innerWidth > 670) {
          var popupSwiperSmall = popup[i].querySelector(".popupSwiperSmall");
          var swiper = new Swiper(popupSwiperSmall, {
            loop: false,
            spaceBetween: 20,
            slidesPerView: 4,
            freeMode: false,
            watchSlidesProgress: true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
          });
        }
        new Swiper(popupSwiperBig, {
          loop: false,
          spaceBetween: 20,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: swiper,
          },
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
        });
      }
    }
  }
  for (let i = 0; i < portfolioCardBtn.length; i++) {
    portfolioCardBtn[i].addEventListener("click", () => {
      blackout.classList.add("open", "popupBlackout");
      popupPortfolio.classList.add("open");
      disableScroll();
      checkPopup();
    });
  }
  function openPopup(btnStyle, atr) {
    for (let i = 0; i < popup.length; i++) {
      const elemPopup = popup[i];
      if (elemPopup.getAttribute(atr) === btnStyle) {
        blackout.classList.add("open", "popupBlackout");
        elemPopup.classList.add("open");
        disableScroll();
        checkPopup();
      } else {
        elemPopup.classList.remove("open");
      }
    }
  }
  for (let i = 0; i < styleCardBtn.length; i++) {
    var elem = styleCardBtn[i];
    elem.addEventListener("click", (e) => {
      openPopup(e.target.getAttribute("data-style"), "data-style");
    });
  }
  for (let i = 0; i < popup.length; i++) {
    popup[i].addEventListener("click", (e) => {
      if (
        e.target.classList.contains("popup") ||
        e.target.classList.contains("popup-close")
      ) {
        blackout.classList.remove("open", "popupBlackout");
        popup[i].classList.remove("open");
        enableScroll();
      }
    });
  }

  // if (window.innerWidth <= 1100) {
  //   var popupBtnText = document.querySelectorAll(".popup-btn");
  //   for (let i = 0; i < popupBtnText.length; i++) {
  //     const element = popupBtnText[i];
  //     console.log(element.innerHTML);
  //     element.innerHTML = element.innerHTML.split(" ")[0];
  //   }
  // }
});
