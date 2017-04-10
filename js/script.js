function tweakSlider() {
	var width = $(window).width();
	if (width < 1000) {
		$('.main_menu').css("display", "none");
	}else{
		$('.main_menu').attr('style', '');
	}
	
	if (width < 500) {
		$('#index .gallery_fotos').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 1500,
			//autoplay: true,
			//autoplaySpeed: 1500,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			adaptiveHeight: true
		});
	}else{
		//$('#index .gallery_fotos').slick('unslick');
	}
}

$(document).ready(function() {
	
	tweakSlider();

	$('.menu_batton_mob').click(function(){
		if ($('.main_menu').css("display") == "block") {
		   $('.main_menu').slideUp(500);
		}else{
		   $('.main_menu').slideDown(500);
		}
	});
	
	var width_win = $(window).width();
	if (width_win > 999) {
		$('.main_menu li').mouseenter(function(){
			if ($(this).children('.submenu1').css("display") == "none") {
				
				$(this).children('.submenu1').slideDown(500);
				$(this).addClass('open');
			}
		});
		$('.submenu1 li').mouseenter(function(){
			if ($(this).children('.submenu2').css("display") == "none") {
				
				$(this).children('.submenu2').slideDown(500);
				$(this).addClass('open');
			}
		});
		$('.main_menu li').mouseleave(function(){
			if ($(this).children('.submenu1').css("display") == "block") {
				
				$(this).children('.submenu1').slideUp(500);
				$(this).removeClass('open');
				$(this).children('.submenu1').children('li').children('.submenu2').slideUp(500);
				$(this).children('.submenu1').children('li').removeClass('open');
			}
		});
	}else{
		$('.main_menu li').click(function(){
			if ($(this).children('.submenu1').css("display") == "none") {
				
				$(this).children('.submenu1').slideDown(500);
				$(this).addClass('open');
				
				$(function(){
					$(document).on('click', '.main_menu li a', function(e) {
					    var count = $(this).data('count');
					    if(!count) {
						$(this).data('count', 1);
						e.preventDefault();
					    }
					});
				});
			}else{
				//$(this).children('.submenu1').slideUp(500);
				//$(this).removeClass('open');
			}
		});
		$('.submenu1 li').click(function(){
			if ($(this).children('.submenu2').css("display") == "none") {
				$(this).children('.submenu2').slideDown(500);
				$(this).addClass('open');
				$(this).parent('.submenu1').slideDown(500);
			}else{
				$(this).children('.submenu2').slideUp(500);
				$(this).removeClass('open');
			}
		});
		$('.menu_batton_mob').click(function(){
			if ($('.main_menu').css("display") == "block") {
				
				$('.main_menu').children('li').children('.submenu1').slideUp(500);
				$('.main_menu').children('li').removeClass('open');
				$('.main_menu').children('li').children('.submenu1').children('li').children('.submenu2').slideUp(500);
				$('.main_menu').children('li').children('.submenu1').children('li').removeClass('open');
			}
		});
	}
	
	
	$('.show_more').focus(function(){
		$('.show_more a span').slideDown(500);

	});
	 
	$(window).resize(function(){
	        tweakSlider();
	});
	
	
	$('.karusel_advantages').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
		  {
		    breakpoint: 1750,
		    settings: {
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 1400,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 1000,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	
	$('.karusel_partners').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 10,
		slidesToScroll: 2,
		responsive: [
		  {
		    breakpoint: 1750,
		    settings: {
		      slidesToShow: 8,
		    }
		  },
		  {
		    breakpoint: 1400,
		    settings: {
		      slidesToShow: 6,
		    }
		  },
		  {
		    breakpoint: 1000,
		    settings: {
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 2,
		    }
		  }
		]
	});
	
	$('.reviews_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1500,
		//autoplay: true,
		//autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: true,
		draggable: false,
		responsive: [
		  {
		    breakpoint: 1000,
		    settings: {
		      draggable: true
		    }
		  }
		]
	});
	
	$('.slider_action').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1500,
		//autoplay: true,
		//autoplaySpeed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: true,
	});
	
	
	$('.slider').slick({
		dots: false,
		speed: 1500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 1500,
	});
	/*$(".slider").sudoSlider({
		continuous: true,
		touch: true,
		mouseTouch: true,
		prevNext: true,
		numeric: false,
		effect: "fade",
		//effect: "fadeOutIn",
		pause: 2000,
		speed: 1100,
		//auto:true,
	});*/

	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	
	$('.show_hide').showHide({
	
		speed: 500,  // speed you want the toggle to happen
		easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
		changeText: 1, // if you dont want the button text to change, set this to 0
		showText: 'Подробнее',// the button text to show when a div is closed
		hideText: 'Свернуть' // the button text to show when a div is open
	
	});
	
	
	
	

});