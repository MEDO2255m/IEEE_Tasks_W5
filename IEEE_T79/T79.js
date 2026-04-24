let prompt_msg = prompt("Print Number From – To", "Example: 5-20");

if (prompt_msg && prompt_msg.includes("-")) {
  let nums = prompt_msg.split("-");

  let Start = parseInt(nums[0]);
  let End = parseInt(nums[1]);

  let min = Math.min(Start, End);
  let max = Math.max(Start, End);

  for (let i = min; i <= max; i++) {
    let Ele = document.createElement("div");
    Ele.textContent = i;
    document.body.appendChild(Ele);
  }
}
