
$("img").addClass("img-responsive");
var notifi=$("[data-notifi]"),notifi_btn=$("[data-notifi-btn]"),notifi_dropdown=$("[data-notifi-dropdown]"),humb=$("[data-hamburger]"),humb_close=$("[data-hamburger-close]"),collapse=$(".navbar__block"),html=$("html");humb.on("click",function(){html.toggleClass("navbar--open")}),notifi_btn.on("click",function(){$(this).closest(notifi).find(notifi_dropdown).toggleClass("dropdown--visible")}),humb_close.on("click",function(){html.toggleClass("navbar--open")}),$(document).width(),$(document.body).on("click",function(o){0==$(o.target).closest(notifi).length&&notifi_dropdown.removeClass("dropdown--visible")});


setTimeout(function(){$(".popup__block").addClass("popup--visible"),$(".popup__block .popup__btn").on("click",function(){$(this).closest(".popup__block").removeClass("popup--visible")})},5e3);

