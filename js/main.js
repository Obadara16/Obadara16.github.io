
    /*----------------------------------------
          Scroll to top
  ----------------------------------------*/
    function BackToTop() {
        $('.scrolltotop').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 600) {
                $('.scrolltotop').fadeIn();
            } else {
                $('.scrolltotop').fadeOut();
            }
        });
        $(document).scroll(function () {
            var m = $(this).scrollTop();
            if (m > 400) {
                $('.chat-popup').fadeIn();
            } else {
                $('.chat-popup').fadeOut();
            }
        });
    }
    BackToTop();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".header-top-section").addClass("header-top-none");
        } else {
            $(".header-top-section").removeClass("header-top-none");
        }
    });
    
    /*---------------------------------------------------
        AutoComplete Search suggestion
    ------------------------------------------------------*/
    $(function () {
        var availableTags = [
      "Ibadan",
      "Oyo",
      "Osogbo",
      "Lagos",
      "Abuja",
      "Port-Harcourt",
      "Enugu",
      "Akwa-Ibom",
      "Benin",
      "Edo ",
      "Ikeja",
      "Abeokuta",
      "Sokoto",
      "Kaduna",
      "Zamfara",
      "Gombe",
      "Imo",
      "Owerri",
      "Katsina",
      "Kwara",
      "Ilorin",
      "Osun"
    ];
        $("#place-event").autocomplete({
            source: availableTags
        });
    });



    /* ----------------------------------------
          Hide Show Header on Scroll
    ------------------------------------------ */
    function HideShowHeader() {

        var didScroll;
        var lastScrollTop = 0;
        var delta = 50;
        var navbarHeight = 75;
        var navbarHideAfter = navbarHeight

        $(window).scroll(function (event) {
            didScroll = true;
        });

        if ($('.scroll-hide').length > 0) {

            setInterval(function () {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 100);
        }
        return false;

        function hasScrolled() {
            var st = $(this).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta)
                return;

            if (st > lastScrollTop && st > navbarHideAfter) {
                if ($('.scroll-hide').length > 0) {
                    $('header').addClass('hide');
                }
            } else {
                if ($('.scroll-hide').length > 0) {
                    if (st + $(window).height() < $(document).height()) {
                        $('header').removeClass('hide');
                        $('.header.transparent').addClass('scroll');
                    }
                }

                if ($(window).scrollTop() < 300) {
                    $('.header.transparent').removeClass('scroll');
                }
            }

            lastScrollTop = st;
        }
    }
    HideShowHeader();

    /*------------------------------------------
          sticky single listing menu
    -------------------------------------------*/
    $(window).on('load resize', function () {
        var containerWidth = $(".container").width();
        $('.fixed_nav').css('width', containerWidth);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 700) {
            $('.list_menu').addClass('fixed-header');
        } else {
            $('.list_menu').removeClass('fixed-header');
        }
    });

    /*------------------------------------------
          sticky sidebar
    -------------------------------------------*/

    $('#list-sidebar').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 0
    });
    /* ----------------------------------------
          Counter animation
    ------------------------------------------*/
    $('.counter-text').appear(function () {
        var element = $(this);
        var timeSet = setTimeout(function () {
            if (element.hasClass('counter-text')) {
                element.find('.counter-value').countTo();
            }
        });
    });
 
    /*--------------------------------------------
                       Video Player
     --------------------------------------------*/
    $(".player").mb_YTPlayer({
        containment: '#video-wrapper',
        mute: true,
        autoplay: true,
        showControls: false,
        quality: 'hd720'
    });


    $(document).ready(function() {
        "use strict";


        /*-------------------------------------
                Magnific Popup js
        --------------------------------------*/
        $('.popup-yt, .property-yt').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            preloader: true,
        });

        $('a.btn-gallery').on('click', function (event) {
            event.preventDefault();

            var gallery = $(this).attr('href');

            $(gallery).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            }).magnificPopup('open');
        });
        /* -------------------------------------
                   Slider
        -------------------------------------- */

        //Popular place slider one
        var popular_place = new Swiper('.popular-place-wrap.v1', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
            speed: 1000,
            navigation: {
                nextEl: '.popular-next',
                prevEl: '.popular-prev',
            },
            // Responsive breakpoints
            breakpoints: {

                768: {
                    slidesPerView: 1
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
        
        //Partner slider
        var partner_slider = new Swiper('.partner-wrap', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.partner-next',
                prevEl: '.partner-prev',
            },
            // Responsive breakpoints
            breakpoints: {

                575: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });

        /*---------------------------------
                Date Picker
        ------------------------------------*/
        if ($("./*counter*/-widget").length > 0) {
            var countCurrent = $(".counter-widget").attr("data-countDate");
            $(".countdown").downCount({
                date: countCurrent,
                offset: 0
            });
        }

    });
