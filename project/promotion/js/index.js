$(function(){

	let header = $('.header').offset().top
	let contents = $('.contents').offset().top
	let look = $('.look').offset().top
	let product = $('.product').offset().top
	let view = $('.view').offset().top
	let sheet02 = $('.view .sheet .sheet02').offset().top
	let sheet03 = $('.view .sheet .sheet03').offset().top

	$(window).scroll(function(){
		if ($(this).scrollTop() >= 100 ) {
			$('.header').css('background-color','white')
			$('.header .logo li a').css('color','black')
		} else  {
			$('.header').css('background','none')
			$('.header .logo li a').css('color','white')
		}//header_color
		
		if ($(this).scrollTop() >= contents - 200 ) {
			$('.contents .box01 p').fadeIn(500)
			$('.contents .box02').delay(100).fadeIn(500)
		} else {
			$('.contents .box01 p').fadeOut(500)
			$('.contents .box02').fadeOut(500)
		}//contents
	
		if ($(this).scrollTop() >= look -500 ) {
			$('.look .swiper').fadeIn(500)
			$('.look .text').delay(800).fadeIn(500)
		} else {
			$('.look .swiper').fadeOut(500)
			$('.look .text').fadeOut(500)
		}
	 //lookbook

		if ($(this).scrollTop() >= product -400 ) {
				$('.product .title p').slideDown(700)
				$('.product .box').css({width: "100%"})
		} else {
				$('.product .title p').fadeOut(700)
				$('.product .box').css({width: "50%"})
		}
		 //product
		
		if ($(this).scrollTop() >= view - 300 ) {
				// $('.view .sheet .sheet01 .img').css({left: 0})
				$('.view .sheet .sheet01 .img').delay(300).fadeIn(800)
				$('.view .sheet .sheet01 .notice').slideDown(700)
		}
		if ($(this).scrollTop() >= sheet02 - 400 ) {
				// $('.view .sheet .sheet01 .img').css({left: 0})
				$('.view .sheet .sheet02 .img').delay(300).fadeIn(800)
				$('.view .sheet .sheet02 .notice').slideDown(700)
		}
		if ($(this).scrollTop() >= sheet03 - 500 ) {
				// $('.view .sheet .sheet01 .img').css({left: 0})
				$('.view .sheet .sheet03 .img').delay(300).fadeIn(800)
				$('.view .sheet .sheet03 .notice').slideDown(700)
		}

		 //product
	})
	
})
