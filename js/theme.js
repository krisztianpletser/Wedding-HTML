
$(window).scroll(function() {
	"use strict";
if ($(this).scrollTop() > 930){  
    $('header').addClass("sticky fadeInDown");
  }
  else{
    $('header').removeClass("sticky fadeInDown");
  }
	return false;
});

 // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
		"use strict";
        $('.navbar-toggle:visible').click();
		
		return false;
    });

$(function () {
	"use strict";
    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
               .attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
	return false;
});

