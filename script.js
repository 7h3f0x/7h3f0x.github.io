let about=document.getElementById("aboutme");
about.addEventListener("click",function() {
	let request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				history.pushState(null,null,"./about")
				document.getElementById("forabout").innerHTML=request.responseText;
				document.getElementById("achievements").innerHTML="";
				document.getElementById("projects").innerHTML="";
			}
		}
	}
	request.open("GET","/about.html",true);
	request.send();

});
let home=document.getElementById("index");
home.addEventListener("click",function() {
	let request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				history.pushState(null,null,"./index.html")
				document.getElementById("forabout").innerHTML="";
				document.getElementById("achievements").innerHTML="";
				document.getElementById("projects").innerHTML="";
			}
		}
	}
	request.open("GET","/index.html",true);
	request.send();

});
let achievement=document.getElementById("achievement");
achievement.addEventListener("click",function() {
	let request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				history.pushState(null,null,"./achievements");
				document.getElementById("forabout").innerHTML="";
				document.getElementById("achievements").innerHTML=request.responseText;
				document.getElementById("projects").innerHTML="";
			}
		}
	}
	request.open("GET","/achievements.html",true);
	request.send();

});
let project=document.getElementById("project");
project.addEventListener("click",function() {
	let request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				history.pushState(null,null,"./projects")
				document.getElementById("forabout").innerHTML="";
				document.getElementById("achievements").innerHTML="";
				document.getElementById("projects").innerHTML=request.responseText;
			}
		}
	}
	request.open("GET","/projects.html",true);
	request.send();

});
// let contact=document.getElementById("contact");
// contact.addEventListener("click",function() {
// 	let request = new XMLHttpRequest();
// 	request.onreadystatechange = function() {
// 		if (request.readyState === XMLHttpRequest.DONE) {
// 			if (request.status === 200) {
// 				history.pushState(null,null,"./contact.html")
// 				document.documentElement.innerHTML=request.responseText;
// 			}
// 		}
// 	}
// 	request.open("GET","/contact.html",true);
// 	request.send();

// });






