$(function(){

	'use strict';

 // плавный переход при нажатии на ссылку
	$('a[href^="#"]').click(function(){
		let target = $(this).attr('href');
		$('html, body').animate(
				{
					scrollTop:$(target).offset().top
				},
				800
			);
	});

// что происходит при скроле : верхнее меню стало узкое 
// позиция фиксед
var offset = $('#bottom_header').offset();

$(window).scroll( function(){

	if( $(window).scrollTop() > offset.top ) {
		$('#bottom_header').addClass('fixedNav');
	}else{
		$('#bottom_header').removeClass('fixedNav');
	}
} );



});