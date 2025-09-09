const changeThemeBtn = document.querySelector("#chk");

changeThemeBtn.addEventListener("change", function () {
  document.querySelector(".portfolio-body").classList.toggle("dark-theme");
});
