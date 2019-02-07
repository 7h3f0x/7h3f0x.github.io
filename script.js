let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

class Particle{
    Particle(){
        this.x = 0;
        this.y = 0;
        this.color = "lightblue";
        this.radius = 4;
        this.vx = 0;
        this.vy = 0;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    update(){
        this.x += this.vx;
        this.y += this.vy;
    }
    make(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.radius = Math.random() * 5;
        this.color = "lightblue";
        this.vy = Math.random() * 3;
        this.vx = Math.random() * 3;
    }
}
for(let i = 0 ; i < 200; i++){
    
    let p = new Particle();
    p.make();
    particles.push( p );
}

function draw(){
     ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.draw(ctx);
    });
}
function update(){
    particles.forEach(particle => {
        particle.update();
        if(particle.y > canvas.height){
            particle.make();
        }
        if (particle.x > canvas.width) {
        	particle.make();
        }
    });
}
function drawloop(){
	update();
    draw();
    requestAnimationFrame(drawloop);
}
function gameloop(){
	setInterval(update(),10);
}
	drawloop();
	gameloop();
window.onresize = function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
let about=document.getElementById("aboutme");
about.addEventListener("click",function() {
	let request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				history.pushState(null,null,"./about")
				document.getElementById("inserthere").innerHTML=request.responseText;
				canvas.style.display="none";
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
				history.pushState(null,null,"./")
				document.getElementById("inserthere").innerHTML="";
				canvas.style.display="block";
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
				document.getElementById("inserthere").innerHTML=request.responseText;
				canvas.style.display="none";
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
				document.getElementById("inserthere").innerHTML=request.responseText;
				canvas.style.display="none";
			}
		}
	}
	request.open("GET","/projects.html",true);
	request.send();

});
