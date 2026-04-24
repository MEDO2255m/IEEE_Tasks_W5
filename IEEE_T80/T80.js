let closeee = document.querySelector(".close-icon");
let overlay = document.querySelector(".overlay");
setTimeout(() => {
  overlay.classList.add("show");
}, 5000);

closeee.addEventListener("click", function () {
  overlay.classList.remove("show");
});
