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

  function menuBtnChange() {
    if (sidebar.classList.contains("close")) {
      closeBtn.classList.replace("bx-chevron-left", "bx-chevron-right");
    } else {
      closeBtn.classList.replace("bx-chevron-right", "bx-chevron-left");
    }
  }

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    menuBtnChange();
  });

  log_out.addEventListener("click", () => {
    settings.classList.toggle("active");
  });

  function showPage(page) {
    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });

    document.querySelector(`#${page}`).style.display = "block";
  }

  document.querySelectorAll("aside ul li").forEach((li) => {
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
    section[1].classList.toggle("active");
    section[2].classList.toggle("active");
    section[3].classList.toggle("active");
    section[4].classList.toggle("active");
    section[5].classList.toggle("active");
  });

  // const assessmentMainListStatus = document.querySelector(
  //   ".assessment-main-list--status"
  // );

  // const formCheckInput = document.querySelector(".form-check-input");

  // formCheckInput.addEventListener("click", () => {
  //   if ((type = "checkbox")) {
  //     console.log("ACTIVE");
  //     assessmentMainListStatus.innerText = "ACTIVE";
  //   } else if (type !== "checkbox") {
  //     console.log("INACTIVE");
  //     assessmentMainListStatus.innerText = "INACTIVE";
  //   }
  // });
});
