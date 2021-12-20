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
});
