import {project} from './project.js'

const MNews = new project("MNews", 
                        "The Website about local news. Enter the place of your choice and it will provide with you the local news of that region.",
                        ["HTML","CSS","JS"]);

const projects  = [MNews];

const projectTemplates = projects.map((project) => {
    var projectDiv = document.createElement("div");
    projectDiv.classList.add("project", "mySlides");
});

document.querySelector(".prev")
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("project");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}
