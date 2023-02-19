document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    disable: 'phone',
    // once: true,
  });
  gsap.registerPlugin(ScrollToPlugin);
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      var offsetT = 0;
      if (window.innerWidth >= 576 && window.innerWidth <= 1180) {
        offsetT = 110;
      } else {
        offsetT = 90;
      }
      if (blockID != '' && blockID != '#') {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: blockID, offsetY: offsetT, autoKill: true },
          ease: 'power2',
        });
        if (headerMobile.classList.contains('open')) {
          burger.classList.remove('anim');
          headerMobile.classList.remove('anim');
          gsap.to(headerMobile.querySelector('.menu'), {
            y: '-120%',
            opacity: 0.4,
            duration: 0.35,
            ease: 'ease',
          });
          gsap.to(headerMobile.querySelector('.blackout'), {
            opacity: 0,
            duration: 0.2,
            ease: 'ease',
          });
          setTimeout(() => {
            headerMobile.classList.remove('open');
          }, 400);
        }
      }
    });
  }

  const burger = document.querySelector('.burger');
  const headerMobile = document.querySelector('.headerMobile');
  burger.addEventListener('click', () => {
    if (!headerMobile.classList.contains('open')) {
      burger.classList.add('anim');
      headerMobile.classList.add('open');
      headerMobile.classList.add('anim');
      gsap.to(headerMobile.querySelector('.menu'), {
        y: '0%',
        opacity: 1,
        duration: 0.35,
        ease: 'ease',
      });
      gsap.to(headerMobile.querySelector('.blackout'), {
        opacity: 1,
        duration: 0.2,
        ease: 'ease',
      });
    } else {
      burger.classList.remove('anim');
      headerMobile.classList.remove('anim');
      gsap.to(headerMobile.querySelector('.menu'), {
        y: '-120%',
        opacity: 0.4,
        duration: 0.35,
        ease: 'ease',
      });
      gsap.to(headerMobile.querySelector('.blackout'), {
        opacity: 0,
        duration: 0.2,
        ease: 'ease',
      });
      setTimeout(() => {
        headerMobile.classList.remove('open');
      }, 400);
    }
  });
});
