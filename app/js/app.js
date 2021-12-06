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

const testimonial_card = document.getElementsByClassName("testimonial-card");

const testimonial__carouselbtn = document.getElementsByClassName('testimonial__carouselbtn');


for (let i = 0; i < testimonial_card.length; i++) {
  testimonial_card[i].addEventListener("click", (event) => {
    

    if (i === 0) {
      testimonial_card[i].classList.add("bg-color");
      testimonial_card[1].classList.remove("bg-color");
      testimonial_card[2].classList.remove("bg-color");

      testimonial__carouselbtn[i].classList.add("width");
      testimonial__carouselbtn[1].classList.remove("width");
      testimonial__carouselbtn[2].classList.remove("width");
    } else if (i === 1) {
      testimonial_card[i].classList.add("bg-color");
      testimonial_card[0].classList.remove("bg-color");
      testimonial_card[2].classList.remove("bg-color");

      testimonial__carouselbtn[i].classList.add("width");
      testimonial__carouselbtn[0].classList.remove("width");
      testimonial__carouselbtn[2].classList.remove("width");
    } else if (i === 2) {
      testimonial_card[i].classList.add("bg-color");
      testimonial_card[0].classList.remove("bg-color");
      testimonial_card[1].classList.remove("bg-color");

      testimonial__carouselbtn[i].classList.add("width");
      testimonial__carouselbtn[0].classList.remove("width");
      testimonial__carouselbtn[1].classList.remove("width");
    }
  });
}



