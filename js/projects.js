$(document).ready(function() {
	$(".left-box").animate({backgroundColor:"rgba(242,242,242,1)"},1000);
	$(".right-box").animate({backgroundColor:"rgba(26,26,26,1)"},1000);

	$(".name").animate({color:"rgba(26,26,26,1)"},1000);
	$(".initial").animate({color:"rgba(242,242,242,1)"},1000);

	$(".nav a").animate({color:"rgba(242,242,242,1)"},1000);	
	

	$(".selected").animate({left:"-210px"},1000);
	$(".selected").animate({color:"rgba(26,26,26,1)"},1000);

	$(".projects").fadeIn(2000);
	$(".contact").fadeIn(2000);
});

$("h2.nav a").hover(function() {
	$(this).animate({color:"rgba(204,204,204,1)"},500);
}, function() {
	$(this).animate({color:"rgba(242,242,242,1)"},500);
});