let form = document.querySelector("form");
let result = document.querySelector(".results");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let count = document.querySelector("[name='elements']").value;
  let text = document.querySelector("[name='texts']").value;
  let type = document.querySelector("[name='type']").value;

  result.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    let el = document.createElement(type);

    el.className = "box";
    el.title = "Element";
    el.id = `id-${i}`;
    el.textContent = text;

    result.appendChild(el);
  }
});
