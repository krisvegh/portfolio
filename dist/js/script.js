function getRotationDegrees(t){var e,n=t.css("-webkit-transform")||t.css("-moz-transform")||t.css("-ms-transform")||t.css("-o-transform")||t.css("transform");if("none"!==n){var o=n.split("(")[1].split(")")[0].split(","),s=o[0],a=o[1];e=Math.round(Math.atan2(a,s)*(180/Math.PI))}else e=0;return 0>e?e+360:e}function buttonsON(){$(".navButton").on("click",function(t){t.preventDefault(),href=$(this).attr("href"),hideMenu(),changeMiddleImage(href),showPageTitle(href),showContent(href),buttonsOFF()}),$("#skillsButton").on("click",function(t){showSkills()}),$("#backButton").on("click",function(t){t.preventDefault(),showMenu(),hideContent(),buttonsOFF(),hidePageTitle()}),$("#cvButton").off("click")}function buttonsOFF(){$(".navButton").off("click"),$(".navButton").on("click",function(t){t.preventDefault()}),$("#backButton").off("click"),$("#cvButton").off("click")}function animateButtons(t,e){$(".navButton").each(function(){currentDeg=getRotationDegrees($(this)),$(this).css({webkitTransform:"rotate("+(currentDeg+t)+"deg) scale("+e+")",mozTransform:"rotate("+(currentDeg+t)+"deg) scale("+e+")",msTransform:"rotate("+(currentDeg+t)+"deg) scale("+e+")",oTransform:"rotate("+(currentDeg+t)+"deg) scale("+e+")",transform:"rotate("+(currentDeg+t)+"deg) scale("+e+")"})}),$(".icon").each(function(){currentDeg=getRotationDegrees($(this)),$(this).css({webkitTransform:"rotate("+(currentDeg+-t)+"deg)",mozTransform:"rotate("+(currentDeg+-t)+"deg)",msTransform:"rotate("+(currentDeg+-t)+"deg)",oTransform:"rotate("+(currentDeg+-t)+"deg)",transform:"rotate("+(currentDeg+-t)+"deg)"})})}function hideMenu(){animateButtons(180,.1),$(".navButton p").css("opacity","0"),$("#title").fadeOut(400),$("#middle, #backButton").removeClass("scaleToZero"),$("#middle").addClass("shadow")}function showMenu(){animateButtons(-180,1),$(".navButton p").css("opacity","1"),$("#title").fadeIn(1800),$("#middle, #backButton, .skillItems").addClass("scaleToZero"),$("#middle").removeClass("shadow"),$("#c2").removeClass("scaleTo0_8"),$("#c1").removeClass("scaleTo1_2")}function changeMiddleImage(t){$("#middle").css("backgroundImage","url(images/"+t+".svg)")}function showContent(t){$("#"+t).removeClass("scaleToZero")}function hideContent(){$(".contentbox").addClass("scaleToZero")}function showPageTitle(t){$("#title_"+t).addClass("showpagetitle")}function hidePageTitle(){$(".pagetitle").removeClass("showpagetitle")}function breathe(){$(".circles").addClass("animation_breathe"),$("#c1").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(".circles").removeClass("animation_breathe")})}function showSkills(){skills.clearCanvases(),skills.setSkillTexts(),$(".skillItems").each(function(t){var e=$(this);setTimeout(function(){e.removeClass("scaleToZero")},50*t)}),$("#c2").addClass("scaleTo0_8"),$("#c1").addClass("scaleTo1_2")}$(document).ready(function(){buttonsOFF(),$("#accordion").accordion({collapsible:!0,heightStyle:"content",active:!1}),$("#middle").on("mousedown",function(t){breathe()}),$("#cvButton").on("transitionEnd webkitTransitionEnd oTransitionEnd mozTransitionEnd",function(){buttonsON()}),animateButtons(0,1),breathe()});
var levels={ps:95,indd:99,ai:65,html:85,css:90,js:79,php:70,mysql:55,sass:40,fcp:50};Math.easeOutQuint=function(t,n,e,i){return t/=i,t--,e*(t*t*t*t*t+1)+n};var skills=function(){function t(t){return 40>=t?"Intermediate":t>40&&80>t?"Advanced":t>=80?"Expert":void 0}var n={};return n.donutObject=function(t,n){function e(t){i.context.clearRect(0,0,i.canvas.width,i.canvas.height),i.context.beginPath(),i.context.arc(i.x,i.y,i.radius,-i.quart,Math.easeOutQuint(t,-i.quart,i.circ/100*i.percent,i.duration),!1),i.context.stroke();var n=i.curFrame++;i.curFrame<i.duration&&requestAnimationFrame(function(){e(n)})}this.canvas=document.getElementById(t),this.canvas.width=120,this.canvas.height=120,this.canvas.style.width="60px",this.canvas.style.height="60px",this.context=this.canvas.getContext("2d"),this.x=30,this.y=30,this.radius=20,this.duration=90,this.percent=n,this.curFrame=0,this.circ=2*Math.PI,this.quart=Math.PI/2,this.context.lineWidth=3,this.context.strokeStyle="#676767",this.context.scale(2,2);var i=this;e()},n.clearCanvases=function(){$("canvas").each(function(){context=this.getContext("2d"),context.clearRect(0,0,60,60)})},n.setSkillTexts=function(){$(".skillItems").each(function(n,e){id=$(this).attr("id"),$("#"+id+" .skillLevel").html(t(levels[id]))})},n}();$(document).ready(function(){$(".skillItems").on("transitionEnd webkitTransitionEnd oTransitionEnd mozTransitionEnd",function(t){$("#ps").hasClass("scaleToZero")||(ez=t.currentTarget.id,new skills.donutObject("canvas_"+ez,levels[ez]))})}),function(){for(var t=0,n=["ms","moz","webkit","o"],e=0;e<n.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[n[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[e]+"CancelAnimationFrame"]||window[n[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,e){var i=(new Date).getTime(),a=Math.max(0,16-(i-t)),s=window.setTimeout(function(){n(i+a)},a);return t=i+a,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=t}();