if (localStorage.getItem('themes') == 'dark') {
    $('div#bgOverall').toggleClass('bgChange');

}
$('#portfolioImages').children().children().hover(function() {
    $('a', this).toggle();
    $('img', this).toggleClass('blurry_effect');

});
$('.book').click(function(e) {
    e.preventDefault();
    $(location).prop('href', '../pages/booking.html')
});