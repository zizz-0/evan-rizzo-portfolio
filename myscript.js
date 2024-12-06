let slideInterval;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.prev').addEventListener('click', () => {
    resetInterval();
    plusDivs(-1);
  });
  document.querySelector('.next').addEventListener('click', () => {
    resetInterval();
    plusDivs(1);
  });

  startInterval();
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function startInterval() {
  slideInterval = setInterval(() => plusDivs(1), 3000);
}

function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}