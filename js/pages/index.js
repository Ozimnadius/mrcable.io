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
    });


    $('.sw').on('click', function (e) {
        e.preventDefault();

        let $this = $(this),
            sws = $('.sw'),
            tabs = $('.tab'),
            tab = $(tabs[sws.index($this)]);

        sws.removeClass('active');
        tabs.removeClass('active');
        $this.addClass('active');
        tab.addClass('active');

    });
});