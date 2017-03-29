function tweakSlider() {
	var width = $(window).width();
		if (width < 1000) {
			$('.main_menu').css("display", "none");
		}else{
			$('.main_menu').attr('style', '');
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
		slidesToScroll: 4,
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
		adaptiveHeight: true
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
		adaptiveHeight: true
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

});