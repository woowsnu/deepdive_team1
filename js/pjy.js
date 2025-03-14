gsap
  .timeline()
  .from(".ani1-1 li", {
    opacity: 0,
    y: 20,
    stagger: 0.3,
  })
  .from(".ani1-2", {
    opacity: 0,
    y: 20,
  })
  .from(".ani1-3", {
    opacity: 0,
    y: 20,
  })
  .from(".ani1-6", {
    opacity: 0,
    y: 150,
  })
  .from(".ani1-4", {
    opacity: 0,
    x: 50,
    stagger: 0.1,
  })
  .from(".ani1-5", {
    opacity: 0,
    x: 50,
    stagger: 0.1,
  })
  .from(".img_list_item", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
  })
  .from(".product_tag_list", {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".product_tag",
      // markers: true,
      start: "top 70%",
    },
  });

gsap
  .timeline()
  .from(".ani2-1", {
    opacity: 0,
    y: 20,
  })
  .from(".ani2-2", {
    opacity: 0,
    y: 20,
  })
  .from(".chip-container", {
    opacity: 0,
    x: 20,
  });
