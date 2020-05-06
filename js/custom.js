$(function () {
	//Back-top

	$('.back-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
	});

	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 20) {
			$('.back-top').fadeIn(500);
		} else {
			$('.back-top').fadeOut(500);
		}

	});

	//preloader
	$(window).on('load', function () {
		$('.preloader').delay(500).fadeOut(500);
	});

	//light2
	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 200) {
			$('.navbar').addClass('light2');
		} else {
			$('.navbar').removeClass('light2');
		}

	});

	//play video
	$(document).ready(function () {
		$('.venobox').venobox();
	});

	//animation scroll js
	var html_body = $('html, body');
	$('.navbar-light .navbar-nav .nav-link').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 0
				}, 1500);
				return false;
			}
		}
	});

	//bg video 
	jQuery(".player").YTPlayer();

	//slick slider
$('.team-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  nextArrow: '.fa-long-arrow-right',
  prevArrow: '.fa-long-arrow-left',	
	 responsive: [
    {
      breakpoint: 576,
      settings: {
      slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 2,
      }
    }
	,
		  {
      breakpoint: 992,
      settings: {
      slidesToShow: 2,
      }
    }
  ]
});

	$('.Honey').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		nextArrow: '.fa-arrow-right',
		prevArrow: '.fa-arrow-left',


		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
    }]
	});


});
