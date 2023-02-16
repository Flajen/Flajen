document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollToPlugin);
  const anchors = document.querySelectorAll('a[href*="#"]');
  var offsetY;
  if (window.innerWidth > 786) {
    offsetY = 150;
  } else {
    offsetY = 100;
  }
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      if (document.querySelector('.headerMobile').classList.contains('open')) {
        document.querySelector('.headerMobile').classList.remove('open');
        closeHeaderMenu();
      }
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: `${blockID}`, offsetY, autoKill: true },
        ease: 'ease',
      });
    });
  }
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      document.querySelector('.headerMobile').classList.add('fly');
    } else {
      document.querySelector('.headerMobile').classList.remove('fly');
    }
  });
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    document.querySelector('.headerMobile').classList.toggle('open');
    if (!document.querySelector('.headerBlackout').classList.contains('open')) {
      document.querySelector('.headerBlackout').classList.add('open');
      document.querySelector('.headerMenu').classList.add('open');
      setTimeout(() => {
        document.querySelector('.headerBlackout').classList.add('anim');
        document.querySelector('.headerMenu').classList.add('anim');
      }, 10);
    } else {
      closeHeaderMenu();
    }
  });
  function closeHeaderMenu() {
    document.querySelector('.headerBlackout').classList.remove('anim');
    document.querySelector('.headerMenu').classList.remove('anim');
    setTimeout(() => {
      document.querySelector('.headerBlackout').classList.remove('open');
      document.querySelector('.headerMenu').classList.remove('open');
    }, 300);
  }

  var phoneInputs = document.querySelectorAll('input[data-tel-input]');
  var getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  };
  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData('Text');
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
      formattedInputValue = '';
    if (!inputNumbersValue) {
      return (input.value = '');
    }
    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }
    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == '9')
        inputNumbersValue = '7' + inputNumbersValue;
      var firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';
      formattedInputValue = input.value = firstSymbols + ' ';
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };
  var onPhoneKeyDown = function (e) {
    var inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = '';
    }
  };
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }

  const popup = document.querySelectorAll('.popup');
  const popupForm = document.querySelector('.popupForm');
  const openPopup = document.querySelectorAll('[data-openPopup]');
  var check = false;
  let disableScroll = function () {
    let pagePosition = window.scrollY;
    let scroll = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
    document.body.style.paddingRight = scroll + 'px';
    document.querySelector('header').style.paddingRight = scroll + 'px';
    check = true;
  };
  let enableScroll = function () {
    if (check) {
      let pagePosition = parseInt(document.body.dataset.position, 10);
      document.body.style.top = 'auto';
      document.body.classList.remove('disable-scroll');
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute('data-position');
      document.body.style.paddingRight = 0;
      document.querySelector('header').style.paddingRight = 0;
    }
    check = false;
  };

  openPopup.forEach((btn) => {
    btn.addEventListener('click', () => {
      disableScroll();
      popupForm.classList.add('show');
      setTimeout(() => {
        popupForm.classList.add('anim');
      }, 10);
    });
  });

  popup.forEach((popup) => {
    popup.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('wrapper') ||
        e.target.classList.contains('close')
      ) {
        enableScroll();
        popup.classList.remove('anim');
        setTimeout(() => {
          popup.classList.remove('show');
        }, 500);
      }
    });
  });
});
