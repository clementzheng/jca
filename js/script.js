/*detecting if device is mobile*/

var mobile = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true;
}

if (mobile || $(window).innerWidth()<900) {
	$(".nav_bar").css("display", "none");
	$(".nav_bar_mobile").css("display", "block");
	if ($("#emergency_banner").length) {
		$("#emergency_banner span").css({"width":"100%", "text-align":"center"});
	}
}

if (mobile) {
	$(".container").css("width", "100%");
	$(".container").css("padding", "0 20px");
}

$(window).on('resize', function() {
	if ($(window).innerWidth()<900 || mobile) {
		$(".nav_bar").css("display", "none");
		$(".nav_bar_mobile").css("display", "block");
	} else {
		$(".nav_bar").css("display", "block");
		$(".nav_bar_mobile").css("display", "none");
	}	
});

$(".nav_menu_icon").on('click', function() {
	$(this).parent().find(".nav_content_mobile").toggleClass("active");
	$("#open_nav").toggleClass("active");
	$("#close_nav").toggleClass("active");
});

if ($("#emergency_banner").length) {
	$("#JCA_logo").css("top", "80px");
	$(".nav_bar").css("top", "80px");
	$(".nav_menu_icon").css("top", "80px");
}