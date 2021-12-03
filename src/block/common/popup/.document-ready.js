setTimeout(function(){
	$('.popup__block').addClass('popup--visible');
	var btn = $('.popup__block .popup__btn');
	btn.on('click', function(){
		$(this).closest('.popup__block').removeClass('popup--visible');
	});
}, 5000);