
$(document).ready(function() {
	$('body').onepage_scroll({
		sectionContainer: 'section',
		easing: 'ease',
		pagination: true,
		updateURL: false,
		beforeMove: function(index) {},
		afterMove: function(index) {},
		loop: false,
		responsiveFallback: false
	});
});
