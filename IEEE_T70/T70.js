let input = document.querySelector("[name='dollar']");
let result = document.querySelector(".result");

input.addEventListener("input", function () {
  let dol = input.value;
  if (input === "") {
    result.innerHTML = "{0} USD Dollar = {0} Egyptian Pound";
    return;
  }
  let egp = (dol * 52.4).toFixed(2);
  result.innerHTML = `${dol} USD Dollar = ${egp} Egyptian Pound`;
});
