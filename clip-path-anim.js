$(document).ready(function(){if(window.innerWidth>1024){gsap.registerPlugin(ScrollTrigger);let e=$(".gallery_wrapper"),t=$(".slider-bg_component"),o=$(".slider-description-component, .slider-info-component"),n=$(".gallery_sticky-wrapper");gsap.set([t,o],{opacity:0});gsap.timeline({scrollTrigger:{trigger:e,start:"top 80%",end:"top 50%",scrub:!1,toggleActions:"play none none none",once:!0},defaults:{duration:1,ease:"power2.inOut"}}).set(t,{opacity:1}).from(t,{y:"-100vh"}).fromTo(e,{clipPath:"inset(calc(50% - 20vw) calc(50% - 20vw) round 1.25rem)"},{clipPath:"inset(calc(0% - 0vw) calc(0% - 0vw) round 0rem)"}).to(o,{opacity:1,duration:1,ease:"power2.inOut"},"-=0.5");gsap.timeline({scrollTrigger:{trigger:n,start:"bottom 80%",end:"bottom 20%",scrub:!0,toggleActions:"play none none none"},defaults:{duration:1,ease:"power2.inOut"}}).to(o,{opacity:0,duration:1,ease:"power2.inOut"}).to(e,{clipPath:"inset(calc(2% - 0vw) calc(2% - 0vw) round 1.25rem)",width:"98%",ease:"power2.inOut"},"-=0.5")}else{gsap.registerPlugin(ScrollTrigger);let r=$(".gallery_wrapper"),i=$(".slider-bg_component"),a=$(".slider-description-component, .slider-info-component, .slider-gallery_button-wrapper"),l=$(".gallery_sticky-wrapper");gsap.set([i,a],{opacity:0});gsap.timeline({scrollTrigger:{trigger:r,start:"top 80%",end:"top 50%",scrub:!1,toggleActions:"play none none none",once:!0},defaults:{duration:1,ease:"power2.inOut"}}).fromTo(r,{clipPath:"inset(calc(2% - 0vw) calc(2% - 0vw) round 1.25rem)"},{clipPath:"inset(calc(0% - 0vw) calc(0% - 0vw) round 0rem)",duration:1,ease:"power2.inOut"}).to(a,{opacity:1,duration:1,ease:"power2.inOut"},"-=0.5");gsap.timeline({scrollTrigger:{trigger:l,start:"bottom 80%",end:"bottom 20%",scrub:!0,toggleActions:"play none none none"},defaults:{duration:1,ease:"power2.inOut"}}).to(a,{opacity:0,duration:1,ease:"power2.inOut"}).to(r,{clipPath:"inset(calc(2% - 0vw) calc(2% - 0vw) round 1.25rem)",width:"98%",ease:"power2.inOut"},"-=0.5")}});
