let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Call showSlides() on page load to show the first slide by default
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
});

function switchTab(tabName) {
  var frontEndButton = document.querySelector(".frontEndButton");
  var backEndButton = document.querySelector(".backEndButton");
  var frontEndContent = document.querySelector(".frontEnd");
  var backEndContent = document.querySelector(".backEnd");

  if (tabName === "frontEnd") {
    frontEndButton.classList.add("stackActive");
    backEndButton.classList.remove("stackActive");
    frontEndContent.style.display = "block";
    backEndContent.style.display = "none";
  } else if (tabName === "backEnd") {
    backEndButton.classList.add("stackActive");
    frontEndButton.classList.remove("stackActive");
    backEndContent.style.display = "block";
    frontEndContent.style.display = "none";
  }
}
