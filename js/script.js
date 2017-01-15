function scrollEffect (dist) {
	return $("html, body").animate({ 
			scrollTop: dist 
		});
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

		$scrollTop > 50 ? fadeIn() : fadeOut()
		$footerDistance > 300 ? $footerContact.addClass(opaque) : $footerContact.removeClass(opaque);

		$navBar.addClass('scrolling');
		setTimeout(function () {
			$navBar.removeClass('scrolling');
		},1000);

	})

	closeNavbar();

})
		
