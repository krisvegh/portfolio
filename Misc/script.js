$(document).ready(function () {

    buttonsOFF();    
    $("#accordion").accordion({
        collapsible: true, heightStyle: "content", active: false 
    });

    $('#middle').on('mousedown', function(event) {
        breathe();
    });

    $('#cvButton').on('transitionEnd webkitTransitionEnd oTransitionEnd mozTransitionEnd', function() {
        buttonsON();
    });

    animateButtons(0, 1);
    breathe();

});

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
    $('#skillsButton').on('click', function(event) {
        showSkills();
    });

    $('#backButton').on('click', function(event) {
        event.preventDefault();
        showMenu();
        hideContent();
        buttonsOFF();
    });
};

function buttonsOFF() {
	$('.navButton').off('click');
	$('.navButton').on('click', function(event) {
		event.preventDefault();
	});
    $('#backButton').off('click');
}

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
    $('#middle, #backButton, .skillItems').addClass('scaleToZero');
    $('#middle').removeClass('shadow');
    $('#c2').removeClass('scaleTo0_8');
    $('#c1').removeClass('scaleTo1_2');
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

function showSkills() {
    skills.clearCanvases();
    $('.skillItems').each(function(i) {
        var ez = $(this);
        setTimeout(function() {
            ez.removeClass('scaleToZero');
        }, i*100);
    });

    $('#c2').addClass('scaleTo0_8');
    $('#c1').addClass('scaleTo1_2');
}