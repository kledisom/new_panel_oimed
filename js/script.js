(function ($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(200).fadeOut(500);
		}
	}


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();



	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		$('.mobile-menu .menu-box').mCustomScrollbar();

		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		// Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

		// Dark Layout Button
		$('.dark-mode .dark-buttons .on').on('click', function () {
			$('.round').addClass('boll-right');
			$('body').addClass('dark-body');
		});

		// Dark Layout Button
		$('.dark-mode .dark-buttons .off').on('click', function () {
			$('.round').removeClass('boll-right');
			$('body').removeClass('dark-body');
		});

	}



	//Hidden Sidebar
	if ($('.hidden-bar').length) {
		var hiddenBar = $('.hidden-bar');
		var hiddenBarOpener = $('.hidden-bar-opener');
		var hiddenBarCloser = $('.hidden-bar-closer');
		$('.hidden-bar-wrapper').mCustomScrollbar();
		$('.hidden-bar .side-menu ul li.dropdown').append('<div class="dropdown-btn"><span class="arrow_carrot-down"></span></div>');

		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			hiddenBar.removeClass('visible-sidebar');
			$('.hidden-bar-opener').removeClass('custom_opener');
			$('.sidenav-list').removeClass('custom_left_sidebar');
			$('.page-wrapper').removeClass('padding_left');
		});

		hiddenBarOpener.on('click', function (e) {
			console.log('working');
			if (hiddenBarOpener.hasClass('custom_opener')) {
				console.log('If');
				hiddenBar.removeClass('visible-sidebar');
				$('.hidden-bar-opener').removeClass('custom_opener');
				$('.sidenav-list').removeClass('custom_left_sidebar');
				$('.page-wrapper').removeClass('padding_left');
			}
			else {
				console.log('else');
				hiddenBar.addClass('visible-sidebar');
				$('.sidenav-list').addClass('custom_left_sidebar');
				$('.hidden-bar-opener').addClass('custom_opener');
				$('.page-wrapper').addClass('padding_left');
			}
		});

		$('.color-layer').on('click', function (e) {
			hiddenBar.removeClass('visible-sidebar');
			$('.hidden-bar-opener').removeClass('custom_opener');
			$('.sidenav-list').removeClass('custom_left_sidebar');
			$('.page-wrapper').removeClass('padding_left');
		})

		$('.menu-dark-layer').on('click', function (e) {
			hiddenBar.removeClass('padding_left');
			$('.page-wrapper').removeClass('padding_left');
		})

	}



	//Header Search
	if ($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function () {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function () {
			$('body').removeClass('search-active');
		});
	}



	//Parallax Scene for Icons
	if ($('.parallax-scene-1').length) {
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-2').length) {
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-3').length) {
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-4').length) {
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($('.parallax-scene-5').length) {
		var scene = $('.parallax-scene-5').get(0);
		var parallaxInstance = new Parallax(scene);
	}



	// Odometer
	if ($(".odometer").length) {
		$('.odometer').appear();
		$('.odometer').appear(function () {
			var odo = $(".odometer");
			odo.each(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.odometerOptions = {
				format: 'd',
			};
		});
	}




	// Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
		});

		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function (e) {
			e.preventDefault();
		});

		//Main Menu Fade Toggle
		$('.main-header .nav-toggler').on('click', function () {
			$('.main-header .main-menu').fadeToggle(300);
		});
	}



	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}



	//Fact Counter + Text Count
	if ($('.count-box').length) {
		$('.count-box').appear(function () {

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function () {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function () {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		}, { accY: 0 });
	}



	//Custom Seclect Box
	if ($('.custom-select-box').length) {
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}



	//Jquery Spinner / Quantity Spinner
	if ($('.quantity-spinner').length) {
		$("input.quantity-spinner").TouchSpin({
			verticalbuttons: true
		});
	}



	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}

	//Tabs Box
	if ($('.market-tabs').length) {
		$('.market-tabs .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).hasClass('active-tab')) {
				return false;
			} else {
				target.parents('.market-tabs').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.market-tabs').find('.tabs-content').find('.tab').css('height, 0');
				target.parents('.market-tabs').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).css('height, auto');
				$(target).addClass('active-tab');
			}
		});
	}

	//LightBox Image
	if ($('.lightbox-image').length) {
		$('.lightbox-image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}

	//LightBox Video
	if ($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
			// disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			iframe: {
				patterns: {
					youtube: {
						index: 'youtube.com',
						id: 'v=',
						src: 'https://www.youtube.com/embed/%id%'
					},
				},
				srcAction: 'iframe_src',
			},
			fixedContentPos: false
		});
	}




	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 1
				},
				1024: {
					items: 1
				},
				1200: {
					items: 1
				},
				1500: {
					items: 1
				}
			}
		});
	}


	// Three Item Carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 3
				},
				1500: {
					items: 3
				}
			}
		});
	}


	// Event Countdown Timer
	if ($('.time-countdown').length) {
		$('.time-countdown').each(function () {
			var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function (event) {
				var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
			});
		});
	}





	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1500);

		});
	}


	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: true,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}


	/* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
	});

	/* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

	$(window).on('load', function () {
		handlePreloader();
	});

})(window.jQuery);

jQuery(document).on('click', '.btn.btn-default.dropdown-toggle', function () {
	jQuery(this).parent().toggleClass('dropdown-active');
});

var ignoreClickOnMeElement5 = document.getElementById('someElementID5');

document.addEventListener('click', function (event) {
	var isClickInsideElement5 = ignoreClickOnMeElement5.contains(event.target);

	if (!isClickInsideElement5) {
		$('.btn.btn-default.dropdown-toggle').parent().removeClass('dropdown-active');
	}
});

