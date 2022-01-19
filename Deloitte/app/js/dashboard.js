document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("btn");
  const log_out = document.getElementById("log_out");
  const settings = document.getElementById("settings");

  const main = document.getElementById("main");

  const dashboardRightAddAssessment = document.querySelector(
    ".dashboard-right__add-assessment"
  );
  const closeAddAssessment = document.getElementById("closeAddAssessment");

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

  dashboardRightAddAssessment.addEventListener("click", function () {
    document.querySelector(".add-assessment").style.display = "block";
  });

  closeAddAssessment.addEventListener("click", () => {
    document.querySelector(".add-assessment").style.display = "none";
  });

  

  const notificationBell = document.getElementById("notificationBell");
  const notification = document.getElementById("notification");
  const sections = main.querySelectorAll("section");
  notificationBell.addEventListener("click", () => {
    notification.classList.toggle("active");
    for (const section of sections) {
      section.classList.toggle("active");
    }
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

  const dashboardDarkModeBtn = document.querySelectorAll(".dashboard-darkmode");

  for (const dashboardDarkMode of dashboardDarkModeBtn) {
    dashboardDarkMode.addEventListener("click", () => {
      document.body.classList.toggle("darkmode");
    });
  }
});

function show(anything) {
  document.querySelector(".textBox").value = anything;
}

const dropdown = document.querySelector(".add-assessment-form__dropdown");
dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
