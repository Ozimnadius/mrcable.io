//index.js
$(function () {

    let sliderSwiper = new Swiper('.islider__container', {
        loop: true,
        spaceBetween: 10,
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

    var revsSwiper = new Swiper('.revs__container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 1,
        // Navigation arrows
        navigation: {
            nextEl: '.revs__next',
            prevEl: '.revs__prev',
        },
        pagination: {
            el: '.revs__pag',
        },


        coverflowEffect: {
            rotate: 0,
            stretch: 160,
            depth: 150,
            modifier: 3,
            slideShadows : false,
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