 $(document).ready(function () {


 	var e = $("#section-two .card:first-child").height();
 	var menuHeight = $("header.main-menu-dima").height();
 	$("body").css("margin-top", menuHeight);
 	767 < window.outerWidth && $("#section-two .card").height(e),
 		$(window).resize(function () {
 			$("#section-two .card").height("auto"),
 				$("#section-two .card").height(e),


 				(e = $("#section-two .card:first-child").height()),
 				767 < window.outerWidth && $("#section-two .card").height(e);
 		});


 	if ($(window).width() < 766) {
 		$(".six-boxes img").attr("src", "assets/img/section-promo/hero-promo-ram-mobile.png");
 	} else {
 		$(".six-boxes img").attr("src", "assets/img/section-promo/hero-promo-ram.png");

 	}
 	$(window).resize(function () {

 		menuHeight = $("header.main-menu-dima").height();
 		$("body").css("margin-top", menuHeight);

 		if ($(window).width() < 766) {

 			$(".six-boxes img").attr("src", "assets/img/section-promo/hero-promo-ram-mobile.png");
 		} else {
 			$(".six-boxes img").attr("src", "assets/img/section-promo/hero-promo-ram.png");

 		}
 	});
 	$(".nav-link.mensuel").click(function () {
 		return $("#carousel-journalier").removeClass("fadeIn"), $("#carousel-mensuel").addClass("fadeIn"), $(".nav-link.journalier").removeClass("active"), $(".nav-link.mensuel").addClass("active"), !1;
 	});
 	$(".nav-link.journalier").click(function () {
 		return $("#carousel-journalier").addClass("fadeIn"), $("#carousel-mensuel").removeClass("fadeIn"), $(".nav-link.mensuel").removeClass("active"), $(".nav-link.journalier").addClass("active"), !1;
 	});


 	// Set video mute/unmute toggle

 	$(".home-hero .volume").click(function () {
 		if ($("#heroVideo").prop('muted')) {
 			$("#heroVideo").prop('muted', false);
 			$(".home-hero .volume img").attr("src", "assets/img/layout/volume.png");
 		} else {
 			$("#heroVideo").prop('muted', true);
 			$(".home-hero .volume img").attr("src", "assets/img/layout/mute.png");

 		}

 	});


 })
