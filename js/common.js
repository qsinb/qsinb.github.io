/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++
AUTHOR : NCode.Art
PROJECT : NC-Hold Coming-Soon Page
VERSION : 2.0
++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

(function($) {
	"use strict";

	$(window).load(function(){
		loader();
	});

	$(document).ready(function() {
		mainBg();
		owlCarouselWidget();
		contactForm();
		notifyMeForm();
		mobileMenu();
		pageTransition();
	});
	
	$(window).resize(function() {

	});

})(jQuery);

/*----------  PAGE-LOADER  ----------*/
function loader(){
    $(".page-loader-wrapper").fadeOut(800);
}

/*----------  PAGES  ----------*/
function pageTransition(){
	var scroll;
	var padding_top;
	var padding_bottom;
	if($("html").hasClass("mobile-v")){
		scroll = false;
		console.log(scroll);
		padding_top = "70px";
		padding_bottom = "70px";

	}
	else{
		scroll = true;
		padding_top = "0";
		padding_bottom = "0";
		console.log(scroll);
	}
	$('#sections-wrapper').fullpage({
		anchors: ['home', 'about_us', 'contact_us', 'whitepaper', 'location'],
		menu: '#menu',
		scrollBar: false,
		css3: true,
		fitToSection: false,
		autoScrolling: scroll,
		paddingTop: padding_top,
		paddingBottom: padding_bottom,
		resize: false
	});
}

/*----------  BACKGROUND  ----------*/
function mainBg(){
	var path = $("#main-wrapper .page-background.background").attr("data-image");
	if($("body").hasClass("single-image")){
		$(".single-image #main-wrapper .page-background.background").css({
			"background-image" : "url("+path+")"
		});	
	}else{
		return false;
	}
}

/*----------  OWL CAROUSEL  ----------*/
function owlCarouselWidget(){
	function strtoArr(arr) {

		if (typeof(arr) == "string" && arr != 'false') {
			var t1 = arr.split('|');
			var t2 = {};
			$.each(t1, function(index, val) {
				var str = val;
				var newarr = str.split(',');
				t2[newarr[0]] = {}
				t2[newarr[0]] = {items: parseInt(newarr[1],10)};
			});
			return t2;
		}else if(arr === 'false'){
			return {};
		}else{
			return false;
		}
	}

	function dataCheck(val){
		return val && val == "true" ? true : false;
	}

	getvar = function (v, default_v, val_type) {
		if (val_type == 'n') {
			return v ? parseInt(v,10) : default_v;
		} 
		if (val_type == 'b') {
			if (v == 'true') { return true; }
			else if (v == 'false') { return false; }
			else { return default_v; }
		}
		if (val_type == 's') {
			if (v == 'false') {
				return false;
			} else {
				return v ? v : default_v;
			};
		}
	}

	if ($(".carousel-widget").length > 0) {
		var carousel = 0;
		$('.carousel-widget').each(function(){

			// SET ID ON ALL OBJECTS
			carousel++;
			var createObj = 'owl'+carousel;
			$(this).css({opacity:0});
			$(this).attr("id", createObj);
			$(this).addClass(createObj);

			var owlobj = $("."+createObj+ " .carousel .owl-carousel");

			var resObj = {
				0    : { items:1 },
				420  : { items:2 },
				600  : { items:3 },
				768  : { items:3 },
				980  : { items:4 }
			}

			var config = {
				center             : getvar($(this).attr('data-center'), false, 'b'),
				mouseDrag		   : getvar($(this).attr('data-mouseDrag'), true, 'b'),
				touchDrag		   : getvar($(this).attr('data-touchDrag'), true, 'b'),
				stagePadding       : getvar($(this).attr('data-stpd'), 0, 'n'),
				items              : getvar($(this).attr('data-items'), 5, 'n'),
				margin             : getvar($(this).attr('data-margin'), 0, 'n'),
				nav                : getvar($(this).attr('data-nav'), false, 'b'),
				dots               : getvar($(this).attr('data-pager'), false, 'b'),
				slideby            : getvar($(this).attr('data-slideby'), 1, 'n'),
				rbase              : getvar($(this).attr('data-rbase'), $(this).parent(), 's'),
				res                : $(this).attr('data-itemrange') ? strtoArr($(this).attr('data-itemrange')) : resObj,
				animOut            : getvar($(this).attr('data-out'), 'fadeOut', 's'),
				animIn             : getvar($(this).attr('data-in'), 'fadeIn', 's'),
				autoplay           : getvar($(this).attr('data-autoplay'), false, 'b'),
				autoplayTimeout    : getvar($(this).attr('data-timeout'), 3000, 'n'),
				autoplayHoverPause : getvar($(this).attr('data-hstop'), true, 'b'),
				loop               : getvar($(this).attr('data-loop'), false, 'b'),
				video              : getvar($(this).attr('data-video'), false, 'b'),
				autoWidth          : getvar($(this).attr('data-awidth'), false, 'b'),
				autoHeight         : getvar($(this).attr('data-hauto'), true, 'b')
			}

			$("."+createObj).animate({opacity:1}, 100, function(){

				 owlobj.owlCarousel({
					center                : config.center,
					mouseDrag 			  : config.mouseDrag,
					touchDrag 			  : config.touchDrag,
					stagePadding          : config.stagePadding,
					items                 : config.items,
					margin                : config.margin,
					nav                   : config.nav,
					dots                  : config.dots,
					slideBy               : config.slideby,
					navText               : ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
					responsiveBaseElement : config.rbase,
					responsive            : config.res,
					loop                  : config.loop,
					video                 : config.video,
					animateOut            : config.animOut, //'slideOutDown',
					animateIn             : config.animIn, //'flipInX',
					autoplay              : config.autoplay,
					autoplayTimeout       : config.autoplayTimeout,
					autoplayHoverPause    : config.autoplayHoverPause,
					autoHeight            : config.autoHeight,
					autoWidth             : config.autoWidth,

					onInitialized: function () {
						owlobj.animate({opacity: 1}, 300);
					}
				});

				$("."+createObj).find('.carousel-btn .prev').on('click', function() { owlobj.trigger('prev.owl.carousel'); });
				$("."+createObj).find('.carousel-btn .next').on('click', function() { owlobj.trigger('next.owl.carousel'); });

			});
		});
	}
}

