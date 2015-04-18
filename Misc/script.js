//get "transform: rotate" value
function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}

function buttonsON() {
	$('.navButton').on('click', function(event) {
		event.preventDefault();
		href = $(this).attr('href');
		hideMenu();
		changeMiddleImage(href);
		showContent(href);
		buttonsOFF();
	});
};

function buttonsOFF() {
	$('.navButton').off('click');
	$('.navButton').on('click', function(event) {
		event.preventDefault();
	});
}

$(document).ready(function () {
    $("#accordion").accordion({
        collapsible: true, heightStyle: "content", active: false 
    });

    $('#backButton').on('click', function(event) {
        event.preventDefault();
        showMenu();
        hideContent();
    });

    $('#middle').on('mousedown', function(event) {
        breathe();
    });

	$('#cvButton').on('transitionEnd webkitTransitionEnd oTransitionEnd mozTransitionEnd', function() {
		buttonsON();
	});

    animateButtons(0, 1);
    breathe();
    buttonsOFF();
});

function animateButtons(deg, sca) {
    $('.navButton').each(function() {
        currentDeg = getRotationDegrees($(this));
        $(this).css({
            webkitTransform: 'rotate(' + (currentDeg + deg) + 'deg) scale(' + sca + ')',
            mozTransform: 'rotate(' + (currentDeg + deg) + 'deg) scale(' + sca + ')',
            msTransform: 'rotate(' + (currentDeg + deg) + 'deg) scale(' + sca + ')',
            oTransform: 'rotate(' + (currentDeg + deg) + 'deg) scale(' + sca + ')',
            transform: 'rotate(' + (currentDeg + deg) + 'deg) scale(' + sca + ')'
        });
    });

    $('.icon').each(function() {
        currentDeg = getRotationDegrees($(this));
        $(this).css({
            webkitTransform: 'rotate(' + (currentDeg + -deg) + 'deg)',
            mozTransform: 'rotate(' + (currentDeg + -deg) + 'deg)',
            msTransform: 'rotate(' + (currentDeg + -deg) + 'deg)',
            oTransform: 'rotate(' + (currentDeg + -deg) + 'deg)',
            transform: 'rotate(' + (currentDeg + -deg) + 'deg)'
        });
    });
}

function hideMenu() {
    animateButtons(180, 0.1);
    $('.navButton p').css('opacity', '0');
    $('#title').fadeOut(400);
    $('#middle, #backButton').removeClass('scaleToZero');
    $('#middle').addClass('shadow');
}

function showMenu() {
    animateButtons(-180, 1);
    $('.navButton p').css('opacity', '1');
    $('#title').fadeIn(1800);
    $('#middle, #backButton').addClass('scaleToZero');
    $('#middle').removeClass('shadow');
}

function changeMiddleImage(href) {
    $('#middle').css('backgroundImage', 'url(images/' + href + '.svg)');
}

function showContent(content) {
    $('#' + content).removeClass('scaleToZero');
}

function hideContent() {
    $('.contentbox').addClass('scaleToZero');
}

function breathe() {
    $('.circles').addClass('animation_breathe');
    $('#c1').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
        $('.circles').removeClass('animation_breathe');
    })
}


//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35367691-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
