document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".typedtext", {
    speed: 150,
    Strings: "web",
    loop: true,
  })
    .type("", { delay: 1000 })
    .go();
});
