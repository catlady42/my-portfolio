$(document).ready(function() {
	// animations
	var animate = ["animated bounceInDown", "animated bounce"];
	// end animation
	var animationEnd =
		"animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";
	// animate header photo caption
	$("#cleo-caption")
		.addClass(animate[0])
		.one(animationEnd, function() {
			$(this).removeClass(animate[0]);
		});

	// variable for got to top button
	var toTop = $("#topBtn");

	// on scroll do some things
	$(window).scroll(function() {
		// heading animation
		$("h3")
			.addClass(animate[1])
			.one(animationEnd, function() {
				$(this).removeClass(animate[1]);
			});

		// back to top function
		var showBtn = $(this).scrollTop();
		// if the user scrolls down x amount of pixels, show the button
		if (showBtn > 120) {
			$(toTop).fadeIn();
		} else {
			$(toTop).fadeOut();
		}
	});

	// what happens when you click the go to top button
	$(toTop).click(function() {
		$("html, body").animate(
			{
				scrollTop: 0
			},
			800
		);
		return false;
	});
});