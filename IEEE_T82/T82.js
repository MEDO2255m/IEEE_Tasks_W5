let div = document.querySelector("div");
function count() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    window.location.href = "https://elzero.org";
  }
}
let counter = setInterval(count, 1000);
