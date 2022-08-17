document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".homeSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 150,
    // spaceBetween: 80,
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
  function onBlackout() {
    blackout.classList.add("open");
    disableScroll();
  }

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
      blackout.classList.remove("open", "headerBlackout");
    } else {
      headerBtn.classList.add("open");
      headerMenu.classList.add("open");
      blackout.classList.add("open", "headerBlackout");
      document
        .querySelector(".headerBlackout")
        .addEventListener("click", () => {
          headerBtn.classList.remove("open");
          headerMenu.classList.remove("open");
          blackout.classList.remove("open", "headerBlackout");
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

  // Плавный скролл
  document.querySelectorAll("a.navigation").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href").substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector("header").offsetHeight + 20;
      if (scrollTarget) {
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        return;
      }
    });
  });
  // // собираем все якоря; устанавливаем время анимации и количество кадров
  // const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  //   animationTime = 800,
  //   framesCount = 90;

  // anchors.forEach(function (item) {
  //   item.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
  //     let coordY =
  //       document
  //         .querySelector(item.getAttribute("href"))
  //         .getBoundingClientRect().top +
  //       window.pageYOffset -
  //       (headerHight + 20);
  //     // запускаем интервал, в котором
  //     let scroller = setInterval(function () {
  //       // считаем на сколько скроллить за 1 такт
  //       let scrollBy = coordY / framesCount;
  //       // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
  //       // и дно страницы не достигнуто
  //       if (
  //         scrollBy > window.pageYOffset - coordY &&
  //         window.innerHeight + window.pageYOffset < document.body.offsetHeight
  //       ) {
  //         // то скроллим на к-во пикселей, которое соответствует одному такту
  //         window.scrollBy(0, scrollBy);
  //       } else {
  //         // иначе добираемся до элемента и выходим из интервала
  //         window.scrollTo(0, coordY);
  //         clearInterval(scroller);
  //       }
  //       // время интервала равняется частному от времени анимации и к-ва кадров
  //     }, animationTime / framesCount);
  //   });
  // });

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

    observer: true,
    observeParents: true,
    observeSlideChildren: true,
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
        // pagination: {
        //   type: "fraction",
        // },
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

  // var menu = ["Slide 1", "Slide 2", "Slide 3"];
  // var swiper = new Swiper(".swiper-container", {
  //   pagination: {
  //     el: ".swiper-pagination.pagination-bottom, .swiper-pagination.pagination-top",
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + menu[index] + "</span>";
  //     },
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  // Вопросы
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

  // Попапы
  var portfolioCardBtn = document.querySelectorAll(".portfolio_card-btn");
  var popup = document.querySelector(".popup");
  var popupClose = document.querySelectorAll(".popup-close");
  for (let i = 0; i < portfolioCardBtn.length; i++) {
    const element = portfolioCardBtn[i];
    element.addEventListener("click", () => {
      blackout.classList.add("open", "popupBlackout");
      popup.classList.add("open");
      disableScroll();
    });
  }
  for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener("click", () => {
      blackout.classList.remove("open", "popupBlackout");
      popup.classList.remove("open");
      enableScroll();
    });
  }
  var swiper = new Swiper(".popupSwiperSmall", {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: false,
    watchSlidesProgress: true,
  });
  new Swiper(".popupSwiperBig", {
    loop: false,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  blackout.addEventListener("click", () => {
    blackout.classList.remove("open");
    enableScroll();
  });

  new SimpleBar(document.getElementById("popup-scroll"), {
    autoHide: false,
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
});
