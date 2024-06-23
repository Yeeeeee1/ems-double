const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signin = document.getElementById("signin");

overlay.addEventListener("click", function () {
  modal.style.animationName = "modalBack";
  overlay.style.animationName = "overlayBack";
});

signin.addEventListener("click", function () {
  console.log("email: " + email.value, "password: " + password.value);
  modal.style.animationName = "modalBack";
  overlay.style.animationName = "overlayBack";
});

openBtn.addEventListener("click", function () {
  modal.style.animationName = "modal";
  overlay.style.display = "block";
  overlay.style.animationName = "overlay";
});

closeBtn.addEventListener("click", function () {
  modal.style.animationName = "modalBack";
  overlay.style.animationName = "overlayBack";
});
