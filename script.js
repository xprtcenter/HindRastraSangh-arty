window.onscroll = function () {
	myFunction();
};

var navbar = document.getElementById("sticky-nav");
var mainpage = document.getElementsByClassName("pages-container-main");
var sticky = window.pageYOffset;
var topnav = document.getElementsByClassName("header--nav--top");

function myFunction() {
	if (sticky >= 0) {
		topnav.style.display("none");
	} else {
		topnav.style.display("flex");
	}
}
console.log(sticky);
function myBurgerbutton() {
	var x = document.getElementById("Navbar-menu");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
