$(function () {

    //animate the header

    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $(".features").offset().top
        }, 1000);
    });

    //animate for buttons [ get started, categories ]

    $('.header .cat').click(function () {
        $('html, body').animate({
            scrollTop: $(".cat-logo").offset().top
        }, 1000);
    });

    $('.header .getStarted').click(function () {
        $('html, body').animate({
            scrollTop: $(".special-h3").offset().top
        }, 1000);
    });

    // CHECK ACTIVE for slidebar of enginners 


    var rightArrow = $('.engineers .fa-chevron-right'),
        leftArrow  =  $('.engineers .fa-chevron-left');

    function checkActive(){

        $('.eng:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn() ;
        $('.eng:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn() ;

        }
     checkActive();

    // Create slide show for Engineers

    $('.engineers i').click(function () {

        if($(this).hasClass('fa-chevron-right'))
        {
            $('.engineers .active').fadeOut(100, function (){

                $(this).removeClass('active').next('.eng').addClass('active').fadeIn();

                checkActive();
            });
        }else {
            $('.engineers .active').fadeOut(100, function (){

                $(this).removeClass('active').prev('.eng').addClass('active').fadeIn();

                checkActive();
            });
        }
    })

    // accessibility of categories

    $('.living-box').click(function () {

        $('html, body').animate({
            scrollTop: $('.liv').offset().top
        }, 1000)

    })

    $('.bath-box').click(function () {

        $('html, body').animate({
            scrollTop: $('.bath').offset().top
        }, 1000)

    })

    $('.bed-box').click(function () {

        $('html, body').animate({
            scrollTop: $('.bed').offset().top
        }, 1000)

    })

    $('.light-box').click(function () {

        $('html, body').animate({
            scrollTop: $('.lig').offset().top
        }, 1000)

    })

    // CHECK ACTIVE for slidebar of Living Category 

    var raliving = $('.living .fa-chevron-right'),
        laliving  =  $('.living .fa-chevron-left');

    function checkActiveLiving(){

        $('.living-img:first').hasClass('active') ? laliving.fadeOut() : laliving.fadeIn() ;
        $('.living-img:last').hasClass('active') ? raliving.fadeOut() : raliving.fadeIn() ;

        }
        checkActiveLiving();

    // Create slide show for Living category

    $('.living i').click(function () {

        if($(this).hasClass('fa-chevron-right'))
        {
            $('.living .active').fadeOut(100, function (){

                $(this).removeClass('active').next('.living-img').addClass('active').fadeIn();

                checkActiveLiving();
            });
        }else {
            $('.living .active').fadeOut(100, function (){

                $(this).removeClass('active').prev('.living-img').addClass('active').fadeIn();

                checkActiveLiving();
            });
        }
    })

    // CHECK ACTIVE for slidebar of Pathroom Category 

    var rapath = $('.pathroom .fa-chevron-right'),
        lapath  =  $('.pathroom .fa-chevron-left');

    function checkActiveBathroom(){

        $('.pathroom-img:first').hasClass('active') ? lapath.fadeOut() : lapath.fadeIn() ;
        $('.pathroom-img:last').hasClass('active') ? rapath.fadeOut() : rapath.fadeIn() ;

        }
        checkActiveBathroom();

    // Create slide show for Pathroom category

    $('.pathroom i').click(function () {

        if($(this).hasClass('fa-chevron-right'))
        {
            $('.pathroom .active').fadeOut(100, function (){

                $(this).removeClass('active').next('.pathroom-img').addClass('active').fadeIn();

                checkActiveBathroom();
            });
        }else {
            $('.pathroom .active').fadeOut(100, function (){

                $(this).removeClass('active').prev('.pathroom-img').addClass('active').fadeIn();

                checkActiveBathroom();
            });
        }
    })

    // CHECK ACTIVE for slidebar of Bedroom Category 

    var rabed = $('.bedroom .fa-chevron-right'),
        labed  =  $('.bedroom .fa-chevron-left');

    function checkActiveBedroom(){

        $('.bedroom-img:first').hasClass('active') ? labed.fadeOut() : labed.fadeIn() ;
        $('.bedroom-img:last').hasClass('active') ? rabed.fadeOut() : rabed.fadeIn() ;

        }
        checkActiveBedroom();

    // Create slide show for Bedroom category

    $('.bedroom i').click(function () {

        if($(this).hasClass('fa-chevron-right'))
        {
            $('.bedroom .active').fadeOut(100, function (){

                $(this).removeClass('active').next('.bedroom-img').addClass('active').fadeIn();

                checkActiveBedroom();
            });
        }else {
            $('.bedroom .active').fadeOut(100, function (){

                $(this).removeClass('active').prev('.bedroom-img').addClass('active').fadeIn();

                checkActiveBedroom();
            });
        }
    })

    // CHECK ACTIVE for slidebar of Lighting Category 

    var ralight = $('.lighting .fa-chevron-right'),
        lalight  =  $('.lighting .fa-chevron-left');

    function checkActiveLighting(){

        $('.lighting-img:first').hasClass('active') ? lalight.fadeOut() : lalight.fadeIn() ;
        $('.lighting-img:last').hasClass('active') ? ralight.fadeOut() : ralight.fadeIn() ;

        }
        checkActiveLighting();

    // Create slide show for Lighting category

    $('.lighting i').click(function () {

        if($(this).hasClass('fa-chevron-right'))
        {
            $('.lighting .active').fadeOut(100, function (){

                $(this).removeClass('active').next('.lighting-img').addClass('active').fadeIn();

                checkActiveLighting();
            });
        }else {
            $('.lighting .active').fadeOut(100, function (){

                $(this).removeClass('active').prev('.lighting-img').addClass('active').fadeIn();

                checkActiveLighting();
            });
        }
    })

});
