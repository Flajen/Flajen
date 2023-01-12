document.addEventListener('DOMContentLoaded', () => {
  var tick;
  var progress = 0;
  var currentProgress = 0;
  var isPaused = false;
  const delay = 10000;
  const timeSpeed = 600;
  var historySwiper = new Swiper('.historySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 50,
    speed: timeSpeed,
    loopAdditionalSlides: 3,
    loop: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
  if (window.innerWidth < 1595) {
    historySwiper.destroy(true, true);
    historySwiper = new Swiper('.historySwiper', {
      slidesPerView: 'auto',
      speed: timeSpeed,
      loop: true,
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
      centeredSlides: true,
      effect: 'creative',
      breakpoints: {
        0: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          centeredSlides: true,
          creativeEffect: {
            prev: {
              translate: ['-105%', 0, 0],
            },
            next: {
              translate: ['105%', 0, 0],
            },
          },
        },
        450: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          centeredSlides: true,
          creativeEffect: {
            prev: {
              translate: ['-110%', 0, 0],
            },
            next: {
              translate: ['110%', 0, 0],
            },
          },
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 50,
          creativeEffect: {
            prev: {
              translate: ['-130%', 0, -400],
            },
            next: {
              translate: ['130%', 0, -400],
            },
          },
        },
      },
    });
  }
  historySwiper.on('slideChange', (e) => {
    currentProgress = 0;
    startProgress();
  });
  function nextVideo() {
    document.querySelectorAll('.swiper-slide video').forEach((element) => {
      element.pause();
    });
    document.querySelector('.swiper-slide-active video').currentTime = 0;
    document.querySelector('.swiper-slide-active video').play();
  }
  function completionProgress() {
    progress = currentProgress;
    if (progress <= 100) {
      if (progress === 0) {
        nextVideo();
      }
      progress += 1;
      document.querySelector(
        '.swiper-slide-active .progress-passed'
      ).style.width = progress + '%';
    } else {
      historySwiper.slideNext(timeSpeed);
      progress = 0;
      document.querySelector(
        '.swiper-slide-active .progress-passed'
      ).style.width = progress + '%';
    }
    currentProgress = progress;
  }
  function startProgress() {
    progress = 0;
    clearInterval(tick);
    tick = setInterval(() => completionProgress(), delay / 100);
    isPaused = true;
  }
  var checkVideo = true;
  document.querySelectorAll('.swiper-slide video').forEach((element) => {
    element.addEventListener('loadeddata', () => {
      if (checkVideo) {
        setTimeout(() => startProgress(), 1000);
        checkVideo = false;
      }
    });
  });

  const popup = document.querySelector('.popup');
  var currentSlide;
  historySwiper.on('click', function (e) {
    if (isPaused && e.clickedSlide.classList.contains('swiper-slide-active')) {
      currentSlide = e.clickedSlide;
      clearInterval(tick);
      currentSlide.querySelector('video').pause();
      popup.classList.add('show');
      popup.querySelectorAll('.popup-video').forEach((el) => {
        if (
          el.getAttribute('data-video') ==
          currentSlide.getAttribute('data-video')
        ) {
          el.classList.add('show');
        }
      });
    }
  });
  popup.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('popup-content') ||
      e.target.classList.contains('popup-close')
    ) {
      popup.classList.remove('show');
      currentSlide.querySelector('video').play();
      popup.querySelectorAll('.popup-video').forEach((el) => {
        el.classList.add('show');
      });
      startProgress();
    }
  });
});
// var check;
// var isCheck = false;
// check = setInterval(() => {
//   if (!isCheck) {
//     clearInterval(check);
//   }
//   document.querySelectorAll('.swiper-slide video').forEach((element) => {
//     element.addEventListener('loadeddata', () => {
//       if (element.readyState >= 2) {
//         isCheck = true;
//         startProgress();
//       }
//     });
//   });
//   // document.querySelectorAll('.swiper-slide video').forEach((element) => {
//   //   var playPromise = element.play();
//   //   if (playPromise !== undefined) {
//   //     playPromise
//   //       .then(function () {
//   //         isCheck = true;
//   //         startProgress();
//   //       })
//   //       .catch(function (error) {
//   //         // console.log(error);
//   //       });
//   //   }
//   // });
// }, 1000);
