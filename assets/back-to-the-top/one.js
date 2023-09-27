$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#about').position().top) {
        $('.go-up').fadeIn(500);
    }
    if ($(this).scrollTop() < $('#about').position().top) {
        $('.go-up').fadeOut(500);
    }
});