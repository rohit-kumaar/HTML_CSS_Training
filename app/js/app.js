// ---------------for navigation bar---------------
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// ------------for testimonial section------------

$(".slider").slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 769,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 3,
      },
    },
  ],
});
