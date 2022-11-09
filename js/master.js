document.addEventListener("DOMContentLoaded", () => {
  // Плавный якорь
  function offsetTop(el) {
    var rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop };
  }
  gsap.registerPlugin(ScrollToPlugin);
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      enableScroll();
      const blockID = e.target.getAttribute("href");
      var scrollOffset = offsetTop(document.querySelector(blockID)).top;
      if (window.innerWidth <= 1110) {
        var heightHeader =
          document.querySelector(".header_mobile-cap").offsetHeight;
        scrollOffset -= heightHeader;
      }
      gsap.to(window, { duration: 2.4, scrollTo: scrollOffset });
    });
  }

  // Слайдер
  new Swiper(".certificationSwiper", {
    slidesPerView: "auto",
    resistanceRatio: 0.6,
    pagination: {
      el: ".certificationSwiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".certificationSwiper-button-next",
      prevEl: ".certificationSwiper-button-prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 15,
        autoHeight: true,
      },
      335: {
        spaceBetween: 15,
        autoHeight: false,
      },
      768: {
        spaceBetween: 30,
      },
    },
    speed: 1100,
    observeParents: true,
    observeSlideChildren: true,
    observer: true,
  });
  new Swiper(".priceSwiper", {
    slidesPerView: "auto",
    freeMode: true,
    resistanceRatio: 0.6,
    scrollbar: {
      el: ".priceSwiper-scrollbar",
      sticky: true,
    },
    observeParents: true,
    observeSlideChildren: true,
    observer: true,
  });

  var burger = document.querySelector(".burger"),
    headerMobile = document.querySelector(".header_mobile"),
    headerMobileWindow = document.querySelector(".header_mobile-window"),
    headerMobileLink = document.querySelectorAll(".header_mobile-link");
  function closeMenu() {
    burger.classList.remove("open");
    headerMobile.classList.remove("open");
    gsap.to(headerMobileWindow, {
      height: 0,
      duration: 0.75,
    });
  }
  burger.addEventListener("click", () => {
    if (burger.classList.contains("open")) {
      enableScroll();
      closeMenu();
    } else {
      burger.classList.add("open");
      headerMobile.classList.add("open");
      gsap.to(headerMobileWindow, {
        height: "calc(100vh - 100%)",
        duration: 0.75,
      });
      disableScroll();
    }
  });
  headerMobileLink.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Маска для телефона
  var phoneInputs = document.querySelectorAll("input[data-tel-input]");
  var getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, "");
  };
  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  };
  var onPhoneInput = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

    if (!inputNumbersValue) {
      return (input.value = "");
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }
    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9")
        inputNumbersValue = "7" + inputNumbersValue;
      var firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };
  var onPhoneKeyDown = function (e) {
    var inputValue = e.target.value.replace(/\D/g, "");
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = "";
    }
  };
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener("keydown", onPhoneKeyDown);
    phoneInput.addEventListener("input", onPhoneInput, false);
    phoneInput.addEventListener("paste", onPhonePaste, false);
  }

  // Элементы
  var certificationBtn = document.querySelectorAll(".certification-window"),
    priceTableLink = document.querySelectorAll(".price_table-link");
  popupCertification = document.querySelector(".popup-certification");
  popupForm = document.querySelector(".popup-form");
  const popups = document.querySelectorAll(".popup");
  var check = false;
  let disableScroll = function () {
    let pagePosition = window.scrollY;
    let scroll = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add("disable-scroll");
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + "px";
    document.body.style.paddingRight = scroll + "px";
    check = true;
  };
  let enableScroll = function () {
    if (check) {
      let pagePosition = parseInt(document.body.dataset.position, 10);
      document.body.style.top = "auto";
      document.body.classList.remove("disable-scroll");
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute("data-position");
      document.body.style.paddingRight = 0;
    }
    check = false;
  };
  popups.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("popup") ||
        e.target.classList.contains("popup-close")
      ) {
        popup.classList.remove("open");
        enableScroll();
      }
    });
  });
  certificationBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      popupCertification.querySelector(".popup-certification-img").setAttribute("src", btn.getAttribute("data-cert"));
      popupCertification.classList.add("open");
      disableScroll();
    });
  });
  priceTableLink.forEach((btn) => {
    btn.addEventListener("click", () => {
      popupForm.classList.add("open");
      disableScroll();
    });
  });

  function closePriceControllerWindow() {
    priceControllerField.classList.remove("open");
    priceControllerWindow.classList.remove("open");
    gsap.to(priceControllerWindow, {
      height: 0,
      borderRadius: 0,
      duration: 0.75,
    });
  }

  var priceBtns = document.querySelectorAll(".price_controller-button"),
    priceSwiper = document.querySelectorAll(".priceSwiper");
  priceBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      var elemAttr = btn.getAttribute("name");
      for (let i = 0; i < priceBtns.length; i++) {
        const elem = priceBtns[i];
        if (elem.getAttribute("name") != elemAttr) {
          elem.classList.remove("active");
          elem.classList.remove("hide");
        }
      }
      for (let i = 0; i < priceSwiper.length; i++) {
        const el = priceSwiper[i];
        el.classList.remove();
        if (el.getAttribute("id") != elemAttr) {
          el.classList.remove("active");
        }
      }
      document.querySelector(`#${elemAttr}`).classList.add("active");
      btn.classList.add("active");
      closePriceControllerWindow();
      if (btn.classList.contains("price_controller-text")) {
        btn.classList.add("hide");
        priceControllerField.innerHTML = btn.innerHTML;
      }
    });
  });

  var priceControllerField = document.querySelector(".price_controller-field"),
    priceControllerWindow = document.querySelector(".price_controller-window");
  priceControllerField.addEventListener("click", () => {
    if (priceControllerField.classList.contains("open")) {
      closePriceControllerWindow();
    } else {
      priceControllerField.classList.add("open");
      priceControllerWindow.classList.add("open");
      gsap.to(priceControllerWindow, {
        height: "auto",
        borderRadius: "0 0 5px 5px",
        duration: 0.75,
      });
    }
  });

  var homeBlockSelect = document.querySelector(".home_block-select"),
    homeBlockInput = document.querySelector(".home_block-input"),
    homeBlockWindow = document.querySelector(".home_block-window"),
    homeBlockOptions = document.querySelectorAll(".home_block-option");
  function closeSelect() {
    homeBlockSelect.classList.remove("open");
    gsap.to(homeBlockWindow, {
      height: 0,
      borderRadius: 0,
      duration: 0.75,
    });
  }
  homeBlockSelect.addEventListener("click", () => {
    if (homeBlockSelect.classList.contains("open")) {
      closeSelect();
    } else {
      homeBlockSelect.classList.add("open");
      gsap.to(homeBlockWindow, {
        height: "auto",
        borderRadius: "0 0 5px 5px",
        duration: 0.75,
      });
    }
  });
  homeBlockOptions.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      homeBlockInput.value = btn.innerHTML.trim();
    });
  });
  homeBlockInput.addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
      closeSelect();
    }
  });

  // Свой скролл
  new SimpleBar(document.getElementById("home_block-scroll"), {
    autoHide: false,
  });

  // Отправка формы
  function send(event, php) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    event.target.querySelector("button").disabled = true;
    var req = new XMLHttpRequest();
    req.open("POST", php, true);
    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response);
        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (json.result == "success") {
          // Если сообщение отправлено
          popupRequest.classList.remove("open", "show");
          popupSuccess.classList.add("open", "show");

          event.target.reset();
          event.target.querySelector("button").disabled = false;
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
          event.target.querySelector("button").disabled = false;
        }
        // Если не удалось связаться с php файлом
      } else {
        alert("Ошибка сервера. Повторите отправку");
        event.target.querySelector("button").disabled = false;
      }
    };
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function () {
      alert("Ошибка отправки запроса");
      event.target.querySelector("button").disabled = false;
    };
    req.send(new FormData(event.target));
  }

  let forms = document.querySelectorAll("form"),
    phones = document.querySelectorAll("input[name='phone']");
  for (let i = 0; i < forms.length; i++) {
    const element = forms[i];
    element.addEventListener("submit", (e) => {
      e.preventDefault();
      if (phoneAccess) {
        send(e, e.target.action);
      } else {
        phones.forEach((phone) => {
          phone.parentNode.classList.add("warning");
        });
      }
    });
  }
});
