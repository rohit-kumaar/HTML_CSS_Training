// navigation bar
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



$(document).ready(function () {

  
  // testimonial section
  $(".slider").slick({
    infinite: true,
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

  // curriculum
  $(".curriculum-box").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: '<span class="icon-arrow_right"></span>',
    prevArrow: '<span class="icon-arrow_left"></span>',
    dots: false,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        
        },
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        
        },
      },
   
    ],
  });

});