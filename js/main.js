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
	// mobile menu toogle
	$("#mobile-menu-toggle").click(function(){
        $(".mobile-menu").toggle("slide");
	});

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

	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
				return false;
				} else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
				};
			});
			}
		}
	});
});
