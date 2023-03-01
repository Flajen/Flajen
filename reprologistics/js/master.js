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

  var faBox = null;
  document.querySelectorAll('button[data-form]').forEach((btn) => {
    btn.addEventListener('click', () => {
      faBox = Fancybox.show(
        [
          {
            src: '#popupContact',
            type: 'inline',
          },
        ],
        {
          dragToClose: false,
          closeButton: false,
        }
      );
    });
  });

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

  function send(event, php) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    event.target.querySelector('button[type="submit"]').disabled = true;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response);
        if (json.result == 'success') {
          event.target.querySelector('button[type="submit"]').disabled = false;
          event.target.reset();
          if (faBox) {
            faBox.close();
          }
          faBox = Fancybox.show(
            [
              {
                src: '#popupSuccess',
                type: 'inline',
              },
            ],
            {
              dragToClose: false,
              closeButton: false,
            }
          );
        } else {
          alert('Ошибка. Сообщение не отправлено');
          event.target.querySelector('button[type="submit"]').disabled = false;
        }
      } else {
        alert('Ошибка сервера. Номер: ' + req.status);
        event.target.querySelector('button[type="submit"]').disabled = false;
      }
    };
    req.onerror = function () {
      alert('Ошибка отправки запроса');
      event.target.querySelector('button[type="submit"]').disabled = false;
    };
    req.send(new FormData(event.target));
  }

  document.querySelectorAll('.popupForm').forEach((form) => {
    console.log(form);
    form.addEventListener('submit', (e) => {
      send(e, e.target.action);
    });
  });

  document.querySelectorAll('button[data-closePopup]').forEach((btn) => {
    btn.addEventListener('click', () => {
      faBox.close();
    });
  });
});
