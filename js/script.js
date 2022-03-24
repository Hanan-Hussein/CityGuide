$('#portfolioImages').children().children().hover(function() {
    $('a', this).toggle();
    $('img', this).toggleClass('blurry_effect');

});
$('.book').click(function() {
    $(location).prop('href', '../pages/booking.html')


})