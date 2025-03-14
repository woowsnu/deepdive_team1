gsap.fromTo(
  "div .now",
  {
    opacity: 0,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 0.6,
  }
);

// gsap.to(".sample-list", {
//   y: "-20",
//   ease: "expo.inOut",
//   stagger: 0.2,
//   duration: 1.5,
// });

gsap.fromTo(
  ".ani1",
  {
    x: -30,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".ani1",
      markers: true,
      start: "top 85%",
      end: "bottom 70%",
    },
  },
);