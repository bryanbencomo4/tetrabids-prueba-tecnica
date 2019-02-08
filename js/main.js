/*! --------------------------------------------------------
	"Tetrabids Technical Test"
	=========================
	version: 0.0.1
	author: Bryan J. Bencomo H.
	email: bjbh415@gmail.com
	date: Feb 2019
----------------------------------------------------------*/

'use strict';

// ======
//	CORE
// ======

// is executed when the document has already loaded
$(document).ready(function() {
	// Initializes slick
	$('.galery-carousel-body').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
			},
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});

	// special social-items hover
	$('.social-item')
		.mouseover(function(e) {
			$(e.target).css({ "animation" : "" });
		})
		.mouseleave(function(e) {
			$(e.target).css({ "animation" : "0.25s bounce 1" });
		});
});
