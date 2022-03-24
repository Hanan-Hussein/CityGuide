$(document).ready(function(){

   /* $(".btn#mode").click(function(event){
        event.preventDefault();
        $("body").css("background", "color:white;");
        
    });*/
    $("#attraction").children().children().hover(function(){
        $(".card-text", this).toggle();
        $(" img", this).toggleClass("on-hover");
    
    
    });
});