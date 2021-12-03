//humb
var humb = $("[data-hamburger]");
var humb_close = $("[data-hamburger-close]");
var collapse = $('.navbar__block');
var html = $('html');
humb.on('click',function() {				
	//collapse.toggleClass("is--open");
	html.toggleClass("navbar--open");
	//$(this).toggleClass("is--active");
});	
humb_close.on('click',function() {		
	html.toggleClass("navbar--open");
	//collapse.removeClass("is--open");
	humb_close.removeClass("is--active");
});	
if($(document).width() < 1200) {
	html.removeClass("navbar--open");
} 
/*
$(document.body).on('click', function(event) {
	if($(event.target).closest('.navbar__block').length == 0){	
		html.removeClass("is--open-navbar");
		collapse.removeClass("is--open");
		humb.removeClass("is--active");
	}		
});*/