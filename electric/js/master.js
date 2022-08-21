document.addEventListener("DOMContentLoaded", () => {
  // Блокировка скролла
  var check = false;
  let disableScroll = function () {
    let pagePosition = window.scrollY,
      widthScroll = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add("disable-scroll");
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + "px";
    document.body.style.paddingRight = widthScroll + "px";
    document.querySelector("header").style.paddingRight = widthScroll + "px";
    if (window.innerWidth > 1200) {
      document.querySelectorAll(".popup").forEach((el) => {
        el.style.paddingRight = widthScroll + "px";
      });
    }
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
      document.querySelector("header").style.paddingRight = 0;
      if (window.innerWidth > 1200) {
        document.querySelectorAll(".popup").forEach((el) => {
          el.style.paddingRight = 0;
        });
      }
    }
    check = false;
  };

  var header = document.querySelector("header"),
    burger = document.querySelector(".header-btn"),
    headerPopup = document.querySelector(".header_popup"),
    headerPopupLink = document.querySelectorAll(".header_popup-nav_link"),
    hideHeaderPopup = "";
  if (window.scrollY > header.offsetHeight / 2) {
    header.classList.add("fly");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > header.offsetHeight / 2) {
      header.classList.add("fly");
    } else {
      header.classList.remove("fly");
    }
  });
  burger.addEventListener("click", () => {
    if (burger.classList.contains("open")) {
      gsap.to(headerPopup, {
        opacity: 0,
        duration: 0.4,
      });
      headerPopup.classList.remove("enabledPopup");
      hideHeaderPopup = setTimeout(() => {
        headerPopup.classList.remove("open");
      }, 700);
    } else {
      headerPopup.classList.add("open", "enabledPopup");
      gsap.to(headerPopup, {
        opacity: 1,
        duration: 0.4,
      });
      clearTimeout(hideHeaderPopup);
    }
    burger.classList.toggle("open");
  });
  headerPopupLink.forEach((link) => {
    link.addEventListener("click", () => {
      gsap.to(headerPopup, {
        opacity: 0,
        duration: 0.4,
      });
      headerPopup.classList.remove("enabledPopup");
      hideHeaderPopup = setTimeout(() => {
        headerPopup.classList.remove("open");
      }, 600);
      burger.classList.toggle("open");
    });
  });
  var btnRequests = document.querySelectorAll(".btnRequest"),
    popups = document.querySelectorAll(".popup"),
    popupRequest = document.querySelector(".popup-request"),
    hidePopup = "";
  popups.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("popup") ||
        e.target.classList.contains("popup-close")
      ) {
        if (popup.classList.contains("open")) {
          gsap.to(popup, {
            opacity: 0,
            duration: 0.4,
          });
          gsap.to(popup.querySelector(".popup-body"), {
            y: -25,
            duration: 0.4,
          });
          popup.classList.remove("enabledPopup");
          hidePopup = setTimeout(() => {
            popup.classList.remove("open");
          }, 700);
        }
        enableScroll();
      }
    });
  });
  btnRequests.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      popupRequest.classList.add("open", "enabledPopup");
      gsap.to(popupRequest, {
        opacity: 1,
        duration: 0.4,
      });
      gsap.to(popupRequest.querySelector(".popup-body"), {
        y: 0,
        duration: 0.4,
      });
      clearTimeout(hidePopup);
      disableScroll();
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
});
