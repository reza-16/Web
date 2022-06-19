"use strict";!function($){$(window).on("load",function(){$(".loader").fadeOut(),$("#preloder").delay(200).fadeOut("slow"),$(".filter__controls li").on("click",function(){$(".filter__controls li").removeClass("active"),$(this).addClass("active")}),$(".filter__gallery").length>0&&mixitup(document.querySelector(".filter__gallery"))}),$(".set-bg").each(function(){var a=$(this).data("setbg");$(this).css("background-image","url("+a+")")}),$(".search-switch").on("click",function(){$(".search-model").fadeIn(400)}),$(".search-close-switch").on("click",function(){$(".search-model").fadeOut(400,function(){$("#search-input").val("")})}),$(".mobile-menu").slicknav({prependTo:"#mobile-menu-wrap",allowParentLinks:!0}),$(".hero__slider").owlCarousel({loop:!0,margin:0,items:1,dots:!0,nav:!0,navText:["<span class='arrow_carrot-left'></span>","<span class='arrow_carrot-right'></span>"],animateOut:"fadeOut",animateIn:"fadeIn",smartSpeed:1200,autoHeight:!1,autoplay:!0,mouseDrag:!1}),/*new Plyr*/("#player",{controls:["play-large","play","progress","current-time","mute","captions","settings","fullscreen"],seekTime:25}),$("select").niceSelect(),$("#scrollToTopButton").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1})}(jQuery)

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }