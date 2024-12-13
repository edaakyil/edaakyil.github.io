// For Tab 
let btn = document.querySelectorAll("#tab-nav-container .tab-btn");
let panel = document.querySelectorAll(".tab-panel");
let circle = document.querySelectorAll("#tab-nav-container .circle");


function showPanel(index) {
    btn.forEach(function (node) {
        node.style.backgroundColor = "#0d322763";
        node.style.boxShadow = "none";
    });

    btn[index].style.boxShadow = "2px 2px 1.5px 0 rgba(0, 0, 0, 0.2), 2px 4px 3px 0 rgba(0, 0, 0, 0.19)";
    btn[index].style.backgroundColor = "#1f2523";

    panel.forEach(function (node) {
        node.style.display = "none";
    });

    circle.forEach(function (node) {
        node.style.display = "none";
    });

    panel[index].style.display = "block";
    circle[index].style.display = "block";
}

showPanel(0);



// For Slide
let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    // let captionText = document.getElementById("caption");

    if (n > slides.length) { slideIndex = 1 }
    if (n > 1) { slideIndex = slides.length }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
}
