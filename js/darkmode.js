$(document).ready(function() {
    $('#darkMode').click(function(e) {
        e.preventDefault();
        // localStorage.setItem('theme', 'dark');
        // if (localStorage.getItem('theme') == 'dark') {
        $('div#bgOverall').toggleClass('bgChange');
        if ($('div#bgOverall').hasClass('bgChange')) {
            console.log("Sdfsdf");
            localStorage.setItem('themes', 'dark');
        } else {
            localStorage.removeItem("themes");

        }

        // } else {
        //     localStorage.removeItem('theme');


        // }
        // console.log("sdfsfd");
    });
});