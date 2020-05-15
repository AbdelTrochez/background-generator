var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector(".randomColors");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");

function changeBackground(){
	body.style.background = 
	"linear-gradient(to right,"
	+ color1.value
	+ ","
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function randomColors(){
	var newColor1 = Math.floor(Math.random()*16795215).toString(16);
	var newColor2 = Math.floor(Math.random()*16777218).toString(16);
	
	body.style.background = 
	"linear-gradient(to right,"
	+ "#" + newColor1
	+ ","
	+ "#" + newColor2
	+ ")";

	css.textContent = body.style.background + ";";
}

window.onload=changeBackground;
color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
random.addEventListener("click", randomColors);


