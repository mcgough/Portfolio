

function scrollEffect (dist,time) {
	return $("html, body").animate({
			scrollTop: dist
		},time);
}

function introFade(scroll) {
	var scale = scroll * 0.02;
	document.querySelector('.intro-message').style.opacity = 1 - (scroll * 0.0075);
}

function footerFade(scroll) {
	var diff = scroll * -0.0075 + 0.5;
	document.querySelector('#contact .container .row').style.opacity = diff;
}

function closeNavbar () {
	$('.content-link').on('click', function() {
		$('.navbar-collapse').removeClass('in');
		$('.navbar-toggle').removeClass('open');
	});
}

function openNav () {
	$('.navbar-toggle').on('click', function() {
		$('.navbar-toggle').toggleClass('open');
	});
}

function chevronClick () {
	$('.chevron').on('click', function() {
		var dist = $('#about').offset().top;
		scrollEffect(dist,1000);
	});
}

function storageCheck () {
	if (window.localStorage) return true;
}

function welcomeTimer () {
	$welcome = $('.welcome');
	setTimeout(function() {
		$welcome.addClass('active');
	},500);
	setTimeout(function() {
		$welcome.removeClass('active');
	},4500);
}

function randomDraw (options) {
	return Math.floor(Math.random() * options);
}

function welcome () {
	var dialog = {
		firstTimer: "Welcome, I see it's your first time looking at my Portfolio. I'd love to hear what you think!",
		powerUser: [
			"Welcome again, I see you're back for another look. I hope we'll connect soon!",
			"Back again? I'd love to hear what you think. Let's connect!",
			"Stopped by to take another look, huh? Let's connect!"
		]
	};
	if (storageCheck()) {
		var visited = window.localStorage.getItem('visited'),
				$copy = $('.welcome-container .copy');
		if (visited) {
			$copy.text(dialog.powerUser[randomDraw(dialog.powerUser.length)]);
			welcomeTimer();
		} else {
			window.localStorage.setItem('visited',true);
			$copy.text(dialog.firstTimer);
			welcomeTimer();
		}
	}
}

var opaque = 'opaque';

$(function() {

	var controller = new ScrollMagic.Controller(),
			$scrollTop,
		  $footerContact = $('#contact'),
		  $footerDistance,
		  $navBar = $('#myNavBar');

	$('.section').each(function() {
		var id = $(this).attr('id');
		new ScrollMagic.Scene({
			triggerElement: '#' + id,
			triggerHook: 0
		})
		.setPin('#' + id)
		.addIndicators()
		.addTo(controller);
	});

	// var introHeader = new ScrollMagic.Scene({
	// 	triggerElement: '.chevron',
	// 	triggerHook: -100
	// })
	// .setClassToggle('.intro-header','active')
	// .addIndicators()
	// .addTo(controller);


	// var aboutMe = new ScrollMagic.Scene({
	// 	triggerElement: '#about',
	// 	triggerHook: 0
	// })
	// .setPin('#about')
	// .addIndicators()
	// .addTo(controller);

	// var skills = new ScrollMagic.Scene({
	// 	triggerElement: '#skills',
	// 	offset: -100
	// })
	// .setClassToggle('#skills','active')
	// .addIndicators()
	// .addTo(controller);

	$(window).scroll(function() {

		$scrollTop = document.body.scrollTop;
		$footerDistance = $footerContact.offset().top - $scrollTop;

		if ($scrollTop <= 300) {
			introFade($scrollTop);
		}

		footerFade($footerDistance);
		$navBar.addClass('scrolling');
		setTimeout(function () {
			$navBar.removeClass('scrolling');
		},1000);

	});



	welcome();
	chevronClick();
	openNav();
	closeNavbar();

});



