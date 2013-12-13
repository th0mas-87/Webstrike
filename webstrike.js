
$(document).ready(function() {
	$('section').css('height', $(window).height() + 'px');
	$('section.white h1').fitText(1.75);
	$('section.white p').fitText(4);
	$('section#welcome h1').fitText(0.75);
	$('section#welcome h2').fitText(2);
	$('section#welcome h3').fitText(6.75);
	$('section#welcome a').fitText(0.75);
	$('section#welcome div').css('padding-top', ($(window).height() - $('section#welcome div').height()) / 2 + 'px');
	$('section#welcome img').css('width', $(window).width() / 20 + 'px');
	$('section#welcome img').css('height', $(window).height() / 20 + 'px');
	$('section#welcome img').css('padding-top', ($(window).height() - $('section#welcome div').outerHeight()) - $(window).height() / 20 * 2.75 + 'px');
	$('section#about div#services h3').fitText(1.125);
	$('section#about div#services span').fitText(1.375);
	$('section#approach h1').fitText(1.25);
	$('section#approach h2').fitText(4.5);
	$('section#approach div').css('padding-top', ($(window).height() - $('section#approach div').height()) / 2 + 'px');
	$('section.white').css('height', $('section.white div#content').height() + 'px');
	$('section.white').css('padding-top', ($(window).height() - $('section.white div#content').height()) / 4);
	$('section.white').css('padding-bottom', ($(window).height() - $('section.white div#content').height()) / 4 * 3);
	$('div#main').onepage_scroll({
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
		$('div#main').moveDown();
	});

	$('section#welcome img').click(function() {
		$('div#main').moveDown();
	});
});

$(window).resize(function() {
	$('section').css('height', $(window).height() + 'px');
	$('section#welcome div').css('padding-top', ($(window).height() - $('section#welcome div').height()) / 2 + 'px');
	$('section#welcome img').css('width', $(window).width() / 20 + 'px');
	$('section#welcome img').css('height', $(window).height() / 20 + 'px');
	$('section#welcome img').css('padding-top', ($(window).height() - $('section#welcome div').outerHeight()) - $(window).height() / 20 * 2.75 + 'px');
	$('section#approach div').css('padding-top', ($(window).height() - $('section#approach div').height()) / 2 + 'px');
	$('section.white').css('padding-top', ($(window).height() - $('section.white div#content').height()) / 4);
	$('section.white').css('padding-bottom', ($(window).height() - $('section.white div#content').height()) / 4 * 3);
});
