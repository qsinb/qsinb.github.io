/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
[ RESPONSIVE SCRIPTS ]

AUTHOR : NCode.Art
PROJECT : NC-Hold Coming-Soon Page
VERSION : 1.5
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

(function($) {
	"use strict";

	if($("html").hasClass("ie")){
		return true;
	}else{
		$(document).ready(function(e) { mediaQuery(); });
		$(window).resize(function(e) { mediaQuery(); });
	}

})(jQuery);

function mediaQuery(){
	
	enquire.register("only screen and (min-width: 1200px)", {
		match : function() {

		},
		unmatch : function() {
			
		}
	}).register("only screen and (min-width: 980px) and (max-width: 1199px)", {
		match : function() {

		},
		unmatch : function() {
			
		}
	}).register("only screen and (min-width: 768px) and (max-width: 979px)", {
		match : function() {
			
		},
		unmatch : function() {
			
		}
	}).register("only screen and (min-width: 600px) and (max-width: 767px)", {
		match : function() {
			$("html").addClass("mobile-v");
		},
		unmatch : function() {
			$("html").removeClass("mobile-v");
		}
	}).register("only screen and (min-width: 480px) and (max-width: 599px)", {
		match : function() {
			$("html").addClass("mobile-v");
		},
		unmatch : function() {
			$("html").removeClass("mobile-v");
		}
	}).register("only screen and (min-width: 320px) and (max-width: 479px)", {
		match : function() {
			$("html").addClass("mobile-v");
		},
		unmatch : function() {
			$("html").removeClass("mobile-v");
		}
	});
}