/*----------  CONTACT-FORM  ----------*/
function contactForm(){
	$('#cntForm').submit(function () {
	    $('#cntForm .error-form').remove();
	    $('#cntForm .success').remove();
	    var hasError = false;
	    $('#cntForm .form-control').each(function () {
	        if (jQuery.trim($(this).val()) === '') {
	        	$(this).addClass('error-box');
	            $(this).parent().append('<span class="error-form animated flash"><i class="fa fa-exclamation-triangle"></i></span>');
	            hasError = true;
	        } else if ($(this).hasClass('email')) {
	            var emailReg = /^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/;
	            if (!emailReg.test(jQuery.trim($(this).val()))) {
	            	$(this).addClass('error-box');
	                $(this).parent().append('<span class="error-form animated flash"><i class="fa fa-exclamation-triangle"></i></span>');
	                hasError = true;
	            }
	        }
	    });
	    if (!hasError) {
	        var formInput = $(this).serialize();
	        $.post($(this).attr('action'), formInput, function (data) {
	        	$("#cntForm input, #cntForm textarea, #cntForm button").attr("disabled", "disabled");
	        	$(".disable").fadeIn('200');
	        	$('#returnmessage').css("opacity", 1);
	        	$('#returnmessage').fadeIn('300');
	            $('#returnmessage').text('Your message has been sent, we will get back to you as soon as possible !');
	            $('#returnmessage').fadeOut(6000);
	            $('#returnmessage').css("opacity", 0);
	            $(".disable").delay(1000).fadeOut(1500, function () {
	            	$("#cntForm input, #cntForm textarea, #cntForm button").removeAttr("disabled");
	            });
	        });
	        $('.form-control').val('');
	    }
	    return false;
	});
	$('#cntForm .form-control').focus(function () {
		$('#cntForm .form-control').removeClass('error-box');
	    $('#cntForm .error-form').remove();
	    $('#cntForm .success').remove();
	});
	$('#cntForm textarea').focus(function () {
		$('#cntForm .form-control').removeClass('error-box');
	    $('#cntForm .error-form').remove();
	    $('#cntForm .success').remove();
	});
}

/*----------  SUBSCRIBE  ----------*/
function notifyMeForm(){
	$("#notifyMe #submit").on( "click", function() {
		 "use strict";
	    $("#notifyMe").notifyMe();
	    $("#notifyMe .error-text").delay(2000).fadeOut(2000);
	});
}

/*----------  MOBILE MENU  ----------*/
function mobileMenu(){
	$("#mobile-icon").on("click", function(){
		$("#cover-page *").removeClass("fadeInUp");
		if($("#cover-page").hasClass("open")){
			$("#cover-page").hide('slide', {direction: 'left'}, 300).removeClass("open");
		}
		else{
			$("#cover-page").show('slide', {direction: 'left'}, 300).addClass("open");	
			if($("#cover-page").hasClass("open")){
				$("#menu .menu-link").on("click", function(){
					$("#cover-page").hide('slide', {direction: 'left'}, 300).removeClass("open");
				});
			}
		}
	});
}