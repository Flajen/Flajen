document.addEventListener('DOMContentLoaded', () => {
  const btnForm = document.querySelector('.form-btn');
  const steps = [
    {
      step: 'one',
      success: false,
      active: true,
    },
    {
      step: 'two',
      success: false,
      active: false,
    },
    {
      step: 'three',
      success: false,
      active: false,
    },
    {
      step: 'four',
      success: false,
      active: false,
    },
    {
      step: 'five',
      success: false,
      active: false,
    },
  ];
  var currentStep = 0;
  btnForm.addEventListener('click', (e) => {
    if (btnForm.getAttribute('data-submit')) {
      console.log(1);
      document.querySelector('form').reset();
    }
    // e.preventDefault();
    for (let i = 0; i < steps.length; i++) {
      const element = steps[i];
      if (!element.success) {
        if (element.active) {
          element.active = false;
          element.success = true;
          currentStep = i + 1;
        }
      }
    }
    if (steps[currentStep]) {
      var check = currentStep + 1;
      steps[currentStep].active = true;
      const elemWindow = document.querySelector(
        `[data-window="${steps[currentStep].step}"]`
      );
      document
        .querySelector(`[data-step="${steps[currentStep].step}"]`)
        .classList.add('active');
      elemWindow.classList.remove('hide');
      elemWindow.classList.add('active', 'anim');
      elemWindow.previousElementSibling.classList.remove('anim');
      elemWindow.previousElementSibling.classList.add('success');
      setTimeout(() => {
        elemWindow.previousElementSibling.classList.add('hide');
      }, 400);
      if (!steps[check]) {
        btnForm.setAttribute('data-submit', true);
        btnForm.innerHTML = 'Рассчитать стоимость';
      }
    }
  });

  const areaBlock = new SimpleBar(document.querySelector('.area-block'), {
    autoHide: false,
  });
  const areaWrapper = document.querySelector('.area-wrapper');
  const areaResult = document.querySelector('.area-result');
  const areaWindow = document.querySelector('.area-window');
  const areaBtns = document.querySelectorAll('.area-btn');
  const areaInput = document.querySelector('.area-input');
  var areaTime = null;
  function closeArea() {
    areaWrapper.classList.remove('open');
    // gsap.to(areaWindow, { height: 0, duration: 0.4 });
    gsap.to(areaWindow, { opacity: 0, y: -10, duration: 0.4 });
    areaTime = setTimeout(() => {
      areaWindow.classList.add('hide');
    }, 400);
  }
  areaResult.addEventListener('click', () => {
    if (areaWrapper.classList.contains('open')) {
      closeArea();
    } else {
      clearTimeout(areaTime);
      if (areaWindow.classList.contains('hide')) {
        areaWindow.classList.remove('hide');
      }
      areaWrapper.classList.add('open');
      // gsap.to(areaWindow, { height: 'auto', duration: 0.4 });
      gsap.to(areaWindow, { opacity: 1, y: 0, duration: 0.4 });
      areaBlock.recalculate();
    }
  });
  areaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      areaResult.innerHTML = btn.innerHTML.trim();
      areaInput.value = btn.innerHTML.trim();
      closeArea();
    });
  });

  // Маска для телефона
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
});
