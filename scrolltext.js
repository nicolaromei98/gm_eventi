function createLetterAnimation(){$(".letter-animation").each(function(){let t=$(this),n=$(this).find(".split-chars");function i(){gsap.to(n,{duration:.5,y:"0%",opacity:1,ease:"power1.inOut",stagger:{amount:.7,from:"0"}})}isElementInViewport(t[0])?i():$(window).on("scroll",function n(){isElementInViewport(t[0])&&(i(),$(window).off("scroll",n))})})}$(document).ready(function(){customSplitText(".split-text"),createLetterAnimation()});
