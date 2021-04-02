// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from(".buttons", { duration: 1, opacity: 0, stagger: 0.5 });
// gsap.from(".left", { duration: 1, x: "-100%", delay: 0.5 });
// gsap.from(".right", {
//   duration: 1,
//   x: "-100vw",
//   delay: 0.5,
//   ease: "power2.in",
// });
// gsap.from(".footer", { duration: 1, y: "100%", ease: "elastic", delay: 2.5 });

// gsap.fromTo(
//   ".button",
//   { opacity: 0, scale: 0, rotation: 720 },
//   { opacity: 1, scale: 1, rotation: 0, duration: 1, delay: 3.5}
// );

const timeline = gsap.timeline({ default: { duration: 1 } });

timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".buttons", { opacity: 0, stagger: 0.5 })
  .from(".right", {
    x: "-100vw",
    ease: "power2.in",
  })
  .from(".left", { x: "-100%" }, "<.5")
  .from(".footer", { y: "100%", ease: "elastic", delay: 1 })
  .fromTo(
    ".button",
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0}
  );

  const button = document.querySelector(".button")

  button.addEventListener("click", () => {
      timeline.timeScale(3)
      timeline.reverse()
  })