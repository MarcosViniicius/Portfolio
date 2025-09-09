const changeThemeBtn = document.querySelector("#chk");

changeThemeBtn.addEventListener("change", function () {
  document.body.classList.toggle("dark");
});
