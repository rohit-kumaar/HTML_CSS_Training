document.addEventListener("DOMContentLoaded", function () {
  let sidebar = document.querySelector(".sidebar");
  const closeBtn = document.getElementById("btn");
  const log_out = document.getElementById("log_out");
  const settings = document.getElementById("settings");

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

  log_out.addEventListener("click", () => {
    settings.classList.toggle("active");
  });

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-chevron-right", "bx-chevron-left");
    } else {
      closeBtn.classList.replace("bx-chevron-left", "bx-chevron-right");
    }
  }
});
