const search = document.getElementById("search");

search.addEventListener("click", () => {
  const search_Bar = document.getElementById("searchbar");
  search_Bar.classList.toggle("active");
});

