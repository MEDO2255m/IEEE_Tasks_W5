let my_img = document.querySelectorAll("div");
for (let i = 0; i < my_img.length; i++) {
  document.images[i].src =
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  document.images[i].alt = "Elzero Logo";
}