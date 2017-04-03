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
		//autoplay: true,
		//autoplaySpeed: 1500,
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
	
		speed: 1000,  // speed you want the toggle to happen
		easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
		changeText: 1, // if you dont want the button text to change, set this to 0
		showText: 'Подробнее',// the button text to show when a div is closed
		hideText: 'Свернуть' // the button text to show when a div is open
	
	});
	

});