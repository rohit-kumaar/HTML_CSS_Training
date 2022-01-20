document.addEventListener("DOMContentLoaded", function () {
  // Main page display by clicking sidebar navigation
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

  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("btn");
  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    menuBtnChange();
  });
  function menuBtnChange() {
    if (sidebar.classList.contains("close")) {
      closeBtn.classList.replace("bx-chevron-left", "bx-chevron-right");
    } else {
      closeBtn.classList.replace("bx-chevron-right", "bx-chevron-left");
    }
  }

  const settings = document.getElementById("settings");
  const logout = document.getElementById("log_out");
  logout.addEventListener("click", () => {
    settings.classList.toggle("active");
  });

  const dashboardRightAddAssessments = document.querySelectorAll(
    ".dashboard-right__add-assessment"
  );
  for (const dashboardRightAddAssessment of dashboardRightAddAssessments) {
    dashboardRightAddAssessment.addEventListener("click", () => {
      const addAssessment = document.querySelector(".add-assessment");
      addAssessment.style.display = "block";
      addAssessment.style.zIndex = "10";
    });
  }

  const closeAddAssessment = document.getElementById("closeAddAssessment");
  closeAddAssessment.addEventListener("click", () => {
    document.querySelector(".add-assessment").style.display = "none";
  });

  const notificationBell = document.getElementById("notificationBell");
  const notification = document.getElementById("notification");
  const main = document.getElementById("main");
  const sections = main.querySelectorAll("section");
  notificationBell.addEventListener("click", () => {
    notification.classList.toggle("active");
    for (const section of sections) {
      section.classList.toggle("active");
    }
  });

  const body = document.querySelector("body");
  const dashboardDarkModeBtn = document.querySelectorAll(".dashboard-darkmode");
  const dashboardDarkmodeText = document.querySelector(
    ".dashboard-darkmode__text"
  );
  for (const dashboardDarkMode of dashboardDarkModeBtn) {
    dashboardDarkMode.addEventListener("click", () => {
      document.body.classList.toggle("darkmode");
      if (body.classList == "darkmode") {
        dashboardDarkmodeText.innerText = "Light";
        dashboardDarkmodeText.style.color = "white";
      } else if (body.classList == "") {
        dashboardDarkmodeText.innerText = "Dark";
        dashboardDarkmodeText.style.color = "black";
      }
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
