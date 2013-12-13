
$(document).ready(function() {
	$('body').onepage_scroll({
		sectionContainer: 'section',
		easing: 'ease',
		animationTime: 1000,
		pagination: false,
		updateURL: false,
		beforeMove: function(index) {},
		afterMove: function(index) {},
		loop: false,
		responsiveFallback: false
	});
	$('section#welcome h1').fitText(0.75);
	$('section#welcome h2').fitText(2);
	$('section#welcome h3').fitText(6.75);
	$('section#welcome a').fitText(0.75);
});
