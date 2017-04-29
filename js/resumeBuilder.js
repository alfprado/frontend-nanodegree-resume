/*
This is empty on purpose! Your code to build the resume will go here.
<<<<<<< HEAD
 */
var data = /%data%/g;

var bio = {
  name: 'André Fernandes',
  role: 'Web developer',
  contacts: {
    mobile: '+55 (12) 98175-5929',
    email: 'prado_fernandes@yahoo.com.br',
    github: 'alfprado',
    location: 'Galway Ireland'
  },
  welcomeMessage: 'Being wrong means that you\'re not rights yet!',
  skills: [
    'HTML', 'CSS', 'Javascript', 'Bootstrap'
  ],
  biopic: 'images/fry.jpg',

  inName: function(name) {
    name = name.trim().split(' ');
    name[1] = name[1].toUpperCase();
    name[2] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + ' ' + name[1];
  },

  display: function() {

    var formattedName = HTMLheaderName.replace(data, bio.inName(bio.name));
    var formattedRole = HTMLheaderRole.replace(data, bio.role);

    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

    var formattedwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    $('#topContacts, #footerContacts').append(formattedMobile);
    $('#topContacts, #footerContacts').append(formattedEmail);
    $('#topContacts, #footerContacts').append(formattedGitHub);
    $('#topContacts, #footerContacts').append(formattedLocation);

    $('#header').append(formattedwelcomeMsg);
    $('#header').append(formattedbioPic);


    if (bio.skills.length > 0) {

      $('#header').append(HTMLskillsStart);
      bio.skills.forEach(function(entry) {
        var formattedSkill = HTMLskills.replace(data, entry);
        $('#skills').append(formattedSkill);
      });
    }
  }
};

var work = {
  jobs: [{
      employer: 'Embraer SA',
      title: 'Moldador',
      location: 'Embraer S.A., Av. Brg. Faria Lima, 2170 - Putim, São José dos Campos - SP',
      dates: 'Sep 2007 - Oct 2016',
      description: 'Who moved my cheese cheesy feet cauliflower cheese. ' +
        'Queso taleggio when the cheese comes out everybody\'s happy airedale '
    },
    {
      employer: 'Embraer SA',
      title: 'Ajudante',
      location: 'Embraer S.A., Av. Brg. Faria Lima, 2170 - Putim, São José dos Campos - SP',
      dates: 'Jun 2007 - Aug 2007',
      description: 'Who moved my cheese cheesy feet cauliflower cheese. ' +
        'Queso taleggio when the cheese comes out everybody\'s happy airedale '
    }
  ],

  display: function() {
    work.jobs.forEach(function(entry) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace(data, entry.employer);
      var formattedTitle = HTMLworkTitle.replace(data, entry.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $('.work-entry:last').append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace(data, entry.dates);
      $('.work-entry:last').append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace(data, entry.description);
      $('.work-entry:last').append(formattedDescription);
    });
  }
};

var education = {
  schools: [{
    name: 'IBTA',
    location: 'Rua Laurent Martins, 329 - São José dos Campos - SP',
    degree: 'Bacharel',
    majors: ['CS'],
    dates: 2014,
    url: 'http://example.com'
  }, {
    name: 'ITJ',
    location: 'Av. Siqueira Campos, 1174 - Jd Esper, Jacareí - SP',
    degree: 'Techinical',
    majors: ['CS'],
    dates: 2010,
    url: 'http://example.com'
  }],
  onlineCourses: [{
    title: 'Introdução Java',
    school: 'Caelum',
    dates: 2011,
    url: 'http://www.caelum.com.br'
  }, {
    title: 'Html, CSS e Javascript',
    school: 'Caelum',
    dates: 2011,
    url: 'http://www.caelum.com.br'
  }],

  display: function() {
    education.schools.forEach(function(entry) {
      $('#education').append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace(data, entry.name);
      $('.education-entry:last').append(formattedName);
      var formattedDates = HTMLschoolDates.replace(data, entry.dates);
      $('.education-entry:last').append(formattedDates);
      var formattedLocation = HTMLschoolLocation.replace(data, entry.location);
      $('.education-entry:last').append(formattedLocation);
      var formattedMajor = HTMLschoolMajor.replace(data, entry.majors);
      $('.education-entry:last').append(formattedMajor);
    });

    $('#education').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(entry) {
      $('#education').append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace(data, entry.title);
      var formattedSchool = HTMLonlineSchool.replace(data, entry.school);
      var formattedTitleSchool = formattedTitle + formattedSchool;
      $('.education-entry:last').append(formattedTitleSchool);
      var formattedDates = HTMLonlineDates.replace(data, entry.dates);
      $('.education-entry:last').append(formattedDates);
      var formattedURL = HTMLonlineURL.replace(data, entry.url);
      $('.education-entry:last').append(formattedURL);
    });
  }
};

var project = {
  projects: [{
    title: 'Sample Project 1',
    dates: '2014',
    description: 'Who moved my cheese cheesy feet cauliflower cheese.',
    images: [
      'images/197x148.gif',
      'images/197x148.gif'
    ]
  }, {
    title: 'Sample Project 2',
    dates: '2014',
    description: 'Who moved my cheese cheesy feet cauliflower cheese.',
    images: [
      'images/197x148.gif',
      'images/197x148.gif'
    ]
  }],

  display: function() {
    project.projects.forEach(function(entry) {
      $('#projects').append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace(data, entry.title);
      $('.project-entry:last').append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace(data, entry.dates);
      $('.project-entry:last').append(formattedDates);
      var formattedDescription = HTMLprojectDescription.replace(data, entry.description);
      $('.project-entry:last').append(formattedDescription);
      entry.images.forEach(function(file) {
        var formattedImage = HTMLprojectImage.replace(data, file);
        $('.project-entry:last').append(formattedImage);
      });
    });
  }
};

var gmap = function() {
  $('#mapDiv').append(googleMap);
};

bio.display();
work.display();
education.display();
project.display();
gmap();