// Assicurati di includere GSAP e ScrollTrigger prima di questo script
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>

gsap.registerPlugin(ScrollTrigger);

// Funzione per applicare l'animazione solo su tablet e mobile
function applyAnimation() {
  const galleryWrapper = document.querySelector(".gallery_wrapper");

  // Animazione ingresso del gallery_wrapper
  gsap.fromTo(galleryWrapper, 
    {
      clipPath: "inset(calc(2% - 0vw) calc(2% - 0vw) round 1.25rem)"
    },
    {
      clipPath: "inset(calc(0% - 0vw) calc(0% - 0vw) round 0rem)",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: galleryWrapper,
        start: "top center",
        end: "center center",
        scrub: true,
      }
    }
  );

  // Animazione uscita del gallery_wrapper
  gsap.to(galleryWrapper, {
    clipPath: "inset(calc(2% - 0vw) calc(2% - 0vw) round 1.25rem)",
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: galleryWrapper,
      start: "center center",
      end: "bottom top",
      scrub: true,
      onLeave: () => {
        // Azioni quando esce dalla view
      }
    }
  });
}

// Verifica se la viewport è per tablet o mobile e applica l'animazione
if (window.matchMedia("(max-width: 1024px)").matches) {
  applyAnimation();
}

// Aggiungi un listener per gestire il ridimensionamento della finestra
window.addEventListener('resize', function() {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    applyAnimation();
  } else {
    ScrollTrigger.getAll().forEach(t => t.kill()); // Rimuove l'animazione se si esce dalla viewport
  }
});
