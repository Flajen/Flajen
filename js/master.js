document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".homeSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 150,
    speed: 9500,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  // Шапка
  var headerHight = document.querySelector("header").clientHeight;
  if (window.scrollY > headerHight) {
    document.querySelector("main").classList.add("top");
    document.querySelector("header").classList.add("fly");
  }
  document.addEventListener("scroll", () => {
    if (window.scrollY > headerHight) {
      document.querySelector("main").classList.add("top");
      document.querySelector("header").classList.add("fly");
    } else {
      document.querySelector("main").classList.remove("top");
      document.querySelector("header").classList.remove("fly");
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
    speed: 1100,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      // clickable: true,
    },
    allowTouchMove: false,
    // pagination: {
    //   el: ".swiper-pagination.one",
    //   type: "fraction",
    // },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

  new Swiper(".photosSwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    slidesPerGroupSkip: 3,
    spaceBetween: 20,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      // clickable: true,
    },
    // allowTouchMove: false,
    // pagination: {
    //   el: ".swiper-pagination.one",
    //   type: "fraction",
    // },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
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
        if (e.target) {
          console.log(1);
        }

        let faqCardContent = faqCard.querySelector(".faq_card-content-wrapper");

        if (faqCard.classList.contains("open")) {
          faqCard.classList.remove("open");
          gsap.to(faqCardContent, {
            opacity: 0,
            x: -20,
            duration: 0.7,
          });
        } else {
          faqCard.classList.add("open");
          gsap.to(faqCardContent, {
            opacity: 1,
            x: 0,
            duration: 0.7,
          });
        }
      }
    });
  });

  // Попапы
  // disableScroll();
  const blackout = document.querySelector(".blackout");
  blackout.addEventListener("click", () => {
    blackout.classList.remove("open");
    enableScroll();
  });

  // Сравнение
  // if (document.querySelector(".comparison")) {
  //   const sliderPage = document.querySelector(".wrapper");
  //   const before = document.querySelector(".before");
  //   const beforeImage = before.querySelector("img");
  //   const change = document.querySelector(".change");
  //   const body = document.body;
  //   let isActive = false;
  //   document.addEventListener("DOMContentLoaded", () => {
  //     let width = sliderPage.offsetWidth;
  //     beforeImage.style.width = `${width}px`;
  //   });
  //   change.addEventListener("mousedown", () => {
  //     isActive = true;
  //   });
  //   body.addEventListener("mouseup", () => {
  //     isActive = false;
  //   });
  //   body.addEventListener("mouseleave", () => {
  //     isActive = false;
  //   });
  //   const beforeAfterSlider = (x) => {
  //     let shift = Math.max(0, Math.min(x, sliderPage.offsetWidth));
  //     before.style.width = `${shift}px`;
  //     change.style.left = `${shift}px`;
  //   };
  //   const pauseEvents = (e) => {
  //     e.stopPropagation();
  //     e.preventDefault();
  //     return false;
  //   };
  //   body.addEventListener("mousemove", (e) => {
  //     if (!isActive) {
  //       return;
  //     }
  //     let x = e.pageX;
  //     x -= sliderPage.getBoundingClientRect().left;
  //     beforeAfterSlider(x);
  //     pauseEvents(e);
  //   });
  //   change.addEventListener("touchstart", () => {
  //     isActive = true;
  //   });
  //   body.addEventListener("touchend", () => {
  //     isActive = false;
  //   });
  //   body.addEventListener("touchcancel", () => {
  //     isActive = false;
  //   });
  //   body.addEventListener("touchmove", (e) => {
  //     if (!isActive) {
  //       return;
  //     }
  //     let x;
  //     let i;
  //     for (i = 0; i < e.changedTouches.length; i++) {
  //       x = e.changedTouches[i].pageX;
  //     }
  //     x -= sliderPage.getBoundingClientRect().left;
  //     beforeAfterSlider(x);
  //     pauseEvents(e);
  //   });
  // }
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
