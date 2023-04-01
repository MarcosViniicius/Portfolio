const changeThemeBtn = document.querySelector("#chk");

changeThemeBtn.addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".typedtext", {
    speed: 150,
    Strings: "web",
    loop: true,
  })
    .type("", { delay: 1000 })
    .go();
});
