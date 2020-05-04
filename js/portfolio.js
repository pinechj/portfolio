//JavaScript Document

$(function() {
	new fullpage('#fullpage', {
		navigation: true,
		scrollOverflow: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
		afterLoad: function(origin, destination, direction) {
			var loadeSection = this;
			
			//using anchorLink
			if(origin.anchor == 'secondPage' && direction == 'down') {
				$('#fp-nav').stop().animate({opacity: 0}, 100);
			} else if (origin.anchor == 'fifthPage' && direction == 'up') {
				$('#fp-nav').stop().animate({opacity: 0}, 100);
			} else {
				$('#fp-nav').stop().animate({opacity: 1}, 100);
			}
		}
	});
	
	$('.ul_portfolio').mCustomScrollbar({
	  axis:"x",
	  theme:"dark-3",
	  advanced: {autoExpandHorizontalScroll: true}
	});
})


