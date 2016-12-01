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
	$(".nav_content_mobile .nav_item .nav_title").css("font-size", "5vw");
	$(".nav_content_mobile .nav_item .nav_title").css("line-height", "6vw");
	$(".nav_content_mobile .nav_item .nav_link").css("font-size", "5vw");
	$(".nav_content_mobile .nav_item .nav_link").css("line-height", "6vw");
	$(".nav_menu_icon").css("width", "6rem");
}

$(window).on('resize', function() {
	if ($(window).innerWidth()<900 || mobile) {
		$(".nav_bar").css("display", "none");
		$(".nav_bar_mobile").css("display", "block");
	} else {
		$(".nav_bar").css("display", "block");
		$(".nav_bar_mobile").css("display", "none");
		$(".content_container").css("top", 0);
	}	
});

$(".nav_menu_icon").on('click', function() {
	$(this).parent().find(".nav_content_mobile").toggleClass("active");
	$("#open_nav").toggleClass("active");
	$("#close_nav").toggleClass("active");
	var h = $(".nav_content_mobile").height();
	$(".content_container").css("top", h+"px");
});

if ($("#emergency_banner").length) {
	$("#JCA_logo").css("top", "80px");
	$(".nav_bar").css("top", "80px");
	$(".nav_menu_icon").css("top", "90px");
}

$('p').each(function(){
	if ($(this).children().length==0) {
	    var string = $(this).html();
	    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
	    $(this).html(string);
	}
});