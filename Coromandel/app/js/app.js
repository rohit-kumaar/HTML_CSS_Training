document.addEventListener("DOMContentLoaded", function () {
  const bx_search = document.querySelector(".bx-search");
    bx_search.addEventListener("click", (e) => {
    const search = document.getElementById("search");
    search.classList.toggle("active");
  });
});
