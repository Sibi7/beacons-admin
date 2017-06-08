$(document).ready(function () {


    $(".sidebar__head__hamburger").click(function () {
        $('.sidebar').toggleClass("actives");
    });


    $(".sidebar__head__hamburger").click(function () {
        $('.content').toggleClass("active-content");
    });


    $( ".content__header__search a" ).click(function() {
        $( ".content__header__search input" ).toggle( "slow", function() {
            // Animation complete.
        });
    });



});
