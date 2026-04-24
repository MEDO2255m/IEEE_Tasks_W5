let main_div = document.querySelector("div");
let paragraph = document.querySelector("p");
paragraph.remove();

//div before
let div_before = document.createElement("div");

div_before.className = "start";
div_before.title = "Start Element";
div_before.setAttribute("data-value", "Start");
div_before.textContent = "Start";
//div after
let div_after = document.createElement("div");
let text_after = document.createTextNode("End");

div_after.className = "End";
div_after.title = "End Element";
div_after.setAttribute("data-value", "End");
div_after.appendChild(text_after);

main_div.before(div_before);
main_div.after(div_after);
 