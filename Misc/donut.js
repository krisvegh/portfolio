var levels = {
    ps: 95,
    indd: 100,
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

//contructor
function Donut(donutID, percentage) {

    this.canvas = document.getElementById(donutID);
    this.context = this.canvas.getContext('2d');

    this.x = 30;
    this.y = 30;
    this.radius = 20;
    this.duration = 90; //frames
    this.percent = percentage;
    this.curFrame = 0;
    this.circ = Math.PI * 2;
    this.quart = Math.PI / 2;

    this.context.lineWidth = 3;
    this.context.strokeStyle = '9D9D9D';

    var e = this;

    function drawDonut(currentFrame) {
        e.context.clearRect(0, 0, e.canvas.width, e.canvas.height);
        e.context.beginPath();
        e.context.arc(e.x, e.y, e.radius, - (e.quart), Math.easeOutQuint(currentFrame, -e.quart, e.circ/100*e.percent, e.duration), false);
        e.context.stroke();
        var nextFrame = e.curFrame++;
        // console.log(currentFrame / 100);

        if (e.curFrame < e.duration) {
            requestAnimationFrame(function () {
               drawDonut(nextFrame)
            });
        }
   }
   drawDonut();    

};

// Donut.prototype.drawDonut = function(currentFrame) {
//     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     this.context.beginPath();
//     this.context.arc(this.x, this.y, this.radius, - (this.quart), Math.easeOutQuint(currentFrame, -this.quart, this.circ/100*this.percent, this.duration), false);
//     this.context.stroke();
//     var nextFrame = this.curFrame++;
//     // console.log(currentFrame / 100);

//     if (this.curFrame < this.duration) {
//         requestAnimationFrame(function () {
//            drawDonut(nextFrame)
//         });
//     }
// }




$(document).ready(function () {
    $('.skillItems').on('transitionEnd webkitTransitionEnd oTransitionEnd mozTransitionEnd', function(i) {
        ez = i.currentTarget.id;
        new Donut("canvas_" + ez, levels[ez]);
        // console.log(ez, levels[ez]);
    });
});

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


