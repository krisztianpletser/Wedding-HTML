//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	"use strict";
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
	return false;
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	"use strict";
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	return false;
});
