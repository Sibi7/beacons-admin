$(document).ready(function () {

    $(document).on('click','.sidebar__head__hamburger', function () {
        $('.sidebar').toggleClass('actives');

    });

    // $(".sidebar__head__hamburger").click(function () {
    //     $('.sidebar').toggleClass("actives");
    // });


    $(".sidebar__head__hamburger").click(function () {
        $('.content').toggleClass("active-content");
    });


    $( ".content__header__search a" ).click(function() {
        $( ".content__header__search input" ).toggle( "slow", function() {
            // Animation complete.
        });
    });

    console.log($(window).width());

    changeSidebar();

    $(window).resize(function () {
        changeSidebar();
    });

    function changeSidebar() {
        if ($(window).width() >= 750){
            $('.sidebar').removeClass("actives");
        }
        else{
            $('.sidebar').addClass("actives");
        }
    }

});

