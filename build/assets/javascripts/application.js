$(function(){$(".download").on("click",function(o){var e=$(this).data("video");e&&($(".video.video--modal").addClass("is-shown"),$(".video-modal").append(e).fitVids(),o.preventDefault())}),$(".video-close").on("click",function(){$(".video.video--modal").removeClass("is-shown"),$(".video-modal").empty()}),$(window).on("keyup",function(o){27==o.keyCode&&($(".video.video--modal").removeClass("is-shown"),$(".video-modal").empty())})}),$(function(){$(".video").fitVids()}),$(function(){$(".has-toggle").on("click",function(){$(".toggle").toggleClass("is-close"),$(".navigation").toggleClass("is-active")}),$(".navigation-search, #navigation-searchOpen").on("click",function(){$(".navigation-search").addClass("is-searching")}),$("#navigation-searchClose").on("click",function(){$(".navigation-search").removeClass("is-searching")}),$(window).on("keyup",function(o){27==o.keyCode&&$(".navigation-search").removeClass("is-searching")})});var home=document.getElementById("hero-home");vidbg(home,[{src:"assets/videos/placeholder.mp4",type:"mp4"}],!0);