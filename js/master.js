document.addEventListener("DOMContentLoaded", function () {
  // Скролл
  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let href = this.getAttribute("href").substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 100;
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
  // Отключение скролла
  let disableScroll = function () {
    let pagePosition = window.scrollY;
    document.body.classList.add("disable-scroll");
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + "px";
  };
  let enableScroll = function () {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = "auto";
    document.body.classList.remove("disable-scroll");
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute("data-position");
  };
  // Шапка
  const onScrollHeader = () => {
    const header = document.querySelector("header");
    const headerFly = document.querySelector(".header_fly");
    let prevScroll = window.pageYOffset;
    let currentScroll;
    window.addEventListener("scroll", () => {
      currentScroll = window.pageYOffset;
      if (currentScroll > 0) {
        header.classList.add("fly");
      } else {
        header.classList.remove("fly");
      }
      if (currentScroll > 100) {
        headerFly.classList.add("open");
      } else {
        headerFly.classList.remove("open");
      }
      prevScroll = currentScroll;
    });
  };
  onScrollHeader();
  var headerBurger = document.querySelector(".header-burger");
  var headerWindow = document.querySelector(".header-window");
  headerBurger.addEventListener("click", function () {
    if (headerWindow.classList.contains("open")) {
      gsap.to(headerWindow, {
        height: 0,
        opacity: 0,
        duration: 1,
      });
      headerWindow.classList.remove("open");
      enableScroll();
    } else {
      gsap.to(headerWindow, {
        height: "auto",
        opacity: 1,
        duration: 1,
      });
      headerWindow.classList.add("open");
      disableScroll();
    }
  });
  // Список
  let questionsCard = document.querySelectorAll(".questions_card");
  function closeQuestion(elem) {
    elem.classList.remove("open");
    gsap.to(elem.querySelector(".questions_card-window"), {
      height: 0,
      duration: 1,
    });
  }
  for (let i = 0; i < questionsCard.length; i++) {
    const element = questionsCard[i];
    element.addEventListener("click", function () {
      if (element.classList.contains("open")) {
        closeQuestion(element);
      } else {
        for (let j = 0; j < questionsCard.length; j++) {
          const elementClose = questionsCard[j];
          if (i != j) {
            closeQuestion(elementClose);
          }
        }
        element.classList.add("open");
        gsap.to(element.querySelector(".questions_card-window"), {
          height: "auto",
          duration: 1,
        });
      }
    });
  }
  // Попапы
  var body = document.querySelector(".oxh");
  var paddingBody = window
    .getComputedStyle(body, null)
    .getPropertyValue("padding-left");
  var popup = document.querySelectorAll(".popup");
  var feedbackPopup = document.querySelector(".feedback-popup");
  var btnBeedback = document.querySelectorAll(".btn-feedback");
  const scrollSize = window.innerWidth - document.documentElement.clientWidth;
  var distanceRight = Number(paddingBody.replace(/[^0-9]/g, "")) + scrollSize;
  for (let i = 0; i < popup.length; i++) {
    const element = popup[i];
    element.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("popup") ||
        e.target.classList.contains("popup-close")
      ) {
        element.classList.remove("open");
        document.body.style.paddingRight = 0;
        enableScroll();
        setTimeout(function () {
          element.style.display = "none";
        }, 300);
      }
    });
  }
  for (let i = 0; i < btnBeedback.length; i++) {
    const element = btnBeedback[i];
    element.addEventListener("click", function () {
      console.log(distanceRight);
      feedbackPopup.style.display = "flex";
      setTimeout(function () {
        feedbackPopup.classList.add("open");
        document.body.style.paddingRight = `${scrollSize}px`;
        disableScroll();
      }, 300);
    });
  }
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
          for (let i = 0; i < popup.length; i++) {
            const element = popup[i];
            if (!element.classList.contains("popup-success")) {
              gsap.to(element, {
                opacity: 0,
                transform: "translate(0, -20px)",
                duration: 0.2,
              });
              setTimeout(function () {
                element.classList.remove("open");
                element.style.paddingRight = 0;
              }, 200);
            }
          }
          body.classList.add("noSroll");
          body.style.paddingRight = scrollbarWidth + "px";
          cap.style.paddingRight = scrollbarWidth + "px";
          popupSuccess.style.paddingRight = scrollbarWidth + "px";
          blackout.classList.add("open");
          gsap.to(blackout, { opacity: 1, duration: 0.2 });
          popupSuccess.classList.add("open");
          gsap.to(popupSuccess, {
            opacity: 1,
            transform: "translate(0, 0)",
            duration: 0.2,
          });
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

  let forms = document.querySelectorAll("form");
  for (let i = 0; i < forms.length; i++) {
    const element = forms[i];
    element.addEventListener("submit", (e) => {
      send(e, e.target.action);
    });
  }
});
