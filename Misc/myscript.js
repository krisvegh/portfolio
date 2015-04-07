 //fadeinonload
$(window).load (function() {
    // $(".navButton").css('display', 'none');
    // $(".navButton").each(function(i) {
    //     $(this).delay(i * 300).fadeIn();
    // });
});

//Accordion
$(document).ready(function () {
    $("#accordion").accordion({
        collapsible: true, heightStyle: "content", active: false 
    });


    $('.navButton').on('click', function(event) {
        event.preventDefault();
        href = $(this).attr('href');

    });
});


//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35367691-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
