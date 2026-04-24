let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector(".element.current");
let result = document.querySelector(".classes-list div");

function showClasses() {
  result.innerHTML = "";

  let classes = Array.from(current.classList);
  if (classes.length === 0) {
    result.textContent = "No Classes To Show";
    return;
  }
  classes.sort();

  classes.forEach((cls) => {
    let span = document.createElement("span");
    span.textContent = cls;
    result.appendChild(span);
  });
}

add.onblur = function () {
  if (this.value.trim() !== "") {
    let classes = this.value.toLowerCase().split(" ");
    classes.forEach((cls) => {
      if (cls !== "") {
        current.classList.add(cls);
      }
    });
  }
  this.value = "";
  showClasses();
};

remove.onblur = function () {
  if (remove.value.trim() !== "") {
    let classes = remove.value.toLowerCase().split(" ");
    classes.forEach((cls) => {
      if (cls !== "") {
        current.classList.remove(cls);
      }
    });
  }
  this.value = "";
  showClasses();
};
