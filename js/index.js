document.addEventListener('DOMContentLoaded', () => {
  const questionsCards = document.querySelectorAll('.questions_card');
  const questionsBtns = document.querySelectorAll('.questions_card-btn');
  questionsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const questionsCard = btn.parentNode;
      const questionsWindow = btn.parentNode.querySelector(
        '.questions_card-window'
      );
      if (!questionsCard.classList.contains('open')) {
        for (let i = 0; i < questionsCards.length; i++) {
          const element = questionsCards[i];
          element.classList.remove('open');
          gsap.to(element.querySelector('.questions_card-window'), {
            height: 0,
            duration: 0.5,
          });
        }
        questionsCard.classList.add('open');
        gsap.to(questionsWindow, { height: 'auto', duration: 0.5 });
      } else {
        questionsCard.classList.remove('open');
        gsap.to(questionsWindow, { height: 0, duration: 0.5 });
      }
    });
  });

  const mySlider = document.getElementById('my-slider');
  const sliderValue = document.getElementById('slider-value');
  const calculationCost = document.querySelector('.calculation-cost');
  mySlider.addEventListener('input', slider);
  function slider() {
    valPercent = (mySlider.value / mySlider.max) * 100;
    mySlider.style.background = `linear-gradient(to right, #2CAD43 ${valPercent}%, #D1D5D8 ${valPercent}%)`;
    if (mySlider.value == 0) {
      sliderValue.innerHTML = 'до 100 м<sup>2</sup>';
      calculationCost.innerHTML = 'от 4500 руб.';
    }
    if (mySlider.value == 1) {
      sliderValue.innerHTML = '100 м<sup>2</sup> - 200 м<sup>2</sup>';
      calculationCost.innerHTML = '35 руб./м<sup>2</sup>';
    }
    if (mySlider.value == 2) {
      sliderValue.innerHTML = '200 м<sup>2</sup> - 300 м<sup>2</sup>';
      calculationCost.innerHTML = '30 руб./м<sup>2</sup>';
    }
    if (mySlider.value == 3) {
      sliderValue.innerHTML = '300 м<sup>2</sup> - 400 м<sup>2</sup>';
      calculationCost.innerHTML = '25 руб./м<sup>2</sup>';
    }
    if (mySlider.value == 4) {
      sliderValue.innerHTML = '400 м<sup>2</sup> - 500 м<sup>2</sup>';
      calculationCost.innerHTML = '20 руб./м<sup>2</sup>';
    }
    if (mySlider.value == 5) {
      sliderValue.innerHTML = '500 м<sup>2</sup> - 1000 м<sup>2</sup>';
      calculationCost.innerHTML = '18 руб./м<sup>2</sup>';
    }
    if (mySlider.value == 6) {
      sliderValue.innerHTML = '1000 м<sup>2</sup> - 2000 м<sup>2</sup>';
      calculationCost.innerHTML = '16 руб./м<sup>2</sup>';
    }
    if (mySlider.value == 7) {
      sliderValue.innerHTML = '2000 м<sup>2</sup> - 3000 м<sup>2</sup>';
      calculationCost.innerHTML = '12 руб./м<sup>2</sup>';
    }
    if (mySlider.value == 8) {
      sliderValue.innerHTML = 'более 3000 м<sup>2</sup>';
      calculationCost.innerHTML = '10 руб./м<sup>2</sup>';
    }
  }
  slider();
});
