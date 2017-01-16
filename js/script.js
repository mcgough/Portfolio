function scrollEffect (dist,time) {
	return $("html, body").animate({ 
			scrollTop: dist 
		},time);
}

function fadeIn () {
	$('.intro-message h1').addClass(opaque);
	$('.intro-divider').addClass(opaque);
	$('.intro-social-buttons').addClass(opaque);
	$('.intro-message h3').addClass(opaque);
}

function fadeOut () {
	$('.intro-message h1').removeClass(opaque);
	$('.intro-divider').removeClass(opaque);
	$('.intro-social-buttons').removeClass(opaque);
	$('.intro-message h3').removeClass(opaque);
}

function closeNavbar () {
	$('.content-link').on('click', function() {
		$('.navbar-collapse').removeClass('in');
		$('.navbar-toggle').removeClass('open')
	})
}

function openNav () {
	$('.navbar-toggle').on('click', function() {
		$('.navbar-toggle').toggleClass('open');
	})
}

function chevronClick () {
	$('.chevron').on('click', function() {
		var dist = $('#about').offset().top;
		scrollEffect(dist,1000);
	})
}

var opaque = 'opaque';
		
$(function() {

	var $scrollTop,
		  $footerContact = $('#contact .row'),
		  $footerDistance,
		  $navBar = $('#myNavBar');
	
	$(window).scroll(function() {
		
		$scrollTop = document.body.scrollTop;
		$footerDistance = $footerContact.offset().top - $scrollTop;
		console.log($footerDistance);
		$scrollTop > 50 ? fadeIn() : fadeOut()
		$footerDistance > 450 ? $footerContact.addClass(opaque) : $footerContact.removeClass(opaque);

		$navBar.addClass('scrolling');
		setTimeout(function () {
			$navBar.removeClass('scrolling');
		},1000);

	})

	chevronClick();

	openNav();
	closeNavbar();

})
		
