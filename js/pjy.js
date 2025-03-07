gsap.from(".tab-type1 li", {
  opacity: 0,
  y: 20,
  stagger: 0.3,
});

gsap.from(".search-box", {
  opacity: 0,
  y: 20,
});

gsap.from(".feed-header", {
  opacity: 0,
});

gsap.from(".content", {
  opacity: 0,
  y: 150,
});

gsap.timeline().from(".product_tag", {
  x: 100,
  stagger: 0.1,
});

gsap.timeline().from(".supporters-post", {
  x: 100,
  stagger: 0.1,
});

gsap.timeline().from(".img_list_item", {
  y: 100,
  stagger: 0.2,
});
