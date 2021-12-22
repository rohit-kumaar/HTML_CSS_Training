document.addEventListener("DOMContentLoaded", function () {
  // Header Information section
  const dropdown = document.getElementById("dropdown");
  dropdown.addEventListener("click", () => {
    const dropdown_content = document.getElementById("dropdown-content");
    dropdown_content.classList.toggle("active-dropdown-content");
  });

  // Header Search Bar
  const bx_search = document.querySelector(".bx-search");
  bx_search.addEventListener("click", (e) => {
    const search = document.getElementById("search");
    search.classList.toggle("active-search");
  });

  // Growth Journey
  let counter = 1;
  setInterval(() => {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);
});
