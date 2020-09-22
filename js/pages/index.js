//index.js
$(function () {

    let sliderSwiper = new Swiper('.islider__container', {
        loop: true,
        // If we need pagination
        pagination: {
            el: '.islider__pag',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.islider__next',
            prevEl: '.islider__prev',
        },
    })
});