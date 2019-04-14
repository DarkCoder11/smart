$('.down-arrow').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
    return false;
});

/*========mobile menu========*/

let toggle = $('.toggle');
let i = 0;
toggle.on('click', function () {
    i++;
    if (i % 2 !== 0) {
        $('.header-content').addClass('open_menu')
    }
    else {
        $('.header-content.open_menu').removeClass('open_menu')
    }
})

$(window).on('resize', function (e) {
    if (e) {
        if ($(window).width() <= 992) {
            $('.toggle').removeClass('d-none');
        }
        if ($(window).width() >= 992) {
            $('.toggle').addClass('d-none')
        }
    }
});


if ($(window).width() <= 992) {
    $('.toggle').removeClass('d-none');
}

if ($(window).width() >= 992) {
    $('.toggle').addClass('d-none')
}