document.addEventListener("DOMContentLoaded", function () {
  

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
