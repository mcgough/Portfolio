

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

function particlesInit (el) {
	return particlesJS(el, {
	  "particles": {
	    "number": {
	      "value": 110,
	      "density": {
	        "enable": true,
	        "value_area": 800
	      }
	    },
	    "color": {
	      "value": "#ffffff"
	    },
	    "shape": {
	      "type": "circle",
	      "stroke": {
	        "width": 0,
	        "color": "#000000"
	      },
	      "polygon": {
	        "nb_sides": 5
	      },
	      "image": {
	        "src": "img/github.svg",
	        "width": 100,
	        "height": 100
	      }
	    },
	    "opacity": {
	      "value": 0.5,
	      "random": false,
	      "anim": {
	        "enable": false,
	        "speed": 1,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 3,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 40,
	        "size_min": 0.1,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": true,
	      "distance": 150,
	      "color": "#ffffff",
	      "opacity": 0.4,
	      "width": 1
	    },
	    "move": {
	      "enable": true,
	      "speed": 6,
	      "direction": "none",
	      "random": true,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": true,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": false,
	        "mode": "grab"
	      },
	      "onclick": {
	        "enable": false,
	        "mode": "push"
	      },
	      "resize": false
	    },
	    "modes": {
	      "grab": {
	        "distance": 140,
	        "line_linked": {
	          "opacity": 1
	        }
	      },
	      "bubble": {
	        "distance": 400,
	        "size": 40,
	        "duration": 2,
	        "opacity": 8,
	        "speed": 3
	      },
	      "repulse": {
	        "distance": 200,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	});
}

// var opaque = 'opaque';

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
		.addTo(controller);
	});


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

	$('nav .content-link a').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		// scrollEffect($(id).parent(),1000);
		 $('html, body').animate({
        scrollTop: $(id).parent().offset().top
    }, 1000);
	});


	particlesInit("int-header");
	particlesInit("contact");
	welcome();
	chevronClick();
	openNav();
	closeNavbar();

});



