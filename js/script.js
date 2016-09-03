/*detecting if device is mobile*/

var mobile = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true;
}

if (mobile || $(window).innerWidth()<900) {
	$(".nav_bar").css("display", "none");
	$(".nav_bar_mobile").css("display", "block");
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
	$(".nav_bar").css("top", "60px");
	$(".nav_menu_icon").css("top", "60px");
}