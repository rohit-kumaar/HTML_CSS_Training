document.addEventListener("DOMContentLoaded", function () {
  let sidebar = document.querySelector(".sidebar");
  const closeBtn = document.getElementById("btn");

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-chevron-right", "bx-chevron-left");
    } else {
      closeBtn.classList.replace("bx-chevron-left", "bx-chevron-right");
    }
  }
});
