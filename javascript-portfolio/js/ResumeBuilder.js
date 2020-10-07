var HTMLheaderName = "<h1>%data%</h1>"
var HTMLheaderRole = "<span>%data%</span><hr/>"
var HTMLskills = "<p>%data%</p>"

var headerName = "Javad Ebadi";
var headerRole = "Front End Developer | Data Scientist | Physicist"
var skills = ["HTML", "CSS", "Javascript", "jQuery"]


var FORMATTEDheaderName = HTMLheaderName.replace("%data%", headerName);
var FORMATTEDheaderRole = HTMLheaderRole.replace("%data%", headerRole);
var FORMATTEDskills = HTMLskills.replace("%data%", skills);

var bio = {
	"name": "Javad Ebadi",
	"role": "Web Developer",
	"contacts":{
		"mobile": "+98-999-111-1111"
		"email": "javad.ebadi.1990@gmail.com",
		"github": "javadebadi",
		"location": "Tehran"
	},
	"skills": ["HTML", "CSS", "JS", "jQuery"],
	"bioPic": "images/pic.jpg"
};

$(function() {
	$( "#header" ).prepend(FORMATTEDheaderName);
	$( "#header" ).append(FORMATTEDheaderRole);
	$( "#skills" ).append(FORMATTEDskills);
	$( "#main" ).prepend(bio);
});