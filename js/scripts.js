document.addEventListener("DOMContentLoaded", () => {
    $('.peculiarities-sticky-link').click(function(){
        $('.peculiarities-sticky-link').removeClass('active');
        $('.peculiarities-block-wrapper').removeClass('active');
        $(this).addClass('active');
        $(`.${$(this).attr('data-link')}`).addClass('active');
    })
    $('.parallax-window').parallax({imageSrc: 'img/home/pic.png'});
    $('.about-img').parallax({
        imageSrc: 'img/home/about/1.jpg',
        speed: '0.75'
    });
    $('.question-img').parallax({
        imageSrc: 'img/home/question/ph.png',
        speed: '0.75'
    });
    $('.contacts-img').parallax({
        imageSrc: 'img/home/contacts/img.jpg',
        speed: '0.75'
    });
})