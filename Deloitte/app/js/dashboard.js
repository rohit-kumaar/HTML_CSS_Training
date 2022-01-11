document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("btn");
  const log_out = document.getElementById("log_out");
  const settings = document.getElementById("settings");
  const darkModeBtn = document.getElementById("darkModeBtn");
  const notificationBell = document.getElementById("notificationBell");
  const notification = document.getElementById("notification");
  const main = document.getElementById("main");
  const section = main.querySelectorAll("section");

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    menuBtnChange();
  });

  log_out.addEventListener("click", () => {
    settings.classList.toggle("active");
  });

  function menuBtnChange() {
    if (sidebar.classList.contains("close")) {
      closeBtn.classList.replace("bx-chevron-left", "bx-chevron-right");
    } else {
      closeBtn.classList.replace("bx-chevron-right", "bx-chevron-left");
    }
  }

  function showPage(page) {
    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });

    document.querySelector(`#${page}`).style.display = "block";
  }

  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", function () {
      showPage(this.dataset.page);
    });
  });

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
  });

  notificationBell.addEventListener("click", () => {
    notification.classList.toggle("active");
    section[0].classList.toggle("active");
  });
});
