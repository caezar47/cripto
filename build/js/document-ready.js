"use strict";function checkFlexGap(){var o=document.createElement("div");return o.style.display="flex",o.style.flexDirection="column",o.style.rowGap="1px",o.appendChild(document.createElement("div")),o.appendChild(document.createElement("div")),document.body.appendChild(o),1===o.scrollHeight}checkFlexGap()&&document.documentElement.classList.add("flex--gap"),$(function(){$(document.body).on("changeClass",null,{},function(o,e){}),$("img").addClass("img-responsive");var e=$("[data-notifi]"),o=$("[data-notifi-btn]"),n=$("[data-notifi-dropdown]"),l=$("[data-hamburger]"),s=$("[data-hamburger-close]"),a=($(".navbar__block"),$("html"));l.on("click",function(){a.toggleClass("navbar--open")}),o.on("click",function(){$(this).closest(e).find(n).toggleClass("dropdown--visible")}),s.on("click",function(){a.toggleClass("navbar--open")}),$(document).width(),$(document.body).on("click",function(o){0==$(o.target).closest(e).length&&n.removeClass("dropdown--visible")}),setTimeout(function(){$(".popup__block").addClass("popup--visible"),$(".popup__block .popup__btn").on("click",function(){$(this).closest(".popup__block").removeClass("popup--visible")})},5e3),$(window).on("resize",function(o){}).trigger("resize"),$(window).on("scroll",function(o){var e=$(document).scrollTop(),n=$(".navbar__block.is--scroll");n.hasClass("opacity")?e<=200&&n.removeClass("opacity"):200<e&&n.addClass("opacity"),n.hasClass("fixed")?e<=400&&n.removeClass("fixed"):400<e&&n.addClass("fixed"),n.hasClass("scroll-navbar")?e<=500&&n.removeClass("scroll-navbar"):500<e&&n.addClass("scroll-navbar")}).trigger("scroll"),window.onbeforeunload=function(o){$("body").trigger("fecss.window.unload",[o])}});