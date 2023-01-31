document.addEventListener('DOMContentLoaded', () => {
  const cardSlides = document.querySelectorAll('.about_card');
  const controlsBtn = document.querySelectorAll('.about-btn');
  var next, prev, active;
  controlsBtn.forEach((btn) => {
    btn.addEventListener('click', (el) => {
      controlsBtn.forEach((btns) => {
        if (btns.classList.contains('next')) {
          next = btns;
        }
        if (btns.classList.contains('prev')) {
          prev = btns;
        }
        if (btns.classList.contains('active')) {
          active = btns;
        }
      });
      cardSlides.forEach((slide) => {
        slide.classList.remove('active');
        if (slide.getAttribute('data-slide') == btn.getAttribute('data-btn')) {
          slide.classList.add('active');
        }
      });
      if (btn.classList.contains('next')) {
        next.classList.add('active');
        next.classList.remove('next');
        prev.classList.add('next');
        prev.classList.remove('prev');
        active.classList.add('prev');
        active.classList.remove('active');
      }
      if (btn.classList.contains('prev')) {
        next.classList.add('prev');
        next.classList.remove('next');
        prev.classList.add('active');
        prev.classList.remove('prev');
        active.classList.add('next');
        active.classList.remove('active');
      }
    });
  });

  function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  const quality_cards = document.querySelectorAll('.quality_card');
  const quality_cardBtns = document.querySelectorAll('.quality_card-btn');
  quality_cardBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      quality_cards.forEach((card) => {
        card.classList.remove('open');
      });
      if (btn.classList.contains('less')) {
        btn.parentElement.parentElement.parentElement.classList.remove('open');
        var scrollId =
          offset(btn.parentElement.parentElement.parentElement).top - 10;
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: scrollId },
        });
      } else {
        btn.parentElement.parentElement.classList.add('open');
        var scrollId =
          offset(
            btn.parentElement.parentElement.querySelector(
              '.quality_card-window'
            )
          ).top - 10;
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: scrollId },
        });
      }
    });
  });

  const home = document.querySelector('.home');
  const header_mobile = document.querySelector('.header_mobile');
  window.addEventListener('scroll', () => {
    if (window.scrollY > home.clientHeight - header_mobile.clientHeight) {
      header_mobile.classList.remove('transparent');
    } else {
      header_mobile.classList.add('transparent');
    }
  });
});
