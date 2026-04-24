let one = document.querySelector(".one");
let two = document.querySelector(".two");

let oneText = one.textContent;
let twoText = two.textContent;

let oneTitle = one.title;
let twoTitle = two.title;

one.textContent = twoText;
two.textContent = oneText + " " + document.querySelectorAll("div").length;

one.title = twoTitle;
two.title = oneTitle;
