function customSplitText(t){$(t).each(function(){let t=$(this).text(),e=t.split(" "),n="";e.forEach((t,i)=>{let o='<span class="split-words">';for(let l of t)o+=<span class="split-chars" style="opacity: 0; display: inline-block;">${l}</span>;o+="</span>",n+=o+(i<e.length-1?" ":"")}),$(this).html(n)})}function isElementInViewport(t){let e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function createLetterAnimation(){$(".letter-animation").each(function(){let t=$(this),e=$(this).find(".split-chars");function n(){isElementInViewport(t[0])&&(gsap.to(e,{duration:.5,y:"0%",opacity:1,ease:"power1.inOut",stagger:{amount:.7,from:"0"}}),$(window).off("scroll",n))}$(window).on("scroll",n),n()})}$(document).ready(function(){customSplitText(".split-text"),createLetterAnimation()});
