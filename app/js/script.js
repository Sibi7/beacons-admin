$(document).ready(function () {


    // $('.sidebar__category a').click(function (e) {
    //     $('.sidebar__category a').removeClass('active');
    //     $(this).addClass('active');
    // });

    $(".sidebar__head__hamburger").click(function () {
        $('.sidebar').toggleClass("actives");
    });


    $(".sidebar__head__hamburger").click(function () {
        $('.content').toggleClass("active-content");
    });


});
