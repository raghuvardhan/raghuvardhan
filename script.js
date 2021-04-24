import {project} from './project.js'
import {experience} from './experience.js'


const skills = ["C#", "Ado .Net", "SQL Server","Html", "Angular", "Git", ".Net", "Asp .Net", "MVC", "Agile", "Jira"];
const ul = document.createElement("ul");

for(const skill of skills){
	let list = document.createElement("li");
	list.innerText = skill;
	ul.appendChild(list);

}

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
const expDiv = document.querySelector(".experience")
for(const exp of experiences){
	var div = document.createElement("div");
	div.classList.add("card");
	var title = document.createElement("h5");
	title.innerText = exp.title + " ( " + exp.startDate + " - " + exp.toDate + " )";
	div.appendChild(title);
	var company = document.createElement("p");
	company.classList.add("company");
	company.innerText = exp.company;
	div.appendChild(company);
	var description = document.createElement("p");
	description.innerText = exp.profile;
	div.appendChild(description); 
	expDiv.appendChild(div);
}



const skillDiv = document.querySelector(".skills");
skillDiv.appendChild(ul);
const mNews = new project("MNews", 
                        "The Website about local news. Enter the place of your choice and it will provide with you the local news of that region.",
						"https://github.com/raghuvardhan/MNews");
const attendance = new project("Attendance",
                             "Shows the number of classes you need to attend or bunk",
							 "https://github.com/raghuvardhan/Attendance");
const fileSystems = new project("File Systems",
								"Project which simulates a new file system on the machine",
								"https://github.com/raghuvardhan/File-Systems");
const todoList = new project("Todo List",
							"The Application for daily planner",
							"https://github.com/raghuvardhan/To-Do-List");

const projects  = [mNews, attendance, fileSystems, todoList];

const projectsDiv = document.querySelector(".projects");
for(const project of projects){
    var projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

	var title = document.createElement("h3");
	title.innerText = project.title;
	projectDiv.appendChild(title);

	var description = document.createElement("p");
	description.innerText = project.description;
	projectDiv.appendChild(description);

	var gitLink = document.createElement("a");
	gitLink.setAttribute("href", project.gitLink);
	gitLink.innerText = "Code";
	projectDiv.appendChild(gitLink);

	projectsDiv.appendChild(projectDiv);
};

