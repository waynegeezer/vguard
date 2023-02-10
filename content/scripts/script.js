var screenWidth = $(window).width();
$(window).scroll(function(){
	scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$(".navbar").addClass("sticky-header");
	}
	else {
		$(".navbar").removeClass("sticky-header");
	}
});

/* AOS */ 
$(window).on("load resize", function () {
    if ($(window).width() > 1199) {
		AOS.init({
		disable:"mobile,tablet,phone",
			duration:1000,
			once: true
		});
    }
});

$(document).ready(function() {
    $(".tabs-grid .nav-pills .nav-link").click(function() {
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $(".tabs-grid .slider").css({"left":+ position.left,"width":width});
    });
	setTimeout(function() {
		var actWidth = $(".tabs-grid .nav-pills").find(".active").parent("li").width();
		var actPosition = $(".tabs-grid .nav-pills .active").position();
		$(".tabs-grid .slider").css({"left":+ actPosition.left,"width": actWidth});
	}, 10);


	$('.video-owl-carousel').owlCarousel({
		loop:false,
		margin:20,
		autoWidth:true,
		dots:true,
		items:3,
		responsive:{
			0:{
				margin:15
			},
			768:{
				margin:20
			}
		}
	});

	$('.more-features-carousel').owlCarousel({
		loop:false,
		margin:10,
		dots:false,
		nav:true,
		navText:["<img src='content/images/icons/chevron-down.svg'>","<img src='content/images/icons/chevron-down.svg'>"],
		navSpeed:800,
		smartSpeed:1000,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			}
		}
	});

	// $('select').customSelect();

	$('.modal').on('show.bs.modal', function () {
		$("html").addClass("overflow-hidden");
	});

	$('.modal').on('shown.bs.modal', function () {
		$("body").addClass("modal-open");
	});

	$('.modal').on('hide.bs.modal', function () {
		$("html").removeClass("overflow-hidden");
	});

	$(".navbar-toggler").click(function() {
		$("header").toggleClass("header-open");
		$("body, html").toggleClass("overflow-hidden");
	});

	$("header a").click(function() {
		$("header").removeClass("header-open");
		$("body, html").removeClass("overflow-hidden");
		$(".navbar-toggler").addClass("collapsed");
		$(".navbar-collapse").removeClass("show");
	});

	$(".select-dropdown-active").click(function() {
		$(".select-dropdown-active + .nav-pills").toggleClass("nav-pills-active");
		$(this).toggleClass("active");
	});

	$(".nav-pills .nav-link").click(function() {
		$("#select-dropdown-text").html($(this).text());
		$(".select-dropdown-active + .nav-pills").removeClass("nav-pills-active");
		$(".select-dropdown-active").removeClass("active");
	});

	var activeText = $('.nav-pills .nav-link.active').text();
	$("#select-dropdown-text").html(activeText);

	$(".video-item a").click(function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		var source = document.getElementById('video-iframe');
		source.setAttribute('src', url);
	});

	$('#modal-video').on('hide.bs.modal', function () {
		var source = document.getElementById('video-iframe');
		source.setAttribute('src', "");
	});
});

$(window).on('load resize', function() {
	if(screenWidth >= 1200) {
		// Parallax effect 
		$(".section-banner .banner-gradient").paroller({ factor: 0.2, factorXs: 0, type: 'background', direction: 'vertical' });
		$(".radial-gradient").paroller({ factor: 0.3, factorXs: 0, type: 'background', direction: 'vertical' });
		$(".two-column-gradient-right").paroller({ factor: 0.35, factorXs: 0, type: 'background', direction: 'vertical' });
		$(".two-column-gradient-left").paroller({ factor: 0.2, factorXs: 0, type: 'background', direction: 'vertical' });
		// Tilt
		$('.js-tilt img').tilt({
			maxTilt: 15,
			scale: 1.2,
			perspective: 200,
			speed: 1000,
			transition: true
		});
	}

	var navHeight = $(".navbar").height();
	$("header .nav-link").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top - navHeight
			}, 800);
		}
	});
});

$(window).on('resize scroll', function() {
	var hHeight = $("html").height(),
		scrollTop = $(window).scrollTop(),
		percent = ((scrollTop)/hHeight);

	if(screenWidth >= 1200) {
		if ($('.section-tried-tested').isInViewport()) {
			$(".two-column-full-grid .col-image img").css("border-radius", (percent * 400 )+ "px");
		} else {
			$(".two-column-full-grid .col-image img").css("border-radius", "100px");
		}
	
		if (scrollTop < 120) {
			$(".banner-bg-block img").css("border-radius", "150px");
		} else {
			$(".banner-bg-block img").css("border-radius", (percent * 8000) + "px");
		}
	}

	if ($('footer').isInViewport()) {
		$(".floating-icon-block").fadeOut();
	} else {
		$(".floating-icon-block").fadeIn();
	}
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};