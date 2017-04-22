/*
This is empty on purpose! Your code to build the resume will go here.
<<<<<<< HEAD
 */

 // bio contains pessoal information
var bio = {
	"name": "André Fernandes",
	"role": "Web developer",
	"contacts":{
		"mobile": "+55 (12) 98175-5929",
		"email": "prado_fernandes@yahoo.com.br",
		"github":"alfprado",
		"location": "Galway Ireland"
	},
	"biopic": "images/fry.jpg",
	"welcomeMsg": "Hello!",
	"skills": [
		"HTML", "CSS", "Javascript"
	],

	/*
	function inName() - takes in a string of two names
	and returns an internalized version that looks like so:
	inName("André Fernandes) === "André FERNANDES"
	*/
	inName: function(name){
		// trim() remove spaces of string
		name = name.trim().split(" ");
		name[1] = name[1].toUpperCase();
		name[2] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
		return name[0]+" "+name[1];
	},

	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.inName(bio.name));
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
		var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGitHub);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedMobile);
	  $("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedLocation);

		$("#header").append(formattedwelcomeMsg);
		$("#header").append(formattedbioPic);


		if(bio.skills.length > 0){

			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function(entry) {
    		var formattedSkill = HTMLskills.replace("%data%", entry);
    		$("#skills").append(formattedSkill);
			});
  	}
	}
};

// work contains experience information
var work = {
  "jobs": [
    {
      "employer": "Embraer SA",
      "title": "Moldador",
      "location": "São José dos Campos, SP",
      "dates": "Sep 2007 - Oct 2016",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Embraer SA",
      "title": "Ajudante",
      "location": "São José dos Campos, SP",
      "dates": "Jun 2007 - Aug 2007",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ],
  //create div work-entry for each jobs and insert title, dates and description inside the div
  display: function(){
		for (var job in work.jobs){
			// create a new div for work experience
			$("#workExperience").append(HTMLworkStart);
			// concat employer and title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

// education contains school and onlineCourses information
var education = {
	"schools": [{
		"name": "IBTA",
		"location": "Jacareí-SP",
		"degree": "Bacharel",
		"majors": ["CS"],
		"dates": 2014,
		"url": "http://example.com"
	}, {
		"name": "ITJ",
		"location": "Jacareí-SP",
		"degree": "Techinical",
		"majors": ["CS"],
		"dates": 2010,
		"url": "http://example.com"
	}],
	"onlineCourses": [{
		"title": "Introdução Java",
		"school": "Caelum",
		"dates": 2011,
		"url": "http://www.caelum.com.br"
	},{
		"title": "Html, CSS e Javascript",
		"school": "Caelum",
		"dates": 2011,
		"url": "http://www.caelum.com.br"
	}],
	//create div education-entry for each school and onlineCourses, insert information inside the div
	display: function(){
		for(var school in education.schools){
			// create a new div for work experience
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedName);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
		}

		$("#education").append(HTMLonlineClasses);

		for(var course in education.onlineCourses){
			// create a new div for work experience
			$("#education").append(HTMLschoolStart);
			// concat title and school
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
};

// project contains information about projects executed
var project = {
	"projects": [{
		"titles": "Sample Project 1",
		"dates": "2014",
		"description": "Who moved my cheese cheesy feet cauliflower cheese.",
		"images": [
    "images/197x148.gif",
    "images/197x148.gif"
  ]
	}, {
		"titles": "Sample Project 2",
		"dates": "2014",
		"description": "Who moved my cheese cheesy feet cauliflower cheese.",
		"images": [
    "images/197x148.gif",
    "images/197x148.gif"
  ]
  }],
  //create div project-entry for each project, insert information inside the div
  display: function(){
		for(var proj in project.projects){
			// create a new div for work experience
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].titles);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
			$(".project-entry:last").append(formattedDescription);
			//insert the images
			project.projects[proj].images.forEach(function(entry) {
    		var formattedImage = HTMLprojectImage.replace("%data%", entry);
				$(".project-entry:last").append(formattedImage);
			});
		}
	}
};

var gmap = function(){
	$("#mapDiv").append(googleMap);
};

bio.display();
work.display();
education.display();
project.display();
gmap();


