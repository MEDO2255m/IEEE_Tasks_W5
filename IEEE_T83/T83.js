let div = document.querySelector("div");

function count() {
  div.innerHTML -= 1;
  if (div.innerHTML === "5") {
    window.open("https://Elzero.org", "", "width=600", "height=200");
  }
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}
let counter = setInterval(count, 1000);
