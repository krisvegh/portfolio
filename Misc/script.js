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

// $(document).ready(function() {

//     var canvas = document.getElementById('myCanvas');
//     var context = canvas.getContext('2d');
//     var x = canvas.width / 2;
//     var y = canvas.height / 2;
//     var radius = 75;
//     var duration = 90; //frames
//     var percent = 80;
//     var curFrame = 0;
//     var circ = Math.PI * 2;
//     var quart = Math.PI / 2;

//     context.lineWidth = 10;
//     context.strokeStyle = '#ad2323';

//     function animate(currentFrame) {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.beginPath();
//         context.arc(x, y, radius, - (quart), Math.easeOutQuint(currentFrame, -quart, circ/100*percent, duration), false);
//         context.stroke();
//         var nextFrame = curFrame++;
//         console.log(currentFrame / 100);

//         if (curFrame <= duration) {
//             requestAnimationFrame(function () {
//                 animate(nextFrame)
//             });
//         }
//     }

//     animate();
// });



//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35367691-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
