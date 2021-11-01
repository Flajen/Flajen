$(document).ready(function(){
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 120;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
  $('.sale-chart-text').mouseover(function(){
    $(`.sale-chart-logo-detail.${$(this).attr('data-percent')}`).show();
  }).mouseleave(function(){
    $('.sale-chart-logo-detail').hide();
  });
  // Шапка
  var scrollPrev = 0;
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
    if ($(window).width() > '1110'){
  		if ( scrolled > 50) {
        $('nav').css({
          'padding':'10px 0px 10px 0px',
          'background':'rgba(255,255,255,1)',
        });
  		}else {
        $('nav').css({
          'padding':'57px 0px 10px 0px',
          'background':'rgba(255,255,255,0)',
        });
  		}
    } else {
      if ( scrolled > 50) {
        $('nav').css({
          'background':'rgba(255,255,255,1)',
        });
  		}else {
        $('nav').css({
          'background':'rgba(255,255,255,0)',
        });
  		}
    }
		scrollPrev = scrolled;
	});
  var burger = true;
  $('.burger').click(function(){
    if (burger) {
      $('body').css("overflow",'hidden');
      $('nav').css({
        'background':'rgba(255,255,255,1)',
        'height':'100%',
      });
      $('.nav-links').css('display','grid');
      $('.burger-line-one').css({
        'top':'50%',
        '-webkit-transform':'rotate(45deg) translate(0,-50%)',
        'transform':'rotate(45deg) translate(0,-50%)',
      })
      $('.burger-line-two').css({
        'top':'50%',
        '-webkit-transform':'rotate(-45deg) translate(0,-50%)',
        'transform':'rotate(-45deg) translate(0,-50%)',
      })
      $('.burger-line-three').hide();
      burger = false;
    } else {
      $('body').css("overflow",'auto');
      $('nav').css({
        'height':'auto',
      });
      $('.nav-links').hide();
      $('.burger-line-one').css({
        'top':'0',
        '-webkit-transform':'rotate(0) translate(0,0)',
        'transform':'rotate(0) translate(0,0)',
      })
      $('.burger-line-two').css({
        'top':'50%',
        '-webkit-transform':'rotate(0) translate(0,-50%)',
        'transform':'rotate(0) translate(0,-50%)',
      })
      $('.burger-line-three').show();
      burger = true;
    }
  });
  $('.question-btn').click(function(){
    var th = $(this);
    if ($('.question-btn').hasClass('other')) {
      gsap.to($('.other').next(), {
        height: 0,
        margin: 0,
        duration: 0.7,
      });
    }
    if (th.hasClass('check')) {
      $('.other').removeClass('open other').addClass('close');
    } else {
      $('.other').removeClass('open other check').addClass('close');
    }
    if (th.hasClass('check')) {
      gsap.to(th.next(), {
        height: 0,
        margin: 0,
        duration: 0.7,
      });
      th.removeClass('open other check').addClass('close');
    } else {
      gsap.to(th.next(), {
        height: 'auto',
        margin: '20px 0 0 0',
        duration: 0.7,
      });
      th.addClass('open other check').removeClass('close')
    }
  })
  $('.about-slider-btn').click(function(){
    $('.about-slider-btn').removeClass('active');
    $(this).addClass('active')
  })
  function about_one() {
    $('.about-slider-one').removeClass('about-one about-two about-three').addClass('about-one');
    $('.about-slider-two').removeClass('about-one about-two about-three').addClass('about-two');
    $('.about-slider-three').removeClass('about-one about-two about-three').addClass('about-three');
  }
  function about_two() {
    $('.about-slider-one').removeClass('about-one about-two about-three').addClass('about-three');
    $('.about-slider-two').removeClass('about-one about-two about-three').addClass('about-one');
    $('.about-slider-three').removeClass('about-one about-two about-three').addClass('about-two');
  }
  function about_three() {
    $('.about-slider-one').removeClass('about-one about-two about-three').addClass('about-two');
    $('.about-slider-two').removeClass('about-one about-two about-three').addClass('about-three');
    $('.about-slider-three').removeClass('about-one about-two about-three').addClass('about-one');
  }
  function check_about() {
    if ($('.about-btn-one').hasClass('active')) {
      about_one();
    } else if ($('.about-btn-two').hasClass('active')) {
      about_two();
    } else if ($('.about-btn-three').hasClass('active')) {
      about_three();
    }
  }
  $('.about-btn-one').click(function(){
    about_one();
  })
  $('.about-btn-two').click(function(){
    about_two();
  })
  $('.about-btn-three').click(function(){
    about_three();
  })
  $('.about-prev').click(function(){
    if ($('.about-slider-btn.active').hasClass('first')) {
      $('.about-slider-btn.active').removeClass('active');
      $('.about-slider-btn.last').addClass('active');
    } else {
      $('.about-slider-btn.active').removeClass('active').prev().addClass('active');
    }
    check_about();
  })
  $('.about-next').click(function(){
    if ($('.about-slider-btn.active').hasClass('last')) {
      $('.about-slider-btn.active').removeClass('active');
      $('.about-slider-btn.first').addClass('active');
    } else {
      $('.about-slider-btn.active').removeClass('active').next().addClass('active');
    }
    check_about();
  })
  function open_popup() {
    $('.command-popup').show();
    $('.blackout').show();
    if ($(window).width() > '1110'){
      $('body').css('overflow','hidden');
    }
      $('html, body').animate({ scrollTop: $('.command-popup').offset().top - 100 }, 600);
  }
  $('.command-block').click(function(){
    var team_id = $(this).attr('data-command');
    open_popup();
    $('.command-popup-avatar').attr('src', team[`team${team_id}`]['img']).attr('alt', team[`team${team_id}`]['name']);
    $('.popup-telegram').attr('href', team[`team${team_id}`]['telegram']);
    $('.command-popup-name').html(team[`team${team_id}`]['name']);
    $('.command-popup-position').html(team[`team${team_id}`]['position']);
    $('.command-popup-text').html(team[`team${team_id}`]['text']);
  })
  function close_popup() {
    $('.command-popup').hide();
    $('.blackout').hide();
    $('body').css('overflow','auto');
  }
  $('.close-popup').click(function(){
    close_popup()
  });
  $('.blackout').click(function(){
    close_popup()
  });
  var team = {
    "team1": {
      "img": "img/team1.png",
      "telegram": "32",
      "name": "Наталья Вайнер",
      "position": "Генеральный директор, совладелец",
      "text": "Управленец с 13-летним стажем, Наталья Вайнер выпускница Международного университета финансов и управления. С 2009 года является основателем и куратором проектов в сфере спорта и здорового образа жизни, внедряющих инновационно-научный подход в оздоровительные программы для широкой разновозрастной аудитории.",
    },
    "team2": {
      "img": "img/team2.png",
      "telegram": "3232",
      "name": "София Берг",
      "position": "Научный медицинский куратор",
      "text": "София Берг обладает 40-летним опытом в медицинской диагностике и врачебной практике. Кандидат медицинских наук. Прошла путь от провизора до врача. Имеет обширные знания и опыт в методах лабораторной и клинической диагностики, совмещая интегративные и врачебные методологии, владеет инновационными методиками диагностики и установления причин возникающих заболеваний.",
    },
    "team3": {
      "img": "img/team3.png",
      "telegram": "232",
      "name": "Каролина Хартманн",
      "position": "Маркетолог, продакт-менеджер",
      "text": "Каролина — творческий человек, последние 12 лет занимается реализацией продвижения крупных интернет-проектов и выстраиванием маркетинговых стратегий различных фин-тех компаний: Medical TRAST, COSMO-Z, Argentumpro. Постоянно совершенствует свои навыки маркетолога, внедряя современные тенденции в свою профессиональную деятельность.",
    },
    "team4": {
      "img": "img/team4.png",
      "telegram": "323",
      "name": "Николас Фридман",
      "position": "Веб-разработчик",
      "text": "Общий стаж в сфере веб-дизайна и веб-разработчика 15 лет. Николас обладает большим опытом работы в качестве главного разработчика, дизайнера проекта и руководителя проекта на таких крупных объектах, как стадион «Сторм» г. Казань, общественно-деловой комплекс «Integro», онлайн проект «SMARTLAB» предлагающем расшифровку медицинских показателей анализов.",
    },
  }
});
