$(document).ready(function() {

    //hide&show attraction section
    $(".hidecard1").click(function() {
        $(".showcard1").fadeIn()
        $(".hidecard1").fadeOut()
    })
    $(".showcard1").click(function() {
        $(".hidecard1").fadeIn()
        $(".showcard1").fadeOut()
    })
    $(".hidecard2").click(function() {
        $(".showcard2").fadeIn()
        $(".hidecard2").fadeOut()
    })
    $(".showcard2").click(function() {
        $(".hidecard2").fadeIn()
        $(".showcard2").fadeOut()
    })
    $(".hidecard3").click(function() {
        $(".showcard3").fadeIn()
        $(".hidecard3").fadeOut()
    })
    $(".showcard3").click(function() {
        $(".hidecard3").fadeIn()
        $(".showcard3").fadeOut()
    })

    // toggle mall section
    $(".hide-1").hover(function() {
        $(".show-1").toggle()
        $(".hide-1").toggle()
    })

    $(".hide-2").hover(function() {
        $(".show-2").toggle()
        $(".hide-2").toggle()
    })

    $(".hide-3").hover(function() {
        $(".show-3").toggle()
        $(".hide-3").toggle()
    })

    $(".hide-4").hover(function() {
        $(".show-4").toggle()
        $(".hide-4").toggle()
    })

    //     window.onload = (event) => {
    if (localStorage.getItem('themes') == 'dark') {
        $('div#bgOverall').toggleClass('bgChange');

    }
    //         console.log('The page has fully loaded');
    //     };

})