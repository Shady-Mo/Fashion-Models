gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
   // markers: true,
   toggleActions: 'play none none reverse',
});

gsap.to('.overlay-image-container', {
   scale: 60,
   ease: 'ease',
   scrollTrigger: {
      trigger: '.image-section',
      scrub: 1,
      start: 'top',
      end: 'bottom',
      pin: true,
      pinSpacing: false,
   },
});

gsap.to('.right', {
   opacity: 0,
   x: 500,
   duration: 1,
   scrollTrigger: {
      start: 1,
   },
});

gsap.to('.left', {
   opacity: 0,
   x: -500,
   duration: 1,
   scrollTrigger: {
      start: 1,
   },
});

gsap.to('.text-bottom', {
   opacity: 0,
   letterSpacing: -10,
   duration: 0.5,
   scrollTrigger: {
      start: 1,
   },
});

const tl = gsap.timeline();
tl.from('.left-side div', {
   y: 150,
   opacity: 0,
   stagger: {
      amount: 0.4,
   },
   delay: 0.5,
}).from('.right-side', {
   opacity: 0,
   duration: 2,
}, 0.5).to('.wrapper', {
   x: -window.innerWidth,
});

ScrollTrigger.create({
   animation: tl,
   trigger: '.wrapper',
   start: 'top top',
   end: '+=600',
   scrub: 1,
   pin: true,
   pinSpacing: false,
   ease: 'ease',
});

gsap.utils.toArray('.col').forEach((image) => {
   gsap.fromTo(image, {
      opacity: 0.3,
      x: 0,
   }, {
      opacity: 1,
      x: -50,
      scrollTrigger: {
         trigger: image,
         start: '10% top',
         stagger: {
            amount: 0.4,
         },
      },
   });
});

const timeline = gsap.timeline();
timeline.from('.title span', {
   y: 150,
   skewY: 7,
   duration: 1.5,
}).from('.text-bottom', {
   letterSpacing: -10,
   opacity: 0,
   duration: 0.5,
});