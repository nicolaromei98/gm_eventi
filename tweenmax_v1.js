const letterWrapClass="letter-wrap",letterWrapElements=document.getElementsByClassName(letterWrapClass);function letterWrap(t,e){let a=t.textContent.split(" "),r=[];return e=e||"letter-wrap",a.forEach(t=>{let a="";for(var n in t)a+=`
        <span class="${e}__char">
          <span class="${e}__char-inner" data-letter="${t[n]}">
            ${t[n]}
          </span>
        </span>
      `;let s=`<span class="${e}__word">${a}</span>`;r.push(s)}),t.innerHTML=r.join(" ")}function letterAnimation(t,e){let a=new TimelineMax({paused:!0}),r=t.querySelectorAll(`.${e}__char-inner`),n=t.hasAttribute("data-duration")?t.dataset.duration:.3,s=t.hasAttribute("data-stagger")?t.dataset.stagger:.025;t.animation=a.staggerTo(r,n,{y:"-100%",delay:.1,ease:Power2.easeOut},s),t.addEventListener("mouseenter",t=>t.currentTarget.animation.play()),t.addEventListener("mouseout",e=>t.animation.pause(0)())}[...letterWrapElements].forEach(t=>{letterWrap(t,letterWrapClass),letterAnimation(t,letterWrapClass)});
