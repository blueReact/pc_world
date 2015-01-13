// JavaScript Document

$( window ).resize(function() { /*resize function makes sure of resolution of device*/   


	var leftHeight = $('.metro_tile_top').height() + $('.metro_tile_bottom').height();
    var leftHeight1=leftHeight + 29;
    $('.metro_tile_right').css({'height':leftHeight1});
	
	var rightHeight_new = $('.metro_tile_last:first-child').height();
    $('.metro_tile_last').css({'height':rightHeight_new});
						
});
$(document).ready(function() {
  
    var leftHeight = $('.metro_tile_top').height() + $('.metro_tile_bottom').height();/*function makes sure on document when ready*/   
    var leftHeight1=leftHeight + 29;
    $('.metro_tile_right').css({'height':leftHeight1});
	
	var rightHeight_new = $('.metro_tile_last:first-child').height();
    $('.metro_tile_last').css({'height':rightHeight_new});
	
	$('.grid_mouse').hover(function(){					   
		$('.grid_hover').show();	
	
	});
	$( ".grid_mouse" ).hover(function() {
		$( this ).addClass( "hover" );
  	});
	$( ".navbar-nav li" ).click(function() {
		$('ul li.active').removeClass('active');
    	$(this).closest('li').addClass('active');
  	});
	$( ".newsletter-wrapper .input-box" ).mouseover(function() {
		$('.button').removeClass('inactive').addClass('active');    
  	});
	$( ".newsletter-wrapper .input-box" ).mouseout(function() {
		$('.button').removeClass('active').addClass('inactive');;    
  	});
	
});
/*nav bar*/
$(document).scroll(function() {    
	var scroll = $(this).scrollTop();
	if (scroll >= $('.navbar').height()) {
		setTimeout('$(".navbar").addClass("navbar-fixed-top navbar-carbon-translucent")');
	}
	else 
	{
		setTimeout('$(".navbar").removeClass("navbar-fixed-top navbar-carbon-translucent")');
	}
});
/*nav bar over*/