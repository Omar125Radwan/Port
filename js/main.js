$(function(){
    'use strict';
    $('.side-icons ul li').on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs-section .tabs-content > section').slideUp(500);
        $($(this).data('class')).slideDown(500);
    });
    $('.circlechart').circlechart();
    $('.testimonials').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
    });
});