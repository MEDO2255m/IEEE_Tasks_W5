let my_img = document.querySelectorAll("img");
for (let i = 0; i < my_img.length; i++) {
  if (my_img[i].hasAttribute("alt")) {
    my_img[i].alt = "old";
  } else {
    my_img[i].alt = "Elzero New";
  }
}
