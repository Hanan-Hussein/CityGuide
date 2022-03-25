$(document).ready(function() {
    if (localStorage.getItem('themes') == 'dark') {
        $('div#bgOverall').toggleClass('bgChange');

    }
    /* $(".btn#mode").click(function(event){
         event.preventDefault();
         $("body").css("background", "color:white;");
         
     });*/
    $("#attraction").children().children().hover(function() {
        $("#hide", this).toggle();
        $(" img", this).toggleClass("on-hover");


    });
});