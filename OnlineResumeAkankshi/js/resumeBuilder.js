/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio={
    "name": "Akankshi Samanta",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+91-9176098227",
        "email": "akankshi.samanta12@gmail.com",
        "github": "akankshisamanta",
        "location": "New Delhi"
    },
  "biopic": "images/me.jpg",
  "welcomeMessage": "Heya! I'm a Web Developer in making. Enjoy my page :)",
  "skills": ["Embedded C", "HTML", "CSS", "JavaScript"],
 };

 var education = {
     "schools":[
       {
         "name": "SRM University, Chennai",
         "degree": "B.Tech",
         "dates": "2013 - 2017",
         "location": "Chennai",
         "majors": ["Electronics and Communication Engineering"]
       },
       {
         "name": "Mount Carmel School, Dwarka",
         "degree": "High School ",
         "dates": "2011 - 2013",
         "location": "New Delhi",
         "majors": ["Science with Computer Science"]
       }
     ],
     "onlineCourses":[
       {
         "school":"Udacity",
         "title": "Front-End Web Development",
         "school": "Udacity",
         "dates": "2017",
         "url": "https://udacity.com"
       },
     ],
 	};

  var work = {
         "jobs":[
           {
             "title": "Graduate Trainee",
             "employer": "Infosys",
             "dates": "2017",
             "location": "Mysore",
             "description": "nfosys Limited is an Indian multinational corporation that provides business consulting, information technology and outsourcing services",
           },
           {
             "title": "Intern",
             "employer": "Minda Corporation Limited",
             "dates": "2014",
             "location": "Noida, UP",
             "description": "Company with a product portfolio encompassing from Mechanical & Electronic Security System and Electronic Controllers for Electric Vehicles for Auto OEMs across the Globe."
           },
         ],
  };

 var projects ={
 			"projects":[
 				{
 					"title": "Obstacle Detecting Robot",
 					"dates": "2015",
 					"description": "The mini- project was to develop an obstacle detecting robot using ultrasonic sensors and arduino which is battery operated. The objective was to build a mini- budget interactive project.",
 					"images": ["images/fry.jpg"]
 				},
 				{
 					"title": "Web Server based Smart Irrigation System",
 					"dates": "2016",
 					"description": "Smart Irrigation System which senses the soil moiture, humidity, and temperature of the soil and surrounding and displays the real time values on a webpage and mobile appplication. The system is automated with a motor pump which operates based on the soil moisture sensor input in real time. The status of the motor pump is also displayed on the respective screens. ",
 					"images": ["images/smart.jpg"]
 				}
 			],
 	};



bio.display = function() {
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      $("#header").prepend(formattedName, formattedRole);

      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
      $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

      var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
      var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      $("#header").append(formattedBioPic, formattedWelcomeMsg);

      if(bio.skills.length > 0){
          $("#header").append(HTMLskillsStart);
          bio.skills.forEach(function(skill){
                  var formattedSkills = HTMLskills.replace("%data%", skill);
                  $("#skills").append(formattedSkills);
          });
      }
  };
bio.display();

projects.display = function() {
      if ( projects.projects.length > 0 ) {
          $( "#projects" ).append( HTMLprojectStart );

          projects.projects.forEach( function( project ) {
              var formattedTitle = HTMLprojectTitle.replace( "%data%", project.title );
              $( ".project-entry:last" ).append( formattedTitle );
              var formattedDate = HTMLprojectDates.replace( "%data%", project.dates );
              $( ".project-entry:last" ).append( formattedDate );
              var formattedDescription = HTMLprojectDescription.replace( "%data%", project.description );
              $( ".project-entry:last" ).append( formattedDescription );

              for ( var image = 0 ; image < project.images.length ; image++ ) {
                  var formattedImage = HTMLprojectImage.replace( "%data%", project.images[image] );
                  $( ".project-entry:last" ).append( formattedImage );
              }
           });
      }
};
projects.display();

education.display = function() {
      if ( education.schools.length > 0 ) {
          $( "#education" ).append( HTMLschoolStart );

          education.schools.forEach( function( school ) {
              var formattedName = HTMLschoolName.replace( "%data%" , school.name );
              $( ".education-entry:last" ).append( formattedName );
              var formattedDegree = HTMLschoolDegree.replace( "%data%" , school.degree );
              $( ".education-entry:last" ).append( formattedDegree );
              var formattedDate = HTMLschoolDates.replace( "%data%" , school.dates );
              $( ".education-entry:last" ).append( formattedDate );
              var formattedLocation = HTMLschoolLocation.replace( "%data%" , school.location );
              $( ".education-entry:last" ).append( formattedLocation );

              for ( var major = 0 ; major < school.majors.length ; major++ ) {
                  var formattedMajor = HTMLschoolMajor.replace( "%data%" ,  school.majors[major] );
                  $( ".education-entry:last" ).append( formattedMajor );
              }
          });
      }

      if ( education.onlineCourses.length > 0 ) {
          $( ".education-entry" ).append( HTMLonlineClasses );

          education.onlineCourses.forEach(function(onlineCourse) {
              var formattedTitle = HTMLonlineTitle.replace( "%data%" , onlineCourse.title );
              $( ".education-entry:last" ).append( formattedTitle );
              var formattedSchool = HTMLonlineSchool.replace( "%data%" , onlineCourse.school );
              $( ".education-entry:last" ).append( formattedSchool );
              var formattedDates = HTMLonlineDates.replace( "%data%" , onlineCourse.dates );
              $( ".education-entry:last" ).append( formattedDates );
              var formattedUrl = HTMLonlineURL.replace( "%data%" , onlineCourse.url );
              $( ".education-entry:last" ).append( formattedUrl );
          });
      }
};
education.display();

work.display = function() {
      if ( work.jobs.length > 0 ) {
          $( "#workExperience" ).append( HTMLworkStart );

          work.jobs.forEach(function(job) {
              var formattedEmployer = HTMLworkEmployer.replace( "%data%" , job.employer );
              $( ".work-entry:last" ).append( formattedEmployer );
              var formattedTitle = HTMLworkTitle.replace( "%data%" , job.title );
              $( ".work-entry:last" ).append( formattedTitle );
              var formattedDate = HTMLworkDates.replace( "%data%" , job.dates );
              $( ".work-entry:last" ).append( formattedDate );
              var formattedLocation = HTMLworkLocation.replace( "%data%" , job.location );
              $( ".work-entry:last" ).append( formattedLocation );
              var formattedDescription = HTMLworkDescription.replace( "%data%" , job.description );
              $( ".work-entry:last" ).append( formattedDescription );
          });
      }
  };
work.display();

function inName(name) {
    name = name.trim().split(" ");

    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];
}
$("#main").append(internationalizeButton);


$( "#mapDiv" ).append( googleMap );
