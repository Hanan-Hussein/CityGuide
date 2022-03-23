$('#portfolioImages').children().children().hover(function() {
    $('p', this).toggle();
    $('img', this).toggleClass('blurry_effect');

});