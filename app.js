function nextText1() {
  document.getElementById(
    "demo"
  ).innerHTML = `<img class="mock_slider_img" src="img/mockup_slider.png" />`;
}
function nextText2() {
  document.getElementById(
    "demo"
  ).innerHTML = `<p class="click_another">For watching click the next button</p>`;
}
function nextText3() {
  document.getElementById(
    "demo"
  ).innerHTML = `<img <img class="mock_slider_img" src="img/mockup_slider.png" />`;
}
function nextText4() {
  document.getElementById(
    "demo"
  ).innerHTML = `<p class="click_another">It is end</p>`;
}

$(".comment_slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
});


let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

