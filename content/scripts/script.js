var screenWidth = $(window).width();
// $(window).scroll(function(){
// 	scroll = $(window).scrollTop();
// 	if (scroll >= 50) {
// 		$(".navbar").addClass("sticky-header");
// 	}
// 	else {
// 		$(".navbar").removeClass("sticky-header");
// 	}
// });

/* AOS */ 
// $(window).on("load resize", function () {
//     if ($(window).width() > 1199) {
//         AOS.init({
//             disable:"mobile,tablet,phone",
//             duration:1000,
//             once: true
//         });
//     }
// });


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
		loop:true,
		margin:20,
		autoWidth:true,
		dots:true,
		items:3
	});

	$('select').customSelect();

	$("header .nav-link").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = '';
			});
		}
	});

	$('.modal').on('show.bs.modal', function () {
		$("html").addClass("overflow-hidden");
	})
	$('.modal').on('hide.bs.modal', function () {
		$("html").removeClass("overflow-hidden");
	})

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

	$(document).on("click", function(e) {
		
	});
});

$(window).on('resize scroll', function() {
	var hHeight = $("html").height(),
		scrollTop = $(window).scrollTop(),
		percent   = ((scrollTop)/hHeight);

	if(screenWidth >= 1200) {
		if ($('.section-tried-tested').isInViewport()) {
			$(".col-image img").css("border-radius", (percent * 300 )+ "px");
		} else {
			$(".col-image img").css("border-radius", "100px");
		}
	
		if (scrollTop < 80) {
			$(".banner-bg-block img").css("border-radius", "90px");
		} else {
			$(".banner-bg-block img").css("border-radius", (percent * 7000) + "px");
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