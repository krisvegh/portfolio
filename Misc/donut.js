var levels = {
	ps: 95,
	indd: 100,
	ai: 65,
	html: 90,
	css: 95,
	js: 85,
	php: 70,
	mysql: 55,
	sass: 40,
	fcp: 50
}

Math.easeOutQuint = function (t, b, c, d) {
	t /= d;
	t--;
	return c*(t*t*t*t*t + 1) + b;
};

var skills = (function() {
	var pub = {};

	pub.donutObject = function(donutID, percentage) {
		this.canvas = document.getElementById(donutID);
		this.canvas.width = 120;
		this.canvas.height = 120;
		this.canvas.style.width = "60px";
		this.canvas.style.height = "60px";

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
		this.context.strokeStyle = '#808080';

		this.context.scale(2,2);

		var that = this;

		function drawDonut(currentFrame) {
			that.context.clearRect(0, 0, that.canvas.width, that.canvas.height);
			that.context.beginPath();
			that.context.arc(that.x, that.y, that.radius, - (that.quart), Math.easeOutQuint(currentFrame, - that.quart, that.circ /100 * that.percent, that.duration), false);
			that.context.stroke();
			var nextFrame = that.curFrame++;
			// console.log(currentFrame / 100);

			if (that.curFrame < that.duration) {
				requestAnimationFrame(function () {
				   drawDonut(nextFrame);
				});
			}
			// console.log("Canvas ID: " + that.canvas.id + "; Donut position: " + that.curFrame);
			skills.setSkillTexts(that.canvas.id, (that.curFrame / that.duration * that.percent).toFixed(0));
	   }
	   drawDonut();    
	}

	pub.clearCanvases = function() {
		$('canvas').each(function() {
			context = this.getContext('2d');
			context.clearRect(0, 0, 60, 60);
		});
	}

	pub.setSkillTexts = function(skillID, value) {
		var text = $("#" + skillID).parent().find("p")[1];
		$(text).html(value + "% " + skillLevel(value));
		// console.log(skillLevel(value));
	}

	function skillLevel(value) {
		if (value <= 40) {return "Experienced"};
		if (value > 40 && value < 80) {return "Intermediate"};
		if (value >= 80) {return "Expert"};
	}

	return pub;
}());

$(document).ready(function () {
	$('.skillItems').on('transitionEnd webkitTransitionEnd oTransitionEnd mozTransitionEnd', function(i) {
		if (!$('#ps').hasClass('scaleToZero')) {
			ez = i.currentTarget.id;
			new skills.donutObject("canvas_" + ez, levels[ez]);
		}
	});
});

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
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();