gsap
  .timeline()
  .from(".tab-type1 li", {
    opacity: 0,
    y: 20,
    stagger: 0.3,
  })
  .from(".search-box", {
    opacity: 0,
    y: 20,
  })
  .from(".content", {
    opacity: 0,
    y: 150,
  })
  .from(".supporters-post", {
    opacity: 0,
    x: 50,
    stagger: 0.1,
  })
  .from(".img_list_item", {
    y: 100,
    stagger: 0.2,
  })
  .from(".search-container", {
    opacity: 0,
    y: 20,
  })
  .from(".product_tag", {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".product_tag",
      markers: true,
      start: "top 70%",
    },
  })
  .from(".chip-container", {
    x: 100,
  });
