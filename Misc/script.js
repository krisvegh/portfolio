var Donut = {};
var levels = {
    ps: 95,
    indd: 99,
    ai: 65,
    html: 90,
    css: 95,
    js: 85,
    php: 70,
    mysql: 55,
    sass: 55,
    fcp: 60
}

Math.easeInOutQuint = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
};

Math.easeOutQuint = function (t, b, c, d) {
    t /= d;
    t--;
    return c*(t*t*t*t*t + 1) + b;
};

function donut(donutID, percentage) {
    Donut.canvas = document.getElementById(donutID);
    console.log(Donut.canvas);
    Donut.context = Donut.canvas.getContext('2d');

    Donut.x = 30;
    Donut.y = 30;
    Donut.radius = 20;
    Donut.duration = 90; //frames
    Donut.percent = percentage;
    Donut.curFrame = 0;
    Donut.circ = Math.PI * 2;
    Donut.quart = Math.PI / 2;

    Donut.context.lineWidth = 3;
    Donut.context.strokeStyle = '9D9D9D';

    drawDonut();
};

function drawDonut(currentFrame) {
    Donut.context.clearRect(0, 0, Donut.canvas.width, Donut.canvas.height);
    Donut.context.beginPath();
    Donut.context.arc(Donut.x, Donut.y, Donut.radius, - (Donut.quart), Math.easeOutQuint(currentFrame, -Donut.quart, Donut.circ/100*Donut.percent, Donut.duration), false);
    Donut.context.stroke();
    var nextFrame = Donut.curFrame++;
    // console.log(currentFrame / 100);

    if (Donut.curFrame < Donut.duration) {
        requestAnimationFrame(function () {
            drawDonut(nextFrame)
        });
    }
}


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

    $('.skillItems').on('transitionEnd webkitTransitionEnd oTransitionEnd mozTransitionEnd', function(i) {
        ez = i.currentTarget.id;
        donut("canvas_" + ez, 50);
        // donut(ez, levels[ez]);

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
    $('.skillItems').each(function(i) {
        var ez = $(this);
        setTimeout(function() {
            ez.removeClass('scaleToZero');
        }, i*100);
    });

    $('#c2').addClass('scaleTo0_8');
    $('#c1').addClass('scaleTo1_2');
}


//----------DONUTS-----------//


(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// requestAnimationFrame Shim
(function() {
  var requestAnimationFrame =   window.requestAnimationFrame || 
                                window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || 
                                window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();


//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35367691-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
