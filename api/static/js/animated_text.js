document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".typedtext", {
    speed: 150,
    Strings: "FullStack",
    loop: true,
  })
    .type("", { delay: 1000 })
    .go();
});
