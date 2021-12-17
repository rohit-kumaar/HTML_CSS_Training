const menu = document.getElementById("menu");
const navigation = document.getElementById("navigation");
menu.addEventListener("click", () => {
  let active = navigation.classList.toggle("active");
  if (active) {
    menu.classList.add("bx-x");
    menu.classList.remove("bx-menu");
  } else {
    menu.classList.add("bx-menu");
    menu.classList.remove("bx-x");
  }
});

