$(document).ready(function() {
	$("div.content").append("<div class='nav'></div>");
	$(".nav").append("<ul></ul>");
	$("ul").append("<li>Home</li>");
	$("ul").append("<li>Menu</li>");
	$("ul").append("<li>Contact Us</li>");
	
	$("div.content").append("<div class='home'></div>");
	$(".home").append("<h1>The Champagne Terrace</h1>");

	$("div.content").append("<div class='menu'></div>");
	$(".menu").append("<h1>The Menu</h1>");
	$(".menu").append("<img id='WineList' src='images/WineList.png' alt='missing menu'>");
	$(".menu").hide();


 	$("li").eq(0).click(function () {
 		$("div.home").fadeIn();
 		$("div.menu").hide();
 	});

 	$("li").eq(1).click(function () {
 		$("div.home").hide();
 		$("div.menu").fadeIn();

 	});

});

