document.addEventListener("DOMContentLoaded", function () {
  let sidebar = document.querySelector(".sidebar");
  const closeBtn = document.getElementById("btn");
  const log_out = document.getElementById("log_out");
  const settings = document.getElementById("settings");

  /**
   * When the user clicks the close button, the sidebar should close.
   * @returns None
   */
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

  /**
   * *Show the page with the given id.*
   *
   * # **Step 3:** Add the following code to the bottom of the `index.html` file:
   * #
   * #
   * @param page - the id of the page to show
   * @returns None
   */
  function showPage(page) {
    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });

    document.querySelector(`#${page}`).style.display = "block";
  }

  /**
   * When a list item is clicked, show the page associated with that list item.
   * @param li - The element that was clicked.
   * @returns None
   */
  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", function () {
      showPage(this.dataset.page);
    });
  });
});
