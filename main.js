const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", function () {
  modal.style.animationName = "modal";
  overlay.style.display = "block";
  overlay.style.animationName = "overlay";
});

closeBtn.addEventListener("click", function () {
  modal.style.animationName = "modalBack";
  overlay.style.animationName = "overlayBack";
});
