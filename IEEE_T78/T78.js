let elements = document.querySelectorAll("div, span, p, article, section");

elements.forEach(el => {
  el.addEventListener("click", function () {
    console.log(`This Is ${this.tagName}`);
  });
});
