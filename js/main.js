/*! --------------------------------------------------------
	"Tetrabids Technical Test"
	=========================
	version: 0.0.1
	author: Bryan J. Bencomo H.
	email: bjbh415@gmail.com
	date: Feb 2019
----------------------------------------------------------*/

'use strict';

// ===================
//	GENERAL VARIABLES
// ===================

// view components
var viewComponents = [
	{ container: '#main-nav', filename: 'nav' },
	{ container: '#main-header', filename: 'header' },

	// sections //
	{ container: '#section-steps', filename: 'section-steps' },
	{ container: '#section-search', filename: 'section-search' },
	{ container: '#section-experience', filename: 'section-experience' },
	// sections //

	// { container: '#main-footer', filename: 'footer' }
];

// ===================
//	GENERAL FUNCTIONS
// ===================

/**
 * load each view component within the specified container.
 *
 * @param {Array} components
 * 	array.of(object.shape({
 * 		container: string.required,
 * 		viewDir: string.default('view'),
 * 		filename: string.required,
 * 		extensionFile: string.required('.html')
 * 	}))
 *
 */
var loadsViewComponents = function(components, callback) {
	components.forEach(function(component) {
		var currentDir = (component.viewDir || 'view/')
			.concat(component.filename)
			.concat(component.extensionFile || '.html');

		$(component.container).load(currentDir);
	});

	callback();
}

// ======
//	CORE
// ======

// is executed when the document has already loaded
$(document).ready(function() {
	loadsViewComponents(viewComponents, function() {
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
	});

	$('.social-item')
		.mouseover(function(e) {
			$(e.target).css({ "animation" : "" });
		})
		.mouseleave(function(e) {
			$(e.target).css({ "animation" : "0.25s bounce 1" });
		});
});
