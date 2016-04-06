/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
	'use strict';

	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style')
		msViewportStyle.appendChild(
			document.createTextNode(
				'@-ms-viewport{width:auto!important}'
			)
		)
		document.querySelector('head').appendChild(msViewportStyle)
	}
})();

$(document).on('change', '.btn-file :file', function() {
	var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {
	
	$('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = $(this).parents('.input-group').find(':text'),
					log = numFiles > 1 ? numFiles + ' files selected' : label;	
			if( input.length ) {
					input.val(log);
			} else {
					if( log ) alert(log);
			}	
	});


	/* Anchors Scroll to ID
	-------------------------------------------------- */
	$(".scroll").on("click",function(a){
		var sectionId = $(this).attr("href");
		var sectionHeight = $(sectionId).position().top - 80;
		$("html, body").animate({scrollTop:sectionHeight},"slow","easeOutBack");
		a.preventDefault();
	})


	/* Toggle Display Scroll to Top
	-------------------------------------------------- */
	$(window).scroll(function(){
		var sectionUp = $(window).scrollTop();
		if (sectionUp>=640) {
			$("#GoUp").animate({scrollTop:"0px"},"slow","easeOutBack");
			$("#GoUp").css("display","block");
		} else {
			$("#GoUp").css("display","none");
		}
	})


	/* Interacción Scroll to Top
	-------------------------------------------------- */
	$("#GoUp").on("click",function(a){
		$("html, body").animate({scrollTop:"0px"},"slow","easeOutBack");
		a.preventDefault();
	})


	/* Interacción Filtros Búsqueda
	-------------------------------------------------- */
	$("a.filter-menu").on("click", function(a){
		$(this).next().toggle("medium");
		$(this).children("span").toggle();
		a.preventDefault();
	})

		/* Interacción Filtros Búsqueda
	-------------------------------------------------- */
	$("a.open-filters").on("click", function(a){
		$(this).next().toggle("medium");
		a.preventDefault();
	})


	/* Interacción Tags Búsqueda
	-------------------------------------------------- */
	$(".tag-close").on("click", function(){
		$(this).parent().hide();
		a.preventDefault();
	})


	$("a.lightbox").fancybox();

	/* Replace all SVG images with inline SVG */
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});

});