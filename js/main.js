$(function(){
	// функция, делающая картинку в элементе с классом ibg фоновым изображением
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	};
	ibg();
	//======================================================================
	//адаптивное меню бургер
	$('.menu__burger').on('click', function() {
		$('.menu__burger span').toggleClass('active');
		$('.menu__list').toggleClass('active');
	});
	//======================================================================
	//слайдер в секции presentation
	$('.presentation-slider').slick({
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		arrows: false
	});
	//======================================================================
	// очистка значения атрибута value при клике
	$('input').focus(function(){
		$(this).data('value',$(this).attr('value'))
		$(this).attr('value','');
	});
	$('textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	// возврат значения в поле при потере фокуса
	$('textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});
	$('input').blur(function(){
		$(this).attr('value',$(this).data('value'));
	});

	//======================================================================
	//слайдер в секции reviews
	$('.reviews-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 1,
		centerMode: true,
		prevArrow: '<img src="images/customer-arrow-left.png" alt="prev" class="slick-prev">',
		nextArrow: '<img src="images/customer-arrow-right.png" alt="next" class="slick-next">',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});