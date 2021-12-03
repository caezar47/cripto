
$("img").addClass("img-responsive");
var humb=$("[data-hamburger]"),humb_close=$("[data-hamburger-close]"),collapse=$(".navbar__block"),html=$("html");humb.on("click",function(){html.toggleClass("navbar--open")}),humb_close.on("click",function(){html.toggleClass("navbar--open"),humb_close.removeClass("is--active")}),$(document).width()<1200&&html.removeClass("navbar--open");


setTimeout(function(){$(".popup__block").addClass("popup--visible"),$(".popup__block .popup__btn").on("click",function(){$(this).closest(".popup__block").removeClass("popup--visible")})},5e3);

