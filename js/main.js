
$(document).ready(function() {


	// $(".left-box").fadeToggle("slow","linear");
	$(".left-box").show("slide", {easing:"easeOutBounce"},1000);
	$(".right-box").show("slide", {direction:"right", easing:"easeOutBounce"},1000);

	// $(".left-box").animate({height:'80%'}).delay(1000);
	$(".left-box").animate({height:'100%',easing:"easeOutQuart"},6000);
	


	setTimeout(welcome, 2000);
});

function welcome() {

	$(".welcome").show("pulsate",{times:2},3000).delay(1000).fadeOut();
	// $(".welcome").fadeOut();
	setTimeout(nav, 5000);
}

function nav() {
	$(".nav").fadeIn(1000);
	$(".moto").fadeIn(1000);
}

$('.nav').click(function() {

});

function display() {
	$(".left-box").show();
	$(".nav").show();
}