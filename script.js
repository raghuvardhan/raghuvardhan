import {project} from './project.js'

const MNews = new project("MNews", 
                        "The Website about local news. Enter the place of your choice and it will provide with you the local news of that region.",
                        ["HTML","CSS","JS"]);
const Attendance = new project("Attendance",
                             "Shows the number of classes you need to attend or bunk",
							 ["Java", "Android Studio"]);
const FileSystems = new project("File Systems",
								"Project which simulates a new file system on the machine",
								["C++"]);


const projects  = [MNews, Attendance, FileSystems];

const projectTemplates = projects.map((project) => {
    var projectDiv = document.createElement("div");
    projectDiv.classList.add("project", "mySlides");
});


const bizview = new experience("Accolite Digital",
							"Senior Software Engineer",
							"BIZVIEW",
							"Nov 2020",
							"present",
							[
								"Bizview is one of the leading systems for planning, reporting, analytics and dashboard",
								"Worked on integrating third party tools like Infor into the product",
								"Migrated the product from Silverlight technology to HTML5 in phased manner using a sprint based development process.",
								"Worked with the project managers and product owners for the gathering of requirements and estimating the project work",
								"Assisted and guided junior team members and shared my experience and knowledge on the product through various KT sessions."
							]);

const Sqldm = new experience("Accolite Digital", 
							"Senior Software Engineer",
							"SQL Diagnostic Manager",
							"Aug 2019",
							"Nov 2020",
							[
								"IDERA SQL Diagnostic Manager is a powerful performance monitoring and diagnostics solution that proactively alerts administrators to health, performance, or availability problems within their SQL Server environment",
								"Worked with project managers, developers and customers to resolve technical issues  for Enterprise level SQL Products",
								"Implemented report generation feature from SQL Server in a desktop application  using C# and .net Framework",
								"Implemented and improved user interface in Java based web portal and sites for  continuous improvement",
								"Worked in Sprint based Maintenance Project to resolve multiple issues and fixed bugs on SQLdm Product.",
								"Worked on improving the performance of the SQLdm product and implemented various new features in SQLdm",
								"Assisted and guided team members and shared my experience and knowledge on the product through various KT sessions."
							]);

const experiences = [bizview, Sqldm];

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
