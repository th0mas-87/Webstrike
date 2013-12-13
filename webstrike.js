
$(document).ready(function() {
	$('section').css('height', $(window).height() + 'px');
	$('section#welcome h1').fitText(0.75);
	$('section#welcome h2').fitText(2);
	$('section#welcome h3').fitText(6.75);
	$('section#welcome a').fitText(0.75);
	$('section#welcome div').css('padding-top', ($(window).height() - $('section#welcome div').height()) / 2 + 'px');
	$('section#welcome img').css('width', $(window).width() / 20 + 'px');
	$('section#welcome img').css('height', $(window).height() / 20 + 'px');
	$('section#welcome img').css('padding-top', ($(window).height() - $('section#welcome div').outerHeight()) - $(window).height() / 20 * 2.75 + 'px');
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

	$('section#welcome a').click(function() {
		$('body').moveDown();
	});

	$('section#welcome img').click(function() {
		$('body').moveDown();
	});
});

$(window).resize(function() {
	$('section').css('height', $(window).height() + 'px');
	$('section#welcome div').css('padding-top', ($(window).height() - $('section#welcome div').height()) / 2 + 'px');
	$('section#welcome img').css('width', $(window).width() / 20 + 'px');
	$('section#welcome img').css('height', $(window).height() / 20 + 'px');
	$('section#welcome img').css('padding-top', ($(window).height() - $('section#welcome div').outerHeight()) - $(window).height() / 20 * 2.75 + 'px');
});
